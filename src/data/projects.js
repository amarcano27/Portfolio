export const projects = [
  {
    id: 'sports-betting-analytics',
    title: 'Sports Betting Analytics Platform',
    tagline: 'Real-time odds intelligence across 20+ sportsbooks, powered by custom ML models.',
    description:
      'A full-stack analytics engine that normalizes live odds from 20+ sportsbooks, runs ML-driven player projections, and flags expected value edges \u2014 built for bettors who want signal, not noise.',
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
      'Bettors waste hours cross-referencing odds across dozens of platforms with no systematic way to identify +EV opportunities or factor in player context like injuries and rest days.',
    approach:
      'Built a unified data pipeline that normalizes odds from multiple APIs, feeds them into custom ML models for player projections, and surfaces actionable edges through a clean analytics dashboard. Designed every layer to gracefully degrade when individual data sources go down.',
    results: [
      'Aggregates odds from 20+ sportsbooks in real-time',
      '5 sport categories with comprehensive coverage',
      'Custom ML models for player prop projections',
      'Production-grade error handling with fallback systems',
    ],
    learned:
      'Multi-API integration at scale requires robust error handling and fallback logic. The real value is in normalization, not just collection \u2014 turning messy, inconsistent data into something you can actually reason about.',
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
    tagline: 'An AI-powered coloring app for kids \u2014 shipped cross-platform with a freemium model.',
    description:
      'A cross-platform Flutter app that pairs AI-generated coloring pages with interactive sticker tools and fluid animations. Designed for children, architected for production \u2014 with subscription monetization baked in from day one.',
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
      'Kids\u2019 coloring apps are either low-quality ad machines or locked behind steep paywalls. Parents want safe, engaging content without the compromise.',
    approach:
      'Built a polished Flutter app with AI-generated content, interactive sticker tools, and a freemium model that rewards exploration before upselling. Prioritized fluid animations and child-safe UX with oversized touch targets.',
    results: [
      'Cross-platform deployment (iOS, Android, Web)',
      'AI-powered content generation pipeline',
      'Freemium monetization architecture',
      'Manual QA across emulators, physical devices, and web',
    ],
    learned:
      'Designing for children demands extreme intentionality \u2014 every touch target, animation curve, and color choice carries weight. The best kid-friendly UX feels effortless but requires more precision than most adult interfaces.',
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
    tagline: 'A custom AI that replaced manual catering calculations in a live restaurant.',
    description:
      'A purpose-built GPT that converts ezCater PDF order tickets into execution-ready prep instructions, following Firehouse Subs food service standards. Not a demo \u2014 it runs daily in real restaurant operations.',
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
      'Manual catering prep from PDF tickets is error-prone, slow, and depends on experienced staff interpreting ambiguous orders correctly every single time.',
    approach:
      'Translated Firehouse Subs food service standards into structured AI prompts with strict business rules, validation logic, and clear output formatting. The system flags ambiguity rather than guessing \u2014 because in food service, guessing costs money.',
    results: [
      'Actively deployed in daily restaurant operations',
      'Reduced prep errors and calculation mistakes',
      'Decreased catering preparation time',
      'Consistent execution regardless of staff experience level',
    ],
    learned:
      'The best AI tools are ruthlessly specific. Vague prompts produce vague results. Encoding exact business rules, edge cases, and failure modes into the system prompt was the key to building something people actually rely on.',
    link: 'https://chatgpt.com/g/g-695f354abcdc8191b805e1fe8d43a9d7-catering-prep-gpt',
    featured: true,
  },
]
