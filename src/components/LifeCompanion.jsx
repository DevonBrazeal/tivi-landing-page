import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, ArrowRight, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function LifeCompanion() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="section-padding bg-zinc-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tivi-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1100px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 w-fit">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-medium text-white/90">Your North Star</span>
                        </div>

                        <h2 className="headline-lg text-white mb-6">
                            Intention, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">not Attention.</span>
                        </h2>

                        <p className="body-lg text-zinc-400 mb-8">
                            Most apps want you to stay on screen. Tivi wants you to get off it.
                            Our AI Life Companion quietly analyzes your goals and suggests real-world actions
                            that actually move the needle.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "No doomscrolling. Just doing.",
                                "Aligns daily actions with long-term goals.",
                                "Proactive itineraries, not passive feeds."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="w-5 h-5 text-tivi-purple" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="flex items-center gap-2 text-white font-semibold group hover:text-amber-400 transition-colors">
                            Meet your companion <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div>

                    {/* Right Column: AI UI Interface */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotate: 2 }}
                        animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-zinc-900 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tivi-purple to-indigo-600 flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Tivi Companion</h4>
                                        <p className="text-xs text-zinc-500">Just now</p>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs rounded-full font-medium">
                                    North Star Aligned
                                </div>
                            </div>

                            {/* AI Message */}
                            <div className="space-y-4">
                                <p className="text-zinc-300 leading-relaxed">
                                    "I noticed you cleared your schedule for this evening. Since your goal is to
                                    <span className="text-white font-medium"> learn Italian</span>, there's a
                                    hands-on pasta workshop starting at 6 PM nearby."
                                </p>

                                {/* Activity Card */}
                                <div className="bg-zinc-800/50 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group/card">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h5 className="text-white font-semibold mb-1 group-hover/card:text-amber-400 transition-colors">Handmade Pasta 101</h5>
                                            <div className="flex items-center gap-3 text-xs text-zinc-500">
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Today, 6:00 PM</span>
                                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Little Italy</span>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-white font-bold">
                                            +4
                                        </div>
                                    </div>
                                    <div className="w-full bg-zinc-700 h-1 rounded-full overflow-hidden">
                                        <div className="w-3/4 h-full bg-amber-500 rounded-full" />
                                    </div>
                                    <p className="text-[10px] text-zinc-500 mt-2 text-right">3 spots left</p>
                                </div>

                                {/* Buttons */}
                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    <button className="py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors">
                                        Accept &RSVP
                                    </button>
                                    <button className="py-2.5 rounded-xl bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-colors">
                                        Suggest another
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Decor elements */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-tivi-purple/30 to-amber-500/30 blur-2xl -z-10 opacity-40 rounded-[3rem]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
