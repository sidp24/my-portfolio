"use client";

import { useLinkStatus } from "next/link";

export default function NavigationIndicator() {
  const { pending } = useLinkStatus();

  return <span aria-hidden="true" className={`navigation-indicator${pending ? " is-pending" : ""}`} />;
}
