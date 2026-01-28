import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Zap, Crown, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TiviScore() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [score, setScore] = useState(0);

    // Animated counter effect
    useEffect(() => {
        if (inView) {
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;
            const targetScore = 784;
            let current = 0;

            const timer = setInterval(() => {
                current += targetScore / steps;
                if (current >= targetScore) {
                    setScore(targetScore);
                    clearInterval(timer);
                } else {
                    setScore(Math.floor(current));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [inView]);

    const tiers = [
        { name: 'Scout', range: '0-300', benefits: 'Basic Access', color: 'text-zinc-500', bg: 'bg-zinc-500/10' },
        { name: 'Explorer', range: '300-600', benefits: '1.2x Yield', color: 'text-blue-400', bg: 'bg-blue-500/10' },
        { name: 'Connector', range: '600-850', benefits: 'Pro Features', color: 'text-tivi-purple', bg: 'bg-tivi-purple/10', active: true },
        { name: 'Luminary', range: '850+', benefits: 'Rev Share', color: 'text-amber-400', bg: 'bg-amber-500/10' },
    ];

    return (
        <section ref={ref} className="section-padding bg-black relative overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Left: visual gauge */}
                    <div className="flex-1 relative">
                        <div className="relative w-[300px] h-[300px] mx-auto">
                            {/* Outer Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-tivi-purple/20 border-dashed"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 rounded-full border border-white/5"
                            />

                            {/* Center Score */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                <motion.span
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                    className="text-7xl font-bold text-white tracking-tighter"
                                >
                                    {score}
                                </motion.span>
                                <span className="text-zinc-500 font-medium mt-2 uppercase tracking-widest text-sm">Tivi Score</span>
                            </div>

                            {/* Glowing Background */}
                            <div className="absolute inset-0 bg-tivi-purple/20 blur-[60px] rounded-full" />
                        </div>

                        {/* Tiers List */}
                        <div className="grid grid-cols-2 gap-3 mt-10">
                            {tiers.map((tier, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="relative group rounded-xl overflow-hidden"
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                                        e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                                    }}
                                >
                                    {/* Magic Border */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div
                                        className="absolute inset-[1px] rounded-xl bg-zinc-900 z-10"
                                        style={{
                                            background: tier.active ? 'rgba(76, 29, 149, 0.2)' : 'rgba(24, 24, 27, 0.9)'
                                        }}
                                    />

                                    {/* Spotlight */}
                                    <div
                                        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                                        style={{
                                            background: `radial-gradient(400px circle at var(--x) var(--y), rgba(255, 255, 255, 0.15), transparent 40%)`
                                        }}
                                    />

                                    {/* Content */}
                                    <div className={`relative z-20 p-3 h-full border border-transparent ${tier.active ? 'border-tivi-purple/50' : 'border-white/5'} rounded-xl`}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={`text-xs font-bold ${tier.color}`}>{tier.name}</span>
                                            {tier.active && <Zap className="w-3 h-3 text-tivi-purple fill-current" />}
                                        </div>
                                        <div className="text-white font-medium text-sm">{tier.benefits}</div>
                                        {tier.active && (
                                            <div className="absolute -right-2 -top-2 w-8 h-8 bg-tivi-purple/20 blur-xl rounded-full" />
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 w-fit">
                            <Crown className="w-4 h-4 text-tivi-purple" />
                            <span className="text-sm font-medium text-white/90">Reputation Protocol</span>
                        </div>

                        <h2 className="headline-lg text-white mb-6">
                            Proof of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tivi-purple to-indigo-500">Vibe.</span>
                        </h2>

                        <p className="body-lg text-zinc-400 mb-8">
                            Your Tivi Score is the new credit score for social capital.
                            It doesn't measure how much you post—it measures how much you show up.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Earn by Doing</h4>
                                    <p className="text-sm text-zinc-400">Score increases when you attend events, host gatherings, and receive positive peer reviews.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <Trophy className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Unlock Real Value</h4>
                                    <p className="text-sm text-zinc-400">Higher scores unlock revenue share, exclusive event access, and higher staking APY.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
