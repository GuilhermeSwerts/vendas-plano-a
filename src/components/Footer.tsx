export const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-semibold tracking-tight">
                            <img src="/assets/logo-branca.png" className="w-25" alt="" />
                        </span>
                    </div>
                    <p className="text-white/40 max-w-sm leading-relaxed">
                        O clube de soluções para o dia a dia.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-sm uppercase tracking-widest text-primary">Plataforma</h4>
                    <ul className="space-y-2 text-sm text-white/50">
                        <li><a href="#hero" className="hover:text-white transition-colors">Ínicio</a></li>
                        <li><a href="#oque-e" className="hover:text-white transition-colors">O que é</a></li>
                        <li><a href="#problema" className="hover:text-white transition-colors">Dificuldades</a></li>
                        <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
                        <li><a href="#oferta" className="hover:text-white transition-colors">Oferta</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-sm uppercase tracking-widest text-primary">Suporte</h4>
                    <ul className="space-y-2 text-sm text-white/50">
                        <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-xs text-white/20">
                <p>© 2026 Kompleto. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};
