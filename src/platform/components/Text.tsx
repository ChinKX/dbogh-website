import styles from "./Text.module.css";

type TextVariant =
  | "display"
  | "heading"
  | "subheading"
  | "body"
  | "bodyLarge"
  | "caption"
  | "mono";

interface TextProps {
  variant?: TextVariant;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "muted" | "inverse" | "inverseMuted";
}

const defaultElements: Record<TextVariant, React.ElementType> = {
  display: "h1",
  heading: "h2",
  subheading: "h3",
  body: "p",
  bodyLarge: "p",
  caption: "span",
  mono: "span",
};

export function Text({
  variant = "body",
  as,
  children,
  className,
  color,
}: TextProps) {
  const Component = as || defaultElements[variant];
  const classes = [styles.text, styles[variant], color && styles[color], className]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
}
