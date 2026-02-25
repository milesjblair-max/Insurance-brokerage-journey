import React from 'react';
import Link from 'next/link';

interface HeaderProps {
    theme?: 'dark' | 'light';
    showProgress?: boolean;
    currentStep?: number;
    totalSteps?: number;
}

const Header: React.FC<HeaderProps> = ({ theme = 'light', showProgress, currentStep, totalSteps }) => {
    const isDark = theme === 'dark';

    return (
        <header className={`w-full py-8 px-6 md:px-12 flex justify-between items-center z-50 ${isDark ? 'text-white' : 'text-black'}`}>
            <div className="flex items-center gap-2">
                <div className="font-bold text-xl tracking-tighter flex items-center">
                    <span className={isDark ? "text-white" : "text-black"}>accenture</span>
                </div>
            </div>

            {showProgress && currentStep && totalSteps && (
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-30 mb-1">Journey Progress</span>
                    <div className="flex gap-1 text-[11px] font-bold">
                        <span className="text-purple-600">STEP {currentStep}</span>
                        <span className="opacity-20">/</span>
                        <span className="opacity-40">{totalSteps}</span>
                    </div>
                </div>
            )}

            <div className="font-black text-lg tracking-widest uppercase italic opacity-80">
                HOWDEN
            </div>
        </header>
    );
};

export default Header;
