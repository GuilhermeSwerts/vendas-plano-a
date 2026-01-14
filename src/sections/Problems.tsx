export const Problems = () => {
    return (
        <section id="problema" className="py-24 px-6 bg-background-navy relative border-y border-white/5">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <h2 className="text-4xl md:text-7xl font-bold uppercase italic tracking-tighter leading-none">
                    Todo mês <span className="text-accent">parece igual?</span>
                </h2>

                <div className="space-y-6 text-xl md:text-3xl font-semibold text-text-soft leading-tight">
                    <p>Você não gasta com uma coisa só.</p>
                    <p>Um almoço fora, um serviço, um lazer, uma compra inesperada.</p>
                </div>

                <div className="space-y-4 pt-8 border-t border-white/10 max-w-2xl mx-auto text-xl md:text-3xl">
                    <p
                        className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-[#FF6B00]">
                        Quando você percebe, o dinheiro já foi. E sobra aquela sensação de aperto — mesmo sem ter feito nada "errado".
                    </p>
                </div>

                <div className="glass p-10 rounded-3xl space-y-8 text-left border-accent/20">
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <span className="text-3xl">👉</span>
                            <p className="text-2xl font-semibold text-white">O problema não é um gasto grande.</p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-3xl">👉</span>
                            <p className="text-2xl font-semibold text-white">É a soma dos pequenos gastos do dia a dia.</p>
                        </li>
                    </ul>
                    <div className="pt-6">
                        <button className="w-full py-5 bg-cta-primary hover:bg-cta-hover text-background-dark font-bold text-xl rounded-2xl transition-all uppercase tracking-tighter">
                            Quero concorrer a 5 mil e ter acesso ao Clube de Vantagens
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
