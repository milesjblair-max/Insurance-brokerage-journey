import React from 'react';

interface FooterProps {
    theme?: 'dark' | 'light';
}

const Footer: React.FC<FooterProps> = ({ theme = 'light' }) => {
    const isDark = theme === 'dark';

    return (
        <footer className={`py-12 px-6 ${isDark ? 'bg-black text-white/20' : 'bg-white text-black/20'}`}>
            <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-xs font-bold tracking-widest uppercase">Agentic AI Storyboard</span>
                    <span className="text-[10px] tracking-tight opacity-50">Confidential & Proprietary</span>
                </div>

                <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-center md:text-right">
                    &copy; {new Date().getFullYear()} Accenture / Howden Broking Group
                </div>
            </div>
        </footer>
    );
};

export default Footer;
