const categories = [
  // Top row
  {
    name: "Dog food",
    image: "/kitten.png",
  },
  {
    name: "Cat food",
    image: "/kitten.png",
  },
  { name: "Treats", image: "/kitten.png" },
  {
    name: "Litter supplies",
    image: "/kitten.png",
  },
  {
    name: "Prescription diet",
    image: "/kitten.png",
  },
  {
    name: "Premium food",
    image: "/kitten.png",
  },
  {
    name: "Fresh food",
    image: "/kitten.png",
  },
  {
    name: "Supplements",
    image: "/kitten.png",
  },

  // Bottom row
  {
    name: "Monsoon",
    image: "/kitten.png",
  },
  { name: "Toys", image: "/kitten.png" },
  {
    name: "Fashion",
    image: "/kitten.png",
  },
  {
    name: "Grooming essentials",
    image: "/kitten.png",
  },
  {
    name: "Beds and mats",
    image: "/kitten.png",
  },
  {
    name: "Collars & leash",
    image: "/kitten.png",
  },
  {
    name: "Bowls and feeders",
    image: "/kitten.png",
  },
  {
    name: "Pet tracker",
    image: "/kitten.png",
  },
];

export function EverydayEssentials() {
  return (
    <div className="rounded-lg p-6 mx-auto max-w-4xl">
      {/* Header */}
      <div className="bg-mint-100 -mx-6 -mt-6 mb-6 py-4 rounded-t-lg">
        <h2 className="bg-secondary py-4 font-mono text-2xl font-bold text-center text-gray-800">
          Everyday essentials
        </h2>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-8 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="w-20 h-20 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mb-3 overflow-hidden">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-16 h-16 object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 text-center leading-tight">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
