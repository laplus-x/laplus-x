import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <section className="max-w-4xl mx-auto py-20 px-4" id="contact">
      <h2 className="text-3xl font-bold mb-6" style={{ color: "#8B7FAC" }}>
        {t("title")}
      </h2>
      <div
        className="rounded-xl shadow p-6 border flex flex-col items-center"
        style={{ borderColor: "#8B7FAC" }}
      >
        <div className="text-lg mb-2" style={{ color: "#404040" }}>
          {t("message")}
        </div>
        <a
          href="mailto:laplus.space@gmail.com"
          className="font-semibold text-xl hover:underline"
          style={{ color: "#4d2754" }}
        >
          laplus.space@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
