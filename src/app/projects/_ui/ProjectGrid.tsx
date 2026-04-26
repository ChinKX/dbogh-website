'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Pill } from '@/platform/components/Pill';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import { projects } from '@/data/projects';
import styles from './ProjectGrid.module.css';

export function ProjectGrid() {
  return (
    <motion.div
      className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      {projects.map((project) => (
        <motion.article
          key={project.name}
          className={styles.card}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.cardHeader}>
            <h3 className={styles.name}>{project.name}</h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
              aria-label={`Visit ${project.name}`}
            >
              <ExternalLink size={16} />
            </a>
          </div>

          <p className={styles.description}>{project.description}</p>

          <ul className={styles.highlights}>
            {project.highlights.map((highlight, idx) => (
              <li key={`${project.name}-highlight-${idx}`} className={styles.highlight}>
                {highlight}
              </li>
            ))}
          </ul>

          <div className={styles.pills}>
            {project.stack.map((tech) => (
              <Pill key={tech}>{tech}</Pill>
            ))}
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
