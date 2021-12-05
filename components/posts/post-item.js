import Link from 'next/link';
import classes from './post-item.module.css';

export default function PostItem({ post }) {
  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image />
          </div>
          <div className={classes.content}>
            <h3>Title</h3>
            <time>July 13th 2022</time>
            <p>Except from the post</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
