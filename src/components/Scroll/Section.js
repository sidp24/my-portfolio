import React, { forwardRef } from "react";
import clsx from "clsx";

const Section = forwardRef(function Section({ id, children, full = false, className }, ref) {
  return (
    <section
      id={id}
      ref={ref}
      className={clsx("section snap-start", full && "section--full", className)}
    >
      <div className="section__inner">
        {children}
      </div>
    </section>
  );
});

export default Section;
