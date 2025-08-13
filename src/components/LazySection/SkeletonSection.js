// src/components/Skeleton/SectionSkeleton.jsx
import React from "react";

export default function SectionSkeleton({ title = "Loading..." }) {
  return (
    <div className="skeleton">
      <div className="skeleton-title">{title}</div>
      <div className="skeleton-line" />
      <div className="skeleton-line" />
      <div className="skeleton-line short" />
    </div>
  );
}
