import 'reflect-metadata';
import { useContainer } from 'class-validator';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import Container from 'typedi';
import { UserResolver } from './resolvers/users/user.resolver';

import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';

import cors from 'cors';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';



dotenv.config();

const app: Application = express();
useContainer(Container);

async function connectToDatabase() {
  await mongoose.connect(process.env.MONGODB_URI || '');
}


async function start() {
  // Initialize your database connection here
  await connectToDatabase();
  
  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container,
    validate: false
  });

  const server = new ApolloServer({ schema, });
  await server.start();
  app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware(server)
  );
  
  // Start your server
  const port = process.env.SERVER_PORT || 4000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

start()