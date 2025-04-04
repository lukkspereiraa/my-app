import Image from "next/image";
import box from "../../../public/boxe.png"
import muayThai from "../../../public/muayThai.png"
import jiujitsu from "../../../public/jiujutsu.png"
import kids from "../../../public/kids.png"
import karate from "../../../public/karate.png"

const modalities = [
    { name: "Muay Thai", price: "R$ 60,00", description: "Treinamento de golpes com técnicas tailandesas.", image: muayThai },
    { name: "Jiu-Jitsu", price: "R$ 60,00", description: "Arte suave focada em alavancas e finalizações.", image: jiujitsu },
    { name: "Jiu-Jitsu Kids", price: "R$ 60,00", description: "O ensino de jiu jitsu para crianças.", image: kids },
    { name: "Boxe", price: "R$ 60,00", description: "Técnicas de socos e movimentação intensa.", image: box },
    { name: "Karatê", price: "R$ 60,00", description: "É uma arte que faz o uso de todas as partes do corpo para auto-defesa.", image: karate },
];

export function ModalitiesCard() {
    return (
        <section id="modalidades" className="py-16 px-6 md:px-20 bg-gray-900 text-white text-center">
            <h2 className="text-4xl font-bold mb-12">Nossas Modalidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {modalities.map((modality, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="mb-4">
                            <Image src={modality.image} alt={modality.name} width={300} height={200} className="rounded-md object-cover w-full h-full" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">{modality.name}</h3>
                        <p className="text-lg text-gray-300">{modality.description}</p>
                        <span className="block text-xl font-bold mt-4 text-green-400">{modality.price}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}