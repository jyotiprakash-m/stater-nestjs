
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreatePostInput {
    content?: Nullable<string>;
    published?: Nullable<boolean>;
    title: string;
}

export interface UpdatePostInput {
    content?: Nullable<string>;
    id: number;
    published?: Nullable<boolean>;
    title: string;
}

export interface IMutation {
    createPost(createPostInput: CreatePostInput): Post | Promise<Post>;
    removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;
}

export interface Post {
    content?: Nullable<string>;
    id?: Nullable<number>;
    published: boolean;
    title: string;
}

export interface IQuery {
    post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
}

type Nullable<T> = T | null;
