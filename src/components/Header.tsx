export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <nav className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full border-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-background-dark shadow-[0_0_20px_rgba(255,145,0,0.4)] transition-transform hover:rotate-12">
                        A
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Vendas<span className="text-accent font-black italic">PlanoA</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
                    <a href="#hero" className="hover:text-white transition-colors">Início</a>
                    <a href="#oque-e" className="hover:text-white transition-colors">O que é</a>
                    <a href="#problema" className="hover:text-white transition-colors">Dificuldades</a>
                    <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
                </div>

                <button className="bg-cta-primary hover:bg-cta-hover text-background-dark px-6 py-2 rounded-full text-sm font-black transition-all shadow-lg hover:shadow-cta-primary/20 hover:scale-105 active:scale-95 uppercase tracking-tighter">
                    Entrar
                </button>
            </nav>
        </header>
    );
};
