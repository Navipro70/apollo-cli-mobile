import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getPost?: Maybe<Post>;
};


export type QueryGetPostArgs = {
  postId: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  body: Scalars['String'];
  createdAt: Scalars['String'];
  username: Scalars['String'];
  comments: Array<Maybe<Comment>>;
  likes: Array<Maybe<Like>>;
  likeCount: Scalars['Int'];
  commentCount: Scalars['Int'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  username: Scalars['String'];
  body: Scalars['String'];
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  login: User;
  createPost: Post;
  deletePost: Scalars['String'];
  createComment: Post;
  deleteComment: Post;
  likePost: Post;
};


export type MutationRegisterArgs = {
  registerInput?: Maybe<RegisterInput>;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreatePostArgs = {
  body: Scalars['String'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['ID'];
};


export type MutationCreateCommentArgs = {
  postId: Scalars['String'];
  body: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  postId: Scalars['ID'];
  commentId: Scalars['ID'];
};


export type MutationLikePostArgs = {
  postId: Scalars['ID'];
};

export type RegisterInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  token: Scalars['String'];
  username: Scalars['String'];
  createdAt: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newPost: Post;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type FetchAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllPostsQuery = (
  { __typename?: 'Query' }
  & { getPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'username' | 'body' | 'createdAt' | 'commentCount'>
    & { comments: Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'username' | 'body' | 'createdAt'>
    )>>, likes: Array<Maybe<(
      { __typename?: 'Like' }
      & Pick<Like, 'username'>
    )>> }
  )>>> }
);


export const FetchAllPostsDocument = gql`
    query fetchAllPosts {
  getPosts {
    id
    username
    body
    createdAt
    commentCount
    comments {
      id
      username
      body
      createdAt
    }
    likes {
      username
    }
  }
}
    `;

/**
 * __useFetchAllPostsQuery__
 *
 * To run a query within a React component, call `useFetchAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchAllPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchAllPostsQuery, FetchAllPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchAllPostsQuery, FetchAllPostsQueryVariables>(FetchAllPostsDocument, baseOptions);
      }
export function useFetchAllPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchAllPostsQuery, FetchAllPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchAllPostsQuery, FetchAllPostsQueryVariables>(FetchAllPostsDocument, baseOptions);
        }
export type FetchAllPostsQueryHookResult = ReturnType<typeof useFetchAllPostsQuery>;
export type FetchAllPostsLazyQueryHookResult = ReturnType<typeof useFetchAllPostsLazyQuery>;
export type FetchAllPostsQueryResult = ApolloReactCommon.QueryResult<FetchAllPostsQuery, FetchAllPostsQueryVariables>;