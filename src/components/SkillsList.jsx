import React from "react";

export default function Skills() {
  const skills = {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "jQuery",
      "Bootstrap",
      "Tailwind CSS",
    ],
    Backend: [
      "PHP",
      "Laravel",
      "Java (Servlets, JSP)",
      "Node.js",
      "Next.js",
    ],
    "Database / ORM": ["MySQL", "MongoDB", "Prisma ORM"],
  };

  return (
    <section
      id="skills"
      className="px-6 md:px-10 py-20 text-color bg-color w-full" // Removed max-w-screen-xl here
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold poppins-regular text-center mb-12">
        My Skills
      </h2>

      {/* NEW: Centering and Max Width Container for content */}
      <div className="max-w-4xl mx-auto"> 
        {/* Loop categories */}
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="mb-16">
            <p className="text-2xl poppins-regular font-bold text-center mb-6">
              {category}
            </p>

            {/* Enhanced Responsive Skill Cards */}
            {/* Start at 2 columns on extra-small, 3 on medium, 4 on large */}
            <div className="grid grid-cols-2 **md:grid-cols-3** **lg:grid-cols-4** gap-4 **sm:gap-6**">
              {items.map((skill, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 border border-gray-700 rounded-xl inter font-semibold text-center shadow-sm 
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/5 backdrop-blur-md text-sm sm:text-base" // Added text sizing and padding adjustment
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> {/* End of Centering Container */}
    </section>
  );
}