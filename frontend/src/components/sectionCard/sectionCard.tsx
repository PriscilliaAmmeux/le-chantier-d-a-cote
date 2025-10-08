import React from "react";
import "./sectionCard.css";

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionCard({
  children,
  className = "",
}: SectionCardProps) {
  return <section className={`section-card ${className}`}>{children}</section>;
}
