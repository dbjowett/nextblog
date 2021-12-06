import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

export default function FeaturedPosts({ posts }) {
  return (
    <section className={classes.recent}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
