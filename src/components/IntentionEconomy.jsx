import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function IntentionEconomy() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const modes = [
        { title: 'Social Mode', subtitle: 'Find your crowd', description: 'Use Active Pulse to find pickup games, hiking groups, or book clubs nearby.', image: '/images/social-mode.png', color: '#8B5CF6', tag: 'Tivi Purple', tagColor: 'bg-tivi-purple', time: 'Today @ 5:00 PM', eventTitle: '3v3 Pickup Game', eventSubtitle: '1.2 mi away', cta: 'Join Game' },
        { title: 'Dating Mode', subtitle: 'Date by itinerary', description: 'Skip the chatting. Browse date cards. Match on shared interests.', image: '/images/dating-mode.png', color: '#34D399', tag: 'Soft Mint', tagColor: 'bg-mode-dating', time: 'Tonight @ 8:00 PM', eventTitle: 'Blue Note Jazz & Cocktails', eventSubtitle: 'Perfect for conversation', cta: 'View Itinerary' },
        { title: 'Growth Mode', subtitle: 'Level up your life', description: 'Learn pasta in Rome via stream, then host a dinner party locally.', image: '/images/growth-mode.png', color: '#60A5FA', tag: 'Slate Blue', tagColor: 'bg-mode-growth', time: 'Tomorrow @ 10:00 AM', eventTitle: 'Sourdough Masterclass', eventSubtitle: 'Virtual & Local Circles', cta: 'Enroll & Connect' },
    ];

    return (
        <section id="intention-economy" ref={ref} className="section-padding bg-black">
            <div className="max-w-[980px] mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
                    <h2 className="headline-lg text-white mb-4">The Intention Economy.</h2>
                    <p className="body-lg text-zinc-400">
                        Three modes. One ecosystem. Context switching that understands your intent.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {modes.map((mode, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.15 }} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                            <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img src={mode.image} alt={mode.title} className="w-full" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute top-4 left-4"><span className={`${mode.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>{mode.tag}</span></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="text-white/70 text-xs mb-1">{mode.time}</p>
                                        <h4 className="text-white font-bold text-xl mb-1">{mode.eventTitle}</h4>
                                        <p className="text-white/70 text-sm mb-3">{mode.eventSubtitle}</p>
                                        <button className={`${mode.tagColor} text-white font-semibold py-2 px-6 rounded-xl text-sm`}>{mode.cta}</button>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="flex-1">
                                <p className="text-sm font-medium mb-2" style={{ color: mode.color }}>{mode.subtitle}</p>
                                <h3 className="headline-md text-white mb-4">{mode.title}</h3>
                                <p className="body-md text-zinc-400">{mode.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
