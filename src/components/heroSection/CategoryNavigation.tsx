const categories = [
  { name: "Dogs", icon: "🐕", color: "bg-yellow-200" },
  { name: "Cats", icon: "🐱", color: "bg-pink-200" },
  { name: "Small Pets", icon: "🐰", color: "bg-cyan-200" },
  { name: "Birds", icon: "🐦", color: "bg-yellow-200" },
  { name: "Vet Consultation", icon: "🩺", color: "bg-purple-200" },
  { name: "Blog", icon: "📄", color: "bg-blue-200" },
  { name: "Experience Centers", icon: "📍", color: "bg-pink-200" },
];

export function CategoryNavigation() {
  return (
    <div className="bg-secondary py-3 mt-1 rounded-lg">
      <div className="flex justify-between items-center gap-8 flex-wrap px-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          >
            <div
              className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-2`}
            >
              <span className="text-2xl">{category.icon}</span>
            </div>
            <span className="text-sm font-medium text-gray-700">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
