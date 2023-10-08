import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

function GetInvolved() {
  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl font-semibold mb-4">getInvolved Events This Week:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.title} className="border rounded-lg shadow-md text-left p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <p className="text-gray-700 mt-2">Subtitle: {project.subtitle}</p>
            <p className="text-gray-700">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn More
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetInvolved;
