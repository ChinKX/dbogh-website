'use client';

import { motion } from 'framer-motion';
import { Text } from '@/platform/components/Text';
import { Pill } from '@/platform/components/Pill';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import { education } from '@/data/about';
import styles from './Education.module.css';

export function Education() {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <Text variant="mono" color="muted">EDUCATION</Text>
      </motion.div>

      <motion.div
        className={styles.card}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <h3 className={styles.university}>{education.university}</h3>
        <span className={styles.location}>{education.location}</span>
        <span className={styles.period}>{education.period}</span>
        <p className={styles.degree}>{education.degree}</p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{education.cgpa}</span>
            <span className={styles.statLabel}>CGPA</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{education.honours}</span>
            <span className={styles.statLabel}>Honours</span>
          </div>
        </div>
        <div className={styles.coursework}>
          <span className={styles.courseworkLabel}>Key Coursework</span>
          <div className={styles.pills}>
            {education.coursework.map((course) => (
              <Pill key={course}>{course}</Pill>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
