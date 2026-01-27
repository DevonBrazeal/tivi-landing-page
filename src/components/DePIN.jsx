import { Suspense, lazy, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Globe, Radio, ShieldCheck, Activity, Bot, Database } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

function SplineScene({ scene, className }) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <span className="w-8 h-8 border-2 border-tivi-purple border-t-transparent rounded-full animate-spin"></span>
                </div>
            }
        >
            <Spline scene={scene} className={className} />
        </Suspense>
    );
}

function Spotlight({ className = "", fill = "white" }) {
    return (
        <svg
            className={`animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
        >
            <g filter="url(#filter0_f_292_202)">
                <ellipse
                    cx="1924.71"
                    cy="273.501"
                    rx="1924.71"
                    ry="273.501"
                    transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                    fill={fill}
                    fillOpacity="0.21"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_292_202"
                    x="0.860352"
                    y="0.838989"
                    width="3785.16"
                    height="2840.26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_292_202" />
                </filter>
            </defs>
        </svg>
    );
}

export default function Technology() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="technology" ref={ref} className="section-padding bg-black relative overflow-hidden min-h-screen flex items-center">
            <div className="max-w-[1280px] mx-auto relative z-10 w-full">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16 lg:mb-24">
                    <h2 className="headline-lg text-white mb-6">Powered by DePIN and AI.</h2>
                    <p className="body-lg max-w-2xl mx-auto text-gray-400">
                        The infrastructure for human coordination at scale. Verifying reality while preserving privacy.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Stacked Text Content */}
                    <div className="flex flex-col gap-8">
                        {/* DePIN Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="relative p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-colors"
                        >
                            <Spotlight className="-top-40 left-0 md:-top-20" fill="white" />
                            <div className="relative z-20">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                                    <Globe className="text-blue-500 w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                                    DePIN Infrastructure
                                </h3>
                                <p className="text-neutral-300 leading-relaxed mb-6">
                                    A decentralized verification mesh using Bluetooth and GPS.
                                    Verifies physical attendance without storing personal location history.
                                </p>
                                <div className="flex gap-3 flex-wrap">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5"><Radio className="w-3 h-3" /> Bluetooth Mesh</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> ZK Proofs</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* AI Section (Text Only) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="relative p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-colors"
                        >
                            <Spotlight className="-top-40 left-0 md:-top-20" fill="#8B5CF6" />
                            <div className="relative z-20">
                                <div className="w-12 h-12 rounded-2xl bg-tivi-purple/10 flex items-center justify-center mb-6">
                                    <Cpu className="text-tivi-purple w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                                    AI Life Companion
                                </h3>
                                <p className="text-neutral-300 leading-relaxed">
                                    Tivi analyzes your action graph to suggest high-value social opportunities.
                                    "It looks like you're free Tuesday night—want to join a hiking group?"
                                </p>
                            </div>
                        </motion.div>

                        {/* Embodied AI / Kinematic Data Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="relative p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-colors"
                        >
                            <Spotlight className="-top-40 left-0 md:-top-20" fill="#F59E0B" />
                            <div className="relative z-20">
                                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6">
                                    <Activity className="text-amber-500 w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                                    Kinematic Data
                                </h3>
                                <p className="text-neutral-300 leading-relaxed mb-6">
                                    The "Getty Images" for human movement. Tivi users passively generate high-value training data for robotics by documenting real-world tasks.
                                </p>
                                <div className="flex gap-3 flex-wrap">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5"><Bot className="w-3 h-3" /> Robotics Training</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5"><Database className="w-3 h-3" /> Ethical Data</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Giant Robot Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block h-[800px] sticky top-24 rounded-3xl bg-neutral-900/20 border border-neutral-800/50 overflow-hidden group/robot"
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                            e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                        }}
                    >
                        {/* Cursor Spotlight */}
                        <div
                            className="pointer-events-none absolute -inset-px transition-opacity opacity-0 group-hover/robot:opacity-100 z-0"
                            style={{
                                background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255, 255, 255, 0.8), transparent 40%)`
                            }}
                        />

                        <div className="relative z-10 w-full h-full">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full scale-100 translate-y-4"
                            />
                        </div>
                        {/* Gradient overlay to integrate with background */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-20" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none z-20" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
