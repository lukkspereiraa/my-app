export function LocationSection() {
    return (
        <section id="localizacao" className="bg-gray-100 py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Texto com informações */}
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Nossa Localização</h2>
                    <p className="text-lg text-gray-700 mb-4">Venha nos visitar! Estamos localizados em um ponto de fácil acesso, com estrutura completa para seu treino.</p>
                    <ul className="text-gray-700 space-y-2">
                        <li><strong>Endereço:</strong> Rua Vereador Antônio Viana de Araújo, 420 - Cedro, CE</li>
                        <li><strong>Telefone:</strong> (88) 9 9998-1675</li>
                        <li><strong>Email:</strong> Danniellimmah1@hotmail.com</li>
                        <li><strong>Horário:</strong> Seg a Sáb - 6h às 22h</li>
                    </ul>
                </div>

                {/* Mapa incorporado */}
                <div className="w-full h-80 shadow-lg rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.277957524206!2d-38.235337!3d-6.602757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b8ca4ec58a6ad3%3A0x627c5aef86c3ce6f!2sR.%20Ver.%20Ant%20Viana%20Ara%C3%BAjo%2C%20724%20-%20Cedro%2C%20CE%2C%2063400-000!5e0!3m2!1spt-BR!2sbr!4v1712166572927!5m2!1spt-BR!2sbr"
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
