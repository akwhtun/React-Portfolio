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
      className="px-6 md:px-20 py-20 text-color bg-color w-full max-w-screen-xl mx-auto"
    >
      <h2 className="text-4xl font-extrabold poppins-regular text-center mb-12">
        My Skills
      </h2>

      {/* Loop categories */}
      {Object.entries(skills).map(([category, items], index) => (
        <div key={index} className="mb-16">
          <p className="text-2xl poppins-regular font-bold text-center mb-6">
            {category}
          </p>

          {/* Responsive Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((skill, i) => (
              <div
                key={i}
                className="p-5 border border-gray-700 rounded-xl inter font-semibold text-center shadow-sm 
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/5 backdrop-blur-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}