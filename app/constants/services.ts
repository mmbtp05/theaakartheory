export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  tagline: string;
  highlights: string[];
  features: ServiceFeature[];
  process: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  cta: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "residential-interiors",
    title: "Residential Interiors",
    shortDescription:
      "Tailor-made home interiors backed by expert design experience. High-quality materials, custom furniture, and premium lighting for refined living.",
    longDescription:
      "We craft homes that reflect who you are. From modern apartments to luxurious villas, every space is designed with intention — balancing aesthetics, comfort, and functionality. Our residential interiors blend bespoke craftsmanship, premium materials, and thoughtful detailing to create environments that elevate everyday living.",
    icon: "🏠",
    tagline: "Homes designed around your life.",
    highlights: [
      "Personalized design language",
      "Premium materials & finishes",
      "Custom furniture & joinery",
      "End-to-end turnkey delivery",
    ],
    features: [
      {
        title: "Living & Dining Spaces",
        description:
          "Sophisticated layouts that bring family and guests together — anchored by statement lighting, curated materials, and seamless flow.",
      },
      {
        title: "Master Bedrooms",
        description:
          "Restful retreats with custom wardrobes, layered lighting, and finishes selected to soothe — designed for true comfort.",
      },
      {
        title: "Modular Kitchens",
        description:
          "Ergonomic, high-performance kitchens with premium hardware, smart storage, and surfaces built for daily life.",
      },
      {
        title: "Bathrooms & Wet Areas",
        description:
          "Spa-inspired bathrooms with premium sanitaryware, considered tile work, and intelligent lighting.",
      },
      {
        title: "Kids & Guest Rooms",
        description:
          "Playful, adaptive spaces engineered to grow with their occupants — safe, durable, and full of character.",
      },
      {
        title: "Balconies & Outdoor",
        description:
          "Compact outdoor living areas styled for morning coffee or evening unwinding — weather-resilient and tasteful.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "We listen to your lifestyle, aspirations, and constraints — translating them into a brief that drives every design decision.",
      },
      {
        step: "02",
        title: "Concept Design",
        description:
          "Mood boards, layouts, and 3D visualisations help you experience the space long before construction begins.",
      },
      {
        step: "03",
        title: "Detailing & Estimation",
        description:
          "Material selection, working drawings, and a transparent cost plan are finalised with your sign-off.",
      },
      {
        step: "04",
        title: "Execution",
        description:
          "Our in-house team manages civil work, joinery, finishes, and installations with rigorous quality control.",
      },
      {
        step: "05",
        title: "Styling & Handover",
        description:
          "Final styling, lighting calibration, and a walkthrough — your home is move-in ready.",
      },
    ],
    faqs: [
      {
        question: "How long does a typical residential project take?",
        answer:
          "A 2–3 BHK apartment usually takes 10–14 weeks end-to-end; villas and bungalows range from 4 to 7 months depending on scope.",
      },
      {
        question: "Do you handle civil and structural work as well?",
        answer:
          "Yes — our turnkey delivery covers civil, electrical, plumbing, false ceiling, painting, joinery, and final styling.",
      },
      {
        question: "Can I supply some of the furniture or materials myself?",
        answer:
          "Absolutely. We adapt scope around what you already own and integrate it elegantly into the new design.",
      },
    ],
    cta: "Design my home",
  },
  {
    id: 2,
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    shortDescription:
      "Smart space planning that enhances efficiency, branding, and customer experience with high-quality materials and complete turnkey execution.",
    longDescription:
      "Commercial spaces should work as hard as the people inside them. We design offices, retail stores, restaurants, and showrooms that reinforce brand identity, support productivity, and create memorable customer experiences — delivered with disciplined timelines and zero-compromise execution.",
    icon: "🏢",
    tagline: "Spaces that work as hard as you do.",
    highlights: [
      "Brand-aligned design",
      "Productivity-led space planning",
      "Compliance & safety built-in",
      "Fast-tracked delivery",
    ],
    features: [
      {
        title: "Corporate Offices",
        description:
          "Workspaces optimised for focus, collaboration, and well-being — anchored by ergonomic workstations and modern conferencing.",
      },
      {
        title: "Retail & Showrooms",
        description:
          "Customer journeys engineered around product storytelling, lighting, and tactile finishes that convert footfall.",
      },
      {
        title: "Restaurants & Cafés",
        description:
          "F&B environments calibrated for ambience, throughput, and Instagrammable detailing.",
      },
      {
        title: "Clinics & Wellness",
        description:
          "Calming, hygienic, regulation-compliant spaces designed to put patients and practitioners at ease.",
      },
      {
        title: "Coworking & Studios",
        description:
          "Flexible, modular interiors that adapt to changing teams without sacrificing identity.",
      },
      {
        title: "Hospitality",
        description:
          "Boutique hotels and guesthouses with a strong narrative, premium FF&E, and operational discipline.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand & Brief",
        description:
          "We align on brand values, customer journey, and operational requirements before a single line is drawn.",
      },
      {
        step: "02",
        title: "Space Planning",
        description:
          "Efficient layouts that maximise ROI per square foot while meeting compliance and safety standards.",
      },
      {
        step: "03",
        title: "Design Development",
        description:
          "Detailed drawings, material specs, and renderings finalised with structured stakeholder reviews.",
      },
      {
        step: "04",
        title: "Project Execution",
        description:
          "On-site project management with weekly tracking, vendor coordination, and quality audits.",
      },
      {
        step: "05",
        title: "Launch Support",
        description:
          "Snagging, signage installation, and a smooth handover so you can open on schedule.",
      },
    ],
    faqs: [
      {
        question: "Can you work within an active business operation?",
        answer:
          "Yes — we phase work, schedule noisy activities outside business hours, and isolate zones to minimise disruption.",
      },
      {
        question: "Do you handle approvals and compliance documentation?",
        answer:
          "We coordinate with consultants for fire, structural, and statutory approvals as part of the scope.",
      },
      {
        question: "What's your typical project size?",
        answer:
          "We deliver projects from 800 sq.ft. boutique stores up to 50,000+ sq.ft. corporate fit-outs.",
      },
    ],
    cta: "Plan my space",
  },
  {
    id: 3,
    slug: "custom-furniture",
    title: "Custom Furniture & Detailing",
    shortDescription:
      "Bespoke furniture designed to match your space, style, and functionality needs with precision detailing and premium craftsmanship.",
    longDescription:
      "When off-the-shelf doesn't fit, we design and build it. From statement dining tables to wall-to-wall wardrobes and feature joinery, our custom furniture is engineered for your space, your proportions, and your aesthetic — without compromise.",
    icon: "🪑",
    tagline: "Built for your space, your way.",
    highlights: [
      "Made-to-measure pieces",
      "Hand-selected materials",
      "Precision-engineered joinery",
      "Lifetime craft standards",
    ],
    features: [
      {
        title: "Wardrobes & Storage",
        description:
          "Floor-to-ceiling wardrobes with soft-close hardware, integrated lighting, and intelligent compartmentalisation.",
      },
      {
        title: "TV & Media Units",
        description:
          "Statement entertainment walls combining storage, display, and cable management in one elegant composition.",
      },
      {
        title: "Beds & Headboards",
        description:
          "Upholstered or veneered beds with hidden storage, integrated side tables, and tailored proportions.",
      },
      {
        title: "Dining & Centre Tables",
        description:
          "Solid wood, marble, or veneered tables sized exactly for your room and seating count.",
      },
      {
        title: "Wall Panelling & Feature Walls",
        description:
          "Fluted, slatted, or upholstered panelling that defines a room's character.",
      },
      {
        title: "Kitchen Modules",
        description:
          "Bespoke modular kitchens with premium hardware, durable surfaces, and smart storage solutions.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Site Measurement",
        description:
          "Precise on-site measurements ensure every piece fits perfectly the first time.",
      },
      {
        step: "02",
        title: "Design & Sample",
        description:
          "Detailed drawings, material samples, and finishes are presented for approval.",
      },
      {
        step: "03",
        title: "Workshop Build",
        description:
          "Pieces are crafted in our trusted workshop using premium boards, veneers, hardware, and finishes.",
      },
      {
        step: "04",
        title: "Installation",
        description:
          "Skilled installers fit and finish on site — no chips, no scratches, no shortcuts.",
      },
    ],
    faqs: [
      {
        question: "Do you offer warranties on custom furniture?",
        answer:
          "Yes — typically a 5-year warranty on construction and 1 year on hardware, subject to fair use.",
      },
      {
        question: "Can I see material samples before committing?",
        answer:
          "Of course. We bring laminate, veneer, fabric, and hardware samples to every approval meeting.",
      },
      {
        question: "What's the lead time for a custom wardrobe?",
        answer:
          "Typically 4–6 weeks from final approval, depending on size and finish complexity.",
      },
    ],
    cta: "Design my piece",
  },
  {
    id: 4,
    slug: "design-consultation",
    title: "Design Consultation",
    shortDescription:
      "Expert guidance on layout planning, theme direction, material selection, and professional recommendations to improve functionality and aesthetics.",
    longDescription:
      "Sometimes you don't need a full project — you need clarity. Our design consultations give you actionable recommendations on layout, materials, lighting, and styling. Whether you're planning a build, renovating, or just stuck, we'll help you make confident, informed decisions.",
    icon: "💡",
    tagline: "Clarity before commitment.",
    highlights: [
      "On-site or virtual sessions",
      "Layout & flow recommendations",
      "Material & palette guidance",
      "Vendor & contractor referrals",
    ],
    features: [
      {
        title: "Layout Review",
        description:
          "We assess your current or proposed plan and recommend improvements for flow, light, and function.",
      },
      {
        title: "Theme Direction",
        description:
          "Curated mood boards and references so your space feels cohesive — not catalogue-cobbled.",
      },
      {
        title: "Material & Palette",
        description:
          "Hands-on guidance on flooring, wall finishes, hardware, fabrics, and colour balance.",
      },
      {
        title: "Lighting Strategy",
        description:
          "Layered lighting plans — ambient, task, accent — that transform how a space feels at every hour.",
      },
      {
        title: "Furniture Planning",
        description:
          "Right-sizing furniture choices to your floor plan, lifestyle, and budget.",
      },
      {
        title: "Renovation Roadmap",
        description:
          "A prioritised plan if you're renovating in phases — with realistic timelines and budgets.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brief",
        description:
          "Share photos, plans, and pain points. We come prepared with tailored questions and references.",
      },
      {
        step: "02",
        title: "Walkthrough",
        description:
          "An on-site or video walkthrough where we observe, measure, and ask the right questions.",
      },
      {
        step: "03",
        title: "Recommendations",
        description:
          "A written report with annotated drawings, material suggestions, and prioritised actions.",
      },
      {
        step: "04",
        title: "Follow-Up",
        description:
          "Two weeks of follow-up support to clarify recommendations as you implement.",
      },
    ],
    faqs: [
      {
        question: "Is the consultation fee adjusted if I hire you for the full project?",
        answer:
          "Yes — the consultation fee is credited against the design fee if you proceed with us within 60 days.",
      },
      {
        question: "Do you offer remote consultations?",
        answer:
          "Yes, video-based consultations work well for clients outside Rajasthan or planning from abroad.",
      },
      {
        question: "How long is a typical session?",
        answer:
          "Most sessions run 90–120 minutes on site, followed by a written report within 7 working days.",
      },
    ],
    cta: "Book a consultation",
  },
  {
    id: 5,
    slug: "renovation-makeovers",
    title: "Renovation & Makeovers",
    shortDescription:
      "Complete renovation services including dismantling, false ceiling work, painting, flooring, tiling, electrical, plumbing, and carpentry with high-quality workmanship.",
    longDescription:
      "Tired walls, dated finishes, awkward layouts — we transform what's already there. Our renovation team handles everything from selective refreshes to full structural makeovers, with disciplined site management, transparent budgets, and finishes that look brand new.",
    icon: "🔨",
    tagline: "Old walls, new soul.",
    highlights: [
      "Single-point accountability",
      "Transparent budgeting",
      "Minimal lifestyle disruption",
      "Premium finish standards",
    ],
    features: [
      {
        title: "Civil & Dismantling",
        description:
          "Controlled demolition and structural alterations executed safely with proper waste management.",
      },
      {
        title: "Flooring & Tiling",
        description:
          "Tile, marble, wood, or vinyl flooring laid with precision — including wet areas and feature surfaces.",
      },
      {
        title: "False Ceiling & Lighting",
        description:
          "Gypsum and POP ceilings with integrated lighting design that transforms how a space feels.",
      },
      {
        title: "Painting & Wall Finishes",
        description:
          "Premium emulsions, textures, wallpapers, and panelling — applied with showroom-grade finishing.",
      },
      {
        title: "Electrical & Plumbing",
        description:
          "Rewiring, repositioning of points, and full plumbing upgrades for safer, more efficient homes.",
      },
      {
        title: "Carpentry & Woodwork",
        description:
          "Replacement and refurbishment of doors, wardrobes, cabinetry, and trim work.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description:
          "We inspect existing conditions, identify hidden issues, and document scope honestly.",
      },
      {
        step: "02",
        title: "Scope & Budget",
        description:
          "A line-item proposal so you know exactly what you're paying for — no hidden extras.",
      },
      {
        step: "03",
        title: "Phased Execution",
        description:
          "Work is sequenced to minimise disruption, especially for occupied homes and active businesses.",
      },
      {
        step: "04",
        title: "Quality Snagging",
        description:
          "A rigorous pre-handover snag list ensures every detail meets our finish standards.",
      },
      {
        step: "05",
        title: "Handover",
        description:
          "Final walkthrough, warranty paperwork, and aftercare guidance — we stand behind our work.",
      },
    ],
    faqs: [
      {
        question: "Can I live in the home during renovation?",
        answer:
          "For partial renovations, yes — we phase work and isolate zones. Full renovations usually require relocating for safety and speed.",
      },
      {
        question: "Will you handle society approvals and NOCs?",
        answer:
          "Yes, we assist with society documentation, NOCs, and basic compliance paperwork.",
      },
      {
        question: "Do you offer warranties on renovation work?",
        answer:
          "Civil and finishing work carries a 1-year defect liability period; carpentry warranties extend up to 5 years.",
      },
    ],
    cta: "Start my renovation",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
