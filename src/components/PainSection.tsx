import React from 'react';
import { Clock, Frown, ScrollIcon as Broccoli } from 'lucide-react';

export const PainSection: React.FC = () => {
  const pains = [
    {
      icon: <Clock className="w-8 h-8 text-orange-primary" />,
      emoji: "⏰",
      text: "Falta tempo e criatividade na correria da manhã?"
    },
    {
      icon: <Frown className="w-8 h-8 text-orange-primary" />,
      emoji: "😟",
      text: "Sente culpa por usar industrializados de novo?"
    },
    {
      icon: <Broccoli className="w-8 h-8 text-orange-primary" />,
      emoji: "🥦",
      text: "Seu filho torce o nariz para tudo que é saudável?"
    }
  ];

  return (
    <section className="py-20 bg-yellow-support relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-3xl animate-bounce-gentle">😰</div>
      <div className="absolute top-10 right-10 text-3xl animate-bounce-gentle">🤔</div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Support Image */}
        <div className="text-center mb-12">
          <img 
            src="https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
            alt="Mãe preocupada na cozinha"
            className="w-64 h-48 object-cover rounded-3xl mx-auto shadow-lg scrapbook-element"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-fredoka font-bold text-center mb-12 text-orange-primary">
          A hora de montar a lancheira parece uma batalha?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div 
              key={index}
              className="card-dashed p-8 text-center scrapbook-element"
            >
              <div className="text-6xl mb-4">{pain.emoji}</div>
              <div className="flex justify-center mb-4">
                {pain.icon}
              </div>
              <p className="text-lg text-gray-primary font-nunito font-semibold leading-relaxed">
                {pain.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};