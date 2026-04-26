'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Text } from '@/platform/components/Text';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import { aboutStats } from '@/data/about';
import styles from './AboutPreview.module.css';

const MotionLink = motion.create(Link);

export function AboutPreview() {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <Text variant="mono" color="muted">
          ABOUT ME
        </Text>
      </motion.div>

      <motion.div
        className={styles.stats}
        variants={staggerContainer}
      >
        {aboutStats.map((stat) => (
          <motion.div
            key={stat.label}
            className={styles.statBlock}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <MotionLink
        href="/about"
        className={styles.link}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        More about me <ArrowRight size={16} aria-hidden />
      </MotionLink>
    </motion.section>
  );
}
