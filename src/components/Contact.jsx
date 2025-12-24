import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-md mt-10 p-6 rounded-xl shadow bg-white flex flex-col items-center">
      <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Contact</h2>
      <p className="text-sm text-gray-600 mb-4">Feel free to reach out!</p>
      <a
        href="mailto:your.email@example.com"
        className="flex items-center text-primary hover:text-primary-dark font-medium"
      >
        <FaEnvelope className="mr-2" />
        your.email@example.com
      </a>
    </section>
  )
}

