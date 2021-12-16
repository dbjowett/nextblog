import { Fragment } from 'react';
import FeaturedPosts from '../components/homepage/featured-posts';
import Hero from '../components/homepage/Hero';
import Head from 'next/head';
import { getFeaturedPosts } from '../lib/posts-util';

export default function Home({ featPosts }) {
  return (
    <Fragment>
      <Head>
        <title>Daniel's blog</title>
        <meta name='description' content='I post about web development' />
      </Head>
      <Hero />
      <FeaturedPosts posts={featPosts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featPosts = getFeaturedPosts();
  return {
    props: {
      featPosts
    }
  };
}
