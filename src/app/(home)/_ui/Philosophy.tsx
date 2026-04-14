'use client';

import { motion } from 'framer-motion';
import { Code, Layers, Heart, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Text } from '@/platform/components/Text';
import { Pill } from '@/platform/components/Pill';
import { Icon } from '@/platform/components/Icon';
import { fadeUp, fadeIn, staggerContainer } from '@/platform/lib/motion';
import { philosophyPills } from '../_data/content';
import styles from './Philosophy.module.css';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Layers,
  Heart,
  Rocket,
};

export function Philosophy() {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeIn} transition={{ duration: 0.6 }} className={styles.gradientLine} />

      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <Text variant="mono" color="muted" className={styles.label}>
          HOW I THINK
        </Text>
      </motion.div>

      <motion.blockquote
        className={styles.quote}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        The best code is no code at all.{'\n'}
        Every line you ship is a line you maintain.
      </motion.blockquote>

      <motion.div
        className={styles.pills}
        variants={staggerContainer}
      >
        {philosophyPills.map((pill) => (
          <motion.div key={pill.label} variants={fadeUp} transition={{ duration: 0.4 }}>
            <Pill
              variant="default"
              icon={<Icon icon={iconMap[pill.icon]} size={16} />}
            >
              {pill.label}
            </Pill>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
