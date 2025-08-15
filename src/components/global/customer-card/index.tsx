"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {
  customer: {
    name: string;
    id: string;
    regNo: string;
    mobileNo: string;
    modelName: string;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
};

export default function CustomerCard({ customer }: Props) {
  // Parallax refs/state
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ rx: 0, ry: 0, tx: 0, ty: 0 });
  const currentRef = useRef({ rx: 0, ry: 0, tx: 0, ty: 0 });

  // Smoothly interpolate current -> target
  useEffect(() => {
    const loop = () => {
      const t = 0.16; // lerp factor
      currentRef.current.rx +=
        (targetRef.current.rx - currentRef.current.rx) * t;
      currentRef.current.ry +=
        (targetRef.current.ry - currentRef.current.ry) * t;
      currentRef.current.tx +=
        (targetRef.current.tx - currentRef.current.tx) * t;
      currentRef.current.ty +=
        (targetRef.current.ty - currentRef.current.ty) * t;

      const { rx, ry, tx, ty } = currentRef.current;
      if (innerRef.current) {
        innerRef.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${tx}px, ${ty}px, 0) scale(1.02)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    if (!imgWrapRef.current) return;
    const rect = imgWrapRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    const dx = x - 0.5;
    const dy = y - 0.5;

    // rotation degrees and pixel translate — subtle
    const ry = dx * 6; // rotateY
    const rx = -dy * 6; // rotateX
    const tx = -dx * 6; // translateX
    const ty = -dy * 6; // translateY

    targetRef.current = { rx, ry, tx, ty };
  };

  const handleLeave = () => {
    targetRef.current = { rx: 0, ry: 0, tx: 0, ty: 0 };
  };

  return (
    <Link
      href={`/customer/${customer.regNo}`}
      aria-label={`Open ${customer.name} details`}
      className="block"
      prefetch={false}
    >
      <div
        className="group relative rounded-xl p-[2px] overflow-hidden
          bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500
          bg-[length:200%_200%] animate-gradient-slow
          hover:shadow-2xl transition-shadow duration-500"
      >
        {/* inner card lives inside the gradient ring */}
        <div
          className="relative rounded-xl overflow-hidden
            bg-white dark:bg-[#030712]
            border border-gray-200 dark:border-gray-700
            shadow-md dark:shadow-lg
            transition-transform duration-400 ease-out group-hover:-translate-y-1"
        >
          <>
            {/* Image area */}
            <div
              ref={imgWrapRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              className="relative w-full h-48 overflow-hidden bg-gray-50 dark:bg-black/20 "
            >
              {/* innerRef is transformed via rAF for smooth parallax */}
              <div
                ref={innerRef}
                className="absolute inset-0 transition-transform duration-300 will-change-transform"
              >
                <Image
                  src={customer.image || "/falcon.jpg"}
                  alt={customer.name}
                  fill
                  className="object-cover w-full h-full "
                  draggable={false}
                  priority
                />
                {/* subtle overlay to ensure contrast on text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-90" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl capitalize font-bold text-gray-900 dark:text-gray-100">
                {customer.name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 uppercase mt-1">
                {customer.regNo}
              </p>
              <p className="text-sm capitalize text-gray-500 dark:text-gray-400 mt-2">
                {customer.modelName}
              </p>
            </div>

            {/* Glass date badge */}
            <div
              className="absolute top-3 left-3 px-3 py-1 rounded-lg flex flex-col items-center
                  backdrop-blur-md bg-white/20 dark:bg-black/30 border border-white/20 dark:border-white/10
                  shadow-[0_6px_20px_rgba(0,0,0,0.18)] text-white transition-transform duration-300
                  group-hover:scale-110"
            >
              <p className="text-xl font-bold leading-none drop-shadow-sm">
                {new Date(customer.updatedAt).toLocaleDateString("en-US", {
                  day: "2-digit",
                })}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/85 mt-0.5">
                {new Date(customer.updatedAt).toLocaleDateString("en-US", {
                  month: "short",
                })}
              </p>
            </div>
          </>
        </div>
      </div>
    </Link>
  );
}
