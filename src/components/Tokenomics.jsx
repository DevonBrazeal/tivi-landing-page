import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Tokenomics() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="tokenomics" ref={ref} className="section-padding bg-[#fbfbfd]">
            <div className="max-w-[980px] mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
                    <h2 className="headline-lg text-[#1d1d1f] mb-4">Dual token economy.</h2>
                    <p className="body-lg">Aligned incentives for long-term success.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} whileHover={{ y: -4 }} className="p-8 rounded-3xl bg-white border border-gray-200 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tivi-purple to-purple-600 flex items-center justify-center"><span className="text-white font-bold text-lg">T</span></div>
                            <div><h3 className="text-xl font-semibold text-[#1d1d1f]">$TIVI</h3><p className="text-tivi-purple text-sm font-medium">Membership Token</p></div>
                        </div>
                        <p className="text-[#86868b] mb-6">Governance token. Lock for 2x-10x reward multipliers.</p>
                        <ul className="space-y-2 text-sm text-[#1d1d1f]"><li>• Governance voting</li><li>• Staking multipliers</li><li>• Premium features</li></ul>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} whileHover={{ y: -4 }} className="p-8 rounded-3xl bg-white border border-gray-200 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center"><span className="text-white font-bold text-lg">$</span></div>
                            <div><h3 className="text-xl font-semibold text-[#1d1d1f]">$CSU</h3><p className="text-yellow-600 text-sm font-medium">Reward Token</p></div>
                        </div>
                        <p className="text-[#86868b] mb-6">Daily rewards backed by real revenue.</p>
                        <ul className="space-y-2 text-sm text-[#1d1d1f]"><li>• Earned through activity</li><li>• Revenue-backed</li><li>• Redeemable</li></ul>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="p-6 rounded-2xl bg-tivi-purple/5 border border-tivi-purple/20 text-center">
                    <h4 className="font-semibold text-[#1d1d1f] mb-2">The Fair Exit Covenant</h4>
                    <p className="text-[#86868b] text-sm">25% of acquisition/IPO proceeds go back to locked $TIVI holders.</p>
                </motion.div>
            </div>
        </section>
    );
}
