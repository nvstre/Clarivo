"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10;
  const hues = [205, 195, 190, 200, 210, 185];
  const hue = hues[Math.floor(Math.random() * hues.length)];
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 80 + Math.random() * 120,
    length: height * 3,
    angle: angle,
    speed: 0.8 + Math.random() * 1.5,
    opacity: 0.7 + Math.random() * 0.3,
    hue: hue,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.03 + Math.random() * 0.04,
  };
}

export function BeamsBackground({
  className,
  intensity = "strong",
}: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]); // Store beams in a ref
  const animationFrameRef = useRef<number>(0); // Store animation frame ID
  const MINIMUM_BEAMS = 20;

  const opacityMap = {
    subtle: 0.9,
    medium: 1,
    strong: 1.2,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      beamsRef.current = Array.from({ length: MINIMUM_BEAMS * 1.5 }, () =>
        createBeam(canvas.width, canvas.height)
      );
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    function resetBeam(beam: Beam, index: number) {
      if (!canvas) return beam;

      const column = index % 3;
      const spacing = canvas.width / 3;

      beam.y = canvas.height + 100; // Reset beam position below the canvas for continuous motion
      beam.x =
        column * spacing +
        spacing / 2 +
        (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 100 + Math.random() * 100;
      beam.speed = 0.5 + Math.random() * 0.4;
      beam.hue = index % 2 === 0 ? 220 : 190;
      beam.opacity = 0.3 + Math.random() * 0.2;
      return beam;
    }

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity =
        beam.opacity *
        (0.9 + Math.sin(beam.pulse) * 0.1) *
        opacityMap[intensity];

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, 100%, 65%, 0)`);
      gradient.addColorStop(
        0.1,
        `hsla(${beam.hue}, 98%, 68%, ${pulsingOpacity * 0.8})`
      );
      gradient.addColorStop(
        0.3,
        `hsla(${beam.hue}, 98%, 68%, ${pulsingOpacity * 1.2})`
      );
      gradient.addColorStop(
        0.5,
        `hsla(${beam.hue}, 98%, 68%, ${pulsingOpacity * 1.2})`
      );
      gradient.addColorStop(
        0.7,
        `hsla(${beam.hue}, 98%, 68%, ${pulsingOpacity * 0.8})`
      );
      gradient.addColorStop(
        0.9,
        `hsla(${beam.hue}, 98%, 68%, ${pulsingOpacity * 0.4})`
      );
      gradient.addColorStop(1, `hsla(${beam.hue}, 100%, 65%, 0)`);

      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.7;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = "blur(35px)";

      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;

        // Reset the beam when it moves out of the canvas
        if (beam.y + beam.length < -100) {
          resetBeam(beam, index);
        }

        drawBeam(ctx, beam);
      });

      // Apply a longer fading effect to the bottom of the canvas
      const gradient = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 1)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, canvas.height - 100, canvas.width, 100); // Extended the gradient to 100px

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [intensity]);

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-white",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ filter: "blur(15px)" }}
      />

      <motion.div
        className="absolute inset-0 bg-white/5"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{
          backdropFilter: "blur(40px)",
        }}
      />

      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)"
        }}
      />

      <div className="relative z-10">{/* children or other content */}</div>
    </div>
  );
}