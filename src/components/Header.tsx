export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <nav className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full border-white/5">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold tracking-tight text-white">
                        <img src="/assets/logo-branca.png" className="w-25" alt="" />
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-normal text-text-muted">
                    <a href="#hero" className="hover:text-white transition-colors">Início</a>
                    <a href="#oque-e" className="hover:text-white transition-colors">O que é</a>
                    <a href="#problema" className="hover:text-white transition-colors">Dificuldades</a>
                    <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
                    <a href="#oferta" className="hover:text-white transition-colors">Oferta</a>
                </div>

                <a href="https://kompleto.app.br/Account/LoginClientes" target="_blank " className="bg-cta-primary hover:bg-cta-hover text-background-dark px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-cta-primary/20 hover:scale-105 active:scale-95 uppercase tracking-tighter">
                    Entrar
                </a>
            </nav>
        </header>
    );
};
