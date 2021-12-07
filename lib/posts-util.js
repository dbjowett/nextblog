import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

//
function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  ///Matter takes in a string and returns
  // an object with a 'data' property and a 'content'
  const { data, content } = matter(fileContent);

  /// Removes file extension
  const postSlug = fileName.replace(/\.md$/, '');

  const postData = {
    slug: postSlug,
    ...data,
    content: content
  };

  return postData;
}

///Getting a list of all of the file in the *content* folder
export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
