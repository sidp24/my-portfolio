import React from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ progress = 0, text = "Loading…", visible = true }) {
  if (!visible) return null;

  return (
    <div className="ls" role="status" aria-live="polite" aria-label="Page loading">
      <div className="ls__backdrop" />
      <div className="ls__inner">
        <div className="ls__ring">
          <div className="ls__blob ls__blob--1" />
          <div className="ls__blob ls__blob--2" />
          <div className="ls__blob ls__blob--3" />
          <div className="ls__dot" />
        </div>

        <h1 className="ls__title">Siddharth&nbsp;Paul</h1>
        <p className="ls__sub">{text}</p>

        <div className="ls__bar" aria-label={`Loading ${Math.round(progress)}%`}>
          <div className="ls__barFill" style={{ width: `${Math.max(0, Math.min(100, progress))}%` }} />
        </div>
      </div>


    </div>
  );
}
