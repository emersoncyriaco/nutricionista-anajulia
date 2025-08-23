import React from 'react';
import { Clock, ShoppingCart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-yellow-support py-12 px-6 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 star-decoration">⭐</div>
      <div className="absolute top-20 right-20 star-decoration">✨</div>
      <div className="absolute bottom-20 left-20 star-decoration">🌟</div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Logo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-primary rounded-full animate-bounce-gentle">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-fredoka font-bold text-orange-primary mb-6 leading-tight">
              A Lancheira do seu filho nunca mais será a mesma!
            </h1>

            {/* Subtitle */}
            <div className="flex items-start justify-center lg:justify-start mb-8">
              <Clock className="w-6 h-6 text-blue-primary mr-3 mt-1 flex-shrink-0" />
              <p className="text-xl md:text-2xl text-gray-primary font-nunito leading-relaxed">
                Descubra o segredo da 'Lancheira Mágica': 365 ideias de lanchinhos saudáveis e divertidos, 
                prontos em menos de 5 minutos, para acabar de vez com o stress matinal.
              </p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={scrollToPricing}
              className="btn-primary text-lg animate-wiggle"
            >
              QUERO TRANSFORMAR A LANCHEIRA AGORA!
            </button>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative scrapbook-element">
              <img 
                src="/5992f256-fe88-457d-aa93-b41b7b83061f.png"
                alt="Criança feliz com lancheira colorida"
                className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
              />
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce-gentle">🎒</div>
              <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce-gentle">🍎</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};