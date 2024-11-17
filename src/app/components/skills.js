import Image from "next/image";

const skillsData = [
  { name: "HTML5", icon: "/images/html-5-svgrepo-com.png" },
  { name: "JavaScript", icon: "/images/js-svgrepo-com.png" },
  { name: "CSS", icon: "/images/css-3-svgrepo-com.png" },
  { name: "Python", icon: "/images/python-svgrepo-com.png" },
  { name: "Go", icon: "/images/go-svgrepo-com.png" },
  { name: "React.js", icon: "/images/react-svgrepo-com.png" },
  { name: "Next.js", icon: "/images/next-dot-js-svgrepo-com.png" },
  { name: "Vue.js", icon: "/images/vue-svgrepo-com.png" },
  { name: "Node.js", icon: "/images/node-js-svgrepo-com.png" },
  { name: "Tailwind", icon: "/images/tailwind-svgrepo-com.png" },
  { name: "Bootstrap", icon: "/images/bootstrap-svgrepo-com.png" },
  { name: "MySQL", icon: "/images/mysql-logo-svgrepo-com.png" },
  { name: "MongoDB", icon: "/images/mongodb-svgrepo-com.png" },
  { name: "Github", icon: "/images/github-color-svgrepo-com.png" },
  { name: "Gitlab", icon: "/images/gitlab-svgrepo-com.png" },
  { name: "Docker", icon: "/images/docker-svgrepo-com.png" },
  { name: "Kubernetes", icon: "/images/kubernetes-svgrepo-com.png" },
  { name: "Figma", icon: "/images/figma-svgrepo-com.png" },
  { name: "Linux", icon: "/images/linux-svgrepo-com.png" },
];

const SkillCard = ({ name, icon }) => (
  <div className="group">
    <div className="rounded-3xl overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 p-6">
      <div className="flex justify-center">
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          <Image
            src={icon}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="mt-4 text-center">
        <span className="font-bold text-lg md:text-xl text-gray-200">
          {name}
        </span>
      </div>
    </div>
  </div>
);

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-right md:pr-8">
        Skills
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}