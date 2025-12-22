import { useState } from 'react'
const skillList = [
  { name: '前端開發', color: 'bg-blue-400', desc: 'React, Vue, RWD, SPA' },
  { name: 'UI/UX 設計', color: 'bg-pink-400', desc: 'Figma, 色彩美學, 動效' },
  { name: 'AI 應用', color: 'bg-green-400', desc: 'ChatGPT API, 資料視覺化' }
]
export default function Skills() {
  const [active, setActive] = useState(0)
  return (
    <section className="w-full max-w-md mt-10 p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold mb-4 text-primary">擅長領域</h2>
      <div className="flex gap-3 mb-4">
        {skillList.map((skill, i) => (
          <button
            key={i}
            onClick={()=>setActive(i)}
            className={`px-4 py-2 font-bold rounded transition-colors duration-200
              ${i===active ? skill.color+' text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
            {skill.name}
          </button>
        ))}
      </div>
      <div className={`rounded-lg p-4 text-lg text-white transition-colors ${skillList[active].color}`}>
        {skillList[active].desc}
      </div>
    </section>
  )
}