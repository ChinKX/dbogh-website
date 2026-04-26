'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/platform/components/Button';
import { Text } from '@/platform/components/Text';
import { Pill } from '@/platform/components/Pill';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.content}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
          <Pill variant="dark">
            <Text variant="mono" color="inverse">
              DREAM BIG OR GO HOME
            </Text>
          </Pill>
        </motion.div>

        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
          <Text variant="display" className={styles.heading}>
            Software developer{'\n'}who crafts with intent.
          </Text>
        </motion.div>

        <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
          <Text variant="bodyLarge" color="secondary" className={styles.subtitle}>
            I build digital products that merge thoughtful design with robust engineering
            — from concept to production.
          </Text>
        </motion.div>

        <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
          <Button
            variant="primary"
            icon={<ArrowRight size={18} aria-hidden />}
            href="mailto:chinkx1205@gmail.com"
          >
            Get in touch
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
