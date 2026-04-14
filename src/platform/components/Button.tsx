import styles from "./Button.module.css";

type ButtonVariant = "primary" | "ghost" | "surface" | "pill";
type ButtonSize = "sm" | "md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
