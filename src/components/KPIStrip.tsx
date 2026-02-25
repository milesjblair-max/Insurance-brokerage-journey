import React from 'react';
import { KPI } from '@/lib/types';

interface Props {
    kpis: KPI[];
}

const KPIStrip: React.FC<Props> = ({ kpis }) => {
    return (
        <div className="bg-black border-y border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {kpis.map((kpi, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-3xl md:text-5xl font-bold mb-2 group-hover:text-accent transition-colors">
                                {kpi.value}
                            </div>
                            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                                {kpi.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KPIStrip;
