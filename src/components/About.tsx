import React from 'react';
import { Clock, Server, Database } from 'lucide-react';

interface ExperienceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Etomchukwu Bobby-Umeano
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 order-2 md:order-1">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate backend developer with expertise in building
              scalable and maintainable applications using NestJS and
              TypeScript. With a strong foundation in software architecture and
              design patterns, I create efficient, secure, and performant
              backend solutions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy watching movies, playing basketball
              or researching on the most random intruiging topics. I'm always
              eager to learn new interesting technologies and improve my craft.
            </p>
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <ExperienceItem
              icon={<Clock size={24} />}
              title="2 Years Experience"
              description="Building  backend applications and APIs"
            />

            <ExperienceItem
              icon={<Server size={24} />}
              title="API Design"
              description="Creating intuitive, efficient, and well-documented APIs"
            />
            <ExperienceItem
              icon={<Database size={24} />}
              title="Databases"
              description="Experience with SQL, NoSQL, and data modeling"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
