import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

//
export function getPostData(postIdentifier) {
  /////This needs to be changed back to postIdentifier....
  const poooosst = 'getting-started-with-nextjs';
  console.log(...postIdentifier);

  const postSlug = poooosst.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  /// Removes file extension

  const postData = {
    slug: postSlug,
    ...data,
    content
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

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
