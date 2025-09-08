import { useTranslation } from "react-i18next";

const skills = [
  {
    category: "Lang",
    items: ["Typescript / Javascript", "Go", "Java", "CSS / SCSS / SASS"],
  },
  {
    category: "Framework",
    items: [
      "Nest",
      "React",
      "Express / Koa",
      "SpringBoot",
      "Vue",
      "Gin",
      "Nuxt",
      "AngularJS",
    ],
  },
  {
    category: "Test",
    items: ["Vitest / Jest", "Storybook", "Testify", "JUnit"],
  },
  { category: "UI Kit", items: ["Antd", "Element", "Tailwind", "Bootstrap"] },
  {
    category: "DevOps",
    items: [
      "Git",
      "Docker",
      "Makefile / Taskfile",
      "Nginx",
      "Rancher",
      "k8s",
      "ELK",
      "Grafana",
      "Prometheus",
      "Opentelemetry",
    ],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Redis", "PostgreSQL", "Druid"],
  },
  { category: "PUB/SUB", items: ["RabbitMQ", "Kafka", "Redis"] },
];

const Skills = () => {
  const { t } = useTranslation("skills");

  return (
    <section className="max-w-4xl mx-auto py-20 px-4" id="skills">
      <h2 className="text-3xl font-bold mb-6" style={{ color: "#8B7FAC" }}>
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div key={group.category} className="rounded-xl p-4">
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: "#4d2754" }}
            >
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="bg-[#f4cbe8] text-[#8B7FAC] px-3 py-1 mb-1 rounded-full text-sm font-medium border border-[#8B7FAC]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
