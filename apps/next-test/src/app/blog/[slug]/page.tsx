import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
  {
    id: "1",
    title: "Getting Started with Next.js App Router",
    content: `
      <p>The App Router is Next.js's new paradigm for building applications. It's built on React Server Components and provides a new way to organize your application.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Server Components by default</li>
        <li>Simplified data fetching</li>
        <li>Layouts and nested routing</li>
        <li>Loading and error states</li>
        <li>Static and dynamic rendering</li>
      </ul>
      
      <h2>Folder Structure</h2>
      <p>The App Router uses a file-system based router where folders define routes. Special files handle UI for each route segment:</p>
      <ul>
        <li><code>page.tsx</code>: Makes a route publicly accessible</li>
        <li><code>layout.tsx</code>: Shared UI for a segment and its children</li>
        <li><code>loading.tsx</code>: Loading UI</li>
        <li><code>error.tsx</code>: Error UI</li>
        <li><code>not-found.tsx</code>: Not found UI</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The App Router represents a significant evolution in Next.js's architecture, offering developers more powerful tools for building modern web applications while maintaining simplicity and developer experience.</p>
    `,
    date: "May 15, 2024",
    author: "Alex Johnson",
    slug: "getting-started-with-nextjs",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    content: `
      <p>Tailwind CSS has revolutionized the way developers approach styling their web applications. Let's explore some advanced techniques.</p>
      
      <h2>Custom Utility Classes</h2>
      <p>While Tailwind provides an extensive set of utility classes, you can extend them with your own custom utilities.</p>
      
      <h2>Component Extraction</h2>
      <p>As your project grows, consider extracting commonly used patterns into reusable components.</p>
      
      <h2>Responsive Design</h2>
      <p>Tailwind's responsive modifiers (<code>sm:</code>, <code>md:</code>, <code>lg:</code>, etc.) make it easy to create responsive designs without leaving your HTML.</p>
      
      <h2>Dark Mode</h2>
      <p>Implementing dark mode is straightforward with Tailwind's dark mode utilities.</p>
    `,
    date: "May 10, 2024",
    author: "Sarah Chen",
    slug: "mastering-tailwind-css",
  },
  {
    id: "3",
    title: "The Future of Web Development",
    content: `
      <p>Web development continues to evolve at a rapid pace. Here's what we can expect in the coming years.</p>
      
      <h2>AI-Assisted Development</h2>
      <p>AI tools are becoming increasingly sophisticated at helping developers write, debug, and optimize code.</p>
      
      <h2>WebAssembly</h2>
      <p>WebAssembly is enabling high-performance applications in the browser that were previously impossible.</p>
      
      <h2>Edge Computing</h2>
      <p>Moving computation closer to users through edge functions and CDNs is becoming the new standard for performance-critical applications.</p>
      
      <h2>Web Components</h2>
      <p>The continued maturation of Web Components standards is leading to more interoperable and framework-agnostic code.</p>
    `,
    date: "May 5, 2024",
    author: "Michael Rodriguez",
    slug: "future-of-web-development",
  },
  {
    id: "4",
    title: "Building Accessible Web Applications",
    content: `
      <p>Accessibility should be a core consideration in web development, not an afterthought.</p>
      
      <h2>Semantic HTML</h2>
      <p>Using the right HTML elements for their intended purpose is the foundation of accessibility.</p>
      
      <h2>ARIA Attributes</h2>
      <p>ARIA helps bridge gaps in HTML semantics to create more accessible interactive elements.</p>
      
      <h2>Keyboard Navigation</h2>
      <p>Ensuring your application can be fully operated via keyboard is essential for many users.</p>
      
      <h2>Color Contrast</h2>
      <p>Sufficient color contrast ensures content is readable by people with various visual conditions.</p>
      
      <h2>Testing Tools</h2>
      <p>Automated tools can help identify accessibility issues, but manual testing is still necessary.</p>
    `,
    date: "April 28, 2024",
    author: "Jamie Taylor",
    slug: "building-accessible-web-applications",
  },
];

export default function BlogPost(props) {
  const { slug } = props.params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-8 hover:underline"
        >
          <svg
            className="w-4 h-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            transform="rotate(180)"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-slate-600 dark:text-slate-400">
              <time dateTime={post.date}>{post.date}</time>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
          </header>

          <div className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    </main>
  );
}
