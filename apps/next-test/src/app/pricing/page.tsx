export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "month",
      description: "Perfect for personal projects and small websites.",
      features: [
        "5 projects",
        "20GB storage",
        "Basic analytics",
        "Email support",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      description: "Designed for professional developers and growing teams.",
      features: [
        "Unlimited projects",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom domains",
        "API access",
      ],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description:
        "Tailored solutions for large organizations with complex needs.",
      features: [
        "Unlimited everything",
        "Dedicated server",
        "SLA guarantees",
        "24/7 phone support",
        "Custom integrations",
        "On-boarding assistance",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <main className="min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Choose the plan that best suits your needs. All plans include a
            14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                rounded-lg overflow-hidden border 
                ${
                  plan.featured
                    ? "border-blue-500 shadow-lg shadow-blue-100 dark:shadow-blue-900/20"
                    : "border-slate-200 dark:border-slate-700"
                }
              `}
            >
              <div
                className={`p-6 ${
                  plan.featured
                    ? "bg-blue-500 text-white"
                    : "bg-slate-50 dark:bg-slate-800"
                }`}
              >
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-1 text-xl">/{plan.period}</span>
                  )}
                </div>
                <p className="mt-4 text-sm">{plan.description}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 shrink-0 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`
                    w-full mt-8 py-3 px-4 rounded-md font-medium
                    ${
                      plan.featured
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
                    }
                  `}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
