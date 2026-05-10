import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TermsAndConditions from "./TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Aakar Theory",
  description:
    "The terms governing your use of The Aakar Theory's website, services, and content.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-hidden">
      <Navigation />
      <TermsAndConditions />
      <Footer />
    </main>
  );
}
