import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
  title: 'Getting Started With NextJS',
  image: 'getting-started-nextjs.png',
  date: '2021-12-06',
  slug: 'getting-started-with-nextjs',
  content: '# This is a first post'
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
