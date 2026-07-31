import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, RefreshCw, Zap, Sparkles } from "lucide-react";

interface BlobNode {
  color: string;
  baseX: number; // percentage 0 to 1
  baseY: number; // percentage 0 to 1
  ampX: number;
  ampY: number;
  speedX: number;
  speedY: number;
  phaseX: number;
  phaseY: number;
  radiusRatio: number; // relative to canvas min dimension
  opacity: number;
}

export const GradientMeshHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(0.8);
  const [showControls, setShowControls] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 });

  const isVisibleRef = useRef(true);
  const animFrameIdRef = useRef<number | null>(null);

  // Required Palette:
  // #1E3A8A (azul marino), #60A5FA (celeste), #A855F7 (violeta), #F97316 (naranja)
  const colors = {
    navy: "#1E3A8A",
    celeste: "#60A5FA",
    violet: "#A855F7",
    orange: "#F97316",
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Node definitions for silk wave composition
    const nodes: BlobNode[] = [
      {
        color: colors.navy,
        baseX: 0.25,
        baseY: 0.35,
        ampX: 0.22,
        ampY: 0.18,
        speedX: 0.0004,
        speedY: 0.0003,
        phaseX: 0,
        phaseY: 1.2,
        radiusRatio: 0.7,
        opacity: 0.85,
      },
      {
        color: colors.violet,
        baseX: 0.7,
        baseY: 0.3,
        ampX: 0.25,
        ampY: 0.2,
        speedX: 0.00035,
        speedY: 0.00045,
        phaseX: 2.1,
        phaseY: 0.5,
        radiusRatio: 0.65,
        opacity: 0.8,
      },
      {
        color: colors.orange,
        baseX: 0.45,
        baseY: 0.65,
        ampX: 0.2,
        ampY: 0.22,
        speedX: 0.0005,
        speedY: 0.0003,
        phaseX: 4.2,
        phaseY: 3.1,
        radiusRatio: 0.55,
        opacity: 0.75,
      },
      {
        color: colors.celeste,
        baseX: 0.8,
        baseY: 0.75,
        ampX: 0.18,
        ampY: 0.25,
        speedX: 0.0003,
        speedY: 0.0005,
        phaseX: 1.1,
        phaseY: 2.7,
        radiusRatio: 0.6,
        opacity: 0.75,
      },
      {
        color: colors.violet,
        baseX: 0.15,
        baseY: 0.8,
        ampX: 0.15,
        ampY: 0.18,
        speedX: 0.00045,
        speedY: 0.0004,
        phaseX: 3.5,
        phaseY: 0.8,
        radiusRatio: 0.5,
        opacity: 0.7,
      },
      {
        color: colors.orange,
        baseX: 0.85,
        baseY: 0.2,
        ampX: 0.15,
        ampY: 0.15,
        speedX: 0.0006,
        speedY: 0.00035,
        phaseX: 0.8,
        phaseY: 4.0,
        radiusRatio: 0.45,
        opacity: 0.65,
      },
      {
        color: colors.celeste,
        baseX: 0.35,
        baseY: 0.2,
        ampX: 0.2,
        ampY: 0.15,
        speedX: 0.0004,
        speedY: 0.0005,
        phaseX: 5.0,
        phaseY: 1.8,
        radiusRatio: 0.5,
        opacity: 0.7,
      },
    ];

    let startTime = performance.now();
    let width = 0;
    let height = 0;

    // Optimize resolution for mobile & high performance
    const handleResize = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      
      // Render internal canvas at scaled down resolution (e.g. 0.4x to 0.5x)
      // combined with CSS scale & blur to achieve smooth mesh rendering with minimal CPU load
      const scale = window.innerWidth < 768 ? 0.4 : 0.55;
      width = Math.max(300, Math.floor(rect.width * scale));
      height = Math.max(300, Math.floor(rect.height * scale));

      canvas.width = width;
      canvas.height = height;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Pause rendering when canvas is scrolled offscreen for zero idle CPU usage
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Animation render loop
    const render = (now: number) => {
      if (isPlaying && isVisibleRef.current && ctx && width > 0 && height > 0) {
        const elapsedTime = (now - startTime) * speedMultiplier;

        // Base gradient background (#0B132B dark navy to deep slate)
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, "#080D1A");
        bgGrad.addColorStop(0.5, "#0D182E");
        bgGrad.addColorStop(1, "#050814");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        const minDim = Math.min(width, height);

        // Draw animated color blobs
        nodes.forEach((node, index) => {
          // Calculate fluid organic position using sine/cosine combinations
          const timeOffset = elapsedTime;
          let currentX =
            (node.baseX +
              Math.sin(timeOffset * node.speedX + node.phaseX) * node.ampX +
              Math.cos(timeOffset * 0.0002 + index) * 0.05) *
            width;

          let currentY =
            (node.baseY +
              Math.cos(timeOffset * node.speedY + node.phaseY) * node.ampY +
              Math.sin(timeOffset * 0.00025 + index) * 0.05) *
            height;

          // Subtle cursor influence on blob center
          currentX += (mousePos.x * width - currentX) * 0.04;
          currentY += (mousePos.y * height - currentY) * 0.04;

          // Pulsing radius for undulating silk fold depth
          const pulse = Math.sin(timeOffset * 0.0008 + index * 1.5) * 0.12 + 1.0;
          const radius = Math.max(50, minDim * node.radiusRatio * pulse);

          const radGrad = ctx.createRadialGradient(
            currentX,
            currentY,
            0,
            currentX,
            currentY,
            radius
          );

          radGrad.addColorStop(0, hexToRgba(node.color, node.opacity));
          radGrad.addColorStop(0.4, hexToRgba(node.color, node.opacity * 0.6));
          radGrad.addColorStop(0.75, hexToRgba(node.color, node.opacity * 0.15));
          radGrad.addColorStop(1, "rgba(0,0,0,0)");

          ctx.fillStyle = radGrad;
          ctx.beginPath();
          ctx.arc(currentX, currentY, radius, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw organic silk waves (tela ondulante ribbon overlays)
        drawSilkClothRibbons(ctx, width, height, elapsedTime, colors);
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [isPlaying, speedMultiplier, mousePos]);

  // Handle mouse move across hero to create interactive silk wave ripples
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-auto"
      style={{ zIndex: 0 }}
    >
      {/* HTML5 Canvas with hardware-accelerated CSS blur & smooth blend mode */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transform scale-105 filter blur-[38px] md:blur-[48px] opacity-90 transition-opacity duration-1000"
      />

      {/* Subtle organic silk texture overlay grid & noise pattern */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60 pointer-events-none mix-blend-overlay" />
      
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="silk-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#silk-noise)" />
      </svg>

      {/* Subtle Floating Controls Badge for Customization / Demo */}
      <div className="absolute bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setShowControls(!showControls)}
          className="bg-black/50 backdrop-blur-md border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
          title="Personalizar animación Mesh"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
          <span>Gradient Mesh</span>
        </button>

        {showControls && (
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 text-white text-xs p-3 rounded-2xl flex items-center gap-3 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              title={isPlaying ? "Pausar" : "Reanudar"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <div className="flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-[#F97316]" />
              <button
                onClick={() => setSpeedMultiplier((prev) => (prev === 0.5 ? 1.0 : prev === 1.0 ? 1.8 : 0.5))}
                className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[11px] font-mono font-bold"
              >
                {speedMultiplier === 0.5 ? "Lento" : speedMultiplier === 1.0 ? "Normal" : "Rápido"}
              </button>
            </div>

            <button
              onClick={() => {
                setSpeedMultiplier(0.8);
                setIsPlaying(true);
              }}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              title="Restablecer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper: Hex to RGBA string
function hexToRgba(hex: string, alpha: number): string {
  let c = hex.replace("#", "");
  if (c.length === 3) {
    c = c.split("").map((char) => char + char).join("");
  }
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Draw smooth undulating silk wave bezier curves across canvas
function drawSilkClothRibbons(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  colors: { navy: string; celeste: string; violet: string; orange: string }
) {
  const t = time * 0.0004;

  // Wave 1: Violet to Sky Blue silk fold
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, height * 0.3 + Math.sin(t) * 30);
  ctx.bezierCurveTo(
    width * 0.3,
    height * 0.1 + Math.cos(t * 1.2) * 40,
    width * 0.7,
    height * 0.6 + Math.sin(t * 0.8) * 50,
    width,
    height * 0.4 + Math.cos(t) * 30
  );
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();

  const waveGrad1 = ctx.createLinearGradient(0, 0, width, height);
  waveGrad1.addColorStop(0, hexToRgba(colors.violet, 0.25));
  waveGrad1.addColorStop(0.5, hexToRgba(colors.celeste, 0.18));
  waveGrad1.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = waveGrad1;
  ctx.fill();
  ctx.restore();

  // Wave 2: Orange highlight silk fold
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(width, height * 0.2 + Math.cos(t * 0.9) * 30);
  ctx.bezierCurveTo(
    width * 0.6,
    height * 0.45 + Math.sin(t * 1.1) * 45,
    width * 0.2,
    height * 0.25 + Math.cos(t * 0.7) * 35,
    0,
    height * 0.7 + Math.sin(t) * 40
  );
  ctx.lineTo(0, 0);
  ctx.lineTo(width, 0);
  ctx.closePath();

  const waveGrad2 = ctx.createLinearGradient(width, 0, 0, height);
  waveGrad2.addColorStop(0, hexToRgba(colors.orange, 0.22));
  waveGrad2.addColorStop(0.6, hexToRgba(colors.navy, 0.15));
  waveGrad2.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = waveGrad2;
  ctx.fill();
  ctx.restore();
}
