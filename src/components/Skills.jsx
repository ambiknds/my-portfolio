import React from 'react';

function SkillCard({ title, skills }) {
  return (
    <div className="shadow-md rounded-lg p-4 bg-white mb-4">
      <h3 className="text-xl font-bold py-1">{title}</h3>
      <ul className="list-disc pl-3">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'];
  const backendSkills = ['Node.js', 'Appwrite', 'Express.js', 'MySQL', 'MongoDB', 'JWT'];
  const systemAdminSkills = ['Linux', 'Networking', 'Monitoring', 'Remote Support', 'Backup and Recovery', 'Security'];

  return (
    <section className="text-center p-10 rounded-xl my-10">
      <h2 className="text-3xl py-1 m-5">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SkillCard title="Frontend Development" skills={frontendSkills} />
        <SkillCard title="Backend Development" skills={backendSkills} />
        <SkillCard title="System Administration" skills={systemAdminSkills} />
      </div>
    </section>
  );
}

export default Skills;