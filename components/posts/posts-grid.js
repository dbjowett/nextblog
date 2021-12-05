import PostItem from './post-item';
import classes from './posts-grid.module.css';

export default function PostsGrid({ posts }) {
  return (
    <ul className={classes.PostsGrid}>
      {posts.map((post) => {
        <PostItem post={post} />;
      })}
    </ul>
  );
}
