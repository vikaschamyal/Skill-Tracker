import React from 'react';
import SkillList from '../components/SkillList';

const SkillsPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Skills</h2>
      <SkillList />
    </div>
  );
};

export default SkillsPage;
