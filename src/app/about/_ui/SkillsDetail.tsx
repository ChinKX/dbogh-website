'use client';

import { motion } from 'framer-motion';
import { Text } from '@/platform/components/Text';
import { Pill } from '@/platform/components/Pill';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import { technicalSkills } from '@/data/about';
import styles from './SkillsDetail.module.css';

const skillGroups = [
  technicalSkills.core,
  technicalSkills.devops,
  technicalSkills.additional,
];

export function SkillsDetail() {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <Text variant="mono" color="muted">TECHNICAL SKILLS</Text>
      </motion.div>

      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            className={styles.group}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.groupLabel}>{group.label}</h3>
            <div className={styles.categories}>
              {group.categories.map((category) => (
                <div key={category.name} className={styles.category}>
                  <span className={styles.categoryName}>{category.name}</span>
                  <div className={styles.pills}>
                    {category.skills.map((skill) => (
                      <Pill key={skill}>{skill}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
