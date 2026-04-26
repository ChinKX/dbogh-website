'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Text } from '@/platform/components/Text';
import { Pill } from '@/platform/components/Pill';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import { withBasePath } from '@/platform/lib/path';
import { projectsPreview } from '@/data/projects';
import styles from './ProjectsPreview.module.css';

export function ProjectsPreview() {
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
          WHAT I&apos;VE BUILT
        </Text>
      </motion.div>

      <motion.div
        className={styles.cards}
        variants={staggerContainer}
      >
        {projectsPreview.map((project) => (
          <motion.div
            key={project.name}
            className={styles.card}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.pills}>
              {project.stack.slice(0, 4).map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href={withBasePath("/projects")}
        className={styles.link}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        See all projects <ArrowRight size={16} />
      </motion.a>
    </motion.section>
  );
}
