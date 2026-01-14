export const FinalSales = () => {
    const finalBenefits = [
        "Acesso a descontos exclusivos a centenas de lojas",
        "Acesso a descontos exclusivos em restaurantes",
        "Acesso a descontos em lazer",
        "Acesso a descontos em bem estar",
        "Acesso a conteúdos gratuitos, como cursos, jogos, revistas",
        "Participação em sorteio mensal de R$5.000,00",
    ];

    return (
        <section className="py-24 px-6 bg-background-dark relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -z-10" />

            <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="text-3xl md:text-4xl font-black text-center uppercase italic tracking-tighter text-text-soft">
                    Aproveite esta oferta exclusiva hoje e garanta:
                </h2>

                <div className="glass rounded-[40px] border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side: Offer */}
                    <div className="p-12 md:p-16 bg-background-navy/50 flex flex-col justify-center space-y-8 relative">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-accent uppercase tracking-widest">Kompleto Start</h3>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-text-soft">R$</span>
                                <span className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">1,50</span>
                                <span className="text-2xl font-bold text-text-muted">/ mês</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20 w-fit">
                            <span className="text-xl">🔒</span>
                            <p className="text-text-soft font-bold text-sm">
                                Valor promocional fixo. Sem reajustes depois.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Benefits List */}
                    <div className="p-12 md:p-16 bg-background-navy flex flex-col justify-center space-y-8">
                        <ul className="space-y-6">
                            {finalBenefits.map((benefit, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-text-soft font-3xl leading-tight">
                                        {benefit}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <button className="w-full py-6 bg-cta-primary hover:bg-cta-hover text-background-dark font-black text-2xl rounded-2xl transition-all shadow-[0_20px_50px_rgba(250,204,21,0.3)] hover:scale-[1.02] active:scale-95 uppercase tracking-tighter">
                                Quero Garantir Esse Valor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
