// The full 60-day challenge set. A handful of "showcase" days (1, 2, 3, 12,
// 20, 30, 45, 60) are hand-authored in full detail — first impression, the
// halfway boss, and the finale deserve real care. The remaining days are
// generated from compact per-day topic entries plus a shared step template
// for whichever era they fall in, which keeps 60 days of content reusable
// and maintainable instead of 60 fully bespoke objects.

const TRACK = 'Frontend Development';

// ---- Eras: shared roadmap-step phrasing + difficulty/XP curve by range ----
const ERAS = [
  {
    range: [1, 10],
    name: 'Web Foundations',
    difficulty: 'Beginner',
    steps: [
      { title: 'Set up the page', description: 'Create the HTML structure and link your CSS/JS.' },
      { title: 'Style the layout', description: 'Apply spacing, color, and typography.' },
      { title: 'Add the interaction', description: 'Wire up whatever JS behavior the mission needs.' },
      { title: 'Polish and test', description: 'Check it in the browser at a few screen sizes.' },
    ],
  },
  {
    range: [11, 20],
    name: 'Interactive Frontend',
    difficulty: 'Beginner',
    steps: [
      { title: 'Plan the interface', description: 'Sketch the components and state you\u2019ll need.' },
      { title: 'Build the structure', description: 'Create the markup or components for the UI.' },
      { title: 'Wire up the logic', description: 'Connect events, state, or API calls.' },
      { title: 'Handle edge cases', description: 'Cover empty, loading, and error states.' },
    ],
  },
  {
    range: [21, 30],
    name: 'React & State',
    difficulty: 'Intermediate',
    steps: [
      { title: 'Scaffold the components', description: 'Break the UI into small React components.' },
      { title: 'Manage the state', description: 'Decide what lives in state vs props.' },
      { title: 'Connect the pieces', description: 'Wire component communication and events.' },
      { title: 'Test the flow', description: 'Click through every path a user could take.' },
    ],
  },
  {
    range: [31, 40],
    name: 'APIs & State Management',
    difficulty: 'Intermediate',
    steps: [
      { title: 'Design the data flow', description: 'Decide what state lives where.' },
      { title: 'Connect to the data source', description: 'Fetch and shape the data you need.' },
      { title: 'Manage shared state', description: 'Lift state up or use context where it helps.' },
      { title: 'Handle real-world conditions', description: 'Loading, errors, and empty results.' },
    ],
  },
  {
    range: [41, 50],
    name: 'Advanced Frontend & Backend Fundamentals',
    difficulty: 'Advanced',
    steps: [
      { title: 'Set up the foundation', description: 'Scaffold the component, route, or server.' },
      { title: 'Build the core feature', description: 'Implement the main functionality.' },
      { title: 'Connect the pieces', description: 'Wire the frontend, backend, or performance fix together.' },
      { title: 'Verify it end-to-end', description: 'Test the full path, not just the happy one.' },
    ],
  },
  {
    range: [51, 60],
    name: 'Databases, Auth, AI & Deployment',
    difficulty: 'Advanced',
    steps: [
      { title: 'Design the approach', description: 'Plan the data model or integration.' },
      { title: 'Build the core piece', description: 'Implement the main functionality.' },
      { title: 'Secure and validate', description: 'Handle edge cases, validation, or auth checks.' },
      { title: 'Ship it', description: 'Deploy or document it like a real project.' },
    ],
  },
];

function eraForDay(day) {
  return ERAS.find((e) => day >= e.range[0] && day <= e.range[1]) ?? ERAS[ERAS.length - 1];
}

// XP climbs in small steps every 5 days — a gentle, believable curve rather
// than a hardcoded number per day.
function xpForDay(day) {
  return 70 + Math.floor((day - 1) / 5) * 15;
}

function buildGeneratedDay(day, { title, skillTags, brief, requirements }) {
  const era = eraForDay(day);
  return {
    day,
    title,
    track: TRACK,
    difficulty: era.difficulty,
    xp: xpForDay(day),
    skillTags,
    brief,
    objective: brief,
    requirements,
    steps: era.steps,
    proofHint: 'Push it to GitHub, then post the result on LinkedIn — that\u2019s your proof.',
  };
}

// ---- Hand-authored showcase days ----
const SHOWCASE_DAYS = {
  1: {
    day: 1,
    title: 'Your First Landing Page',
    track: TRACK,
    difficulty: 'Beginner',
    xp: 70,
    skillTags: ['HTML', 'CSS'],
    brief: 'Build a simple personal landing page using nothing but HTML and CSS — no frameworks, no JavaScript yet.',
    objective:
      'Build a one-page HTML/CSS site introducing yourself: a headline, a short bio, and a way to get in touch.',
    requirements: [
      'Semantic HTML structure (header, main, footer)',
      'A headline and short bio section',
      'At least one styled call-to-action (e.g. a contact link)',
      'Looks intentional, not default-browser-styled',
    ],
    steps: eraForDay(1).steps,
    proofHint: 'Push it to GitHub, then post a screenshot on LinkedIn — Day 1 of the journey.',
  },
  2: {
    day: 2,
    title: 'Click Counter & Color Shuffler',
    track: TRACK,
    difficulty: 'Beginner',
    xp: 70,
    skillTags: ['JavaScript', 'DOM'],
    brief: 'Build a small interactive JavaScript project — a click counter that also shuffles the background color.',
    objective:
      'Add real interactivity with vanilla JavaScript: a counter that increments on click and randomizes a color on demand.',
    requirements: [
      'A counter that increments on button click',
      'A second button that changes the background to a random color',
      'A reset button that returns both to their starting state',
      'No page reload for any interaction',
    ],
    steps: eraForDay(2).steps,
    proofHint: 'GitHub repo link + a short demo clip works great for LinkedIn.',
  },
  3: {
    day: 3,
    title: 'DOM To-Do List',
    track: TRACK,
    difficulty: 'Beginner',
    xp: 70,
    skillTags: ['JavaScript', 'DOM'],
    brief: 'Build a working to-do list using direct DOM manipulation — no framework, just JavaScript.',
    objective:
      'Build a to-do list where users can add, complete, and remove tasks, manipulating the DOM directly.',
    requirements: [
      'Add a new task from an input field',
      'Mark a task complete (visually distinct, e.g. strikethrough)',
      'Remove a task from the list',
      'Handle the empty-list state gracefully',
    ],
    steps: eraForDay(3).steps,
    proofHint: 'Push to GitHub, then post the live demo + a one-line lesson learned on LinkedIn.',
  },
  12: {
    day: 12,
    title: 'Weather Intelligence',
    track: TRACK,
    difficulty: 'Medium',
    xp: 100,
    skillTags: ['React', 'JavaScript', 'APIs', 'Async/Await', 'Responsive UI'],
    brief: 'Build a weather application that retrieves and displays live weather information.',
    objective:
      'Build a responsive weather application where users can search locations and view weather information using an API.',
    requirements: [
      'Search weather by city',
      'Fetch weather data',
      'Display temperature',
      'Display weather conditions',
      'Handle API responses',
      'Create responsive UI',
    ],
    steps: [
      { title: 'Create project structure', description: 'Scaffold the components you\u2019ll need: search bar, weather card, layout shell.' },
      { title: 'Design weather interface', description: 'Lay out how city, temperature, and conditions will be displayed.' },
      { title: 'Connect weather API', description: 'Wire up a fetch call to a public weather API using async/await.' },
      { title: 'Handle loading and errors', description: 'Cover the slow-network state and the "city not found" state — not just the happy path.' },
    ],
    proofHint: 'Push to GitHub, then post the live demo + a one-line lesson learned on LinkedIn.',
  },
  20: {
    day: 20,
    title: 'Componentize a Messy Page',
    track: TRACK,
    difficulty: 'Intermediate',
    xp: 160,
    skillTags: ['React', 'Component Design'],
    brief: 'Take a 300-line single-file page and refactor it into composable, reusable components without changing behavior.',
    objective:
      'Refactor a large single-file page into composable, reusable components without changing its behavior.',
    requirements: [
      'Identify repeated UI patterns',
      'Extract at least 4 reusable components',
      'Keep props minimal and purposeful',
      'Confirm behavior is unchanged after the refactor',
    ],
    steps: [
      { title: 'Audit the page', description: 'Read through the 300-line file and mark repeated patterns.' },
      { title: 'Extract components', description: 'Pull out at least 4 reusable pieces with clear prop contracts.' },
      { title: 'Wire it back together', description: 'Reassemble the page from your new components.' },
      { title: 'Verify behavior', description: 'Click through the page to confirm nothing broke in the refactor.' },
    ],
    proofHint: 'Share a before/after diff — recruiters notice refactors, not just features.',
  },
  30: {
    day: 30,
    title: 'Halfway Boss: Build a Multi-Step Form',
    track: TRACK,
    difficulty: 'Intermediate',
    xp: 220,
    skillTags: ['React', 'Forms', 'Validation'],
    brief: 'Ship a 3-step signup flow with validation, progress indication, and back/forward navigation that preserves input.',
    objective:
      'Build a 3-step signup flow with per-step validation and navigation that never loses user input.',
    requirements: [
      'Validate each step before advancing',
      'Preserve state when navigating back',
      'Show clear progress through the flow',
      'Prevent submission until all steps are valid',
    ],
    steps: [
      { title: 'Design the 3 steps', description: 'Decide what each step of the signup flow collects.' },
      { title: 'Build step navigation', description: 'Wire next/back controls that preserve form state.' },
      { title: 'Add validation', description: 'Block advancing until the current step is valid.' },
      { title: 'Add progress indication', description: 'Show the user where they are in the flow.' },
    ],
    proofHint: 'This is a portfolio-grade project — write a short LinkedIn post on your design decisions.',
  },
  45: {
    day: 45,
    title: 'Optimize for Real Users',
    track: TRACK,
    difficulty: 'Advanced',
    xp: 240,
    skillTags: ['Performance', 'React'],
    brief: 'Profile an existing component tree and cut unnecessary re-renders using memoization where it actually matters.',
    objective:
      'Profile a component tree and eliminate unnecessary re-renders using memoization deliberately, not everywhere.',
    requirements: [
      'Identify re-render culprits with React DevTools',
      'Apply memo/useMemo/useCallback deliberately',
      'Document the measurable before/after',
      'Avoid memoizing things that don\u2019t need it',
    ],
    steps: [
      { title: 'Profile the tree', description: 'Use React DevTools to find components re-rendering unnecessarily.' },
      { title: 'Diagnose the cause', description: 'Trace each unnecessary render back to its trigger.' },
      { title: 'Apply targeted fixes', description: 'Use memo/useMemo/useCallback only where it measurably helps.' },
      { title: 'Document the results', description: 'Record a before/after render count as proof.' },
    ],
    proofHint: 'Numbers make great proof — include a before/after render count.',
  },
  60: {
    day: 60,
    title: 'Final Mission: Ship Your Capstone',
    track: TRACK,
    difficulty: 'Advanced',
    xp: 400,
    skillTags: ['React', 'Deployment', 'Portfolio'],
    brief: 'Assemble everything from the last 59 days into one deployed, portfolio-ready project.',
    objective:
      'Assemble a deployed, portfolio-ready capstone project that reflects everything from the last 59 days.',
    requirements: [
      'Deploy a complete, working application',
      'Write a README a recruiter would actually read',
      'Publish a launch post on LinkedIn tagging your journey',
      'Link back to at least 3 earlier missions that fed into it',
    ],
    steps: [
      { title: 'Scope the capstone', description: 'Decide which pieces of the last 59 days it will bring together.' },
      { title: 'Build and deploy', description: 'Finish the build and ship it to a live URL.' },
      { title: 'Write the README', description: 'Document it the way you\u2019d want a recruiter to read it.' },
      { title: 'Publish your launch post', description: 'Share it on LinkedIn, tagging your 60-day journey.' },
    ],
    proofHint: 'This is the one you lead your portfolio with.',
  },
};

// ---- Generated days: compact topic entries, filled out by buildGeneratedDay ----
const GENERATED_TOPICS = {
  4: { title: 'Responsive Pricing Cards', skillTags: ['CSS', 'Responsive Design'], brief: 'Build a 3-tier pricing card layout that reflows cleanly from mobile to desktop.', requirements: ['Use CSS Grid or Flexbox for layout', 'Reflow correctly across at least 3 breakpoints', 'Highlight one plan as "recommended"'] },
  5: { title: 'Text Utility Toolkit', skillTags: ['JavaScript'], brief: 'Build a small toolkit that counts words/characters and converts text case — no libraries.', requirements: ['Live word and character count', 'Uppercase / lowercase / title-case conversion', 'A clear button that resets everything'] },
  6: { title: 'Image Gallery with Lightbox', skillTags: ['JavaScript', 'DOM'], brief: 'Build a click-to-expand image gallery using vanilla DOM manipulation.', requirements: ['Grid of thumbnails', 'Click opens a larger lightbox view', 'Close via button, backdrop, or Escape key'] },
  7: { title: 'Quiz App', skillTags: ['JavaScript', 'DOM'], brief: 'Build a multiple-choice quiz that tracks score and shows a results screen.', requirements: ['At least 5 questions', 'Score tracked across questions', 'Results screen with a retry option'] },
  8: { title: 'Expense Tracker', skillTags: ['JavaScript', 'localStorage'], brief: 'Build a simple expense tracker that adds, removes, and totals entries, persisted locally.', requirements: ['Add and remove expense entries', 'Running total updates live', 'Entries persist across reloads'] },
  9: { title: 'Weather Icon Widget (Mock Data)', skillTags: ['JavaScript', 'CSS'], brief: 'Build a small weather-style widget using mock data and animated icon states — no API yet.', requirements: ['Render temperature and condition from mock data', 'Swap icon based on condition', 'Smooth transition between states'] },
  10: { title: 'Personal Dashboard Layout', skillTags: ['HTML', 'CSS', 'JavaScript'], brief: 'Build a static personal dashboard layout with cards, ready to hold dynamic data later.', requirements: ['At least 4 distinct dashboard cards', 'Responsive grid layout', 'One interactive element (tab, toggle, or accordion)'] },

  11: { title: 'Notes App with Search', skillTags: ['JavaScript', 'DOM'], brief: 'Build a notes app where users can add, delete, and search notes instantly.', requirements: ['Add and delete notes', 'Live search filters the list', 'Empty state when no notes exist'] },
  13: { title: 'Drag-and-Drop Task Board', skillTags: ['JavaScript', 'DOM'], brief: 'Build a Trello-style board where cards can be dragged between columns.', requirements: ['At least 3 columns', 'Cards draggable between columns', 'State reflects the current column of each card'] },
  14: { title: 'React Component Library (Mini)', skillTags: ['React', 'Component Design'], brief: 'Build a tiny library of 3 reusable React components (button, card, badge) with variants.', requirements: ['3 components with at least 2 variants each', 'Props-driven styling, no hardcoded duplicates', 'A demo page showing every variant'] },
  15: { title: 'React To-Do App', skillTags: ['React', 'useState'], brief: 'Rebuild your earlier to-do list as a proper React app with add, complete, and delete.', requirements: ['Add, complete, and delete todos', 'Completed items visually distinct', 'Empty state when the list is cleared'] },
  16: { title: 'Responsive Navbar', skillTags: ['React', 'Responsive UI'], brief: 'Build a React navbar that collapses into a mobile menu below a breakpoint.', requirements: ['Desktop nav shows inline links', 'Mobile nav collapses into a toggleable menu', 'Menu closes on link click'] },
  17: { title: 'Filterable Product Grid', skillTags: ['React', 'useState'], brief: 'Build a product grid that filters by category and sorts by price.', requirements: ['Filter by at least 2 categories', 'Sort ascending/descending by price', 'Grid updates without a flicker'] },
  18: { title: 'Modal & Toast System', skillTags: ['React', 'Component Design'], brief: 'Build a reusable modal and toast notification system driven by simple state.', requirements: ['Modal opens/closes via state', 'Toast auto-dismisses after a few seconds', 'Both are reusable across multiple triggers'] },
  19: { title: 'Multi-Tab Interface', skillTags: ['React', 'useState'], brief: 'Build a tabbed interface that swaps content panels without losing scroll position.', requirements: ['At least 3 tabs', 'Active tab is visually distinct', 'Content swaps without a full page reload'] },

  21: { title: 'Controlled Form with Live Validation', skillTags: ['React', 'Forms', 'Validation'], brief: 'Build a signup form with live field validation and clear error messaging.', requirements: ['Validate on blur and on submit', 'Inline error messages per field', 'Submit disabled until the form is valid'] },
  22: { title: 'Shopping Cart State', skillTags: ['React', 'State Management'], brief: 'Build a shopping cart that tracks items, quantities, and a running total in state.', requirements: ['Add/remove items and adjust quantity', 'Running total updates live', 'Cart persists while navigating between views'] },
  23: { title: 'Custom Hook: useLocalStorage', skillTags: ['React', 'Custom Hooks'], brief: 'Extract a reusable useLocalStorage hook and use it in two different components.', requirements: ['Hook reads/writes to localStorage', 'Used in at least 2 components', 'Handles the missing-key case gracefully'] },
  24: { title: 'Theme Toggle (Dark/Light)', skillTags: ['React', 'Context'], brief: 'Build a dark/light theme toggle using React Context so any component can read it.', requirements: ['Theme stored in Context', 'Toggle updates every themed component', 'Preference persists across reloads'] },
  25: { title: 'Paginated Data Table', skillTags: ['React', 'State Management'], brief: 'Build a data table with client-side pagination and column sorting.', requirements: ['At least 10 rows across 2+ pages', 'Sort by clicking a column header', 'Page controls disable at the first/last page'] },
  26: { title: 'Debounced Search Input', skillTags: ['React', 'useEffect'], brief: 'Build a search input that debounces calls so it doesn\u2019t fire on every keystroke.', requirements: ['Input debounced by roughly 300\u2013500ms', 'Loading state while "searching"', 'Results update without flicker'] },
  27: { title: 'Multi-Step Wizard', skillTags: ['React', 'Forms'], brief: 'Build a 3-step wizard with next/back navigation and per-step validation.', requirements: ['3 distinct steps with progress indication', 'Back preserves previously entered data', 'Submit only enabled on the final valid step'] },
  28: { title: 'Reusable Accordion Component', skillTags: ['React', 'Component Design'], brief: 'Build an accordion component that supports single- or multi-open modes via props.', requirements: ['Expand/collapse sections smoothly', 'Support both single-open and multi-open modes', 'Fully driven by props, no hardcoded content'] },
  29: { title: 'Undo/Redo State Stack', skillTags: ['React', 'State Management'], brief: 'Build a simple text or list editor with working undo/redo using a state history stack.', requirements: ['Undo reverts the last change', 'Redo re-applies an undone change', 'History clears appropriately on a new edit'] },

  31: { title: 'GitHub Profile Lookup', skillTags: ['APIs', 'Async/Await'], brief: 'Build a tool that fetches and displays any GitHub user\u2019s public profile data.', requirements: ['Search by GitHub username', 'Display avatar, bio, and repo count', 'Handle the "user not found" case'] },
  32: { title: 'Movie Search App', skillTags: ['APIs', 'React'], brief: 'Build a movie search app using a public movie API with poster images and details.', requirements: ['Search returns matching movies', 'Click a result to see more detail', 'Handle empty search results gracefully'] },
  33: { title: 'Currency Converter (Live Rates)', skillTags: ['APIs', 'Async/Await'], brief: 'Build a currency converter that pulls live exchange rates from a public API.', requirements: ['Convert between at least 3 currencies', 'Rates fetched live, not hardcoded', 'Handle a failed API request visibly'] },
  34: { title: 'Global State with Context + Reducer', skillTags: ['React', 'State Management'], brief: 'Refactor a multi-component feature to share state via useReducer + Context instead of prop drilling.', requirements: ['Actions dispatched through a reducer', 'State shared across 3+ components', 'No prop drilling more than one level deep'] },
  35: { title: 'Infinite Scroll Feed', skillTags: ['React', 'APIs'], brief: 'Build a feed that loads more items automatically as the user scrolls near the bottom.', requirements: ['Initial page of items loads on mount', 'More items load automatically near the bottom', 'Loading indicator while fetching more'] },
  36: { title: 'Recipe Finder with Filters', skillTags: ['APIs', 'State Management'], brief: 'Build a recipe search tool with ingredient-based filtering against a public API.', requirements: ['Search by ingredient or keyword', 'Filter results by at least one category', 'Loading and empty states handled'] },
  37: { title: 'Mini Form-State Library', skillTags: ['React', 'Forms'], brief: 'Build a tiny reusable form-state hook that handles values, errors, and touched fields.', requirements: ['Single hook manages values/errors/touched', 'Used across at least 2 different forms', 'No duplicated validation logic between forms'] },
  38: { title: 'Optimistic UI Updates', skillTags: ['React', 'State Management'], brief: 'Build a like/upvote button that updates instantly and reconciles if a mock request fails.', requirements: ['UI updates immediately on click', 'Mock failure reverts the optimistic update', 'User gets clear feedback on failure'] },
  39: { title: 'News Aggregator', skillTags: ['APIs', 'React'], brief: 'Build a news reader that pulls headlines from a public API, grouped by category.', requirements: ['Headlines grouped into at least 3 categories', 'Click through to the source article', 'Handle a slow or failed fetch'] },
  40: { title: 'State Machine for a Multi-Stage Process', skillTags: ['React', 'State Management'], brief: 'Model a multi-stage process (like an order status) as an explicit state machine instead of scattered booleans.', requirements: ['States are explicit and named, not boolean flags', 'Invalid transitions are impossible by design', 'UI reflects the current state clearly'] },

  41: { title: 'Virtualized Long List', skillTags: ['React', 'Performance'], brief: 'Render a list of thousands of items smoothly by only rendering what\u2019s visible.', requirements: ['Only visible rows are rendered to the DOM', 'Scrolling stays smooth with 1000+ items', 'No visual jump when scrolling fast'] },
  42: { title: 'Code-Split Route Bundles', skillTags: ['React', 'Performance'], brief: 'Split your app\u2019s routes into separate bundles that load on demand.', requirements: ['At least 2 routes lazy-loaded', 'Loading fallback shown during the fetch', 'Initial bundle size measurably smaller'] },
  43: { title: 'Accessible Component Audit', skillTags: ['Accessibility', 'React'], brief: 'Audit and fix an existing component for keyboard navigation and screen-reader support.', requirements: ['Fully operable via keyboard alone', 'Proper ARIA labels where needed', 'Visible focus states on every interactive element'] },
  44: { title: 'Error Boundary & Fallback UI', skillTags: ['React', 'Error Handling'], brief: 'Wrap a feature in an error boundary with a graceful fallback instead of a blank crash.', requirements: ['Error boundary catches a thrown error', 'Fallback UI is clear, not a blank screen', 'A "try again" action recovers if possible'] },
  46: { title: 'Your First REST API', skillTags: ['Node.js', 'Express', 'REST'], brief: 'Build a small REST API with endpoints to create, read, and delete a resource.', requirements: ['GET, POST, and DELETE endpoints working', 'Data persists for the life of the server process', 'Sensible status codes on success and error'] },
  47: { title: 'API Input Validation', skillTags: ['Node.js', 'Validation'], brief: 'Add server-side validation to your API so bad requests are rejected clearly.', requirements: ['Required fields are validated server-side', 'Invalid requests return a clear error message', 'Valid requests still pass through unaffected'] },
  48: { title: 'Connect Frontend to Your Own API', skillTags: ['React', 'APIs'], brief: 'Wire your Day 46 API up to a real React frontend instead of a public API.', requirements: ['Frontend fetches from your own local API', 'Create and delete actions reflected in the UI', 'Loading/error states handled'] },
  49: { title: 'Rate-Limited Endpoint', skillTags: ['Node.js', 'Backend'], brief: 'Add basic rate limiting to one API endpoint to prevent abuse.', requirements: ['Requests over the limit are rejected', 'Limit resets after a defined window', 'Legitimate traffic under the limit is unaffected'] },
  50: { title: 'API Documentation Page', skillTags: ['Documentation', 'Backend'], brief: 'Write a clear docs page for the API you\u2019ve been building — the kind another dev could actually use.', requirements: ['Every endpoint documented with method and params', 'At least one example request/response shown', 'Written for someone who\u2019s never seen your code'] },

  51: { title: 'Persist Data to a Real Database', skillTags: ['Databases'], brief: 'Swap your in-memory API storage for a real lightweight database.', requirements: ['Data survives a server restart', 'At least one collection/table modeled sensibly', 'Create and read both go through the database'] },
  52: { title: 'Database Query Practice', skillTags: ['Databases'], brief: 'Practice filtering, sorting, and relating data with real queries against your database.', requirements: ['At least 3 distinct queries written', 'One filters, one sorts, one relates data', 'Queries return correct results on real data'] },
  53: { title: 'Auth Concepts: Hashing & Sessions', skillTags: ['Auth Concepts'], brief: 'Implement mock login logic that hashes passwords and tracks a session — no real user accounts required.', requirements: ['Passwords are never stored in plain text', 'A session/token is issued on "login"', 'A protected route rejects an unauthenticated request'] },
  54: { title: 'Protected Routes (Frontend)', skillTags: ['React', 'Auth Concepts'], brief: 'Build frontend route protection that redirects unauthenticated users away from a protected page.', requirements: ['Unauthenticated users are redirected', 'Authenticated users see the protected content', 'Auth state persists across a refresh'] },
  55: { title: 'Role-Based UI', skillTags: ['Auth Concepts', 'React'], brief: 'Show or hide UI elements based on a mock user role (e.g. admin vs member).', requirements: ['At least 2 distinct roles supported', 'UI elements conditionally rendered by role', 'No role check duplicated across many components'] },
  56: { title: 'AI-Powered Text Summarizer (Mock)', skillTags: ['AI Integration'], brief: 'Build a UI that sends text to a mock AI summarization endpoint and displays the result.', requirements: ['User can submit a block of text', 'Loading state while "processing"', 'Summary displayed clearly once returned'] },
  57: { title: 'Prompt-Driven UI', skillTags: ['AI Integration', 'React'], brief: 'Build a small tool where a user\u2019s prompt drives what\u2019s rendered — a mock AI-assisted UI.', requirements: ['User input meaningfully changes the output', 'Handles an empty or malformed prompt gracefully', 'Clear loading/response states'] },
  58: { title: 'Deploy Your Frontend', skillTags: ['Deployment'], brief: 'Deploy a completed project to a live URL and confirm it works outside your local machine.', requirements: ['Project builds cleanly for production', 'Live URL is publicly reachable', 'Environment-specific config, if any, works in production'] },
  59: { title: 'Portfolio Site: Structure & Content', skillTags: ['Portfolio', 'HTML', 'CSS'], brief: 'Build the structure and content of your developer portfolio site featuring your best missions.', requirements: ['At least 3 projects featured with links', 'Clear intro/about section', 'Contact or social links included'] },
};

const challengeByDay = new Map();
for (let day = 1; day <= 60; day += 1) {
  const showcase = SHOWCASE_DAYS[day];
  if (showcase) {
    challengeByDay.set(day, showcase);
  } else {
    challengeByDay.set(day, buildGeneratedDay(day, GENERATED_TOPICS[day]));
  }
}

export const challenges = Array.from(challengeByDay.values());

export function getChallengeByDay(day) {
  return challengeByDay.get(Number(day)) ?? null;
}

export const TOTAL_DAYS = 60;
