const About = () => (
  <section className="max-w-4xl mx-auto py-20 px-4" id="about">
    <div className="flex justify-between mb-6">
      <h2 className="text-3xl font-bold" style={{ color: "#a654fb" }}>
        關於我
      </h2>
      <div className="flex space-x-4">
        <a
          href="https://github.com/laplus-x"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#ea97ef] transition-colors p-2 rounded-full border"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
      </div>
    </div>
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
