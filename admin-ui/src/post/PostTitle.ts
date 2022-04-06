import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "name";

export const PostTitle = (record: TPost): string => {
  return record.name || record.id;
};
