"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    children?: React.ReactNode;
}

interface BentoGridProps {
    items: BentoItem[];
    className?: string;
}

function BentoGrid({ items, className }: BentoGridProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto", className)}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-5 md:p-6 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300",
                        "border border-white/10 bg-gray-900/50 backdrop-blur-sm",
                        "hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]",
                        "hover:-translate-y-1 will-change-transform",
                        "touch-manipulation",
                        item.colSpan || "col-span-1",
                        {
                            "shadow-[0_8px_32px_rgba(255,255,255,0.1)] -translate-y-1":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-3 md:space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                                {item.icon}
                            </div>
                            {item.status && (
                                <span className="text-xs font-medium px-2 md:px-3 py-0.5 md:py-1 rounded-full backdrop-blur-sm bg-white/10 text-gray-300 transition-colors duration-300 group-hover:bg-white/20">
                                    {item.status}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2 md:space-y-3">
                            <h3 className="font-semibold text-white tracking-tight text-base md:text-lg">
                                {item.title}
                                {item.meta && (
                                    <span className="ml-2 text-xs md:text-sm text-gray-400 font-normal">
                                        {item.meta}
                                    </span>
                                )}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* Custom children content (for skill icons) */}
                        {item.children && (
                            <div className="mt-3 md:mt-4">
                                {item.children}
                            </div>
                        )}

                        {item.tags && (
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 md:mt-4 gap-2 sm:gap-0">
                                <div className="flex items-center gap-1.5 md:gap-2 text-xs text-gray-400">
                                    {item.tags.slice(0, 3).map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-1.5 md:px-2 py-0.5 md:py-1 rounded-md bg-white/5 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 touch-manipulation"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity self-end sm:self-auto">
                                    {item.cta || "Explore →"}
                                </span>
                            </div>
                        )}
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-xl md:rounded-2xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid };
