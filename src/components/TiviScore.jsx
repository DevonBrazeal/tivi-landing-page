import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Zap, Crown, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';

export default function TiviScore() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    // Animated counter using Framer Motion springs
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            const controls = animate(count, 784, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView]);



    return (
        <section ref={ref} className="section-padding bg-black relative overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Left: Tivi Score Visual (Ported from Video) */}
                    {/* Left: Tivi Score Visual */}
                    <div className="flex-1 relative flex justify-center">
                        <div className="relative w-[650px] h-[650px] scale-110">
                            {/* Background Image Asset - now acting as the sole visual */}
                            <img
                                src="tivi-score-ui.png"
                                alt="Tivi Score Gauge"
                                className="absolute inset-0 w-full h-full object-contain animate-spin-slow"
                                style={{ animationDuration: '30s' }}
                            />
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
