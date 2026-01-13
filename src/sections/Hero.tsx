export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden bg-radial-[at_center_center] from-background-gradient to-background-dark">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 right-0 h-full pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />

            <div className="max-w-6xl mx-auto px-6 text-center space-y-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    Mês dos Investimentos
                </div>

                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic text-white">
                    O Plano que vai <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-[#FF6B00]">Guiar seus resultados</span>
                </h1>

                <div className="space-y-4 max-w-3xl mx-auto">
                    <p className="text-lg md:text-2xl text-text-soft font-bold leading-tight">
                        Enquanto outros só apostam, você concorre e ainda economiza.
                    </p>
                    <p className="text-md md:text-xl text-text-muted leading-relaxed">
                        Construa agora o plano que vai guiar seus investimentos em 2026 com <span className="text-accent font-bold">30% OFF + 3 bonus</span> pra capturar os maiores retornos da década.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6 pt-4">
                    <div className="flex flex-col items-center">
                        <div className="flex items-end gap-3 mb-2">
                            <span className="text-text-darker line-through text-lg">DE: R$ 79,90</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-text-soft text-xl font-medium">R$</span>
                                <span className="text-white text-6xl font-black tracking-tighter">55</span>
                                <span className="text-text-soft text-2xl font-bold">,93</span>
                                <span className="text-text-muted text-sm ml-2">/ MÊS</span>
                            </div>
                        </div>
                        <p className="text-accent text-[10px] font-bold tracking-widest uppercase mb-6">Plano Anual</p>
                    </div>

                    <button className="w-full max-w-md py-6 bg-cta-primary hover:bg-cta-hover text-background-dark font-black text-2xl rounded-2xl transition-all shadow-[0_20px_50px_rgba(250,204,21,0.3)] hover:scale-[1.02] active:scale-95 uppercase tracking-tighter">
                        Quero Participar Agora
                    </button>

                    <p className="text-text-muted text-sm font-medium">
                        Concorra a <span className="text-white font-bold">R$ 5.000 todo mês!</span>
                    </p>
                    <p className="text-text-darker text-xs max-w-md">
                        Por apenas R$ 1,50/mês, participe de sorteios mensais e tenha acesso a descontos em lojas, serviços, lazer e alimentação.
                    </p>
                </div>
            </div>
        </section>
    );
};
