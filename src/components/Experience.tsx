import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation("experience");

  const experiences = t("items", { returnObjects: true }) as any[];

  return (
    <section className="max-w-4xl mx-auto py-20 px-4" id="experience">
      <h2 className="text-3xl font-bold mb-6" style={{ color: "#a654fb" }}>
        {t("title")}
      </h2>
      <div className="space-y-8">
        {experiences.map((exp: any) => (
          <a
            key={exp.company + exp.period}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl shadow hover:shadow-lg transition p-6 border"
            style={{ borderColor: "#a654fb", color: "#fbfefe" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <div
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#ea97ef" }}
                >
                  {exp.company}
                </div>
                <div className="text-xs mb-2" style={{ color: "#a654fb" }}>
                  <span className="mr-2">團隊：{exp.team.name}</span>
                  <span className="mr-2">人數：{exp.team.members}</span>
                  <span className="mr-2">開發：{exp.team.method}</span>
                </div>
              </div>
              <div className="text-sm" style={{ color: "#fbfefe" }}>
                {exp.period}
              </div>
            </div>
            <div className="font-medium mb-2" style={{ color: "#a654fb" }}>
              {exp.title}
            </div>
            <div className="mb-2">{exp.summary}</div>
            <ul className="flex flex-wrap gap-2">
              {exp.highlights.map((h: string) => (
                <li
                  key={h}
                  className="bg-[#a654fb] text-[#fbfefe] px-3 py-1 mb-1 rounded-full text-sm font-medium border border-[#ea97ef]"
                >
                  {h}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
