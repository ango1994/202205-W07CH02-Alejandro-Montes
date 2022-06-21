import express from 'express';
import fs from 'fs/promises';
import { iThing } from '../models/thing-model';

const dataFilePath = './data/data.json';

export const getController = async (
  req: express.Request,
  res: express.Response
) => {
  req;
  const dataFileContent = await fs.readFile(dataFilePath, {
    encoding: 'utf-8',
  });
  res.setHeader('Content-type', 'application/json');
  res.end(dataFileContent);
};

export const getFromIdController = async (
  req: express.Request,
  res: express.Response
) => {
  res.setHeader('Content-type', 'application/json');
  const things = await fs.readFile(dataFilePath, {
    encoding: 'utf-8',
  });
  const result = JSON.parse(things);

  const newResult = result.TIK.find(
    (thing: iThing) => thing.id === req.params.id
  );
  if (newResult) {
    res.end(JSON.stringify(newResult));
  } else {
    res.status(404);
    res.end(JSON.stringify({}));
  }
};

export const postController = async (
  req: express.Request,
  res: express.Response
) => {
  const things = await fs.readFile(dataFilePath, {
    encoding: 'utf-8',
  });
  const result = JSON.parse(things).TIK;
  const newThing = {
    ...req.body,
    id: (Number(result[result.length - 1].id) + 1).toString(),
  };
  result.push(newThing);
  res.setHeader('Content-type', 'application/json');
  res.status(201);
  res.end(JSON.stringify(newThing));
  fs.writeFile(dataFilePath, JSON.stringify({ TIK: result }));
};

export const patchController = async (
  req: express.Request,
  res: express.Response
) => {
  let newThing;
  let things = await fs.readFile(dataFilePath, {
    encoding: 'utf-8',
  });
  const result = JSON.parse(things).TIK;
  const pepe = result.map((item: iThing) => {
    if (item.id === req.params.id) {
      newThing = { ...item, ...req.body };
      return newThing;
    } else {
      return item;
    }
  });
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify(newThing));
  fs.writeFile(dataFilePath, JSON.stringify({ TIK: pepe }));
};
