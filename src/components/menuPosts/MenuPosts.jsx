import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './menuPosts.module.css';

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="#" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Top 10 Hidden Gems in European Cities You Must Visit
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Hasan</span>
            <span className={styles.date}> - 10.12.2023</span>
          </div>
        </div>
      </Link>
      <Link href="#" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            How to Travel Sustainably: Tips for Eco-Friendly Adventures
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rakib</span>
            <span className={styles.date}> - 10.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href="#" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            The Ultimate Guide to Digital Nomad Destinations in 2024
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Morsalin</span>
            <span className={styles.date}> - 10.11.2023</span>
          </div>
        </div>
      </Link>
      <Link href="#" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Essential Packing Tips for Stress-Free Travel
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Dr. Viku</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
