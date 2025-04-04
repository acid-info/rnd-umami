import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    id: "1",
    title: "Getting Started with Next.js App Router",
    excerpt:
      "Learn how to build modern web applications with Next.js 15 and the new App Router architecture.",
    date: "May 15, 2024",
    author: "Alex Johnson",
    slug: "getting-started-with-nextjs",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt:
      "Discover advanced techniques to optimize your workflow and create stunning designs with Tailwind CSS.",
    date: "May 10, 2024",
    author: "Sarah Chen",
    slug: "mastering-tailwind-css",
  },
  {
    id: "3",
    title: "The Future of Web Development",
    excerpt:
      "Exploring upcoming technologies and trends that will shape the future of web development in 2025 and beyond.",
    date: "May 5, 2024",
    author: "Michael Rodriguez",
    slug: "future-of-web-development",
  },
  {
    id: "4",
    title: "Building Accessible Web Applications",
    excerpt:
      "A comprehensive guide to making your web applications accessible to all users, regardless of ability.",
    date: "April 28, 2024",
    author: "Jamie Taylor",
    slug: "building-accessible-web-applications",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Latest insights, tutorials and updates from our team.
          </p>
        </div>

        <div className="space-y-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border-b border-slate-200 dark:border-slate-700 pb-10"
            >
              <div className="aspect-w-16 aspect-h-9 relative mb-6 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900" />
              </div>

              <div>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
