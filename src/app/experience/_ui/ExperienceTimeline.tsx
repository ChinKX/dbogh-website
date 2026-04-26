'use client';

import { motion } from 'framer-motion';
import { Text } from '@/platform/components/Text';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import { experiences } from '@/data/experience';
import styles from './ExperienceTimeline.module.css';

export function ExperienceTimeline() {
  return (
    <div className={styles.timeline}>
      {experiences.map((role) => (
        <motion.article
          key={`${role.company}-${role.period}`}
          className={`${styles.card} ${styles[role.variant]}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className={styles.header} variants={fadeUp} transition={{ duration: 0.5 }}>
            <span className={styles.period}>{role.period}</span>
            <span className={styles.location}>{role.location}</span>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <h3 className={styles.company}>{role.company}</h3>
            <span className={styles.title}>{role.title}</span>
          </motion.div>

          <motion.ul className={styles.bullets} variants={staggerContainer}>
            {role.bullets.map((bullet, idx) => (
              <motion.li
                key={`${role.company}-${role.period}-bullet-${idx}`}
                className={styles.bullet}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
              >
                {bullet}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className={styles.tags}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            {role.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.article>
      ))}
    </div>
  );
}
