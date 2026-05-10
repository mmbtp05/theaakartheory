import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PrivacyPolicy from "./PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | The Aakar Theory",
  description:
    "How The Aakar Theory collects, uses, and protects your personal information when you interact with our website or services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-hidden">
      <Navigation />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}
