import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, removeSkill, updateSkill, setSkills } from "../features/skillSlice";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "skillsData";

const SkillList = () => {
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("Beginner");

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editLevel, setEditLevel] = useState("Beginner");

  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  // ✅ Load from localStorage once on mount
  useEffect(() => {
    const storedSkills = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedSkills) {
      dispatch(setSkills(JSON.parse(storedSkills)));
    }
  }, [dispatch]);

  // ✅ Save to localStorage only when skills change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(skills));
  }, [skills]);

  const handleAdd = () => {
    if (!skillName) return;
    dispatch(addSkill({ id: uuidv4(), name: skillName, level: skillLevel }));
    setSkillName("");
    setSkillLevel("Beginner");
  };

  const startEdit = (skill) => {
    setEditId(skill.id);
    setEditName(skill.name);
    setEditLevel(skill.level);
  };

  const handleUpdate = () => {
    if (!editName) return;
    dispatch(updateSkill({ id: editId, name: editName, level: editLevel }));
    setEditId(null);
    setEditName("");
    setEditLevel("Beginner");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-2 items-center mb-4">
        <input
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Skill name"
          className="border p-2 rounded w-full"
        />
        <select
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          className="border p-2 rounded w-full sm:w-auto"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {skills.map((skill) =>
          editId === skill.id ? (
            <li key={skill.id} className="flex flex-col sm:flex-row items-center gap-2">
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <select
                value={editLevel}
                onChange={(e) => setEditLevel(e.target.value)}
                className="border p-2 rounded w-full sm:w-auto"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditId(null)}
                className="text-gray-600 px-3 py-1"
              >
                Cancel
              </button>
            </li>
          ) : (
            <li
              key={skill.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <strong>{skill.name}</strong> - <em>{skill.level}</em>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => startEdit(skill)}
                  className="text-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removeSkill(skill.id))}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SkillList;
