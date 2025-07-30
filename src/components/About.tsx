const About = () => (
  <section className="max-w-4xl mx-auto py-20 px-4" id="about">
    <h2 className="text-3xl font-bold mb-6" style={{ color: "#a654fb" }}>
      關於我
    </h2>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
      <ul className="list-disc pl-6 space-y-2" style={{ color: "#fbfefe" }}>
        <li>積極溝通，減少認知的誤差，避免做白工</li>
        <li>透明化工作資訊，讓團隊掌握現況</li>
        <li>推動自動化程式，優化作業流程，減輕團隊的工作量</li>
        <li>擅長模組化程式，符合高內聚和低耦合原則</li>
        <li>熱衷學習，分享所學的經驗</li>
        <li>富有責任感，盡己所能達成目標</li>
        <li>產能穩定，精準估時</li>
      </ul>
      <img
        src="https://avatars.githubusercontent.com/u/105040809"
        alt="avatar"
        className="w-50 h-50 sm:ml-4 shadow-lg bg-[#050b1e] mb-2 sm:mb-0 rounded-lg object-cover"
      />
    </div>
  </section>
);

export default About;
