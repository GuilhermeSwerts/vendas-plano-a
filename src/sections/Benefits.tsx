export const Benefits = () => {
    const benefits = [
        { icon: "🎯", text: "Participação mensal em sorteio de ", bold: "R$ 5.000" },
        { icon: "🛍️", text: "Acesso ao Clube de Vantagens", bold: "" },
        { icon: "💸", text: "Descontos em lojas, serviços, lazer e alimentação", bold: "" },
        { icon: "🔄", text: "Cancelamento simples", bold: "" },
    ];

    const brands = [
        { name: "Centauro", discount: "até 20% de desconto", color: "bg-[#8B1A1A]", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
        { name: "Dominos", discount: "até 20% de desconto", color: "bg-[#005491]", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" },
        { name: "Petz", discount: "Descontos variados", color: "bg-[#003B71]", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&q=80" },
    ];

    return (
        <section id="beneficios" className="py-24 px-6 bg-background-dark">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="space-y-6">
                    <h2 className="mb-10    text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                        Você terá <span className="text-accent decoration-2">acesso a:</span>
                    </h2>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((b, i) => (
                            <li key={i} className="flex items-center gap-4 text-xl font-bold p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors">
                                <span className="text-3xl">{b.icon}</span>
                                <p>
                                    {b.text} <span className="text-accent">{b.bold}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-8">
                    <p className="text-center text-text-soft text-3xl font-black uppercase tracking-widest">
                        Economize todos os dias com as marcas que você já ama.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {brands.map((brand, i) => (
                            <div key={i} className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-background-navy border border-white/5">
                                <img src={brand.img} alt={brand.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6 space-y-1">
                                    <div className="px-3 py-1 bg-accent text-background-dark text-[10px] font-black rounded-lg inline-block uppercase italic">Oferta</div>
                                    <h4 className="text-2xl font-black italic uppercase tracking-tighter">{brand.name}</h4>
                                    <p className="text-text-muted text-sm">{brand.discount}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 text-accent">
                        <button className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10">←</button>
                        <button className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10">→</button>
                    </div>
                </div>

                <p className="text-center text-text-soft text-3xl font-black uppercase tracking-widest">
                    Economize todos os dias com as marcas que você já ama.
                </p>

                <div className="pt-5 text-center">
                    <button className="w-full max-w-md py-6 bg-cta-primary hover:bg-cta-hover text-background-dark font-black text-2xl rounded-2xl transition-all shadow-[0_20px_50px_rgba(250,204,21,0.3)] hover:scale-[1.02] active:scale-95 uppercase tracking-tighter">
                        Quero Aproveitar
                    </button>
                </div>
            </div>
        </section>
    );
};
