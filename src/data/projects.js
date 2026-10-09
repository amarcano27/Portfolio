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
      'React',
      'Vinext / Vite',
      'Tailwind CSS',
      'Cloudflare Workers',
      'Cloudflare D1 (SQLite)',
      'Drizzle ORM',
      'Zod',
      'Recharts',
      'SportsGameOdds',
      'The Odds API',
      'Claude Code',
      'OpenAI Codex',
    ],
    visual: {
      kind: 'stats',
      items: [
        { value: '35', label: 'Sportsbooks' },
        { value: '27', label: 'API routes' },
        { value: '25', label: 'Database tables' },
        { value: '128', label: 'Test suites' },
      ],
    },
    myRole:
      'I served as product owner and directed AI-assisted development using Claude Code and OpenAI Codex. I defined requirements, made product decisions, reviewed implementations, tested functionality, and coordinated cross-review and release workflows.',
    problem:
      'The same market is priced differently at every sportsbook, and every price carries that book’s margin. Without stripping the margin and comparing across books, it’s hard to tell whether a price is actually good — and without tracking results, hard to tell whether the method works at all.',
    approach:
      'Pull live prices from 35 sportsbooks through a multi-provider data strategy, remove each book’s margin to estimate a fair price, and measure every offered price against it. Every recommendation is recorded, graded automatically against real outcomes, and checked against the closing line.',
    features: [
      'Live price comparison across 35 sportsbooks',
      'Margin-free fair price estimation and expected value evaluation',
      'Recommendation tracking with automated grading against real outcomes',
      'Closing-line tracking',
      'Multi-provider data strategy',
      'Coverage across NFL, college football, MLB, NHL, NBA, and esports',
    ],
    results: [
      '27 API routes and 25 database tables',
      '128 automated test suites',
      '6 sport categories covered',
      'Running track record of recommendations, graded against real outcomes',
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
    id: 'catering-prep-gpt',
    tier: 'additional',
    title: 'Catering Prep Assistant GPT',
    type: 'AI Automation',
    tagline:
      'A custom GPT that turns catering orders into structured prep instructions using Firehouse Subs business rules.',
    role: 'Builder',
    categories: 'AI · Operations',
    stack: ['Custom GPT', 'Prompt Design', 'Process Design', 'Business Rules'],
    myRole:
      'Built a custom GPT that converts catering order information into structured preparation instructions using defined Firehouse Subs business rules and operational guardrails.',
    problem:
      'Turning catering PDF tickets into prep work by hand depends on staff reading every order correctly, every time.',
    approach:
      'Encoded Firehouse Subs food service standards as explicit rules, validation steps, and a fixed output format. The assistant flags ambiguous orders instead of guessing.',
    features: [
      'PDF-based order intake',
      'Protein, bread, and cheese calculations',
      'Box lunch logic (Lieutenant vs Rookie standards)',
      'Prep bag calculations (4 lb / 2 lb standards)',
      'Beverage yield handling',
      'Guardrails that flag ambiguity instead of guessing',
    ],
    learned:
      'The best AI tools are ruthlessly specific. Encoding exact business rules, edge cases, and failure modes was what made the output something a team could actually rely on.',
    link: 'https://chatgpt.com/g/g-695f354abcdc8191b805e1fe8d43a9d7-catering-prep-gpt',
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
    image: '/Portfolio/images/colorspark/Screenshot 2026-01-06 110841.png',
    images: [
      '/Portfolio/images/colorspark/Screenshot 2026-01-06 110841.png',
      '/Portfolio/images/colorspark/Screenshot 2026-01-06 110938.png',
      '/Portfolio/images/colorspark/Screenshot 2026-01-06 110956.png',
    ],
    github: 'https://github.com/amarcano27/ColorSpark',
  },
]
