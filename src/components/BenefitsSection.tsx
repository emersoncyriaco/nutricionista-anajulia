import React from 'react';
import { Check, Clock, Heart, DollarSign, Calendar, Shield } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Confiança e Criatividade",
      description: "Sinta-se segura para montar lanches que seu filho vai amar."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Tempo de Volta para Você",
      description: "Lanches prontos em menos de 5 minutos para manhãs mais tranquilas."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Saúde que se Vê (e se Come)",
      description: "Garanta uma alimentação equilibrada e veja seu filho comer melhor."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Economia Inteligente",
      description: "Reduza o gasto com produtos industrializados caros e pouco nutritivos."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Fim da Repetição",
      description: "Um ano inteiro de ideias para a lancheira nunca mais ser a mesma."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Paz de Espírito",
      description: "A certeza de que você está construindo hábitos saudáveis para o futuro do seu filho."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-white">
          O que você vai conquistar com a Lancheira Mágica:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-lime-400 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center group-hover:bg-lime-300 transition-colors duration-300">
                  <Check className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 font-poppins group-hover:text-lime-400 transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-gray-300 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};