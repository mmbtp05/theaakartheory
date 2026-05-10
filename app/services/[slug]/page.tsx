import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { services, getServiceBySlug } from "../../constants/services";
import ServiceDetail from "./ServiceDetail";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | The Aakar Theory" };
  }

  return {
    title: `${service.title} | The Aakar Theory`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-hidden">
      <Navigation />
      <ServiceDetail service={service} />
      <Footer />
    </main>
  );
}
