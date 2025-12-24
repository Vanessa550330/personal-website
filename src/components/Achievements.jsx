import React from 'react'

export default function Achievements() {
  const achievements = [
    {
      year: '2024',
      title: 'Deployed Personal Website',
      description: 'Successfully built and deployed a personal website using Cursor + Vibe Coding + GitHub Pages.',
    },
    {
      year: '2023',
      title: 'Project Management Certification',
      description: 'Earned PMP certification, demonstrating strong project leadership and agile methodology expertise.',
    },
    {
      year: '2022',
      title: 'Scrum Master Role',
      description: 'Led agile teams, improved sprint efficiency, and delivered projects on time.',
    },
  ]

  return (
    <section id="achievements" className="w-full max-w-3xl mx-auto mt-12 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-heading font-semibold mb-6 text-center text-primary">Achievements</h2>
      <div className="space-y-6">
        {achievements.map((item, index) => (
          <div key={index} className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-bold text-primary">{item.year} — {item.title}</h3>
            <p className="text-neutral">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

