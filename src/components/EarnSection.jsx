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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Golden Ticket Tile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="col-span-1 sm:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 border border-yellow-300 shadow-xl shadow-amber-400/20 text-left relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50"><Award className="w-24 h-24 text-white rotate-12" /></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-xs uppercase tracking-wider mb-4">
                                <Award className="w-3 h-3" /> Golden Ticket
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1 shadow-sm">NY Sunset Helicopter Ride</h3>
                            <p className="text-white/90 font-medium mb-4">+ Michelin Star Dinner for Two</p>
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-bold text-white">$3,000</span>
                                <span className="text-xs font-medium text-white/80 bg-black/10 px-2 py-1 rounded-lg">Budget Paid</span>
                            </div>
                        </div>
                    </motion.div>

                    {[
                        { title: 'Farmer\'s Market', desc: 'Fresh Sunday Buy', icon: ShoppingBag, color: 'text-green-600', bg: 'bg-green-100' },
                        { title: 'Art Gallery', desc: 'Modern Open House', icon: Palette, color: 'text-purple-600', bg: 'bg-purple-100' },
                        { title: 'Welding', desc: 'Spark Creativity', icon: Flame, color: 'text-orange-600', bg: 'bg-orange-100' },
                        { title: 'Virtual Wisdom', desc: 'Grandma\'s Advice', icon: Video, color: 'text-blue-600', bg: 'bg-blue-100' },
                        { title: 'Sip & Paint', desc: 'Creative Date', icon: Wine, color: 'text-rose-600', bg: 'bg-rose-100' },
                        { title: 'Run Club', desc: 'Morning 5k', icon: Timer, color: 'text-cyan-600', bg: 'bg-cyan-100' },
                        { title: 'Park Chess', desc: 'Strategy Session', icon: Brain, color: 'text-amber-700', bg: 'bg-amber-100' },
                        { title: 'Cooking Class', desc: 'Italian Pasta', icon: Utensils, color: 'text-red-600', bg: 'bg-red-100' },
                        { title: 'Sound Bath', desc: 'Healing Frequencies', icon: Music, color: 'text-indigo-600', bg: 'bg-indigo-100' },
                    ].map((stream, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 + i * 0.05 }}
                            whileHover={{ y: -4 }}
                            className="p-5 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between h-full group"
                        >
                            <div className={`w-10 h-10 rounded-xl ${stream.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                <stream.icon className={`w-5 h-5 ${stream.color}`} />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1d1d1f] mb-1">{stream.title}</h3>
                                <p className="text-[#86868b] text-sm">{stream.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
