export const Solution = () => {
    return (
        <section id="oque-e" className="bg-[#010218] relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />

            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="py-24 px-6 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase italic tracking-tighter leading-none">
                            O <span className="text-accent">Kompleto</span> existe para <br />
                            <span className="text-white">facilitar sua vida.</span>
                        </h2>

                        <p className="text-text-muted text-xl md:text-2xl font-normal leading-relaxed max-w-3xl mx-auto">
                            Você paga pouco, economiza sempre com seu Clube de Vantagens e ainda concorre a um prêmio mensal que pode mudar o seu mês.
                        </p>

                        <div className="pt-6 flex items-center justify-center">
                            <button className="px-12 py-6 bg-cta-primary hover:bg-cta-hover text-background-dark font-bold text-2xl rounded-2xl transition-all shadow-[0_20px_40px_rgba(250,204,21,0.2)] hover:scale-105 active:scale-95 uppercase tracking-tighter">
                                Quero Aproveitar
                            </button>
                        </div>
                    </div>

                    <img src="/assets/utilizacao.png" className="w-full h-full" alt="" />
                </div>
            </div>
        </section>
    );
};
