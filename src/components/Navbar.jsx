import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black' : 'bg-transparent'
            }`}>
            <div className="max-w-[980px] mx-auto px-6">
                <div className="flex items-center justify-between h-24">
                    <a href="#" className="flex items-center gap-3 group">
                        <img
                            src="tivi-logo.png"
                            alt="Tivi"
                            className="h-16 w-auto object-contain"
                        />
                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#modes" className="text-white/80 hover:text-white transition-colors text-sm">Modes</a>
                        <a href="#earn" className="text-white/80 hover:text-white transition-colors text-sm">Earn</a>
                        <a href="#technology" className="text-white/80 hover:text-white transition-colors text-sm">Technology</a>
                        <a href="#tokenomics" className="text-white/80 hover:text-white transition-colors text-sm">Tokenomics</a>
                    </div>
                    <a href="#" className="text-sm text-white bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition-colors">
                        Join Beta
                    </a>
                </div>
            </div>
        </nav>
    );
}
