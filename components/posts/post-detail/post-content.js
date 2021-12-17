import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('js', js);

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const rendererConfig = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image src={`${image.properties.src}`} alt={image.properties.alt} width={600} height={300} />
          </div>
        );
      } else {
        return <p>{paragraph.children}</p>;
      }
    },
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

      return (
        <SyntaxHighlighter style={dracula} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={rendererConfig}>{post.content}</ReactMarkdown>
    </article>
  );
}
