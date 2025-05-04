import React, { useState } from 'react';
import { skills } from '../data/skills';
import { Skill as SkillType } from '../types';

interface SkillBarProps {
  skill: SkillType;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}/5</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${
            skill.category === 'backend' ? 'bg-blue-600 dark:bg-blue-500' :
            skill.category === 'database' ? 'bg-green-600 dark:bg-green-500' :
            skill.category === 'devops' ? 'bg-purple-600 dark:bg-purple-500' :
            'bg-orange-600 dark:bg-orange-500'
          }`}
          style={{ width: `${(skill.level / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
    { id: 'frontend', name: 'Frontend' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical toolkit for building scalable backend applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            {filteredSkills.slice(0, Math.ceil(filteredSkills.length / 2)).map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            {filteredSkills.slice(Math.ceil(filteredSkills.length / 2)).map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;