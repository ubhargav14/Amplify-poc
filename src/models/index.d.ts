import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CommnetsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Commnets {
  readonly id: string;
  readonly text: string;
  readonly author: string;
  readonly postID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Commnets, CommnetsMetaData>);
  static copyOf(source: Commnets, mutator: (draft: MutableModel<Commnets, CommnetsMetaData>) => MutableModel<Commnets, CommnetsMetaData> | void): Commnets;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly commnets?: (Commnets | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}