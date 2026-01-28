import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PhoneScrollDemo() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Parallax logic:
    // As we scroll down, the feed image inside the phone moves UP to simulate scrolling.
    const y = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

    return (
        <section ref={targetRef} className="relative h-[200vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                {/* Text Context - Improved Typography */}
                <motion.div
                    style={{ opacity }}
                    className="hidden lg:block absolute left-12 xl:left-32 max-w-md z-30 pointer-events-none"
                >
                    <h2 className="headline-lg text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
                        Your Intent.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tivi-purple to-mode-dating">
                            Right Here.
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-sm">
                        No more doomscrolling. <br />
                        Just clear, actionable cards based on what you actually want to do.
                    </p>
                </motion.div>

                {/* Phone Container */}
                <motion.div
                    style={{ scale, opacity }}
                    className="relative w-[340px] md:w-[400px] h-[700px] md:h-[800px] flex items-center justify-center"
                >
                    {/* Hand Layer (Foreground) */}
                    {/* Depending on the transparency of the provided PNG, this might need to be on top. */}
                    <div className="absolute inset-0 z-20 pointer-events-none select-none">
                        <img
                            src={`${import.meta.env.BASE_URL}images/hand-visual.png`}
                            alt="App in hand"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* The Screen / Feed Layer (Background) */}
                    {/* We position this BEHIND the hand frame. 
                        We need to mask it to fit the screen area.
                        Since we can't easily generate a perfect SVG mask without trial/error, 
                        we'll rely on z-index if the hand image has a transparent screen. 
                        If the hand image has a BLACK screen (no transparency), we must place this ON TOP
                        and carefully inset it. 
                        
                        Assumption: The user-provided "visuals" imply the screen content.
                    */}
                    <div className="absolute top-[3%] left-[5%] right-[5%] bottom-[3%] z-10 overflow-hidden rounded-[40px] bg-black">
                        {/* Scrolling Feed Image */}
                        <motion.div
                            style={{ y }}
                            className="w-full"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}images/feed-ui.jpg`}
                                alt="Tivi App Feed"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-tivi-purple/20 blur-[120px] z-0 rounded-full opacity-40 pointer-events-none" />

                </motion.div>
            </div>
        </section>
    );
}
