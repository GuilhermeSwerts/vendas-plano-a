export const Solution = () => {
    return (
        <section className="py-24 px-6 bg-background-dark text-center border-b border-white/5">
            <div className="max-w-4xl mx-auto space-y-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
                    O <span className="text-accent">Kompleto</span> existe para <br />
                    <span className="text-white">facilitar sua vida.</span>
                </h2>

                <p className="text-text-muted text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                    Você paga pouco, economiza sempre com seu Clube de Vantagens e ainda concorre a um prêmio mensal que pode mudar o seu mês.
                </p>

                <div className="pt-6">
                    <button className="px-12 py-6 bg-cta-primary hover:bg-cta-hover text-background-dark font-black text-2xl rounded-2xl transition-all shadow-[0_20px_40px_rgba(250,204,21,0.2)] hover:scale-105 active:scale-95 uppercase tracking-tighter">
                        Quero Aproveitar
                    </button>
                </div>
            </div>
        </section>
    );
};
