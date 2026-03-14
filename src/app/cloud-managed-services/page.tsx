import { Metadata } from "next";
import CloudManagedClient from "./CloudManagedClient";

export const metadata: Metadata = {
  title: "Cloud Managed Services | Optimize and Secure Your Cloud",
  description:
    "Simplify and secure your cloud infrastructure with Cloud Managed Services from Professional Labs. Migrate, manage, and optimize your cloud environments.",
  alternates: {
    canonical: "https://prolabsit.com/cloud-managed-services",
  },
};

export default function Page() {
  return <CloudManagedClient />;
}
