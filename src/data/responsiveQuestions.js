const responsiveQuestions = [
    {
      title: 'What is Responsive Web Design?',
      description: 'Ensures websites adapt to any device using flexible layouts, media queries, and scalable images.',
      example: `@media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  }`
    },
    {
      title: 'What are Media Queries?',
      description: 'CSS rules that apply only when certain conditions (like screen width) are met.',
      example: `@media (max-width: 600px) {
    .menu { display: none; }
  }`
    },
    {
      title: 'What is Mobile-First Design?',
      description: 'Design for mobile first, then add enhancements for larger screens.',
      example: `/* Mobile styles */
  .button { padding: 8px; }
  
  @media (min-width: 768px) {
    .button { padding: 12px; }
  }`
    },
    {
      title: 'How to make images responsive?',
      description: 'Prevent overflow with `max-width: 100%` and `height: auto`.',
      example: `img {
    max-width: 100%;
    height: auto;
  }`
    },
    {
      title: 'Difference between px, em, rem, and %?',
      description: 'px: fixed size, em: parent font-size, rem: root font-size, %: container relative.',
      example: `h1 {
    font-size: 2rem;   /* 32px if root=16px */
    margin: 5%;        /* 5% of parent width */
  }`
    },
    {
      title: 'What is the viewport meta tag?',
      description: 'Tells browsers to match screen width and scale content properly.',
      example: `<meta name="viewport" content="width=device-width, initial-scale=1">`
    },
    {
      title: 'How to hide elements on mobile?',
      description: 'Use media queries with `display: none`.',
      example: `@media (max-width: 480px) {
    .desktop-only { display: none; }
  }`
    },
    {
      title: 'What are CSS Flexbox and Grid?',
      description: 'Layout systems that automatically adjust content arrangement.',
      example: `.container {
    display: flex;       /* OR */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }`
    },
    {
      title: 'How to make responsive typography?',
      description: 'Use viewport units (vw) or fluid typography with `clamp()`.',
      example: `h1 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }`
    },
    {
      title: 'What are breakpoints?',
      description: 'Screen widths where layout changes (common: 576px, 768px, 992px, 1200px).',
      example: `@media (min-width: 768px) and (max-width: 991px) {
    /* Tablet styles */
  }`
    },
    {
      title: 'How to handle touch targets?',
      description: 'Make buttons/links at least 48x48px for mobile usability.',
      example: `.button {
    min-width: 48px;
    min-height: 48px;
  }`
    },
    {
      title: 'What is a responsive navigation pattern?',
      description: 'Hamburger menu on mobile → full menu on desktop.',
      example: `/* Mobile */
  .menu { display: none; }
  .hamburger { display: block; }
  
  /* Desktop */
  @media (min-width: 992px) {
    .menu { display: flex; }
    .hamburger { display: none; }
  }`
    },
    {
      title: 'How to test responsiveness?',
      description: '1. Browser DevTools device mode 2. Real devices 3. Online tools like BrowserStack',
      example: `// Chrome DevTools shortcut:
  // Ctrl+Shift+M (Windows) or Cmd+Opt+M (Mac)`
    },
    {
      title: 'What are CSS relative units?',
      description: 'vw (view width), vh (view height), % - scale with screen size.',
      example: `.hero {
    height: 50vh;    /* 50% of screen height */
    width: 80vw;     /* 80% of screen width */
  }`
    },
    {
      title: 'How to prevent mobile zoom issues?',
      description: 'Disable unwanted zooming with touch-action and user-scalable.',
      example: `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">`
    }
  ];
  
  export default responsiveQuestions;