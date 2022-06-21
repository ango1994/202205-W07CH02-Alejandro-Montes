import express from 'express';
import fs from 'fs/promises';

const dataFilePath = './data/data.json';

export const getController = async (
  req: express.Request,
  res: express.Response
) => {
  req;
  const dataFileContent = await fs.readFile(dataFilePath, {
    encoding: 'utf-8',
  });
  console.log(dataFileContent);
  res.setHeader('Content-type', 'application/json');
  res.end(dataFileContent);
};
