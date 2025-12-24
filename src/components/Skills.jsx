import React from 'react'

export default function Skill() {
  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'Vue', level: 'Intermediate' },
    { name: 'Responsive Design (RWD)', level: 'Advanced' },
    { name: 'Single Page Applications (SPA)', level: 'Advanced' },
  ]

  return (
    <section id="skills" className="w-full max-w-3xl mx-auto mt-12 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-heading font-semibold mb-6 text-center text-primary">Skills</h2>
      <div className="grid grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg text-center hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-primary">{skill.name}</h3>
            <p className="text-sm text-neutral">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
