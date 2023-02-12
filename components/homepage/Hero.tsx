import Image from 'next/image';
import classes from './Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='https://avatars.githubusercontent.com/u/78271602?s=400&u=1ec23d8138196ff9720c8db66117832bfcdc9e10&v=4'
          alt='Anurag Pramanik Avatar'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Anurag</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        or Next.js
      </p>
    </section>
  );
}

export default Hero;
