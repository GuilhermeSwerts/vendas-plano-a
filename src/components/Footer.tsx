export const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight">
                            <img src="/assets/logo-branca.png" className="w-25" alt="" />
                        </span>
                    </div>
                    <p className="text-white/40 max-w-sm leading-relaxed">
                       O clube de soluções para o dia a dia.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Plataforma</h4>
                    <ul className="space-y-2 text-sm text-white/50">
                        <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Cursos</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Suporte</h4>
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
