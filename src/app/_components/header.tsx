"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import para lidar com a URL corretamente
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../../../public/logo_limafight.png";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Pega o caminho atual da página

    useEffect(() => {
        const scrollToSection = () => {
            const hash = window.location.hash.replace("#", "");
            const section = document.getElementById(hash);
            if (section) {
                setTimeout(() => {
                    window.scrollTo({
                        top: section.offsetTop - 80, // Ajusta para header fixo
                        behavior: "smooth",
                    });
                }, 100);
            }
        };

        if (typeof window !== "undefined") {
            scrollToSection(); // Rola para a seção ao carregar a página
            window.addEventListener("hashchange", scrollToSection);
            return () => window.removeEventListener("hashchange", scrollToSection);
        }
    }, [pathname]); // Executa sempre que a URL muda

    const handleNavigation = (id: string) => {
        setIsOpen(false); // Fecha o menu mobile
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: "smooth",
                });
                window.history.pushState(null, "", `#${id}`); // Atualiza a URL sem recarregar a página
            }
        }, 50);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black text-white h-20 flex items-center justify-between px-6 md:px-10 shadow-lg">
            {/* Logo e Nome */}
            <div className="flex items-center gap-2">
                <Image alt="logo da academia" src={logo} width={50} height={50} />
                <button onClick={() => handleNavigation("home")} className="text-2xl font-bold hover:border-b-2 transition-all">
                    Home
                </button>
            </div>

            {/* Menu para Desktop */}
            <nav className="hidden md:flex gap-6">
                <button onClick={() => handleNavigation("localizacao")} className="text-2xl font-bold hover:border-b-2 transition-all">
                    Localização
                </button>
                <button onClick={() => handleNavigation("contact")} className="text-2xl font-bold hover:border-b-2 transition-all">
                    Contato
                </button>
                <button onClick={() => handleNavigation("modalidades")} className="text-2xl font-bold hover:border-b-2 transition-all">
                    Modalidades
                </button>
            </nav>

            {/* Botão do Menu Mobile */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <nav className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-4 py-5 shadow-lg">
                    <button onClick={() => handleNavigation("localizacao")} className="text-2xl font-bold hover:border-b-2 transition-all">
                        Localização
                    </button>
                    <button onClick={() => handleNavigation("contact")} className="text-2xl font-bold hover:border-b-2 transition-all">
                        Contato
                    </button>
                    <button onClick={() => handleNavigation("modalidades")} className="text-2xl font-bold hover:border-b-2 transition-all">
                        Modalidades
                    </button>
                </nav>
            )}
        </header>
    );
}
