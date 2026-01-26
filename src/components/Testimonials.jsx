import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const testimonials = [
        { quote: "Made 3 real friends in my first week. Tivi actually gets you off the couch.", name: "Sarah K.", role: "Early Beta User" },
        { quote: "Finally, a dating app where matches lead to dates. The itinerary feature is genius.", name: "Marcus T.", role: "Dating Mode User" },
        { quote: "Earned $340 hosting board game nights. This is the future of social.", name: "Alex R.", role: "Host & Earner" },
    ];

    return (
        <section ref={ref} className="py-20 px-6 bg-[#1d1d1f]">
            <div className="max-w-[980px] mx-auto">
                <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center text-[#86868b] text-sm uppercase tracking-wider mb-10">What our beta users are saying</motion.p>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}</div>
                            <p className="text-white/90 mb-4 leading-relaxed">"{t.quote}"</p>
                            <div>
                                <p className="text-white font-medium text-sm">{t.name}</p>
                                <p className="text-[#86868b] text-xs">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
