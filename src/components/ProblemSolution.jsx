import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProblemSolution() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="section-padding bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tivi-purple/50 to-transparent" />

            <div className="max-w-[980px] mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
                    <p className="text-red-500 font-semibold uppercase tracking-wider text-sm mb-4">The Problem</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        The attention economy <span className="text-red-500">failed you.</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">Apps optimize for screen time. You get loneliness.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2 }} className="flex justify-center mb-12">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-tivi-purple to-pink-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl">↓</span>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
                    <p className="text-tivi-purple font-semibold uppercase tracking-wider text-sm mb-4">The Solution</p>
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        We want your <span className="text-transparent bg-clip-text bg-gradient-to-r from-tivi-purple to-pink-500">action</span>, not attention.
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {[
                        { emoji: '📍', title: 'Show Up', desc: 'Get rewarded for real-world presence', color: 'from-tivi-purple to-purple-600' },
                        { emoji: '💜', title: 'Be Kind', desc: 'Raise your score through kindness', color: 'from-pink-500 to-rose-500' },
                        { emoji: '💰', title: 'Get Paid', desc: 'Turn your social life into income', color: 'from-yellow-400 to-orange-500' },
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }} whileHover={{ y: -8 }} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 group">
                            <span className="text-4xl mb-4 block">{item.emoji}</span>
                            <h4 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
