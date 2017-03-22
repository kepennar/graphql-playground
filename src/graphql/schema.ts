export interface Post {
  createdAt: Date;
  description: String;
  id: String;
  imageUrl: String;
  updatedAt: Date;
}

export interface Posts {
  allPosts: Array<Post>;
}
