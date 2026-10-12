export const HELP_ITEMS = [
  {
    id: 'git',
    number: '01',
    title: 'What is Git?',
    eyebrow: 'VERSION CONTROL',
    color: 'violet',
    icon: '⌘',
    description:
      'Git keeps a history of your code. Create snapshots, explore earlier versions, and work on changes without losing the stable version.',
    detail: 'Think of it as a time machine for your project, stored right alongside your files.',
  },
  {
    id: 'github',
    number: '02',
    title: 'What is GitHub?',
    eyebrow: 'COLLABORATION',
    color: 'blue',
    icon: '◉',
    description:
      'GitHub hosts Git repositories online. Teams use it to review changes, discuss ideas, and keep a shared source of truth.',
    detail: 'Pull requests make every change visible and easy to review before it lands.',
  },
  {
    id: 'actions',
    number: '03',
    title: 'What is GitHub Actions?',
    eyebrow: 'AUTOMATION',
    color: 'orange',
    icon: '✳',
    description:
      'GitHub Actions runs automated jobs when repository events happen, such as a push or pull request.',
    detail: 'A workflow can install dependencies, test the app, build it, and save the result.',
  },
];

export const PIPELINE_STEPS = [
  { label: 'Checkout', command: 'actions/checkout@v6', icon: '⇩' },
  { label: 'Setup Node', command: 'node 18 · npm cache', icon: '⬡' },
  { label: 'Install', command: 'npm ci', icon: '↓' },
  { label: 'Test', command: 'npm test', icon: '✓' },
  { label: 'Build', command: 'npm run build', icon: '◈' },
  { label: 'Artifact', command: 'upload dist/', icon: '↑' },
];
