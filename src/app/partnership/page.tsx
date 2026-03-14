import React from "react";
import type { Metadata } from "next";
import PartnershipClient from "./PartnershipClient";

export const metadata: Metadata = {
  title: "CSP Partner Program | Professional Labs",
  description:
    "Accelerate your CSP Revenue backed by Professional Labs end-to-end Azure solutions. Partner with certified Azure experts for rapid growth and improved business outcomes.",
};

export default function PartnershipPage() {
  return <PartnershipClient />;
}
