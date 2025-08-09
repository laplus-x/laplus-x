import { useTranslation } from "react-i18next";

const Copyright = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full flex justify-center items-center py-4 px-8">
      <p>{t("footer.copyright", "© 2025 Margo Chen | Built with React and Tailwind")}</p>
    </footer>
  );
};

export default Copyright;
