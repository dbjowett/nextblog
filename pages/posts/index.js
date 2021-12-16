import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';
import { Fragment } from 'react';

export default function PostsHome({ allPosts }) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='Description' content='All posts that I have posted' />
      </Head>
      <AllPosts posts={allPosts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts
    }
  };
}
