import styles from "./Container.module.css";

interface ContainerProps {
  as?: React.ElementType;
  variant?: "section" | "page" | "narrow";
  children: React.ReactNode;
  className?: string;
}

export function Container({
  as: Component = "div",
  variant = "section",
  children,
  className,
}: ContainerProps) {
  const classes = [styles.container, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
}
