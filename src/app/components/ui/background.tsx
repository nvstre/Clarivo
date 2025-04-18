"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
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
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.3 + Math.random() * 0.2,
    hue: Math.random() < 0.5 ? 220 : 190, // 220 = Soft Blue, 190 = Light Cyan
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
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
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
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
        (0.8 + Math.sin(beam.pulse) * 0.2) *
        opacityMap[intensity];

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, 100%, 85%, 0)`);
      gradient.addColorStop(
        0.1,
        `hsla(${beam.hue}, 100%, 85%, ${pulsingOpacity * 0.7})`
      );
      gradient.addColorStop(
        0.4,
        `hsla(${beam.hue}, 100%, 85%, ${pulsingOpacity * 1.2})`
      );
      gradient.addColorStop(
        0.6,
        `hsla(${beam.hue}, 100%, 85%, ${pulsingOpacity * 1.2})`
      );
      gradient.addColorStop(
        0.9,
        `hsla(${beam.hue}, 100%, 85%, ${pulsingOpacity * 0.7})`
      );
      gradient.addColorStop(1, `hsla(${beam.hue}, 100%, 85%, 0)`);

      ctx.fillStyle = gradient;
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
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{
          backdropFilter: "blur(50px)",
        }}
      />

      <div className="relative z-10">{/* children or other content */}</div>
    </div>
  );
}
