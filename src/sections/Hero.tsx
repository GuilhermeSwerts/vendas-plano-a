export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden bg-radial-[at_center_center] from-background-gradient to-background-dark">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 right-0 h-full pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />

            <div className="mb-10 max-w-6xl mx-auto px-6 text-center space-y-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    2026 COMEÇA KOMPLETO
                </div>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1] uppercase italic text-white">
                    ENQUANTO OUTROS SÓ APOSTAM, VOCÊ CONCORRE
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-[#FF6B00]">
                        e ainda economiza!
                    </span>
                </h1>

                <div className="space-y-4 max-w-3xl mx-auto">
                    <p className="text-lg md:text-2xl text-text-soft font-semibold leading-tight">
                        Concorra a R$ 5.000 todo mês!
                    </p>
                    <p className="text-md md:text-xl text-text-muted leading-relaxed">
                        Por apenas <span className="text-accent font-semibold">R$ 1,50/mês</span>, participe de sorteios mensais e tenha acesso a descontos em lojas, serviços, lazer, bem estar, saúde e alimentação.
                    </p>
                </div>
                <button className="w-full max-w-md py-6 bg-cta-primary hover:bg-cta-hover text-background-dark font-bold text-2xl rounded-2xl transition-all shadow-[0_20px_50px_rgba(250,204,21,0.3)] hover:scale-[1.02] active:scale-95 uppercase tracking-tighter">
                    Quero Participar Agora
                </button>

            </div>
        </section>
    );
};
