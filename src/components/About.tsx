import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <section className="max-w-4xl mx-auto py-20 px-4" id="about">
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl font-bold" style={{ color: "#a654fb" }}>
          {t("title")}
        </h2>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/margo-chen-812045378"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <img
              alt="Linkedin"
              height={36}
              width={36}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png"
            />
          </a>

          <a
            href="https://github.com/laplus-x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              alt="GitHub"
              height={36}
              width={36}
              src="https://github.com/fluidicon.png"
            />
          </a>

          <a
            href="https://www.codewars.com/users/laplus-x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codewars"
          >
            <img
              alt="Codewars"
              src="https://www.codewars.com/packs/assets/logo.f607a0fb.svg"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <ul
          className="list-disc pl-6 space-y-2 order-2 sm:order-1"
          style={{ color: "#fbfefe" }}
        >
          {(t("points", { returnObjects: true }) as string[]).map(
            (point: string, idx: number) => (
              <li key={idx}>{point}</li>
            )
          )}
        </ul>
        <div className="flex justify-center sm:ml-4 mb-2 sm:mb-0 order-1 sm:order-2">
          <img
            src="https://avatars.githubusercontent.com/u/105040809"
            alt="avatar"
            className="w-50 h-50 shadow-lg bg-[#050b1e] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
