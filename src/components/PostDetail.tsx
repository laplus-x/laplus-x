import { Github } from "@/repositories";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router";
import { useAsync } from "./useAsync";
import { useInstance } from "./useInstance";

export const PostDetail = () => {
  const { t } = useTranslation("posts");
  const { id } = useParams();

  const github = useInstance(Github);
  const { loading, result, run } = useAsync(github.getIssue);

  useEffect(() => {
    if (!id) return;
    run(+id);
  }, []);

  return (
    <section className="max-w-4xl mx-auto py-10 px-4" id="posts">
      <h2 className="text-3xl font-bold mb-6" style={{ color: "#a654fb" }}>
        <Link to="/posts" className="inline-flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>{t("title")}</span>
        </Link>
      </h2>
      <div className="space-y-8">
        {loading && (
          <div className="text-gray-500 text-center">{t("loading")}</div>
        )}
        {!loading && result && !result.ok && (
          <p className="text-red-500 text-center">{result.val.message}</p>
        )}
        {!loading && result && result.ok && (
          <div
            key={result.val.id}
            className="block rounded-xl shadow hover:shadow-lg transition p-6 border"
            style={{ borderColor: "#a654fb", color: "#fbfefe" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <div
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#ea97ef" }}
                >
                  # {id} {result.val.title}
                </div>
              </div>
              <div className="text-sm" style={{ color: "#fbfefe" }}>
                {result.val.created_at}
              </div>
            </div>
            <article className="mb-2">
              <ReactMarkdown>{result.val.body}</ReactMarkdown>
            </article>
          </div>
        )}
      </div>
    </section>
  );
};
