import ach1 from '../assets/achievement1.jpg'
import { useState } from 'react'
export default function Achievements() {
  const [hover, setHover] = useState(false)
  return (
    <section className="w-full max-w-md mt-10 p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold mb-4 text-primary">個人成就</h2>
      <div
        className={`transition-transform duration-300 cursor-pointer relative`}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        style={{
          transform: hover ? 'scale(1.04)' : 'scale(1)'
        }}
      >
        <img src={ach1} alt="成就1"
          className="rounded-lg w-full object-cover aspect-video shadow"
        />
        <div className={`absolute inset-0 bg-primary/80 text-white flex flex-col justify-center items-center
          opacity-${hover ? '100' : '0'} transition-opacity duration-300`}>
          {hover && (
            <div>
              <h3 className="text-lg font-bold mb-2">2024 iT 邦幫忙金選獎</h3>
              <p className="text-md">用互動動畫提升AI教學效果，榮獲最高榮譽</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}