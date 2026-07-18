export interface Principle {
  title: string
  description: string
  icon: 'search' | 'layers' | 'refresh'
}

export const principles: Principle[] = [
  {
    title: 'Understand the Problem',
    description:
      'I spend time understanding the business goal and the user journey before deciding on a technical solution.',
    icon: 'search',
  },
  {
    title: 'Build for Maintainability',
    description:
      'I favour clean architecture, reusable components and code that is easy to extend and support.',
    icon: 'layers',
  },
  {
    title: 'Iterate and Improve',
    description:
      'The best products are built through continuous refinement rather than one big release.',
    icon: 'refresh',
  },
]