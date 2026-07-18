export interface Project {
  id: string
  title: string
  tagline: string
  image: string

  challenge: string
  solution: string
  outcome: string

  technologies: string[]
}

export const projects: Project[] = [
  {
    id: 'hotel-guest-app',
    title: 'Hotel Guest App',
    tagline: 'Modernising a mobile hospitality experience.',
    challenge:
      'The hotel had a mobile application that needed UX improvements, stronger structure and support for real booking journeys.',
    solution:
      'Improved the mobile experience using .NET MAUI Blazor, refined key customer journeys and integrated third-party services.',
    outcome:
      'A more maintainable, user-friendly mobile app foundation ready to support a boutique guest experience.',
    technologies: ['.NET MAUI', 'Blazor', 'Entity Framework', 'API Integration'],
     image: '/images/projects/indigo.avif',
  },
  {
    id: 'golf-booking-integration',
    title: 'Golf Booking Integration',
    tagline: 'Bringing golf bookings into an existing app flow.',
    challenge:
      'Golf bookings needed to fit naturally into an existing hospitality booking journey without feeling bolted on.',
    solution:
      'Designed and integrated a cleaner booking flow supported by API communication and mobile-first UX decisions.',
    outcome:
      'A smoother customer journey that connected golf availability with the wider hospitality experience.',
    technologies: ['Vue', 'Tailwind', 'APIs', 'Booking Flows'],
     image: '/images/projects/indigo.avif'
  },
  {
    id: 'financial-services-platform',
    title: 'Financial Services Platform',
    tagline: 'Enterprise software built for reliability.',
    challenge:
      'Financial systems require maintainable, reliable software that supports business-critical workflows.',
    solution:
      'Worked across full-stack .NET systems, APIs, SQL Server and Azure-backed features within an enterprise environment.',
    outcome:
      'Delivered scalable functionality while working within the expectations of regulated financial software.',
    technologies: ['C#', '.NET', 'SQL Server', 'Azure', 'SCSS'],
     image: '/images/projects/indigo.avif'
  },
]