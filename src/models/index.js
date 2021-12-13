// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Commnets, Post } = initSchema(schema);

export {
  Commnets,
  Post
};