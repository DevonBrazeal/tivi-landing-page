import { motion } from 'framer-motion';
import MagnetizeButton from './MagnetizeButton';
// Activity Cards Data
import { Play, MapPin, Users, Calendar, Award, ShoppingBag, Palette, Flame, Video, Wine, Timer, Brain, Utensils, Music } from 'lucide-react';

const activities = [
    {
        title: "NY Sunset Helicopter",
        image: `${import.meta.env.BASE_URL}images/activity_golden.png`,
        tag: "Golden Ticket",
        tagColor: "bg-amber-500",
        attendees: 2,
        location: "Manhattan Heliport",
        isGolden: true,
        desc: "Values at $3,000 • Michelin Star Dinner Included"
    },
    {
        title: "Farmers Market",
        image: `${import.meta.env.BASE_URL}images/activity_farmers_market.png`,
        tag: "Community",
        tagColor: "bg-green-600",
        attendees: 45,
        location: "Downtown Square"
    },
    {
        title: "Art Gallery Open",
        image: `${import.meta.env.BASE_URL}images/activity_art_gallery.png`,
        tag: "Culture",
        tagColor: "bg-purple-600",
        attendees: 120,
        location: "SoHo District"
    },
    {
        title: "Welding Workshop",
        image: `${import.meta.env.BASE_URL}images/activity_welding.png`,
        tag: "Skills",
        tagColor: "bg-orange-600",
        attendees: 8,
        location: "Industrial Park"
    },
    {
        title: "Grandma's Wisdom",
        image: `${import.meta.env.BASE_URL}images/activity_virtual_wisdom.png`,
        tag: "Virtual",
        tagColor: "bg-blue-600",
        attendees: 342,
        location: "Live Stream"
    },
    {
        title: "Sip & Paint Date",
        image: `${import.meta.env.BASE_URL}images/activity_sip_paint.png`,
        tag: "Social",
        tagColor: "bg-rose-600",
        attendees: 24,
        location: "The Canvas Bar"
    },
    {
        title: "Morning 5K Run",
        image: `${import.meta.env.BASE_URL}images/activity_run_club.png`,
        tag: "Fitness",
        tagColor: "bg-cyan-600",
        attendees: 85,
        location: "Beach Boardwalk"
    },
    {
        title: "Chess in Park",
        image: `${import.meta.env.BASE_URL}images/activity_chess_park.png`,
        tag: "Strategy",
        tagColor: "bg-amber-700",
        attendees: 16,
        location: "Washington Sq"
    },
    {
        title: "Pasta Making",
        image: `${import.meta.env.BASE_URL}images/activity_pasta_class.png`,
        tag: "Cooking",
        tagColor: "bg-red-600",
        attendees: 15,
        location: "Little Italy"
    },
];

const ActivityCard = ({ activity }) => (
    <div className={`relative w-[280px] h-[360px] flex-shrink-0 rounded-3xl overflow-hidden group ${activity.isGolden ? 'ring-4 ring-amber-300 shadow-[0_0_50px_rgba(251,191,36,0.4)] scale-105 z-10' : ''}`}>
        {activity.image ? (
            <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
        ) : (
            <div className={`w-full h-full bg-gradient-to-br ${activity.gradient} flex items-center justify-center`}>
                <activity.icon className="w-24 h-24 text-white/20 transform group-hover:scale-110 transition-transform duration-700" />
            </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4">
            <span className={`${activity.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                {activity.tag}
            </span>
        </div>

        {activity.isGolden && (
            <div className="absolute top-4 right-4 animate-pulse">
                <Award className="w-8 h-8 text-amber-300 drop-shadow-lg" />
            </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className={`font-bold text-xl mb-1 ${activity.isGolden ? 'text-amber-300' : 'text-white'}`}>{activity.title}</h3>
            {activity.desc && <p className="text-white/90 text-sm font-medium mb-2">{activity.desc}</p>}
            <div className="flex items-center gap-4 text-white/80 text-xs">
                <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {activity.location}
                </span>
                <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> {activity.attendees} going
                </span>
            </div>
        </div>
    </div>
);

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center bg-black text-white px-0 pt-24 relative overflow-hidden">
            {/* Animated Background Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-tivi-purple/40 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.5, 1], x: [0, 100, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-30%] right-[-10%] w-[600px] h-[600px] bg-mode-dating/30 rounded-full blur-[120px]"
                />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)] pointer-events-none" />

            <div className="max-w-[980px] mx-auto relative z-10 px-6 text-center mb-16">
                {/* Live Ticker */}
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="inline-block mb-8"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors shadow-lg shadow-tivi-purple/10">
                        <span className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                            </span>
                            <span className="text-green-400 font-semibold text-sm tracking-wide">LIVE</span>
                        </span>
                        <span className="text-white/30 text-sm">|</span>
                        <span className="text-white/90 text-sm font-medium">47 activities happening now</span>
                    </div>
                </motion.div>

                {/* Headline */}
                <div className="mb-6 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
                    >
                        <span className="block text-white drop-shadow-2xl">Scroll Less.</span>
                        <motion.span
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-tivi-purple via-pink-500 to-mode-dating bg-[length:200%_auto]"
                            animate={{ backgroundPosition: ["0% center", "200% center"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            Live More.
                        </motion.span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    The world's first social protocol that pays you to touch grass. <br className="hidden sm:block" />
                    <span className="text-white font-medium">Stop swiping. Start living.</span>
                </motion.p>

                {/* Magnetize CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center mb-10 items-center"
                >
                    <MagnetizeButton
                        className="px-10 py-4 rounded-full bg-gradient-to-r from-tivi-purple to-pink-500 text-white font-semibold text-lg shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all"
                        particleCount={15}
                    >
                        Join the Beta
                    </MagnetizeButton>

                    <MagnetizeButton
                        className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-lg border border-white/20 transition-all hover:bg-white/20"
                        particleCount={10}
                    >
                        <Play className="w-4 h-4 mr-2 fill-current" /> Watch Demo
                    </MagnetizeButton>
                </motion.div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-white/50 text-sm">
                    🔥 <span className="text-orange-400 font-medium">2,847 spots left</span> in the beta
                </motion.p>
            </div>

            {/* Marquee Carousel - Full Width */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full relative z-20 pb-12"
            >
                <div className="flex overflow-hidden relative">
                    {/* Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 pl-6"
                        animate={{ x: "-50%" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        style={{ width: "fit-content" }}
                    >
                        {/* Duplicate items for seamless loop */}
                        {[...activities, ...activities, ...activities].map((activity, i) => (
                            <ActivityCard key={i} activity={activity} />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
