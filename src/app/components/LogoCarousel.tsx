import React from "react";

const technologies = [
  "/logos/html5.svg", // HTML5
  "/logos/javascript.svg", // JavaScript
  "/logos/typescript.svg", // TypeScript
  "/logos/java.svg", // Java
  "/logos/mysql.svg", // MySQL
  "/logos/mongodb.svg", // Mongo
  "/logos/vuejs.svg", // Vue.js
  "/logos/nodejs.svg", // Node.js
  "/logos/angular.svg", // Angular
  "/logos/spring-boot.svg", // Spring Boot
];

const LogoCarousel = () => {
  return (
    <div className="relative overflow-hidden mx-auto max-w-7xl">
      {/* Gradient background for fade effect */}
      <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-slate-50 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-slate-50 via-transparent to-transparent pointer-events-none"></div>

      {/* Carousel container */}
      <div className="flex animate-slide-infinite space-x-4">
        {technologies.concat(technologies).map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-[10%] lg:w-[14.2857%]">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-6 md:h-10 lg:h-15 xl:h-20 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
