export const projects = [
  {
    id: 'apex',
    tier: 'featured',
    title: 'APEX',
    type: 'Sports Analytics Research Platform',
    tagline:
      'Compares live prices across 35 sportsbooks, estimates margin-free fair prices, evaluates expected value, tracks recommendations, and grades results against real outcomes.',
    role: 'Product Owner / AI-Assisted Developer',
    categories: 'Data · AI-Assisted Development · Product',
    focus: ['Product Ownership', 'Requirements', 'AI-Assisted Development', 'Testing & Release'],
    status: 'Private build',
    timeframe: '2026',
    stack: [
      'TypeScript',
      'React 19',
      'Next.js 16 (vinext)',
      'Tailwind CSS 4',
      'Cloudflare Workers',
      'Cloudflare D1 (SQLite)',
      'Drizzle ORM',
      'Zod',
      'Recharts',
      'Node test runner',
      'SportsGameOdds',
      'The Odds API',
      'Claude Code',
      'OpenAI Codex',
    ],
    visual: {
      kind: 'stats',
      items: [
        { value: '35', label: 'Sportsbooks' },
        { value: '29', label: 'API routes' },
        { value: '25', label: 'Database tables' },
        { value: '128', label: 'Test suites' },
      ],
    },
    myRole:
      'I served as product owner and directed AI-assisted development using Claude Code and OpenAI Codex. I defined requirements, made product decisions, reviewed implementations, tested functionality, and coordinated cross-review and release workflows.',
    problem:
      'The same market is priced differently at every sportsbook, and every price carries that book\u2019s margin. Without stripping the margin and comparing across books, it\u2019s hard to tell whether a price is actually good \u2014 and without tracking results, hard to tell whether the method works at all.',
    approach:
      'Remove each book\u2019s margin (power-method devig), then combine books into one fair probability, weighting sharper books more and judging each book leave-one-out. Prices with positive expected value are screened for stale quotes, thin markets, outliers, and off-market lines, graded A / B / Pass, and ranked into tiers. Every recommendation is recorded before the game and graded afterwards from public box scores.',
    features: [
      'Top plays opens with a \u201cRight now\u201d answer: up to three graded prices at the user\u2019s books, or the reason there is nothing to bet',
      'Ranked play cards with tier, price, book, fair chance vs the chance the price needs, EV, stake, and plain-language reasons',
      'Sport-first navigation across NFL, college football, MLB, NHL, NBA, and esports',
      'Research pages per sport: NFL matchups vs blitz, MLB pitchers & lineups, NHL shots & goalies, NBA injuries & rest',
      'Weekly results and a Track record scorecard that compares wins to the priced chance and says \u201ctoo early to judge\u201d below ~100 plays',
      'Closing-line tracking on every flagged price',
      'Stale data is labelled, never hidden; every number shows its source and age',
    ],
    results: [
      '~30,000 lines of TypeScript',
      '29 API routes and 25 database tables',
      '128 automated test suites; releases gated on typecheck, lint, and all tests passing',
      'Prices compared across 35 sportsbooks in 6 sport categories',
    ],
    images: [
      {
        src: '/Portfolio/images/apex/marketplace-early.webp',
        caption: 'Earlier version: live player props with edge calculations',
      },
      {
        src: '/Portfolio/images/apex/player-insights-early.webp',
        caption: 'Earlier version: player hit rates and 20-game trend',
      },
    ],
    note: 'The live app is private: its sports data sources aren’t cleared for public sharing.',
    // TODO: share the APEX case-study artifact and paste its public link here
    caseStudyUrl: null,
    // TODO: link the cleaned public repo once it's pushed
    github: null,
  },
  {
    id: 'attendly',
    tier: 'featured',
    title: 'Attendly',
    type: 'Current Venture',
    tagline:
      'School operations platform focused on attendance, aftercare, billing, reporting, and parent communications.',
    role: 'Founder & Product Lead',
    categories: 'Product · Operations · Education Technology',
    focus: ['Product Direction', 'Implementation', 'Operations', 'Customer Adoption'],
    status: 'In progress',
    stack: ['Product Strategy', 'Implementation', 'Operations'],
    visual: {
      kind: 'list',
      items: ['Attendance', 'Aftercare', 'Billing', 'Reporting', 'Parent communications'],
    },
    image: '/Portfolio/images/attendly/attendly-hero.webp',
    myRole:
      'Taking ownership of product direction, implementation, operations, and customer adoption.',
    features: [
      'Attendance tracking',
      'Aftercare management',
      'Billing',
      'Reporting',
      'Parent communications',
    ],
  },
  {
    id: 'kev-automation',
    tier: 'featured',
    title: 'KEV Automation',
    type: 'Security Automation · Sabel Systems',
    tagline:
      'A Python script that extends an existing CVE monitoring pipeline with CISA’s Known Exploited Vulnerabilities catalog, so the vulnerabilities attackers are actually using rise to the top.',
    role: 'Cyber Center of Excellence Intern',
    categories: 'Security · Automation · Python',
    focus: ['Python Automation', 'Vulnerability Prioritization', 'Data Integration'],
    timeframe: 'June – August 2026',
    stack: ['Python', 'CISA KEV', 'MITRE CVE', 'NVD', 'Red Hat Enterprise Linux', 'Git'],
    visual: {
      kind: 'list',
      items: ['MITRE CVE', 'CISA KEV', 'NVD', 'Python', 'RHEL'],
    },
    image: '/Portfolio/images/kev/vulnerability-operations.webp',
    imageCaption: 'Vulnerability operations view with KEV flags, priorities, and remediation status (sample data)',
    myRole:
      'Built KEV-automation-v1.py during my internship as an extension of the team’s existing CVE monitoring pipeline, running in a Red Hat Enterprise Linux cloud environment.',
    approach:
      'Each day, MITRE CVE data is joined with project-specific vendor information and the CISA KEV catalog to identify and prioritize vulnerabilities relevant to monitored systems. A separate, decoupled KEV monitor keeps daily catalog snapshots and flags newly added known-exploited vulnerabilities.',
    features: [
      'Daily integration of MITRE CVE data, vendor information, and the CISA KEV catalog',
      'Prioritizes vulnerabilities relevant to monitored systems',
      'Daily KEV catalog snapshots to detect newly added entries',
      'Outputs enhanced with KEV priority tagging and direct NVD references',
      'Runs in a Red Hat Enterprise Linux cloud environment',
    ],
  },
  {
    id: 'colorspark',
    tier: 'additional',
    title: 'ColorSpark',
    type: 'Mobile App',
    tagline: 'A Flutter coloring app for kids with AI-generated pages and interactive stickers.',
    role: 'Developer',
    categories: 'Mobile · Flutter',
    stack: ['Flutter', 'Dart', 'AI Generation', 'Mobile UI/UX'],
    problem:
      'Kids’ coloring apps tend to be ad-heavy or locked behind steep paywalls.',
    approach:
      'A Flutter app with AI-generated coloring pages, interactive sticker tools, and a freemium model, designed around large touch targets and simple animated navigation.',
    features: [
      'AI-generated coloring pages across categories',
      'Interactive stickers: drag, resize, rotate',
      'Animated category selection',
      'Freemium paywall and subscription flow',
      'Built for iOS, Android, and Web',
    ],
    learned:
      'Designing for children demands extreme intentionality — every touch target, animation curve, and color choice carries weight.',
    image: '/Portfolio/images/colorspark/screen-3.webp',
    images: [
      { src: '/Portfolio/images/colorspark/screen-3.webp', caption: 'Title screen' },
      { src: '/Portfolio/images/colorspark/screen-1.webp', caption: 'Space coloring page' },
      { src: '/Portfolio/images/colorspark/screen-2.webp', caption: 'Cooking coloring page' },
    ],
    github: 'https://github.com/amarcano27/ColorSpark',
  },
]
