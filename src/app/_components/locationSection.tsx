export function LocationSection() {
    return (
        <section id="localizacao" className="bg-gray-100 py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Texto com informações */}
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Nossa Localização</h2>
                    <p className="text-lg text-gray-700 mb-4">Venha nos visitar! Estamos localizados em um ponto de fácil acesso, com estrutura completa para seu treino.</p>
                    <ul className="text-gray-700 space-y-2">
                        <li><strong>Endereço:</strong> Rua Exemplo, 123 - Centro, Cidade/UF</li>
                        <li><strong>Telefone:</strong> (99) 99999-9999</li>
                        <li><strong>Email:</strong> contato@limafight.com</li>
                        <li><strong>Horário:</strong> Seg a Sáb - 6h às 22h</li>
                    </ul>
                </div>

                {/* Mapa incorporado */}
                <div className="w-full h-80 shadow-lg rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0048699938364!2d-43.20937248442082!3d-22.910481785009227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f3f9c1d401f%3A0x51a9a24078f8d170!2sAcademia%20Exemplo!5e0!3m2!1spt-BR!2sbr!4v1618319452835!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full border-0"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
