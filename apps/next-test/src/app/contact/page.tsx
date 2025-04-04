"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData)}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen p-8 md:p-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 
                        px-4 py-2 bg-white dark:bg-slate-900"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 
                        px-4 py-2 bg-white dark:bg-slate-900"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 
                        px-4 py-2 bg-white dark:bg-slate-900"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
