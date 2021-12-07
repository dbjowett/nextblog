import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production. It makes building fullstack apps incredibly easy!',
    date: '2021-12-06',
    slug: 'getting-started-with-nextjs'
  },
  {
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production. It makes building fullstack apps incredibly easy!',
    date: '2021-12-06',
    slug: 'getting-started-with-nextjs1'
  },
  {
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production. It makes building fullstack apps incredibly easy!',
    date: '2021-12-06',
    slug: 'getting-started-with-nextjs2'
  },
  {
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production. It makes building fullstack apps incredibly easy!',
    date: '2021-12-06',
    slug: 'getting-started-with-nextjs3'
  }
];

export default function PostsHome() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
