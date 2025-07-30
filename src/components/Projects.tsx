const projects = [
  {
    name: "Poc Server",
    link: "https://github.com/laplus-x/poc-server",
    desc: "在可控且低成本的環境下，快速驗證創新想法並評估技術可行性。即時錯誤回饋與範例程式庫，縮短團隊技術差距。",
    stack: ["TS", "Nest", "vite", "vitest", "MonoRepo", "Clean"],
    issues: [],
  },
  {
    name: "Poc Client",
    link: "https://github.com/laplus-x/poc-client",
    desc: "快速驗證創新想法並評估技術可行性。即時錯誤回饋與範例程式庫，縮短團隊技術差距。",
    stack: [
      "TS",
      "Rush",
      "React",
      "vite",
      "vitest",
      "Storybook",
      "MonoRepo",
      "Clean",
    ],
    issues: [],
  },
  {
    name: "2048",
    link: "https://github.com/laplus-x/2048-excalibur",
    desc: "展現快速學習與靈活應用新技術的能力，短時間完成從選型到交付的完整流程。",
    stack: ["TS", "Excalibur", "vite", "Playwright", "Monolith", "chatgpt"],
    issues: [],
  },
];

const Projects = () => (
  <section className="max-w-4xl mx-auto py-20 px-4" id="projects">
    <h2 className="text-3xl font-bold mb-6" style={{ color: "#a654fb" }}>
      專案
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl shadow hover:shadow-lg transition p-6 border"
          style={{ borderColor: "#a654fb", color: "#fbfefe" }}
        >
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: "#ea97ef" }}
          >
            {p.name}
          </h3>
          <p className="mb-2">{p.desc}</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            {p.issues.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <div className="text-xs font-mono" style={{ color: "#a654fb" }}>
            {p.stack.join(" / ")}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
