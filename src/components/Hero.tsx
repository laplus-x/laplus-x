import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("hero");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    const STAR_NUM = 120;
    const stars = Array.from({ length: STAR_NUM }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        star.alpha =
          0.5 + 0.5 * Math.sin(performance.now() * star.speed + star.phase);
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      id="hero"
      style={{ background: "#050b1e" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ pointerEvents: "none" }}
      />
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/105040809"
          alt="avatar"
          className="w-50 h-50 rounded-full shadow-lg bg-[#050b1e] mb-4"
        />
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-2"
          style={{ color: "#a654fb" }}
        >
          {t("name")}
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-4"
          style={{ color: "#ea97ef" }}
        >
          {t("title")}
        </h2>
        <div
          className="max-w-xl flex flex-col text-center gap-2 mb-6"
          style={{ color: "#fbfefe" }}
        >
          <p>{t("intro.line1")}</p>
          <p>{t("intro.line2")}</p>
          <p>{t("intro.line3")}</p>
        </div>
        <div className="max-w-xl flex gap-4 mb-6">
          <a
            href="#contact"
            className="px-6 py-2 rounded-full shadow transition"
            style={{ background: "#a654fb", color: "#fbfefe" }}
          >
            {t("btn.contact")}
          </a>
          <a
            href="#contributions"
            className="px-6 py-2 rounded-full shadow transition border"
            style={{ borderColor: "#fbfefe", color: "#fbfefe" }}
          >
            {t("btn.contributions")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
