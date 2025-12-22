export default function Contact() {
  return (
    <section className="w-full max-w-md mt-10 p-6 rounded-xl shadow bg-white flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-primary">聯絡資訊</h2>
      <div className="space-y-2">
        <div>
          <span className="font-bold">Email：</span>
          <a href="mailto:your.email@example.com" className="text-blue-600 underline hover:text-blue-800">
            your.email@example.com
          </a>
        </div>
        <div>
          <span className="font-bold">LinkedIn：</span>
          <a href="https://linkedin.com/in/your-id" className="text-sky-600 underline hover:text-sky-800" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/your-id
          </a>
        </div>
      </div>
    </section>
  )
}