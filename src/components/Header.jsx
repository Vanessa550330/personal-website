import avatar from '../assets/avatar.jpg'
export default function Header() {
  return (
    <header className="w-full flex flex-col items-center mt-8">
      <img
        src={avatar}
        alt="個人照片"
        className="rounded-full w-36 h-36 object-cover shadow-lg border-4 border-primary"
        style={{aspectRatio: 1}}
      />
      <h1 className="text-3xl font-bold mt-4 text-primary">王小明 Vanessa</h1>
      <p className="text-md text-gray-500 mt-2">前端工程師｜UI設計｜AI 教學</p>
    </header>
  )
}