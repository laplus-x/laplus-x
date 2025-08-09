import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "zh", label: "中文" },
    { code: "en", label: "English" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative inline text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full rounded-md bg-transparent text-md font-medium text-[#a654fb] hover:text-[#ea97ef] focus:outline-none focus:ring-2 focus:ring-offset-1 transition"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span>
          {languages.find((l) => l.code === i18n.language)?.label || "Language"}
        </span>
        <svg
          className={`ml-2 -mr-1 h-6 w-6 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div
          className="origin-top-right absolute right-0 mt-2 min-w-40 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1">
            {languages.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className={`block w-full text-left px-4 py-2 text-sm text-[#a654fb] ${
                  i18n.language === code
                    ? "bg-gray-100 font-semibold"
                    : "hover:bg-gray-100"
                }`}
                role="menuitem"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
