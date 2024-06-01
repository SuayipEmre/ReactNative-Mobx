import {PostsTypes} from './PostsTypes';

export type PostsNavigatorStackParamList = {
  PostsScreen: undefined;
  PostDetailScreen: {post: PostsTypes};
};
