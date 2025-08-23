import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      image: "/f459653c-0875-43d6-a823-6995c9b21174.jpg",
      text: "Salvou minhas manhãs! Meu filho está amando a variedade e a lancheira volta sempre vazia. Recomendo demais!",
      author: "Mariana S., mãe do Lucas"
    },
    {
      id: 2,
      image: "/ea1f69c8-ef43-471d-bf22-06ce5681fd82.jpg",
      text: "Esse guia mudou tudo! Finalmente consigo fazer lanches saudáveis e super rápidos. As receitas são deliciosas e práticas.",
      author: "Joana P., mãe da Sofia"
    },
    {
      id: 3,
      image: "/263d0bb7-e012-4c26-973e-0bec42c0f628.jpg",
      text: "O bônus de receitas para alergias foi um presente! Lanches seguros e gostosos para minha filha. Muito obrigada!",
      author: "Carla M., mãe da Laura"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-yellow-support relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce-gentle">💬</div>
      <div className="absolute top-10 right-10 text-4xl animate-bounce-gentle">❤️</div>
      <div className="absolute bottom-10 left-10 text-4xl animate-bounce-gentle">👩‍👧‍👦</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-bounce-gentle">🍎</div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-fredoka font-bold text-orange-primary mb-4">
            Lancheiras Reais, Crianças Felizes!
          </h2>
          <p className="text-xl text-gray-primary font-nunito">
            Deslize para ver o que as mamães que usam a Lancheira Mágica estão dizendo (e fazendo!)
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-orange-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-orange-primary" />
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto card-dashed scrapbook-element h-96">
                    {/* Image Container - Now takes most of the space */}
                    <div className="testimonial-image-container relative flex-grow min-h-[220px]">
                      <img 
                        src={testimonial.image}
                        alt={`Lancheira feita por ${testimonial.author}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-orange-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                        ⭐ Real
                      </div>
                    </div>
                    
                    {/* Content Container - Now more compact */}
                    <div className="testimonial-content p-5 relative bg-white flex-shrink-0">
                      {/* Quote icon */}
                      <div className="absolute top-[-10px] left-4 text-orange-primary text-5xl opacity-20 font-serif leading-none">"</div>
                      
                      <p className="testimonial-text text-sm text-gray-primary font-nunito italic leading-relaxed mb-3 relative z-10">
                        {testimonial.text}
                      </p>
                      
                      <div className="testimonial-author text-right">
                        <p className="font-nunito font-bold text-orange-primary text-sm">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-gray-500 font-nunito">
                          Cliente verificada ✅
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-orange-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-orange-primary h-1 rounded-full transition-all duration-500"
                style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-2 font-nunito">
              {currentSlide + 1} de {testimonials.length} depoimentos
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-primary font-nunito">
          <span className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
            <span className="text-green-500 mr-2">✅</span>
            Depoimentos reais
          </span>
          <span className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
            <span className="text-blue-500 mr-2">👥</span>
            +500 mães satisfeitas
          </span>
          <span className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
            <span className="text-orange-500 mr-2">⭐</span>
            Avaliação 4.9/5
          </span>
        </div>
      </div>
    </section>
  );
};