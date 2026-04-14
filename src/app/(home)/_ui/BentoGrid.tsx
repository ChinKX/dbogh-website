'use client';

import { motion } from 'framer-motion';
import { Palette, Server, Lightbulb, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Text } from '@/platform/components/Text';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import { tiles } from '../_data/content';
import { BentoTile } from './BentoTile';
import styles from './BentoGrid.module.css';

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Server,
  Lightbulb,
  Target,
};

export function BentoGrid() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
          <Text variant="mono" color="muted">
            WHAT I BRING
          </Text>
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
          <Text variant="heading">
            Built different, by design.
          </Text>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {tiles.map((tile) => (
          <motion.div
            key={tile.label}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <BentoTile
              variant={tile.variant}
              icon={iconMap[tile.icon]}
              label={tile.label}
              heading={tile.heading}
              description={tile.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
