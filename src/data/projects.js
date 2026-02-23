export const projects = [
  {
    id: 'sports-betting-analytics',
    title: 'Sports Betting Analytics Platform',
    tagline: 'ML-powered odds aggregation across 20+ sportsbooks',
    description:
      'Full-stack analytics platform that aggregates real-time odds from 20+ sportsbooks, delivers ML-driven player projections, and surfaces expected value edges — built for serious bettors who want data, not hunches.',
    role: 'Full-Stack Developer',
    type: 'Data Analytics & ML',
    stack: ['Python 3.11', 'Streamlit', 'Supabase', 'PostgreSQL', 'Scikit-learn', 'Pandas', 'NumPy'],
    apis: ['The Odds API', 'NBA Stats API', 'PandaScore API'],
    features: [
      'Real-time odds aggregation from 20+ sportsbooks',
      'ML-powered player performance projections',
      'Expected Value (EV) analysis and edge detection',
      'Context-aware AI insights (injuries, rest days, matchups)',
      'Multi-sport support: NBA, NFL, MLB, NHL, Esports',
    ],
    problem:
      'Bettors waste hours cross-referencing odds across dozens of sportsbooks with no systematic way to identify +EV opportunities or factor in player context.',
    approach:
      'Built a unified data pipeline that normalizes odds from multiple APIs, feeds them into custom ML models for player projections, and surfaces actionable edges through a clean analytics dashboard.',
    results: [
      'Aggregates odds from 20+ sportsbooks in real-time',
      '5 sport categories with full coverage',
      'Custom ML models for player prop projections',
      'Production-ready with comprehensive error handling and fallback systems',
    ],
    learned:
      'Multi-API integration at scale requires robust error handling and fallback logic. Learned to design ETL pipelines that gracefully degrade when individual data sources fail.',
    image: '/Portfolio/images/sports-betting/marketplace.png',
    images: [
      '/Portfolio/images/sports-betting/marketplace.png',
      '/Portfolio/images/sports-betting/player_insights.png',
    ],
    github: 'https://github.com/amarcano27/sports-betting-dashboard',
    featured: true,
  },
  {
    id: 'colorspark',
    title: 'ColorSpark',
    tagline: 'AI-powered coloring app for kids — creativity meets learning',
    description:
      'Cross-platform Flutter app that combines AI-generated coloring pages with interactive sticker tools, animated UI, and a freemium subscription model. Designed for children, built with production-grade architecture.',
    role: 'Mobile Developer',
    type: 'Mobile App',
    stack: ['Flutter', 'Dart', 'AI Generation', 'Mobile UI/UX'],
    features: [
      'AI-generated coloring pages across multiple categories',
      'Interactive stickers: drag, resize, rotate',
      'Animated category selection with custom UI',
      'Smooth horizontal scroll UX patterns',
      'Freemium paywall and subscription system',
      'Cross-platform: iOS, Android, Web',
    ],
    problem:
      'Kids\' coloring apps are either low-quality or locked behind paywalls with no creative flexibility. Parents want safe, engaging content without ads.',
    approach:
      'Built a polished Flutter app with AI-generated content, interactive sticker tools, and a freemium model that lets kids explore freely before upgrading. Focused heavily on fluid animations and child-friendly UX.',
    results: [
      'Cross-platform deployment (iOS, Android, Web)',
      'AI-powered content generation pipeline',
      'Freemium monetization architecture',
      'Manual QA across emulators, physical devices, and web',
    ],
    learned:
      'Designing for children requires extreme intentionality in touch targets, animation timing, and visual hierarchy. Every interaction needs to feel rewarding.',
    image: '/Portfolio/images/colorspark/Screenshot 2026-01-06 110841.png',
    images: [
      '/Portfolio/images/colorspark/Screenshot 2026-01-06 110841.png',
      '/Portfolio/images/colorspark/Screenshot 2026-01-06 110938.png',
      '/Portfolio/images/colorspark/Screenshot 2026-01-06 110956.png',
    ],
    github: 'https://github.com/amarcano27/ColorSpark',
    detail: '/Portfolio/colorspark.html',
    featured: true,
  },
  {
    id: 'catering-prep-gpt',
    title: 'Catering Prep Assistant GPT',
    tagline: 'Custom AI that automates restaurant catering operations',
    description:
      'A purpose-built GPT that converts ezCater PDF order tickets into execution-ready prep instructions, following Firehouse Subs food service standards. Actively used in daily restaurant operations.',
    role: 'AI Systems Designer',
    type: 'AI Automation',
    stack: ['Custom GPT', 'Prompt Engineering', 'Process Design', 'Business Rules'],
    features: [
      'PDF-based order intake and parsing',
      'Exact protein, bread, and cheese calculations',
      'Box lunch logic (Lieutenant vs Rookie standards)',
      'Prep bag calculations (4 lb / 2 lb standards)',
      'Beverage yield handling',
      'Strict operational guardrails to prevent errors',
    ],
    problem:
      'Manual catering prep from PDF tickets is error-prone, slow, and depends on experienced staff interpreting ambiguous orders correctly.',
    approach:
      'Translated Firehouse Subs food service standards into structured AI prompts with strict business rules, validation logic, and clear output formatting. Designed to flag ambiguity rather than guess.',
    results: [
      'Actively deployed in daily restaurant operations',
      'Reduced prep errors and calculation mistakes',
      'Decreased catering preparation time',
      'Consistent execution regardless of staff experience level',
    ],
    learned:
      'The best AI tools are ruthlessly specific. Vague prompts produce vague results. Encoding exact business rules, edge cases, and failure modes into the system prompt was the key to real-world reliability.',
    link: 'https://chatgpt.com/g/g-695f354abcdc8191b805e1fe8d43a9d7-catering-prep-gpt',
    featured: true,
  },
]
