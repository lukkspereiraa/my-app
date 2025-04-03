import Image from "next/image";
import logo from "../../../public/logo_limafight.png";
import { Facebook, Instagram } from "lucide-react";

export function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center text-white h-screen px-6 md:px-20 bg-black gap-10">
            {/* Logo grande */}
            <div className="flex justify-center">
                <Image src={logo} alt="Logo da empresa" width={300} height={300} />
            </div>

            {/* Descrição */}
            <div className="max-w-lg text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Bem-vindo à Lima Fight</h1>
                <p className="text-lg md:text-xl text-gray-300">
                    Treine com os melhores! Oferecemos modalidades para todos os níveis, com
                    professores experientes e um ambiente de alta performance.
                </p>
            </div>

            {/* Contatos */}
            <div className="absolute bottom-10 flex gap-6">
                <a href="https://wa.me/seu-numero" target="_blank" className="text-green-500 hover:scale-110 transition-transform">
                   
                </a>
                <a href="https://instagram.com/seu-instagram" target="_blank" className="text-pink-500 hover:scale-110 transition-transform">
                    <Instagram size={40} />
                </a>
                <a href="https://facebook.com/seu-facebook" target="_blank" className="text-blue-500 hover:scale-110 transition-transform">
                    <Facebook size={40} />
                </a>
            </div>
        </section>
    );
}
