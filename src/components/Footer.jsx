import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <footer className="bg-black">
            <section ref={ref} className="section-padding border-t border-white/10">
                <div className="max-w-[680px] mx-auto text-center">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="headline-lg text-white mb-4">
                        Stop scrolling.<br />Start living.
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="body-lg mb-4">30% of adults are lonely. Be the solution.</motion.p>
                    <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="text-tivi-purple font-semibold mb-8">Join 52,000+ on the waitlist</motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a href="#" className="px-8 py-3 rounded-full bg-tivi-purple text-white font-medium hover:bg-purple-700 transition-colors">Join the Waitlist</a>
                        <a href="#" className="px-8 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors">Join Discord</a>
                    </motion.div>
                </div>
            </section>
            <div className="border-t border-white/10 py-6 px-6">
                <div className="max-w-[980px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/60 text-sm">© Tivi Network — The Intention Economy</p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-white/60 hover:text-white transition-colors">Whitepaper</a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
