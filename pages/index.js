import { Fragment } from 'react';
import FeaturedPosts from '../components/homepage/featured-posts';
import Hero from '../components/homepage/Hero';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}
