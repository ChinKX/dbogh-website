import styles from "./Pill.module.css";

interface PillProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "default" | "dark";
  className?: string;
}

export function Pill({
  children,
  icon,
  variant = "default",
  className,
}: PillProps) {
  const classes = [styles.pill, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  );
}
