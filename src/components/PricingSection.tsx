import React, { useState } from 'react';
import { Check, X, Clock } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handleEssentialClick = () => {
    setShowPopup1(true);
  };

  const handlePopup1Decline = () => {
    setShowPopup1(false);
    setShowPopup2(true);
  };

  const handlePopup2Decline = () => {
    setShowPopup2(false);
    // Redirect to checkout for R$ 14,90
    console.log('Redirect to checkout R$ 14,90');
  };

  const handleCheckout = (price: string) => {
    console.log(`Redirect to checkout ${price}`);
    // Here you would implement the actual checkout redirect
  };

  return (
    <>
      <section id="pricing-section" className="pricing-section-value-anchor relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce-gentle">💰</div>
        <div className="absolute top-10 right-10 text-4xl animate-bounce-gentle">🎯</div>
        
        <div className="container max-w-7xl mx-auto px-6">
          {/* Main Title */}
          <h2 className="section-title text-3xl md:text-4xl font-fredoka font-bold text-center mb-6 text-orange-primary">
            Finalmente, o acesso que vai trazer paz para as suas manhãs!
          </h2>
          <p className="section-subtitle text-xl text-gray-primary font-nunito text-center mb-16">
            Escolha o plano ideal para a sua família e comece hoje mesmo.
          </p>
          
          {/* Pricing Cards */}
          <div className="pricing-grid">
            {/* CARTÃO PRINCIPAL (PACOTE COMPLETO) */}
            <div className="price-card featured">
              <div className="featured-badge">⭐ O MAIS VENDIDO</div>
              <h3 className="plan-title">Pacote Completo</h3>
              <p className="plan-description">A solução definitiva para lancheiras saudáveis, práticas e divertidas.</p>
              
              <div className="price-list-wrapper">
                <p className="list-header">Ao investir hoje, você leva TUDO isso:</p>
                <ul>
                  <li><span className="check-icon">✅</span> <strong>Guia Principal:</strong> Lanchinho Animado (+365 Receitas)</li>
                  <li><span className="check-icon">✅</span> <strong>Receitas de Pães, Doces e Pizzas Saudáveis</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Guia do Lúdico para Vencer a Seletividade</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Manual Prático para Montar Lancheiras</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Guia Especial para Crianças com Alergias</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Guia de Congelamento e Organização</strong></li>
                  <li><span className="fire-icon">🔥</span> <strong>Acesso à nossa Comunidade VIP de Mães</strong></li>
                  <li><span className="gift-icon">🎁</span> <strong>Guia de Marmitinhas para o Almoço</strong></li>
                </ul>
              </div>

              <div className="price-box">
                <p className="price-text">Por apenas:</p>
                <p className="main-price">R$ 27,90</p>
              </div>
              <a 
                href="https://go.pepperpay.com.br/3rzb1"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary block text-center no-underline"
              >
                SIM, QUERO O PACOTE COMPLETO AGORA!
              </a>
            </div>

            {/* CARTÃO SECUNDÁRIO (ACESSO ESSENCIAL) */}
            <div className="price-card">
              <h3 className="plan-title">Acesso Essencial</h3>
              <p className="plan-description">O guia principal para começar a inovar.</p>
              
              <div className="price-list-wrapper minimal">
                <ul>
                  <li><span className="check-icon">✅</span> Lanchinho Animado (+365 Receitas)</li>
                  <li><span className="check-icon">✅</span> Mais de 365 Receitas de café da manhã, almoço, café da tarde e jantar (sem repetir)</li>
                </ul>
              </div>

              <div className="price-box">
                <p className="price-text">Por apenas:</p>
                <p className="main-price">R$ 14,90</p>
              </div>
              <button 
                onClick={handleEssentialClick}
                className="cta-button secondary"
              >
                QUERO SÓ O GUIA PRINCIPAL
              </button>
            </div>
          </div>

          {/* Guarantee Footer */}
          <div className="guarantee-footer">
            <img src="/selo_7D_garantia-removebg-preview.png" alt="Garantia de 7 dias" />
            <span>Compra segura | Acesso imediato | Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* Popup 1 - First Downsell */}
      {showPopup1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative animate-bounce-gentle">
            <button 
              onClick={() => setShowPopup1(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-fredoka font-bold text-orange-primary mb-4">
                ESPERE! OFERTA EXCLUSIVA PARA VOCÊ!
              </h3>
              
              <p className="text-gray-primary font-nunito mb-6 leading-relaxed">
                Só agora, libere o Pacote Completo com todos os 7 bónus por um preço que não vai ver de novo. 
                Leve tudo, não por R$ 27,90, mas por apenas...
              </p>
              
              <div className="text-3xl font-fredoka font-bold text-blue-primary mb-6">
                R$ 24,90
              </div>
              
              <button 
                onClick={() => handleCheckout('R$ 24,90')}
                className="btn-primary w-full text-lg mb-4 animate-wiggle"
              >
                SIM, QUERO APROVEITAR O DESCONTO!
              </button>
              
              <button 
                onClick={handlePopup1Decline}
                className="text-gray-500 underline text-sm font-nunito hover:text-gray-700"
              >
                Não, obrigado. Prefiro pagar R$ 14,90 só pelo guia.
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup 2 - Second Downsell */}
      {showPopup2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative animate-bounce-gentle">
            <button 
              onClick={() => setShowPopup2(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-2xl font-fredoka font-bold text-orange-primary mb-4">
                ÚLTIMA CHANCE!
              </h3>
              
              <p className="text-gray-primary font-nunito mb-6 leading-relaxed">
                Entendido. Mas não podia deixar você ir sem esta oferta final. 
                Leve o Pacote Completo com todos os 7 bónus por apenas...
              </p>
              
              <div className="text-3xl font-fredoka font-bold text-blue-primary mb-6">
                R$ 19,90
              </div>
              
              <button 
                onClick={() => window.open('https://go.pepperpay.com.br/xpub0', '_blank')}
                className="btn-primary w-full text-lg mb-4 animate-wiggle"
              >
                OK, AGORA EU QUERO!
              </button>
              
              <button 
                onClick={() => window.open('https://go.pepperpay.com.br/rzkxo', '_blank')}
                className="text-gray-500 underline text-sm font-nunito hover:text-gray-700"
              >
                Não, quero mesmo só o guia por R$ 14,90.
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};