import React from 'react';
import { Check } from 'lucide-react';

export const OfferDetailsSection: React.FC = () => {
  const mainProductBenefits = [
    "Guia da Alimentação Infantil Saudável",
    "Mais de 365 Receitas de café da manhã, almoço, café da tarde e jantar (sem repetir)",
    "Cardápios completos com lista de compras",
    "Detalhamento nas formas de preparo",
    "Alternativas de ingredientes saudáveis",
    "Atualizações mensais",
    "e muito mais…"
  ];

  const bonuses = [
    {
      number: "#1",
      title: "Receitas de Pãezinhos, doces e Pizzas",
      description: "Deliciosas receitas em versões mais saudáveis, com alternativas sem açúcar e opções sem glúten, permitindo que seu filho desfrute de guloseimas sem comprometer a saúde.",
      image: "/receitas paes, pizzas, doces.png"
    },
    {
      number: "#2",
      title: "Incentive seu filho a aceitar novos alimentos através do lúdico",
      description: "Estratégias criativas e brincadeiras que transformam a hora da refeição em diversão, ajudando crianças resistentes a experimentar e aceitar novos alimentos de forma natural e sem conflitos.",
      image: "/YtViy9SlSV-Ogrx_25NvYw.jpg"
    },
    {
      number: "#3",
      title: "Manual de como montar lancheiras na prática",
      description: "Guia completo com combinações balanceadas, dicas de organização e ideias rápidas para montar lancheiras nutritivas, práticas e atrativas que seu filho vai adorar e que cabem na sua rotina.",
      image: "/xLfPMjgiRT-Q-W8sJ4NsdA.jpg"
    },
    {
      number: "#4",
      title: "Receitas especiais para crianças com alergias",
      description: "Seleção exclusiva de receitas adaptadas para as alergias alimentares mais comuns (leite, ovo, soja, amendoim), garantindo que todas as crianças possam se alimentar com segurança, sabor e nutrição.",
      image: "/olcr0xAbRsap8qSPlruTiw.jpg"
    },
    {
      number: "#5",
      title: "Guia de Congelamento e Organização das receitas",
      description: "Técnicas eficientes de congelamento, armazenamento e um sistema prático de planejamento semanal que economiza tempo e dinheiro, permitindo preparar refeições saudáveis mesmo na correria do dia a dia.",
      image: "/tpWxgDiuRO2ENimd9SGjdQ.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-support relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce-gentle">🎁</div>
      <div className="absolute top-10 right-10 text-4xl animate-bounce-gentle">✨</div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-fredoka font-bold text-center mb-16 text-orange-primary">
          VOCÊ VAI RECEBER AO ADQUIRIR O SEU ACESSO:
        </h2>
        
        {/* Main Product Block */}
        <div className="bg-yellow-support p-8 md:p-12 rounded-3xl card-dashed mb-16 scrapbook-element">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <img 
                  src="/livro-doutora-nova-capa.png"
                  alt="Guia Lanchinho Animado"
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 text-4xl bg-white rounded-full p-2 shadow-lg">
                  📚
                </div>
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              <h3 className="text-2xl font-fredoka font-bold text-orange-primary mb-2">
                ITEM 01
              </h3>
              <h4 className="text-3xl font-fredoka font-bold text-gray-primary mb-6">
                Guia Alimentar KIDS
              </h4>
              
              <div className="space-y-4">
                {mainProductBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-2xl">✅</div>
                    <span className="text-lg text-gray-primary font-nunito leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transition Phrases */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-fredoka font-bold text-orange-primary mb-4">
            E NÃO PARA POR AÍ…
          </h3>
          <h3 className="text-3xl md:text-4xl font-fredoka font-bold text-gray-primary mb-8">
            TEM MAIS!
          </h3>
          
          <h2 className="text-3xl md:text-4xl font-fredoka font-bold text-orange-primary mb-4">
            5 Bônus Exclusivos
          </h2>
          <p className="text-xl text-gray-primary font-nunito">
            Você também vai receber…
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="space-y-12 mb-20">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center card-dashed p-8 bg-white scrapbook-element ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Bonus Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <img 
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute -top-3 -right-3 bg-orange-primary text-white px-4 py-2 rounded-full font-bold text-lg font-nunito">
                    {bonus.number}
                  </div>
                </div>
              </div>
              
              {/* Bonus Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h4 className="text-2xl font-fredoka font-bold text-orange-primary mb-2">
                  {bonus.number} – BÔNUS HOJE!
                </h4>
                <h5 className="text-xl font-nunito font-bold text-gray-primary mb-4">
                  {bonus.title}
                </h5>
                <p className="text-lg text-gray-primary font-nunito leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};