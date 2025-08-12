import { Github, type Issue } from "@/repositories";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useAsync } from "./useAsync";
import { useInstance } from "./useInstance";
import { useVisible } from "./useVisible";

export const Posts = () => {
  const per_page = 10;

  const { t } = useTranslation("posts");

  const github = useInstance(Github);
  const { loading, result, run } = useAsync(github.queryIssue);

  const { ref: sentinelRef, visible } = useVisible();

  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    if (visible && !loading && hasMore) {
      setPage((p) => p + 1);
    }
  }, [visible]);

  useEffect(() => {
    if (page === 0) return;
    run({ page, per_page });
  }, [page]);

  useEffect(() => {
    if (!result?.ok) return;
    setIssues((prev) => [...prev, ...result.val]);
    if (result.val.length < per_page) {
      setHasMore(false);
    }
  }, [JSON.stringify(result)]);

  return (
    <section className="max-w-4xl mx-auto py-10 px-4" id="posts">
      <h2 className="text-3xl font-bold mb-6" style={{ color: "#a654fb" }}>
        {t("title")}
      </h2>
      <div className="space-y-8">
        {loading && (
          <div className="text-gray-500 text-center">{t("loading")}</div>
        )}
        {!loading && result && !result.ok && (
          <p className="text-red-500 text-center">{result.val.message}</p>
        )}
        {!loading && result && result.ok && (
          <>
            {issues.map((issue) => (
              <Link
                key={issue.id}
                to={`/posts/${issue.number}`}
                className="block rounded-xl shadow hover:shadow-lg transition p-6 border"
                style={{ borderColor: "#a654fb", color: "#fbfefe" }}
              >
                <div className="text-[#ea97ef] font-medium">
                  #{issue.number} {issue.title}
                </div>
                <div className="text-xs font-mono" style={{ color: "#a654fb" }}>
                  {issue.labels.join(" / ")}
                </div>
              </Link>
            ))}
          </>
        )}
        {!hasMore && <p className="text-gray-500 text-center">{t("nomore")}</p>}

        <div ref={sentinelRef} className="h-1"></div>
      </div>
    </section>
  );
};
