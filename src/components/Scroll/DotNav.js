import React from "react";

export default function DotNav({ activeId, sections }) {
  return (
    <nav className="dotnav" aria-label="Section navigation">
      <ul>
        {sections.map((s) => {
          const isActive = s.id === activeId;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`dotnav__dot${isActive ? " is-active" : ""}`}
                aria-label={s.label}
                aria-current={isActive ? "true" : "false"}
                title={s.label}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
