import {
  HiLightningBolt,
  HiLockClosed,
  HiChartBar,
  HiShieldCheck,
  HiRefresh,
  HiGlobe,
} from "react-icons/hi";

const features = [
  {
    icon: <HiLightningBolt className="h-10 w-10 text-yellow-500" />,
    title: "Lightning Fast",
    description:
      "Optimized performance ensures your application loads in milliseconds.",
  },
  {
    icon: <HiLockClosed className="h-10 w-10 text-blue-500" />,
    title: "Secure by Default",
    description:
      "Built-in security features protect your data and users at every level.",
  },
  {
    icon: <HiChartBar className="h-10 w-10 text-green-500" />,
    title: "Real-time Analytics",
    description:
      "Monitor usage patterns and performance with our comprehensive dashboard.",
  },
  {
    icon: <HiShieldCheck className="h-10 w-10 text-purple-500" />,
    title: "Privacy Focused",
    description:
      "Your data stays yours with our strict privacy-first approach.",
  },
  {
    icon: <HiRefresh className="h-10 w-10 text-red-500" />,
    title: "Continuous Updates",
    description:
      "Benefit from our regular feature additions and security patches.",
  },
  {
    icon: <HiGlobe className="h-10 w-10 text-indigo-500" />,
    title: "Global CDN",
    description:
      "Content delivered instantly from the edge node closest to your users.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Features</h1>
          <p className="text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Discover what makes our platform the preferred choice for developers
            worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
