import Image from "next/image";
import logo from "../../../public/logo_limafight.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function HeroSection() {
    return (
        <section id="hero" className="flex flex-col justify-center text-white h-screen px-6 md:px-20 bg-black gap-10 relative text-center">
            {/* Logo e Descrição */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl mx-auto">
                <Image src={logo} alt="Logo da empresa" width={250} height={250} className="drop-shadow-lg" />
                <div className="max-w-lg text-center md:text-left space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Bem-vindo à Lima Fight</h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Eleve seu treinamento a outro nível. Modalidades para todos os perfis, com
                        profissionais qualificados e uma estrutura de excelência.
                    </p>
                </div>
            </div>
            
            {/* Contatos */}
            <div className="flex gap-6 text-gray-400 mt-10 justify-center">
                <a href="https://wa.me/seu-numero" target="_blank" className="hover:text-green-500 transition-colors">
                    <FaWhatsapp size={32} />
                </a>
                <a href="https://instagram.com/seu-instagram" target="_blank" className="hover:text-pink-500 transition-colors">
                    <FaInstagram size={32} />
                </a>
                <a href="https://facebook.com/seu-facebook" target="_blank" className="hover:text-blue-500 transition-colors">
                    <FaFacebook size={32} />
                </a>
            </div>
        </section>
    );
}
