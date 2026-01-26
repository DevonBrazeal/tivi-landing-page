import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tivi-purple/10 text-tivi-purple font-medium text-sm mb-6">
                        <Sparkles className="w-4 h-4" />
                        Limited Beta Access
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Stop Scrolling.
                        <br />
                        <span className="text-tivi-purple">Start Living.</span>
                    </h2>

                    <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                        Join 50,000+ people on the waitlist for early access to Tivi.
                        Be among the first to earn from your social life.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group px-8 py-4 rounded-full bg-tivi-purple text-white font-bold text-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
                            Join the Waitlist
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-lg hover:border-tivi-purple hover:text-tivi-purple transition-all">
                            Read Whitepaper
                        </button>
                    </div>

                    <p className="mt-6 text-sm text-gray-400">
                        No spam. Just early access and updates.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
