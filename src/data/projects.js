export const PROJECTS = [
  {
    id: 6,
    slug: "hadejija-solar-project",
    category: "SOLAR INSTALLATION",
    title: "Hadejija Solar Project",
    description: "A gallery of installation photos from the Hadejija project.",
    image: "/projects/Hadejija/IMG-20261014-WA0029.jpg",
    location: "Hadejija, Nigeria",
    overview:
      "Explore photos documenting the solar installation project in Hadejija, from the site and equipment through the completed work.",
    testimonial:
      "The team kept us informed throughout the Hadejija installation and made the whole process feel straightforward.",
    highlights: [
      "Project photos from the Hadejija installation",
      "Solar equipment and site details",
      "A real project delivered by JODU-TECH LTD",
    ],
    media: [
      "IMG-20261014-WA0029.jpg",
      "IMG-20261014-WA0030.jpg",
      "IMG-20261014-WA0037.jpg",
      "IMG-20261014-WA0041.jpg",
      "IMG-20261014-WA0059.jpg",
      "IMG-20261014-WA0107.jpg",
      "IMG-20261014-WA0110.jpg",
      "IMG-20261014-WA0111.jpg",
      "IMG-20261014-WA0112.jpg",
    ].map((filename, index) => ({
      type: "image",
      src: `/projects/Hadejija/${filename}`,
      alt: `Hadejija solar project, photo ${index + 1}`,
    })),
  },
  {
    id: 7,
    slug: "lagos-solar-project",
    category: "SOLAR INSTALLATION",
    title: "Lagos Solar Project",
    description: "A gallery of installation photos from the Lagos project.",
    image: "/projects/Lagos/IMG-20261006-WA0000.jpg",
    location: "Lagos, Nigeria",
    overview:
      "Explore photos documenting the solar installation project in Lagos, from the site and equipment through the completed work.",
    testimonial:
      "We appreciated how the Lagos team took time to understand our needs and explain the installation plan clearly.",
    highlights: [
      "Project photos from the Lagos installation",
      "Solar equipment and site details",
      "A real project delivered by JODU-TECH LTD",
    ],
    media: [
      "IMG-20261006-WA0000.jpg",
      "IMG-20261014-WA0035.jpg",
      "IMG-20261014-WA0036.jpg",
      "IMG-20261014-WA0037.jpg",
    ].map((filename, index) => ({
      type: "image",
      src: `/projects/Lagos/${filename}`,
      alt: `Lagos solar project, photo ${index + 1}`,
    })),
  },
  {
    id: 8,
    slug: "lokogoma-solar-project",
    category: "SOLAR INSTALLATION",
    title: "Lokogoma Solar Project",
    description: "A gallery of installation photos from the Lokogoma project.",
    image: "/projects/Lokogoma/IMG-20261006-WA0000.jpg",
    location: "Lokogoma, Nigeria",
    overview:
      "Explore photos documenting the solar installation project in Lokogoma, from the site and equipment through the completed work.",
    testimonial:
      "The Lokogoma project came together smoothly, and communication with the team was clear from start to finish.",
    highlights: [
      "Project photos from the Lokogoma installation",
      "Solar equipment and site details",
      "A real project delivered by JODU-TECH LTD",
    ],
    media: [
      "IMG-20261006-WA0000.jpg",
      "IMG-20261006-WA0001.jpg",
      "IMG-20261014-WA0038.jpg",
      "IMG-20261014-WA0040.jpg",
      "IMG-20261014-WA0041.jpg",
      "IMG-20261014-WA0053.jpg",
      "IMG-20261014-WA0055.jpg",
      "IMG-20261014-WA0057.jpg",
      "IMG-20261014-WA0059.jpg",
    ].map((filename, index) => ({
      type: "image",
      src: `/projects/Lokogoma/${filename}`,
      alt: `Lokogoma solar project, photo ${index + 1}`,
    })),
  },
  {
    id: 9,
    slug: "nanguru-solar-project",
    category: "SOLAR INSTALLATION",
    title: "Nanguru Solar Project",
    description: "A gallery of installation photos from the Nanguru project.",
    image: "/projects/Nanguru/IMG-20261014-WA0007.jpg",
    location: "Nanguru, Nigeria",
    overview:
      "Explore photos documenting the solar installation project in Nanguru, from the site and equipment through the completed work.",
    testimonial:
      "The Nanguru installation was planned around the site, and the team was helpful at every step.",
    highlights: [
      "Project photos from the Nanguru installation",
      "Solar equipment and site details",
      "A real project delivered by JODU-TECH LTD",
    ],
    media: [
      "IMG-20261014-WA0007.jpg",
      "IMG-20261014-WA0010.jpg",
      "IMG-20261014-WA0011.jpg",
      "IMG-20261014-WA0012.jpg",
      "IMG-20261014-WA0013.jpg",
      "IMG-20261014-WA0017.jpg",
      "IMG-20261014-WA0018.jpg",
      "IMG-20261014-WA0019.jpg",
    ].map((filename, index) => ({
      type: "image",
      src: `/projects/Nanguru/${filename}`,
      alt: `Nanguru solar project, photo ${index + 1}`,
    })),
  },
  {
    id: 1,
    slug: "residential-solar",
    category: "RESIDENTIAL SOLAR",
    title: "Power for the place you call home",
    description: "A rooftop solar and battery setup for dependable day-and-night energy.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1100&q=85",
    location: "Homes across Nigeria",
    overview:
      "A home energy system designed around household usage, combining rooftop solar generation with battery storage to provide more dependable power throughout the day and night.",
    testimonial:
      "Having a solution planned around our household needs made choosing a home solar system much easier.",
    highlights: [
      "Solar generation designed for residential rooftops",
      "Battery storage for power after sunset",
      "System sizing tailored to household energy needs",
    ],
  },
  {
    id: 2,
    slug: "commercial-solar",
    category: "COMMERCIAL SOLAR",
    title: "Keep business moving",
    description: "Scalable solar power built to support your team's daily operations.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=85",
    location: "For growing businesses",
    overview:
      "A scalable solar energy solution that helps businesses meet their day-to-day power needs with a system planned around their premises and operating requirements.",
    testimonial:
      "The team understood our day-to-day business requirements and presented a practical solar plan for our space.",
    highlights: [
      "Solar solutions for offices and commercial spaces",
      "System capacity planned around business operations",
      "A practical path to expanding energy capacity",
    ],
  },
  {
    id: 3,
    slug: "backup-and-storage",
    category: "BACKUP & STORAGE",
    title: "Stay ready when the grid isn't",
    description: "Battery storage that keeps essential devices and spaces powered.",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=900&q=85",
    location: "Reliable power, day and night",
    overview:
      "A backup and storage setup focused on keeping essential appliances and spaces powered when grid supply is unavailable.",
    testimonial:
      "We valued the clear advice on which essential loads to prioritize for backup power and battery storage.",
    highlights: [
      "Battery storage for essential loads",
      "Backup power matched to your priorities",
      "Integration planning for existing or new solar",
    ],
  },
  {
    id: 4,
    slug: "off-grid-infrastructure",
    category: "OFF-GRID INFRASTRUCTURE",
    title: "Uninterrupted Independent Power",
    description: "Complete off-grid solar installation for remote agricultural hubs.",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=900&q=85",
    location: "Rural Agribusiness",
    overview:
      "An independent power solution for remote agricultural operations, planned to support reliable energy access away from the utility grid.",
    testimonial:
      "The off-grid plan considered the realities of our remote site and the energy our operation needs.",
    highlights: [
      "Off-grid generation for remote locations",
      "Energy planning for agricultural operations",
      "Storage and system design in one installation",
    ],
  },
  {
    id: 5,
    slug: "industrial-solar-grid",
    category: "INDUSTRIAL SOLAR GRID",
    title: "High-Output Renewable Energy",
    description: "Large-scale solar array for continuous manufacturing facilities.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1100&q=85",
    location: "Industrial Zone, Ogun",
    overview:
      "A large-scale solar energy concept for industrial facilities, designed to support substantial and ongoing operational power requirements.",
    testimonial:
      "The proposed solar approach was easy to discuss in terms of our facility's operating needs and future capacity.",
    highlights: [
      "Large-scale solar array planning",
      "Designed around continuous facility operations",
      "Renewable generation for industrial power needs",
    ],
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug);
}
