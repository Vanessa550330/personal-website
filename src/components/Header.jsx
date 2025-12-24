import React from 'react'
import avatar from '../assets/avatar.jpg'

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center mt-8 text-center">
      {/* 頭像 + 名字 */}
      <img
        src={avatar}
        alt="個人照片"
        className="rounded-full w-36 h-36 object-cover shadow-lg border-4 border-primary"
        style={{ aspectRatio: 1 }}
      />
      <h1 className="text-3xl font-heading font-bold mt-4 text-primary">Vanessa</h1>
      <p className="text-md text-gray-500 mt-2">
        Senior PM Leader｜Scrum Master｜Self-Learner
      </p>
      <p className="text-gray-600 mt-4 max-w-md">
        I Build Custom Strategies That Improve Efficiency & Business Impact
      </p>

      {/* 導覽列 */}
      <nav className="mt-6 flex space-x-6 text-primary font-medium">
        <a href="#skills" className="hover:text-primary-dark">Skills</a>
        <a href="#achievements" className="hover:text-primary-dark">Achievements</a>
        <a href="#contact" className="hover:text-primary-dark">Contact</a>
      </nav>
    </header>
  )
}

