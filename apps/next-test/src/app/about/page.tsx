export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="max-w-3xl space-y-6">
        <p className="text-lg">
          We're a team of passionate developers and designers creating
          innovative solutions for the modern web.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            To deliver exceptional digital experiences that combine cutting-edge
            technology with intuitive design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Founded</h3>
            <p>2023</p>
          </div>
          <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>San Francisco, CA</p>
          </div>
        </div>
      </div>
    </main>
  );
}
