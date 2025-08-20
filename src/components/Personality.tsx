import { useTranslation } from "react-i18next";
const Personality = () => {
  const { t } = useTranslation("personality");

  const personality = t("items", { returnObjects: true }) as any[];

  return (
    <section className="max-w-4xl mx-auto py-20 px-4" id="personality">
      <h2 className="text-3xl font-bold mb-6" style={{ color: "#a654fb" }}>
        {t("title")}
      </h2>
      <div className="flex flex-col gap-8">
        {personality.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block rounded-xl shadow hover:shadow-lg transition p-6 border"
            style={{ borderColor: "#a654fb", color: "#fbfefe" }}
          >
            <div
              className="text-sm uppercase font-semibold"
              style={{ color: "#a654fb" }}
            >
              {p.category}
            </div>
            <div className="text-xl font-semibold" style={{ color: "#ea97ef" }}>
              {p.title}
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  {t("strengths")}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-white">
                  {p.strengths.map((s: any) => (
                    <li key={s.label}>
                      <span className="font-medium">{s.label}</span>
                      <br />
                      <span>{s.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">
                  {t("weaknesses")}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-white">
                  {p.weaknesses.map((w: any) => (
                    <li key={w.label}>
                      <span className="font-medium">{w.label}</span>
                      <br />
                      <span>{w.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Personality;
