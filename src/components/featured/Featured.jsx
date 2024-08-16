import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Wellness Travel!</b> A Focus on Health and Well-being
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Wellness travel is gaining traction.{' '}
          </h1>
          <p className={styles.postDesc}>
            This trend focuses on rejuvenating both the body and mind through
            travel experiences that promote relaxation, mindfulness, and
            self-care. Wellness retreats, yoga holidays, and spa getaways are
            becoming increasingly popular as travelers seek to escape the hustle
            and bustle of daily life and prioritize their mental and physical
            health.
            <br />
            <br />
            Wellness travel offers a variety of experiences, from meditation
            retreats in serene landscapes to luxury spa resorts with holistic
            treatments. These trips often include activities such as yoga,
            nutrition workshops, and stress-relief exercises, providing
            travelers with tools and techniques to enhance their overall
            well-being.
            <br />
            <br />
            Travel is evolving in exciting ways, driven by a desire for
            sustainability, flexibility, and well-being. Whether you’re drawn to
            eco-friendly adventures, the digital nomad lifestyle, or wellness
            retreats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
