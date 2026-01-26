import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Zap, DollarSign, Star } from 'lucide-react';

export default function StatsBar() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    const stats = [
        { icon: Users, value: '50K+', label: 'Waitlist' },
        { icon: Zap, value: '3', label: 'Modes' },
        { icon: DollarSign, value: '$2M+', label: 'Earned by Users' },
        { icon: Star, value: '4.9', label: 'App Rating' },
    ];

    return (
        <section ref={ref} className="py-8 bg-white border-y border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center justify-center gap-3"
                        >
                            <stat.icon className="w-5 h-5 text-tivi-purple" />
                            <div>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                <p className="text-xs text-gray-500">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
