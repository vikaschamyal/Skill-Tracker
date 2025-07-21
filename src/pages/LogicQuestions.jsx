// src/components/LogicQuestions.jsx
import React, { useState } from "react";
import logicQuestions from "../data/logicQuestions"; // path to your external questions file

const LogicQuestions = () => {
  const [showExample, setShowExample] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          🚀 Frontend Logic Questions
        </h1>
        <p className="text-gray-600 mb-10 text-md max-w-2xl">
          Practice essential frontend logic patterns used in interviews and real-world apps.
          These examples include pagination, search, sorting, CRUD, forms, and more.
        </p>

        <div className="grid gap-6">
          {logicQuestions.map((q) => (
            <div
              key={q.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-md mr-2">
                    #{q.id}
                  </span>
                  {q.title}
                </h2>
                <button
                  onClick={() => setShowExample(showExample === q.id ? null : q.id)}
                  className="text-sm text-blue-500 underline hover:text-blue-600"
                >
                  {showExample === q.id ? "Hide Code & Output" : "Show Code & Output"}
                </button>
              </div>

              <p className="text-gray-600 text-sm mt-2">{q.description}</p>

              {showExample === q.id && (
                <div className="mt-4 bg-gray-100 rounded-lg p-4 text-sm font-mono whitespace-pre-wrap overflow-auto">
                  <div className="text-gray-800">{q.example}</div>
                  <p className="mt-4 text-green-700 font-semibold">
                    ✅ Output:
                  </p>
                  <p className="text-gray-700">{getExampleOutput(q.id)}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          Created by Vikas Chamyal • Project: <span className="font-semibold text-blue-600">Skill Tracker</span>
        </footer>
      </div>
    </div>
  );
};

// Output logic
function getExampleOutput(id) {
  switch (id) {
    case 1:
      return "[5 items per page displayed]";
    case 2:
      return "Filtered items based on title matching search input.";
    case 3:
      return "Sorted array by title alphabetically.";
    case 4:
      return "New item added with unique timestamp ID.";
    case 5:
      return "Item with specific ID removed from list.";
    case 6:
      return "Input value logged on form submit.";
    case 7:
      return "Rendered UI list from map().";
    case 8:
      return "[2, 4, 6] — filtered even numbers.";
    case 9:
      return "Input field updates state on typing.";
    case 10:
      return "Boolean toggled: true → false → true...";
    default:
      return "No output.";
  }
}

export default LogicQuestions;
