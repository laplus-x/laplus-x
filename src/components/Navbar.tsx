import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation("common");
  const location = useLocation();

  const [opening, setOpening] = useState<boolean>(false);

  const menus = Object.entries(t("header", { returnObjects: true })).map(
    ([k, v]) => ({
      text: v,
      link:
        k === "posts"
          ? { pathname: "/" + k }
          : { pathname: "/", hash: "#" + k },
    })
  ) as any[];

  useEffect(() => {
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <nav
      className="w-full flex flex-col shadow fixed top-0 left-0 z-50 "
      style={{ background: "#8B7FAC" }}
    >
      <div
        className="w-full flex justify-between items-center py-4 px-8 border-b"
        style={{ borderColor: "#F7EEE7" }}
      >
        <div
          className="font-bold text-xl tracking-widest"
          style={{ color: "#f4cbe8" }}
        >
          Margo Chen
        </div>

        <button
          className="inline-flex sm:hidden items-center justify-center p-2 ml-2 rounded-md text-[#F7EEE7] hover:text-[#f4cbe8] focus:outline-none"
          onClick={() => setOpening(!opening)}
        >
          {!opening && (
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
          {opening && (
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )}
        </button>

        <ul
          className="hidden items-baseline sm:flex gap-6 font-medium"
          style={{ color: "#F7EEE7" }}
        >
          {menus.map((m) => (
            <li key={m.text}>
              <Link to={m.link} className="hover:text-[#f4cbe8]">
                {m.text}
              </Link>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>

      {opening && (
        <div className="bg-background shadow-lg rounded-b-lg py-4 px-8 mt-1">
          <ul
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
            style={{ color: "#F7EEE7" }}
          >
            {menus.map((m) => (
              <li key={m.text}>
                <Link
                  to={m.link}
                  className="block hover:text-[#f4cbe8]"
                  onClick={() => setOpening(false)}
                >
                  {m.text}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
