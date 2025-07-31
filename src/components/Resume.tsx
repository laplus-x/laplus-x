import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { contributions } from "./Contributions";
import { experiences } from "./Experience";
import { skills } from "./Skills";

const Hero = () => (
  <div>
    <h1 className="text-3xl text-neutral-600 font-bold">Margo Chen</h1>
    <p className="text-gray-500 font-semibold text-sm uppercase">
      Software Engineer - Full Stack Developer
    </p>
  </div>
);

const About = () => (
  <div>
    <h2 className="text-gray-800 font-semibold uppercase">About Me</h2>
    <div className="flex flex-col mt-2 text-xs text-gray-700 gap-1">
      <p>
        我是一位專注於 全端開發 的工程師，擅長以 精實開發法 (Lean Development)
        快速將構想落地。
      </p>
      <p>
        具備 跨技術棧 與 架構設計
        經驗，能獨立完成從需求分析、系統設計、開發、測試到上線的完整流程。
      </p>
      <p>擅長 模組化設計、流程自動化與效能優化，同時重視團隊協作與知識分享。</p>
    </div>
  </div>
);

const Education = () => (
  <div>
    <h2 className="text-gray-800 font-semibold uppercase">About Me</h2>
    <div className="flex flex-col mt-2 text-xs text-gray-700 gap-1">
      <div className="flex items-center gap-1">
        <svg
          className="icon h-4 w-4 flex-shrink-0 "
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.664 1.319a.75.75 0 0 1 .672 0a41 41 0 0 1 8.198 5.424a.75.75 0 0 1-.254 1.285a31.4 31.4 0 0 0-7.86 3.83a.75.75 0 0 1-.84 0a32 32 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a36 36 0 0 1 3.305-2.033a.75.75 0 0 0-.714-1.319a37 37 0 0 0-3.446 2.12A2.22 2.22 0 0 0 6 9.393v.38a31 31 0 0 0-4.28-1.746a.75.75 0 0 1-.254-1.285a41 41 0 0 1 8.198-5.424M6 11.459a30 30 0 0 0-2.455-1.158a41 41 0 0 0-.39 3.114a.75.75 0 0 0 .419.74q.792.384 1.554.82q-.314.487-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.6 26.6 0 0 1 3.095 2.348a.75.75 0 0 0 .992 0a26.6 26.6 0 0 1 5.93-3.95a.75.75 0 0 0 .42-.739a41 41 0 0 0-.39-3.114a30 30 0 0 0-5.199 2.801a2.25 2.25 0 0 1-2.514 0q-.614-.413-1.25-.797a7 7 0 0 1-1.084 3.45a27 27 0 0 0-1.281-.78A5.5 5.5 0 0 0 6 12z"
            clipRule="evenodd"
          ></path>
        </svg>
        <a href="https://www.csie.tku.edu.tw" target="_blank">
          電腦科學與資訊工程學士 | 淡江大學
        </a>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div>
    <h2 className="text-gray-800 font-semibold uppercase">Contact</h2>
    <div className="flex flex-col mt-2 text-xs text-gray-700 gap-1">
      <div className="flex items-center gap-1">
        <svg
          className="icon h-4 w-4 flex-shrink-0 "
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <g fill="currentColor">
            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2z"></path>
            <path d="m19 8.839l-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path>
          </g>
        </svg>
        <a href="mailto:laplus.space@gmail.com" target="_blank">
          laplus.space@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-1">
        <svg
          className="icon h-4 w-4 flex-shrink-0 "
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.54 11.54 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.02 13.02 0 0 1 2.43 8.327A13 13 0 0 1 2 5z"
            clipRule="evenodd"
          ></path>
        </svg>
        <a href="tel:+886970066636" target="_blank">
          +886 970 066 636
        </a>
      </div>
      <div className="flex items-center gap-1">
        <svg
          className="icon h-4 w-4 flex-shrink-0 "
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M16.555 5.412a8.03 8.03 0 0 0-3.503-2.81a14.9 14.9 0 0 1 1.663 4.472a8.6 8.6 0 0 0 1.84-1.662m-3.229 2.413a13.4 13.4 0 0 0-2.413-5.773a8 8 0 0 0-1.826 0a13.4 13.4 0 0 0-2.413 5.773A8.5 8.5 0 0 0 10 8.5c1.18 0 2.304-.24 3.326-.675M6.514 9.376A10 10 0 0 0 10 10c1.226 0 2.4-.22 3.486-.624q.014.31.014.624a13.5 13.5 0 0 1-.366 3.134A13.5 13.5 0 0 1 10 13.5c-1.079 0-2.128-.127-3.134-.366a13.5 13.5 0 0 1-.352-3.758M5.285 7.074a14.9 14.9 0 0 1 1.663-4.471a8.03 8.03 0 0 0-3.503 2.81a8.6 8.6 0 0 0 1.84 1.66m12.049-.275a8 8 0 0 1 .614 4.115a13.5 13.5 0 0 1-3.178 1.72a15 15 0 0 0 .174-3.939a10 10 0 0 0 2.39-1.896m-14.668 0a10 10 0 0 0 2.39 1.896a15.2 15.2 0 0 0 .174 3.94a13.5 13.5 0 0 1-3.178-1.72a8 8 0 0 1 .615-4.115M10 15q1.349-.002 2.633-.23a13.5 13.5 0 0 1-1.72 3.178a8 8 0 0 1-1.826 0a13.5 13.5 0 0 1-1.72-3.178Q8.65 14.998 10 15m4.357-.643a15 15 0 0 1-1.305 3.04a8.03 8.03 0 0 0 4.345-4.345c-.953.542-1.971.981-3.04 1.305m-7.409 3.04a8.03 8.03 0 0 1-4.345-4.345c.953.542 1.971.981 3.04 1.305a15 15 0 0 0 1.305 3.04"
          ></path>
        </svg>
        <a href="https://laplus-x.github.io/laplus-x" target="_blank">
          laplus-x.github.io
        </a>
      </div>
      <div className="flex items-center gap-1">
        <svg
          className="icon h-4 w-4 flex-shrink-0 "
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.98 7.98 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0"
            clipRule="evenodd"
          ></path>
        </svg>
        <a href="https://github.com/laplus-x" target="_blank">
          github.com/laplus-x
        </a>
      </div>
      <div className="flex items-center gap-1">
        <svg
          className="icon h-4 w-4 flex-shrink-0 "
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39m1 7.516V6.234h-2v6.579zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2z"
            clipRule="evenodd"
          ></path>
        </svg>
        <a
          href="https://www.linkedin.com/in/margo-chen-812045378"
          target="_blank"
        >
          in/margo-chen
        </a>
      </div>
    </div>
  </div>
);

const Skills = () => (
  <div>
    <h2 className="text-gray-800 font-semibold uppercase">Skills</h2>
    <div className="flex flex-wrap mt-2 text-xs/2 text-gray-700 gap-1">
      {skills.map((group) => (
        <div key={group.category} className="flex flex-col gap-1">
          <p className="py-1">{group.category}</p>
          <ul className="flex flex-wrap gap-1">
            {group.items.map((i) => (
              <li key={i} className="px-3 py-1 mb-1 rounded-full border">
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => (
  <>
    <h2 className="text-gray-800 font-semibold uppercase">Work Experience</h2>
    <div className="flow-root text-xs text-gray-700 mt-2">
      <div className="flex flex-col gap-1">
        {experiences.map((exp) => (
          <div key={exp.company + exp.team.name}>
            <div className="relative">
              <span className="absolute left-2 top-4 -ml-px h-full border border-dashed border-gray-200"></span>
              <div className="relative flex items-center space-x-3">
                <div>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"></path>
                  </svg>
                </div>
                <div className="flex text-gray-500 w-full min-w-0 justify-between space-x-4">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2"
                  >
                    {exp.company}
                  </a>
                  <p className="font-semibold">Team: {exp.team.name}</p>
                </div>
              </div>
              <div className="pl-8 pt-2">
                <div className="flex text-gray-500 min-w-0 justify-between space-x-4">
                  <p className="uppercase font-semibold">{exp.title}</p>
                  <p>{exp.period}</p>
                </div>
                <div className="pt-2">{exp.summary}</div>
                <ul className="flex flex-wrap gap-1 pt-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="px-3 py-1 mb-1 rounded-full border">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

const Contributions = () => {
  const g = contributions.reduce(
    (prev: Record<string, typeof contributions>, curr) => {
      prev[curr.company] ??= [];
      prev[curr.company].push(curr);
      return prev;
    },
    {}
  );
  return (
    <>
      <h2 className="text-gray-800 font-semibold uppercase">Contributions</h2>
      <div className="flow-root text-xs text-gray-700 mt-2">
        <div className="flex flex-col gap-1">
          {Object.entries(g).map(([comp, contributions]) => (
            <div key={comp}>
              <div className="relative">
                <span className="absolute left-2 top-4 -ml-px h-full border border-dashed border-gray-200"></span>
                <div className="relative flex items-center space-x-3">
                  <div>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"></path>
                    </svg>
                  </div>
                  <div className="flex text-gray-500 w-full min-w-0 justify-between space-x-4">
                    <p className="font-semibold underline underline-offset-2">
                      {comp}
                    </p>
                  </div>
                </div>
                {contributions.map((con) => (
                  <div key={con.title} className="pl-8 pt-2">
                    <div className="flex text-gray-500 min-w-0 justify-between space-x-4">
                      <p className="uppercase font-semibold">{con.title}</p>
                      <p>{con.status}</p>
                    </div>
                    <ul className="list-disc pl-8 pt-2">
                      {con.issues.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Copyright = () => (
  <div className="flex justify-between text-gray-800 text-sm">
    <time>2025</time>
    <a
      target="_blank"
      rel="noreferrer noopener"
      href="https://github.com/laplus-x#resume"
    >
      laplus-x.github.io/laplus-x#resume
    </a>
  </div>
);

const Resume = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onPrint = useReactToPrint({
    documentTitle: "Resume",
  });

  return (
    <section className="max-w-4xl mx-auto py-20 px-4" id="resume">
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl font-bold" style={{ color: "#a654fb" }}>
          履歷
        </h2>
        <button
          type="button"
          className="px-6 py-2 rounded-full shadow transition border cursor-pointer"
          style={{ borderColor: "#a654fb", color: "#a654fb" }}
          onClick={() => onPrint(() => ref.current)}
        >
          列印
        </button>
      </div>
      <div
        ref={ref}
        className="gray p-10 shadow antialiased rounded-md border border-gray-200 border-dashed bg-white max-w-5xl mx-auto"
      >
        <Hero />
        <div className="grid grid-cols-12 mt-4 mb-4 gap-6 text-sm">
          <div className="col-span-4 space-y-4">
            <About />
            <Contact />
            <Education />
            <Skills />
            <Experience />
          </div>
          <div className="col-span-8">
            <Contributions />
          </div>
        </div>
        <Copyright />
      </div>
    </section>
  );
};

export default Resume;
