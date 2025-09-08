import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");

  const projects = t("items", { returnObjects: true }) as any[];

  return (
    <section className="max-w-4xl mx-auto py-20 px-4" id="projects">
      <h2 className="text-3xl font-bold mb-6" style={{ color: "#8B7FAC" }}>
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <a
            key={p.name}
            href={`https://github.com/laplus-x/${p.key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl shadow hover:shadow-lg transition p-6 border"
            style={{ borderColor: "#8B7FAC", color: "#404040" }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#4d2754" }}
            >
              {p.name}
            </h3>
            <p className="mb-2">{p.desc}</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              {p.issues.map((i: any) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <div className="text-xs font-mono" style={{ color: "#8B7FAC" }}>
              {p.stack.join(" / ")}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
