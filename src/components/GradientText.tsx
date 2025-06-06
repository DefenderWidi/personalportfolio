import type { ReactNode, CSSProperties } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
}: GradientTextProps) {
  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animationDuration: `${animationSpeed}s`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  };

  return (
    <span
      className={`inline-block text-transparent bg-cover animate-gradient ${className}`}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}
