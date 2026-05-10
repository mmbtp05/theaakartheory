import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ServicesIndex from "./ServicesIndex";

export const metadata: Metadata = {
  title: "Our Services | The Aakar Theory",
  description:
    "Explore our full range of interior design services — residential, commercial, custom furniture, design consultation, and renovation.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-hidden">
      <Navigation />
      <ServicesIndex />
      <Footer />
    </main>
  );
}
