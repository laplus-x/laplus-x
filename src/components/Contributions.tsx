import { useTranslation } from "react-i18next";

const Contributions = () => {
  const { t } = useTranslation("contributions");

  const contributions = t("items", { returnObjects: true }) as any[];

  return (
    <section className="max-w-4xl mx-auto py-20 px-4" id="contributions">
      <h2 className="text-3xl font-bold mb-6" style={{ color: "#a654fb" }}>
        {t("title")}
      </h2>
      <div className="space-y-8">
        {contributions.map((con: any) => (
          <div
            key={con.title}
            className="block rounded-xl shadow hover:shadow-lg transition p-6 border"
            style={{ borderColor: "#a654fb", color: "#fbfefe" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <div
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#ea97ef" }}
                >
                  {con.title}
                </div>
                <div className="text-xs mb-2" style={{ color: "#a654fb" }}>
                  <span className="mr-2">
                    {t("contributions.company")}: {con.company}
                  </span>
                </div>
              </div>
              <div className="text-sm" style={{ color: "#fbfefe" }}>
                {con.status}
              </div>
            </div>
            <div className="mb-2">{con.desc}</div>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              {con.issues.map((issue: string) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <div className="text-xs font-mono" style={{ color: "#a654fb" }}>
              {con.stack.join(" / ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contributions;
