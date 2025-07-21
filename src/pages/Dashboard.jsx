// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaServer, FaDatabase, FaCloud, FaQuestionCircle, FaReact } from "react-icons/fa";

const roadmap = [
  {
    title: "Frontend Basics",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    icon: <FaCode className="text-blue-600 text-3xl" />,
    link: "/skills/frontend",
  },
  {
    title: "Advanced Frontend",
    skills: ["React.js", "Redux Toolkit", "Routing", "Tailwind CSS"],
    icon: <FaReact className="text-cyan-500 text-3xl" />,
    link: "/skills/advanced-frontend",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    icon: <FaServer className="text-purple-600 text-3xl" />,
    link: "/skills/backend",
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose", "SQL Basics"],
    icon: <FaDatabase className="text-green-600 text-3xl" />,
    link: "/skills/database",
  },
  {
    title: "DevOps & Deployment",
    skills: ["Git", "GitHub", "Vercel", "Render", "CI/CD"],
    icon: <FaCloud className="text-indigo-500 text-3xl" />,
    link: "/skills/devops",
  },
  {
    title: "Interview Prep",
    skills: ["DSA", "System Design", "Frontend MCQs", "HR Questions"],
    icon: <FaQuestionCircle className="text-red-500 text-3xl" />,
    link: "/interview-question-bank",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">🚀 Full Stack Developer Roadmap</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmap.map((section, index) => (
          <Link
            key={index}
            to={section.link}
            className="group block p-5 rounded-xl border bg-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              {section.icon}
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-3">
              {section.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
            <span className="inline-block mt-2 text-sm font-medium text-blue-600 group-hover:underline">
              Learn More →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
