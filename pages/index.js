import { Fragment } from 'react';
import FeaturedPosts from '../components/homepage/featured-posts';
import Hero from '../components/homepage/Hero';
import { getFeaturedPosts } from '../lib/posts-util';

export default function Home({ featPosts }) {
  return (
    <Fragment>
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
