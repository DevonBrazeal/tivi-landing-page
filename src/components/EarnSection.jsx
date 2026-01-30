import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, PartyPopper, Heart, Award, ArrowRight, Wallet, TrendingUp, ShoppingBag, Palette, Flame, Video, Wine, Timer, Brain, Utensils, Music } from 'lucide-react';

export default function EarnSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="earn" ref={ref} className="section-padding bg-[#fbfbfd]">
            <div className="max-w-[980px] mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
                    <h2 className="headline-lg text-[#1d1d1f] mb-4">Get paid to live.</h2>
                    <p className="body-lg">Tivi monetizes your activity, creativity, and reputation.</p>
                </motion.div>

                {/* Visual Flow */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20"
                >
                    {/* Tivi Score */}
                    <div className="text-center">
                        <motion.div
                            animate={{ scale: [1, 1.03, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="w-32 h-32 rounded-3xl bg-gradient-to-br from-tivi-purple to-purple-800 flex flex-col items-center justify-center shadow-xl shadow-tivi-purple/20 mx-auto"
                        >
                            <div className="mb-1"><Award className="w-6 h-6 text-white/80" /></div>
                            <span className="text-4xl font-bold text-white tracking-tight">950</span>
                            <span className="text-[10px] text-white/60 uppercase font-semibold tracking-wider mt-1">Apex Status</span>
                        </motion.div>
                        <p className="text-tivi-purple font-semibold text-sm mt-4">Your Score</p>
                    </div>

                    <div className="hidden md:block text-gray-300"><ArrowRight className="w-8 h-8 opacity-40" /></div>

                    {/* Actions */}
                    <div className="flex gap-4">
                        {[
                            { icon: MapPin, color: 'text-rose-500' },
                            { icon: PartyPopper, color: 'text-amber-500' },
                            { icon: Heart, color: 'text-purple-500' }
                        ].map((Item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="w-20 h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Item.icon className={`w-8 h-8 ${Item.color}`} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="hidden md:block text-gray-300"><ArrowRight className="w-8 h-8 opacity-40" /></div>

                    {/* Wallet */}
                    <div className="text-center">
                        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-600 flex flex-col items-center justify-center shadow-xl shadow-orange-500/20 mx-auto">
                            <div className="mb-1"><Wallet className="w-6 h-6 text-white/80" /></div>
                            <span className="text-3xl font-bold text-white tracking-tight">$500+</span>
                            <span className="text-[10px] text-white/80 uppercase font-semibold tracking-wider mt-1">Balance</span>
                        </div>
                        <p className="text-amber-600 font-semibold text-sm mt-4">Your Wallet</p>
                    </div>
                </motion.div>

                {/* Revenue Streams Grid */}
                {/* Revenue Streams Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Attend Events', desc: 'Verify presence with GPS', icon: MapPin, color: 'text-rose-500', bg: 'bg-rose-50' },
                        { title: 'Host Activities', desc: 'Earn from gatherings', icon: PartyPopper, color: 'text-amber-500', bg: 'bg-amber-50' },
                        { title: 'Create Plans', desc: 'Royalties when copied', icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-50' },
                        { title: 'Be Kind', desc: 'Higher yields', icon: Heart, color: 'text-purple-500', bg: 'bg-purple-50' },
                    ].map((stream, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${stream.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                <stream.icon className={`w-7 h-7 ${stream.color}`} />
                            </div>
                            <h3 className="font-bold text-[#1d1d1f] mb-2">{stream.title}</h3>
                            <p className="text-[#86868b] text-sm leading-relaxed">{stream.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
