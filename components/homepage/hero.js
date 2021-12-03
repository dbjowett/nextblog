import Image from 'next/image';
import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/daniel.jpg' alt='Image of Daniel' width={500} height={500} />
      </div>
      <h1>Hi, I am Daniel</h1>
      <p>This is my blog about frontend development.</p>
    </section>
  );
}
