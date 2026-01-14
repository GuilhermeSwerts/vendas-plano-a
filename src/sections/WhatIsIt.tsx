export const WhatIsIt = () => {
    return (
        <section id="oque-e" className="py-24 px-6 bg-[#010218] relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto space-y-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
                                O que é o <span className="text-accent underline decoration-4 underline-offset-8">Kompleto?</span>
                            </h2>
                            <p className="text-text-soft text-xl max-w-2xl mx-auto font-medium">
                                O Kompleto é um clube de soluções para o dia a dia.
                            </p>
                        </div>
                        <p className="text-text-muted text-lg leading-relaxed">
                            Você paga uma mensalidade acessível e passa a ter acesso a benefícios que ajudam a economizar e lidar melhor com os imprevistos do mês.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="p-6 rounded-2xl bg-background-navy border border-white/5 space-y-2">
                                <span className="text-accent font-bold text-sm uppercase tracking-widest">Simples</span>
                                <p className="text-text-soft font-bold">Assinatura acessível, sem burocracia</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex gap-4 items-center">
                                <div className="flex-1 space-y-1">
                                    <span className="text-accent font-bold text-sm uppercase tracking-widest">Útil</span>
                                    <p className="text-text-soft font-bold">Benefícios reais para o dia a dia</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-background-navy border border-white/5 space-y-2">
                                <span className="text-accent font-bold text-sm uppercase tracking-widest">Sem pegadinhas</span>
                                <p className="text-text-soft font-bold">Cancelamento simples, sem fidelidade</p>
                            </div>
                        </div>
                    </div>

                    <img src="/assets/imagem-celular.png" className="w-500" alt="" />
                </div>
            </div>
        </section>
    );
};
