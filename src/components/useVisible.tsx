import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useIntersection } from "./useIntersection";

export const useVisible = () => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const handle = useDebounce<IntersectionObserverCallback>(
    ([entry]) => setVisible(entry.isIntersecting),
    { delay: 200 }
  );

  const observer = useIntersection(handle);

  useEffect(() => {
    if (!element) return;
    observer?.observe(element);

    return () => {
      observer?.unobserve(element);
    };
  }, [element]);

  const ref = useCallback((node: HTMLElement | null) => {
    setElement(node);
  }, []);

  return { ref, visible };
};
