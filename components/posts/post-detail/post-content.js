import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';

export default function PostContent({ fileData }) {
  const imagePath = `/images/posts/${fileData.slug}/${fileData.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={fileData.title} image={imagePath} />
      <ReactMarkdown>{fileData.content}</ReactMarkdown>
    </article>
  );
}
