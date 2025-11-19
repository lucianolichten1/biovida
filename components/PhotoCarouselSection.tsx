import Image from 'next/image';

export default function PhotoCarouselSection() {
  return (
    <section id="proyectos" className="h-screen relative overflow-hidden bg-slate-950">
      {/* CSS Carousel - Pure CSS for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="carousel-track">
          {[
            '/biovida-5.webp',
            '/biovida-6.webp',
            '/biovida-7.webp',
            '/biovida-8.webp',
            '/biovida-background-last.webp',
            '/biovida-equipo.webp',
            // Duplicate for seamless infinite loop
            '/biovida-5.webp',
            '/biovida-6.webp',
            '/biovida-7.webp',
            '/biovida-8.webp',
            '/biovida-background-last.webp',
            '/biovida-equipo.webp',
          ].map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 carousel-slide"
            >
              <Image
                src={src}
                alt={`Proyecto BioVida ${(index % 6) + 1}`}
                fill
                className="object-cover"
                priority={index < 6}
                loading={index < 6 ? 'eager' : 'lazy'}
                quality={index < 6 ? 90 : 75}
                sizes="100vw"
                style={{ margin: 0, padding: 0, display: 'block' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-slate-900/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center px-6" style={{ paddingTop: '22%' }}>
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-50 drop-shadow-lg">
            BioVida en Acción
          </h2>
          <p className="text-lg md:text-xl text-slate-200 drop-shadow-md">
            Descubre nuestros proyectos de energía solar y conoce al equipo que hace posible la transición energética en Bolivia
          </p>
        </div>
      </div>
    </section>
  );
}

