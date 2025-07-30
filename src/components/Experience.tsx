const experiences = [
  {
    company: "cj information",
    link: "https://www.chanjui.com/",
    title: "Software Engineer - Full Stack",
    period: "Mar 2023 - Mar 2025",
    team: {
      name: "RD",
      members: "1~2",
      method: "文件優先、瀑布式開發",
    },
    desc: "交通票務平台，整合交通工具 QR 票券，讓旅客能一站式完成搜尋與預訂。",
    highlights: [
      "智慧停車柱參數網站：用戶權限驗證、設備參數管理、匯出功能",
      "設備報修網站：權限驗證、案件申報、進度追蹤、SLA 監控、報表",
      "設備監控網站：事件紀錄、統計報表",
      "開發文件生成及管理：自動產生 API/ER 文件、readme-ai 分析、widdershins 轉換",
    ],
  },
  {
    company: "ucfunnel",
    link: "https://www.ucfunnel.com/",
    title: "Software Engineer - Full Stack",
    period: "Oct 2020 - Mar 2022",
    team: {
      name: "Kernel",
      members: "5~8",
      method: "文件優先、隕石式開發",
    },
    desc: "高效能數位廣告媒合系統(ADX)，即時將廣告與最適合的目標族群配對。",
    highlights: [
      "創意素材服務(DCO)：廣告模板渲染、事件紀錄",
      "內容管理服務(CMS)：內容模板、媒體檔案管理",
      "廣告流量審核服務：流量驗證、機器學習",
      "廣告成效追蹤服務：數據收集、報表分析",
      "服務部署及管理(DevOps)：CI/CD、Docker、K8s、Rancher",
    ],
  },
  {
    company: "ucfunnel",
    link: "https://www.ucfunnel.com/",
    title: "Software Engineer - Full Stack",
    period: "Oct 2019 - Oct 2020",
    team: {
      name: "Dashboard",
      members: "1~3",
      method: "功能優先、隕石式開發",
    },
    desc: "廣告需求方/供應方/素材/後台等多元 Dashboard，支援多層權限、動態模板、成效追蹤與自動化報表。",
    highlights: [
      "DSP：多層權限管理、廣告模板生成、多幣別、目標設定",
      "SSP：Prebid 程式碼生成、廣告模板、影片模組、動態出價",
      "DCO：動態創意優化、素材管理、成效追蹤",
      "Admin：權限分層、交易限制、錯誤分析、機器學習參數設定",
    ],
  },
];

const Experience = () => (
  <section className="max-w-4xl mx-auto py-20 px-4" id="experience">
    <h2 className="text-3xl font-bold mb-6" style={{ color: "#a654fb" }}>
      經歷
    </h2>
    <div className="space-y-8">
      {experiences.map((exp) => (
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
          <div className="mb-2">{exp.desc}</div>
          <ul className="list-disc pl-6 space-y-1">
            {exp.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </a>
      ))}
    </div>
  </section>
);

export default Experience;
