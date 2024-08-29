import { upcomingL2 } from './templates/upcoming'
import { Layer2 } from './types'

export const abstract: Layer2 = upcomingL2({
  id: 'abstract',
  display: {
    name: 'Abstract',
    slug: 'abstract',
    description:
      'Abstract is a Layer 2 (L2) network built on top of Ethereum, designed to securely power consumer-facing blockchain applications at scale with low fees and fast transaction speeds.',
    purposes: ['Universal'],
    category: 'Validium',
    provider: 'ZK Stack',
    links: {
      websites: ['https://abs.xyz/'],
      apps: [],
      documentation: ['https://docs.abs.xyz/'],
      explorers: [],
      repositories: [],
      socialMedia: ['https://x.com/abstractchain'],
    },
  },
})