import gql from 'graphql-tag';

export const AllPostsQuery = gql`
  query allPosts {
      allPosts {
          id
          description
          imageUrl
      }
  }
`;
export const PostsQuery = gql`
  query posts($filter: String) {
    allPosts(filter: {description_contains: $filter}) {
      imageUrl
      description
    }
  }
`;
