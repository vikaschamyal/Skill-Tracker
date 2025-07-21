import React from 'react';

const roadmap = [
  "1️⃣ Box Model",
  "2️⃣ Display & Positioning",
  "3️⃣ Flexbox & Grid",
  "4️⃣ Responsive Design",
  "5️⃣ Animation & Transitions"
];

const principles = [
  {
    title: "👁️ Visual Hierarchy",
    desc: "Use size, spacing, and color to guide the viewer’s attention to key elements."
  },
  {
    title: "🎯 Consistency",
    desc: "Keep spacing, font, and colors consistent across the project."
  },
  {
    title: "📐 Alignment",
    desc: "Elements should be aligned properly to improve clarity and structure."
  },
  {
    title: "🎨 Contrast",
    desc: "Use contrast (like dark text on light background) for better readability."
  }
];

const fundamentals = [
  {
    question: "🟦 What is the Box Model?",
    answer: "The Box Model consists of: content → padding → border → margin. It defines how elements take space."
  },
  {
    question: "🔲 Difference between inline, block, and inline-block?",
    answer: "Block: full width. Inline: fits content, no width/height. Inline-block: inline + width/height allowed."
  },
  {
    question: "⚡ What does z-index do?",
    answer: "Controls stacking order — higher z-index appears on top."
  },
  {
    question: "📱 What is Responsive Design?",
    answer: "Making sure the UI looks good on all screen sizes using media queries, flex, % widths, etc."
  }
];

const CSSGuide = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 text-blue-600 dark:text-yellow-400">🎯 CSS Styling Roadmap & Design Guide</h1>
        <p className="text-md text-gray-600 dark:text-gray-300">
          A quick roadmap to learn modern CSS with practical fundamentals for real-world UI building.
        </p>
      </div>

      {/* Roadmap */}
      <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">🛣️ Styling Roadmap</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {roadmap.map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded border-l-4 border-blue-500 dark:border-yellow-400"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Design Principles */}
      <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">🎨 Basic Design Principles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="border-l-4 border-green-500 dark:border-yellow-500 pl-4"
            >
              <h3 className="font-bold mb-1">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fundamental Q&A */}
      <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">📘 CSS Fundamentals – Q&A</h2>
        <div className="space-y-4">
          {fundamentals.map((f, idx) => (
            <div key={idx}>
              <p className="font-medium text-blue-700 dark:text-yellow-300">{f.question}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* NEW: Quick CSS Element Styling Box */}
      <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">📦 Element Styling Box – Quick Reference</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Visual Example Box */}
          <div className="bg-blue-100 dark:bg-gray-700 rounded-lg p-4 border border-blue-300 dark:border-gray-600">
            <div className="bg-white dark:bg-gray-900 p-4 rounded shadow text-center text-gray-800 dark:text-gray-100">
              <h3 className="text-lg font-bold">Card Title</h3>
              <p className="text-sm mt-2">This is a card with padding, margin, rounded corners, and responsive width.</p>
            </div>
          </div>

          {/* Code Explanation */}
          <div className="bg-gray-50 dark:bg-gray-900 text-sm rounded-lg p-4 overflow-auto">
            <pre className="text-gray-700 dark:text-gray-200">
{`<div class="p-4 m-4 max-w-sm bg-white rounded shadow">
  <h3 class="text-lg font-bold">Card Title</h3>
  <p class="text-sm mt-2">This is a card with padding, margin, etc.</p>
</div>`}
            </pre>
            <ul className="mt-4 list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li><code>p-4</code>: Padding inside</li>
              <li><code>m-4</code>: Margin outside</li>
              <li><code>max-w-sm</code>: Responsive width</li>
              <li><code>rounded</code>: Border radius</li>
              <li><code>shadow</code>: Drop shadow</li>
              <li><code>text-lg / text-sm</code>: Font sizes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSGuide;
