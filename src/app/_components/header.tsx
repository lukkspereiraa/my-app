"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../../../public/logo_limafight.png";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black text-white h-20 flex items-center justify-between px-6 md:px-10 shadow-lg">
            {/* Logo e Nome */}
            <div className="flex items-center gap-2">
                <Image alt="logo da academia" src={logo} width={50} height={50} />
                <a href="#home" className="text-2xl font-bold hover:border-b-2 transition-all">
                    Home
                </a>
            </div>

            {/* Menu para Desktop */}
            <nav className="hidden md:flex gap-6">
                <a href="#localizacao" className="text-2xl font-bold hover:border-b-2 transition-all">
                    Localização
                </a>
                <a href="#contato" className="text-2xl font-bold hover:border-b-2 transition-all">
                    Contato
                </a>
                <a href="#modalidades" className="text-2xl font-bold hover:border-b-2 transition-all">
                    Modalidades
                </a>
            </nav>

            {/* Botão do Menu Mobile */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Menu Mobile (animado) */}
            <nav
                className={`absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-4 py-5 transform transition-all duration-500 ease-in-out ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                }`}
            >
                <a href="#localizacao" className="text-2xl font-bold hover:border-b-2 transition-all">
                    Localização
                </a>
                <a href="#contato" className="text-2xl font-bold hover:border-b-2 transition-all">
                    Contato
                </a>
                <a href="#modalidades" className="text-2xl font-bold hover:border-b-2 transition-all">
                    Modalidades
                </a>
            </nav>
        </header>
    );
}
