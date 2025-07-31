export const experiences = [
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
    summary:
      "核心業務為交通票務平台，整合交通工具 QR 票券，讓旅客能一站式完成搜尋與預訂。透過即時票務系統與安全支付機制，使用者不僅能輕鬆取得多元的交通票券，還能享受專屬優惠與彈性取消政策，讓行程更划算、更安心。",
    highlights: ["QR 票券", "預訂控位", "多元支付"],
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
    summary:
      "核心業務為高效能的數位廣告媒合系統(ADX)，能即時將廣告與最適合的目標族群配對。透過智慧競價機制，廣告主可用最具成本效益的方式獲取高價值曝光，同時確保廣告只投放在相關度高的受眾面前。對出版商而言，系統能快速提升廣告空間的填充率與收益，並提供透明的數據報告，方便即時掌握成效。",
    highlights: ["即時廣告媒合", "智慧競價", "巨量數據"],
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
    summary:
      "核心業務為建構並維護廣告投放前端與後端介面，確保廣告主能順利上傳素材、設定目標族群與預算。設計資料可視化模組，讓廣告主與出版商能即時查看曝光量、點擊率、收益等關鍵指標。",
    highlights: ["參數設定", "素材內容管理", "資料可視化"],
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
          <div className="mb-2">{exp.summary}</div>
          <ul className="flex flex-wrap gap-2">
            {exp.highlights.map((h) => (
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

export default Experience;
