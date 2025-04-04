import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function ContactSection() {
    return (
        <section id="contact" className="pt=24 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-6 md:px-20">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Fale Conosco</h2>
                <div className="flex flex-col items-center">
                    <div className="flex gap-8 justify-center mb-12">
                        <a href="https://api.whatsapp.com/send?phone=558899998167&text=Gostaria%20de%20saber%20mais%20sobre%20a%20Lima%20Fight" target="_blank" className="bg-gray-700 p-6 rounded-full hover:scale-110 transition transform">
                            <FaWhatsapp className="text-green-500" size={32} />
                        </a>
                        <a href="https://instagram.com/Lima_fight" target="_blank" className="bg-gray-700 p-6 rounded-full hover:scale-110 transition transform">
                            <FaInstagram className="text-pink-500" size={32} />
                        </a>
                        <a href="https://instagram.com/Lima_fight" target="_blank" className="bg-gray-700 p-6 rounded-full hover:scale-110 transition transform">
                            <FaFacebook className="text-blue-500" size={32} />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card Telefone */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                            <div className="flex justify-center mb-4">
                                <FaPhone className="text-green-400" size={36} />
                            </div>
                            <p className="text-lg">(88) 9 9998-1675</p>
                        </div>
                        {/* Card E-mail */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                            <div className="flex justify-center mb-4">
                                <FaEnvelope className="text-blue-400" size={36} />
                            </div>
                            <p className="text-lg">Danniellimmah1@hotmail.com</p>
                        </div>
                        {/* Card Endereço */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                            <div className="flex justify-center mb-4">
                                <FaMapMarkerAlt className="text-red-400" size={36} />
                            </div>
                            <p className="text-lg">Rua Vereador Antônio Viana de Araújo, 420 - Cedro, CE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
