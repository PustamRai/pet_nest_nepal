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
    <div className="bg-secondary rounded-2xl py-4 sm:py-6 mt-2">
      <div className="flex justify-evenly items-center gap-3 sm:gap-4 lg:gap-8 flex-wrap px-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform min-w-[60px] sm:min-w-[70px] lg:min-w-[80px]"
          >
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${category.color} rounded-full flex items-center justify-center mb-2`}
            >
              <span className="text-lg sm:text-xl lg:text-2xl">
                {category.icon}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
