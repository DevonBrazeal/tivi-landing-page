import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Users, Calendar, Heart, Music, ChefHat } from 'lucide-react';

const FeedItem = ({ mode, title, subtitle, meta, color, tag, imageColor }) => (
    <div className="bg-zinc-900 rounded-3xl p-4 mb-4 border border-white/5 relative overflow-hidden group">
        <div className={`absolute top-0 right-0 p-3 ${imageColor} opacity-10 rounded-bl-3xl`}>
            {/* Abstract Background Shape */}
            <div className="w-16 h-16 rounded-full blur-xl bg-current" />
        </div>

        <div className="relative z-10">
            {/* Tag */}
            <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${color} bg-white/5 mb-3 inline-block uppercase tracking-wider`}>
                {tag}
            </span>

            {/* Content */}
            <h4 className="text-white font-bold text-lg mb-1 leading-tight">{title}</h4>
            <p className="text-zinc-400 text-xs mb-3">{subtitle}</p>

            {/* Meta */}
            <div className="flex items-center gap-3 text-zinc-500 text-[10px] font-medium">
                {meta}
            </div>

            {/* Action Button */}
            <button className={`mt-4 w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors border border-white/5 ${color.replace('text-', 'hover:border-')}`}>
                View Details
            </button>
        </div>
    </div>
);

export default function PhoneScrollDemo() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Parallax the feed: It moves up as we scroll down (simulating scroll)
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

    return (
        <section ref={targetRef} className="relative h-[250vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                {/* Text Context (Left Side on Desktop) */}
                <motion.div
                    style={{ opacity }}
                    className="hidden lg:block absolute left-10 xl:left-32 max-w-sm z-30 pointer-events-none"
                >
                    <h2 className="headline-lg text-white mb-6">
                        Your Intent.<br />In Your Hand.
                    </h2>
                    <p className="body-lg text-zinc-400">
                        The Tivi app filters the noise. Just clear, actionable cards based on what you actually want to do.
                    </p>
                </motion.div>

                {/* Phone Container */}
                <motion.div
                    style={{ scale, opacity }}
                    className="relative w-[320px] md:w-[380px] h-[650px] md:h-[750px] flex items-center justify-center"
                >
                    {/* Hand Frame Layer (Top) */}
                    <div className="absolute inset-0 z-20 pointer-events-none">
                        {/* Using the generated image. 
                           Since we don't know the exact masking, we'll place the feed ON TOP 
                           and inset it to mimic the screen bezel. 
                           Adjust 'top', 'bottom', 'left', 'right' to fit the screen area of the image.
                        */}
                        <img
                            src={`${import.meta.env.BASE_URL}images/hand-frame.png`}
                            alt="App in hand"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* The Screen / Feed Layer (Middle) */}
                    {/* Adjust these values to match the black screen area in the generated image perfectly */}
                    <div className="absolute top-[16%] left-[27%] width-[48%] h-[63%] z-30 rounded-[24px] overflow-hidden bg-black/90 md:top-[12%] md:left-[25%] md:w-[50%] md:h-[68%]">
                        {/* Feed Container */}
                        <motion.div
                            style={{ y }}
                            className="p-4 pt-12 pb-24 space-y-4"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <div className="text-white font-bold text-lg">Good Evening</div>
                                    <div className="text-zinc-500 text-xs">Based on your mood: <span className="text-tivi-purple">Social</span></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-zinc-800" />
                            </div>

                            {/* Feed Items */}
                            <FeedItem
                                title="3v3 Pickup Game"
                                subtitle="1.2 mi away • Town Square"
                                color="text-tivi-purple"
                                tag="Social Mode"
                                imageColor="text-purple-600"
                                meta={<><MapPin size={12} /> City Park • <Users size={12} /> 3/6 Players</>}
                            />

                            <FeedItem
                                title="Blue Note Jazz"
                                subtitle="Perfect for conversation"
                                color="text-emerald-400"
                                tag="Dating Mode"
                                imageColor="text-emerald-600"
                                meta={<><Music size={12} /> Live Music • <Heart size={12} /> 94% Match</>}
                            />

                            <FeedItem
                                title="Sourdough Class"
                                subtitle="Learn skills in circles"
                                color="text-blue-400"
                                tag="Growth Mode"
                                imageColor="text-blue-600"
                                meta={<><ChefHat size={12} /> Workshop • <Calendar size={12} /> Tomorrow</>}
                            />

                            <FeedItem
                                title="Run Club"
                                subtitle="Morning 5k loop"
                                color="text-orange-400"
                                tag="Active"
                                imageColor="text-orange-600"
                                meta={<><MapPin size={12} /> Pier 39 • <Users size={12} /> 12 Going</>}
                            />

                            <FeedItem
                                title="Indie Film Fest"
                                subtitle="Rooftop screening"
                                color="text-pink-400"
                                tag="Culture"
                                imageColor="text-pink-600"
                                meta={<><Calendar size={12} /> Friday • <MapPin size={12} /> Downtown</>}
                            />

                        </motion.div>

                        {/* Bottom Nav Fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />

                        {/* Fake Bottom Nav */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-8 z-30">
                            <div className="w-12 h-1 rounded-full bg-white/20" />
                        </div>
                    </div>

                    {/* Glow behind phone */}
                    <div className="absolute inset-0 bg-tivi-purple/20 blur-[100px] z-0 rounded-full opacity-50 pointer-events-none" />

                </motion.div>
            </div>
        </section>
    );
}
