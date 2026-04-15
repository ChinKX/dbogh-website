'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { Text } from '@/platform/components/Text';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import { achievements } from '@/data/about';
import styles from './Achievements.module.css';

export function Achievements() {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <Text variant="mono" color="muted">ACHIEVEMENTS</Text>
      </motion.div>

      <motion.div className={styles.list} variants={staggerContainer}>
        {achievements.map((item) => (
          <motion.div
            key={item.title}
            className={styles.item}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.iconWrap}>
              <Trophy size={18} />
            </div>
            <div className={styles.content}>
              <h4 className={styles.title}>{item.title}</h4>
              <p className={styles.detail}>{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
