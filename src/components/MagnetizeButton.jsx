import { motion, useAnimation } from "framer-motion";
import { Magnet } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

function MagnetizeButton({
    className = "",
    children,
    particleCount = 12,
    attractRadius = 50,
    ...props
}) {
    const [isAttracting, setIsAttracting] = useState(false);
    const [particles, setParticles] = useState([]);
    const particlesControl = useAnimation();

    useEffect(() => {
        // Create random starting positions for particles spread outward
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: (Math.random() - 0.5) * 300, // random start x
            y: (Math.random() - 0.5) * 300, // random start y
        }));
        setParticles(newParticles);
    }, [particleCount]);

    const handleInteractionStart = useCallback(async () => {
        setIsAttracting(true);
        // Animate all particles to center (0,0)
        await particlesControl.start({
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }, [particlesControl]);

    const handleInteractionEnd = useCallback(async () => {
        setIsAttracting(false);
        // Animate particles back to their original random positions
        await particlesControl.start((i) => ({
            x: particles[i]?.x || 0,
            y: particles[i]?.y || 0,
            opacity: 0.4,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }, [particlesControl, particles]);

    return (
        <motion.button
            className={`relative touch-none overflow-hidden ${className}`}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {/* Particles */}
            {particles.map((p, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial={{ x: p.x, y: p.y, opacity: 0 }}
                    animate={particlesControl}
                    className={`absolute w-1.5 h-1.5 rounded-full transition-opacity duration-300 pointer-events-none z-0 ${isAttracting ? "bg-white" : "bg-white/40"
                        }`}
                />
            ))}

            {/* Content */}
            <span className="relative z-10 w-full flex items-center justify-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}

export default MagnetizeButton;
