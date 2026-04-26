import Link from "next/link";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "ghost" | "surface" | "pill";
type ButtonSize = "sm" | "md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: React.ReactNode;
}

function isExternalHref(href: string): boolean {
  return /^(https?:|mailto:|tel:|#)/.test(href);
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className,
  type,
  ...props
}: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const content = (
      <>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </>
    );

    if (isExternalHref(href)) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type ?? "button"} {...props}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
