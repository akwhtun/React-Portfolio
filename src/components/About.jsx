import React from 'react';

const ProfileComponent = () => {
  return (
    <div id="about">
    <p className="line text-3xl text-light-gray text-opacity-90 font-ubuntu">About Me</p>
      <div className="grid grid-cols-1  gap-x-8 gap-y-9 xl:px-28 sm:px-10 px-4 py-10">
          <div className="bg-btn-color hover:to-btn-hover rounded-lg shadow-lg p-6 text-light-gray text-opacity-80">
            <h3 className="text-2xl font-semibold mb-4">Profile</h3>
            <p className="text-lg leading-relaxed">
              I began studying programming on Nov 9, 2018, and have continued since then. Specializing in both frontend and backend development, with a strong focus on website design and development.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Beyond coding, I'm committed to staying updated with the latest industry trends and continually honing my skills to produce innovative and impactful projects.
            </p>
          </div>
          <div className="bg-btn-color hover:to-btn-hover rounded-lg shadow-lg p-6 text-light-gray text-opacity-80">
            <h3 className="text-2xl font-semibold mb-4">Relevant Experience</h3>
            <p className="text-lg leading-relaxed mb-4">
              Web Developer - November 9, 2018 - Present
            </p>
            <p className="text-lg leading-relaxed">
              Throughout my journey, I've contributed to various projects, including e-commerce platforms, note-taking applications, and user authentication systems. My responsibilities encompass frontend and backend development, emphasizing website performance optimization, security enhancements, and responsive design implementation.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              I believe in the power of collaboration and continuously seek opportunities to learn and grow within a dynamic and innovative team environment.
            </p>
          </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
