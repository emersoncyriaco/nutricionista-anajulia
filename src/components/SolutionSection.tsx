import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative stars around the product */}
      <div className="absolute top-20 left-20 star-decoration">⭐</div>
      <div className="absolute top-40 right-20 star-decoration">✨</div>
      <div className="absolute bottom-20 left-40 star-decoration">🌟</div>
      <div className="absolute bottom-40 right-40 star-decoration">💫</div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Product Image with magical elements */}
        <div className="relative mb-12">
          <div className="inline-block relative scrapbook-element">
            <div className="bg-gradient-to-br from-orange-primary to-yellow-400 p-8 rounded-3xl shadow-2xl">
              <img 
                src="/xpintTCpTSKgxFJhkQ9zTw.jpg"
                alt="E-book Lancheira Mágica"
                className="w-64 h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Magical elements around the product */}
            <div className="absolute -top-6 -left-6 text-4xl animate-bounce-gentle">🪄</div>
            <div className="absolute -top-6 -right-6 text-4xl animate-bounce-gentle">✨</div>
            <div className="absolute -bottom-6 -left-6 text-4xl animate-bounce-gentle">🎯</div>
            <div className="absolute -bottom-6 -right-6 text-4xl animate-bounce-gentle">💝</div>
          </div>
          
          {/* Hand-drawn arrows */}
          <div className="absolute top-1/2 -left-20 hidden lg:block">
            <div className="text-orange-primary text-6xl transform -rotate-12">↗️</div>
          </div>
          <div className="absolute top-1/2 -right-20 hidden lg:block">
            <div className="text-orange-primary text-6xl transform rotate-12">↖️</div>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-fredoka font-bold text-orange-primary mb-8">
          Apresentamos a solução que vai trazer sorrisos para a cozinha!
        </h3>
        
        <div className="bg-yellow-support p-8 rounded-3xl card-dashed max-w-3xl mx-auto">
          <p className="text-xl text-gray-primary font-nunito leading-relaxed">
            A "Lancheira Mágica" é o seu novo melhor amigo! Um guia completo, passo a passo, 
            com 365 ideias para você montar lanches que são nutritivos para eles e práticos para você. 
            Chega de dúvidas e de lanches sem graça. Prepare-se para receber lancheiras vazias e 
            bilhetinhos de <span className="text-orange-primary font-bold">"adorei, mamãe!"</span>.
          </p>
        </div>
      </div>
    </section>
  );
};