import React from "react";
import "./cardSection.css";

interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardSection({
  children,
  className = "",
}: CardSectionProps) {
  return <section className={`card-section ${className}`}>{children}</section>;
}
