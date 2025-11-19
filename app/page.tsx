'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Sun,
  Shield,
  Zap,
  MapPin,
  Cloud,
  Users,
  CheckCircle,
  Cpu,
  Sunrise,
  DollarSign,
  ChevronDown,
  Mail,
  ChevronLeft,
  ChevronRight,
  Instagram,
} from 'react-feather';
import FloatingLines from '@/components/FloatingLines';
import LightRays from '@/components/LightRays';
import CountUp from '@/components/CountUp';
import { motion } from 'motion/react';

export default function Home() {
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  // State to track which card is currently hovered (0-3 for the 4 cards)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  // State to track which step card is open (1-4 for the step buttons)
  const [openStepCard, setOpenStepCard] = useState<number | null>(null);
  // State for photo carousel
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const carouselIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Parallax effect for background image
    const handleScroll = () => {
      if (!parallaxBgRef.current || !heroSectionRef.current) return;

      const scrolled = window.pageYOffset;
      const heroTop = heroSectionRef.current.offsetTop;
      const heroHeight = heroSectionRef.current.offsetHeight;
      const scrollPosition = scrolled - heroTop;

      // Only apply parallax when scrolling within the hero section
      if (scrollPosition >= 0 && scrollPosition <= heroHeight) {
        // Move background at 30% of scroll speed for subtle effect
        const translateY = scrollPosition * 0.3;
        parallaxBgRef.current.style.transform = `translateY(${translateY}px) translateZ(0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous carousel animation is handled by CSS
  // No JavaScript interval needed for continuous movement

  // Smooth scroll handler for navigation links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Calculate offset to account for any spacing needed
      const offset = 0; // Adjust if you have a fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="inicio"
        ref={heroSectionRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Fondo */}
        <div className="absolute inset-0">
          <div
            ref={parallaxBgRef}
            className="parallax-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-emerald-900/70" />
        </div>

        {/* Contenido */}
        <div className="relative z-20 container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
            <div className="text-left animate-fadeInUp">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur shadow-soft mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping" />
                <span className="text-xs md:text-sm text-slate-100 tracking-wide uppercase">
                  Energía solar inteligente en Bolivia
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-[1.05]">
                <span className="block drop-shadow">
                  <Image
                    src="/biovida-logo.webp"
                    alt="BioVida"
                    width={200}
                    height={80}
                    className="h-12 md:h-16 lg:h-20 w-auto"
                    priority
                  />
                </span>
                <span className="block text-slate-50 mt-4 md:mt-6 lg:mt-8">
                  Energía que Impulsa tu Futuro
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-200/80 mb-8 max-w-2xl">
                Diseñamos, instalamos y mantenemos sistemas fotovoltaicos de alto rendimiento,
                conectados a red y con respaldo de baterías, para hogares, empresas e industrias
                en toda Bolivia.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#contacto"
                  onClick={(e) => handleSmoothScroll(e, 'contacto')}
                  className="inline-flex items-center justify-center bg-solar text-slate-950 px-7 py-3.5 rounded-full font-semibold text-sm md:text-base shadow-soft hover:bg-solar-dark hover:translate-y-0.5 transition-all duration-200"
                >
                  ¡Cotiza tu proyecto!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#servicios"
                  onClick={(e) => handleSmoothScroll(e, 'servicios')}
                  className="inline-flex items-center justify-center border border-white/30 text-slate-50 px-7 py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-white/10 hover:border-white/60 transition-all duration-200"
                >
                  Ver servicios
                  <Sun className="w-4 h-4 ml-2" />
                </a>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 text-xs md:text-sm text-slate-200/70">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-emerald-500/20">
                    <Shield className="w-3.5 h-3.5" />
                  </span>
                  Garantía extendida en equipos
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-solar/20">
                    <Zap className="w-3.5 h-3.5" />
                  </span>
                  Sistemas conectados a red y off-grid
                </div>
              </div>
            </div>

            {/* Tarjeta lateral */}
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-soft animate-soft-float">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-solar-light mb-4">
                  Impacto BioVida
                </p>
                <div className="grid grid-cols-2 gap-4 text-slate-100 text-sm">
                  <div className="p-3 rounded-2xl bg-slate-950/40 border border-white/5">
                    <p className="text-[0.7rem] uppercase tracking-widest text-slate-400 mb-1">
                      Potencia instalada
                    </p>
                    <p className="text-2xl font-bold">
                      +<CountUp from={0} to={500} separator="," direction="up" duration={1} className="count-up-text" onStart={undefined} onEnd={undefined} /> kW
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/40 border border-white/5">
                    <p className="text-[0.7rem] uppercase tracking-widest text-slate-400 mb-1">
                      Proyectos completados
                    </p>
                    <p className="text-2xl font-bold">
                      +<CountUp from={0} to={50} separator="," direction="up" duration={1} className="count-up-text" onStart={undefined} onEnd={undefined} />
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/40 border border-white/5">
                    <p className="text-[0.7rem] uppercase tracking-widest text-slate-400 mb-1">
                      Toneladas de CO₂ mitigado
                    </p>
                    <p className="text-2xl font-bold">
                      +<CountUp from={0} to={1060} separator="," direction="up" duration={1} className="count-up-text" onStart={undefined} onEnd={undefined} /> Tn
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/40 border border-white/5">
                    <p className="text-[0.7rem] uppercase tracking-widest text-slate-400 mb-1">
                      Personas beneficiadas
                    </p>
                    <p className="text-2xl font-bold">
                      +<CountUp from={0} to={5000} separator="," direction="up" duration={1} className="count-up-text" onStart={undefined} onEnd={undefined} />
                    </p>
                  </div>
                </div>
                <div className="mt-5 text-xs text-slate-300">
                  Soluciones fotovoltaicas llave en mano, desde el estudio de factibilidad
                  hasta la operación y mantenimiento.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="flex flex-col items-center text-slate-200/80 text-xs">
            <span>Desliza para ver más</span>
            <ChevronDown className="w-6 h-6 mt-1 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ¿Qué hacemos? */}
      <section id="quienes-somos" className="py-20 bg-slate-950/95 border-t border-white/5 relative overflow-hidden">
        {/* FloatingLines Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* @ts-ignore - FloatingLines props are correctly typed in JSX but TS inference is incorrect */}
          <FloatingLines
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[5, 2, 5]}
            lineDistance={[8, 6, 4]}
            bendRadius={4.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-50">
              ¿Qué hacemos en BioVida?
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-10 leading-relaxed">
              En <span className="text-solar">BioVida</span> acompañamos a nuestros clientes en
              todo el ciclo de su proyecto solar: desde el primer estudio de factibilidad hasta la
              puesta en marcha y el mantenimiento a largo plazo. Integramos tecnología fotovoltaica
              de última generación con ingeniería eléctrica especializada para garantizar
              seguridad, ahorro y sostenibilidad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-slate-900/80 border border-white/5 p-6 rounded-2xl shadow-soft cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:bg-slate-900/90 group">
                <DollarSign className="w-9 h-9 mx-auto text-emerald-300 mb-4 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-lg font-semibold mb-2 text-slate-50 transition-colors duration-500 group-hover:text-emerald-300">Ahorro y retorno</h3>
                <p className="text-slate-300 text-sm">
                  Diseñamos sistemas con tiempos de retorno claros, logrando reducciones de hasta un
                  80% en la factura eléctrica según el caso.
                </p>
              </div>
              <div className="bg-slate-900/80 border border-white/5 p-6 rounded-2xl shadow-soft cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-solar/60 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:bg-slate-900/90 group">
                <Sunrise className="w-9 h-9 mx-auto text-solar mb-4 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-lg font-semibold mb-2 text-slate-50 transition-colors duration-500 group-hover:text-solar">Energía limpia</h3>
                <p className="text-slate-300 text-sm">
                  Aprovechamos la radiación solar de Bolivia para reducir tu huella de carbono y tu
                  dependencia de combustibles fósiles.
                </p>
              </div>
              <div className="bg-slate-900/80 border border-white/5 p-6 rounded-2xl shadow-soft cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:bg-slate-900/90 group">
                <Shield className="w-9 h-9 mx-auto text-emerald-300 mb-4 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-lg font-semibold mb-2 text-slate-50 transition-colors duration-500 group-hover:text-emerald-300">Calidad certificada</h3>
                <p className="text-slate-300 text-sm">
                  Trabajamos con marcas reconocidas y estándares internacionales para asegurar
                  durabilidad, respaldo y soporte técnico local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Full Height Infinite Carousel */}
      <section id="proyectos" className="h-screen relative overflow-hidden bg-slate-950">
        {/* Motion Carousel */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="flex h-full w-max"
            style={{ gap: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          >
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
                className="relative flex-shrink-0"
                style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}
              >
                <Image
                  src={src}
                  alt={`Proyecto BioVida ${(index % 6) + 1}`}
                  fill
                  className="object-cover"
                  priority={index < 2}
                  style={{ margin: 0, padding: 0, display: 'block' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-slate-900/30 to-transparent" />
              </div>
            ))}
          </motion.div>
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

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-slate-950 relative overflow-hidden">
        {/* LightRays Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* @ts-ignore - LightRays props are correctly typed in JSX but TS inference is incorrect */}
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#f3f3f3"
            raysSpeed={1.5}
            lightSpread={1.8}
            rayLength={2.2}
            followMouse={true}
            mouseInfluence={0.4}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Servicios BioVida
            </h2>
            <p className="text-slate-300 text-sm md:text-base">
              Integramos <span className="text-solar">energía renovable</span> y
              <span className="text-emerald-300"> servicios electrónicos</span> para ofrecer
              soluciones completas de sistemas fotovoltaicos en Bolivia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Energía Renovable */}
            <div className="bg-slate-900/80 border border-white/5 rounded-3xl p-8 shadow-soft hover:-translate-y-1 hover:border-solar/60 transition-all duration-200">
              <div className="flex items-center mb-6">
                <div className="bg-solar/15 p-3 rounded-2xl mr-4">
                  <Sun className="w-7 h-7 text-solar" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">Energía Renovable</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mt-1">
                    Sistemas fotovoltaicos
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-200 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>
                    Instalación de sistemas solares conectados a red (on-grid) y autónomos
                    (off-grid).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>
                    Diseño de sistemas de respaldo con baterías de litio y acumuladores de
                    energía.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>
                    Estudios de factibilidad técnica y económica para proyectos solares.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>
                    Optimización de consumo energético y reducción de la factura eléctrica.
                  </span>
                </li>
              </ul>
            </div>

            {/* Servicios Eléctricos / Electrónicos */}
            <div className="bg-slate-900/80 border border-white/5 rounded-3xl p-8 shadow-soft hover:-translate-y-1 hover:border-emerald-400/60 transition-all duration-200">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500/15 p-3 rounded-2xl mr-4">
                  <Cpu className="w-7 h-7 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">Servicios Electrónicos</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mt-1">
                    Operación & mantenimiento
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-200 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Operación y mantenimiento de plantas solares fotovoltaicas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Pruebas de rendimiento para baterías y paneles solares.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>
                    Suministro de componentes eléctricos DC y equipos de sistemas solares.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>
                    Monitoreo remoto y diagnóstico de sistemas para maximizar la vida útil.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section id="como-funciona" className="py-20 bg-slate-950/95 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              ¿Cómo Funciona? <span className="text-emerald-400">(Interactivo)</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-2">
              Descubre el proceso paso a paso de cómo instalamos y operamos sistemas fotovoltaicos
              para transformar la energía solar en electricidad limpia y sostenible.
            </p>
            <p className="text-slate-400 text-xs md:text-sm italic">
              👆 Haz clic en los números del diagrama para conocer cada paso del proceso
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-visible shadow-soft border border-white/10 bg-gradient-to-b from-sky-200 via-sky-100 to-blue-50">
              <Image
                src="/biovida-display.webp"
                alt="Sistema fotovoltaico BioVida - Factory con paneles solares"
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-3xl"
                priority
              />
              
              {/* Step 1 Button - Sun */}
              <button
                onClick={() => setOpenStepCard(openStepCard === 1 ? null : 1)}
                className="absolute top-[8%] left-[42%] w-[1.8vw] h-[1.8vw] min-w-[1.5rem] min-h-[1.5rem] md:w-[2.5vw] md:h-[2.5vw] md:min-w-[2rem] md:min-h-[2rem] max-w-[2.5rem] max-h-[2.5rem] rounded-full bg-emerald-500 text-white font-bold text-[clamp(0.75rem,1vw,1.25rem)] md:text-[clamp(0.875rem,1.2vw,1.25rem)] shadow-lg hover:scale-90 transition-transform duration-200 flex items-center justify-center z-10 border-0.5 border-slate-950"
                aria-label="Ver paso 1"
              >
                1
              </button>

              {/* Step 2 Button - Solar Panels */}
              <button
                onClick={() => setOpenStepCard(openStepCard === 2 ? null : 2)}
                className="absolute top-[20%] right-[35%] w-[1.8vw] h-[1.8vw] min-w-[1.5rem] min-h-[1.5rem] md:w-[2.5vw] md:h-[2.5vw] md:min-w-[2rem] md:min-h-[2rem] max-w-[2.5rem] max-h-[2.5rem] rounded-full bg-emerald-500 text-white font-bold text-[clamp(0.75rem,1vw,1.25rem)] md:text-[clamp(0.875rem,1.2vw,1.25rem)] shadow-lg hover:scale-90 transition-transform duration-200 flex items-center justify-center z-10 border-0.5 border-slate-950"
                aria-label="Ver paso 2"
              >
                2
              </button>

              {/* Step 3 Button - Inverter */}
              <button
                onClick={() => setOpenStepCard(openStepCard === 3 ? null : 3)}
                className="absolute top-[45%] right-[23%] w-[1.8vw] h-[1.8vw] min-w-[1.5rem] min-h-[1.5rem] md:w-[2.5vw] md:h-[2.5vw] md:min-w-[2rem] md:min-h-[2rem] max-w-[2.5rem] max-h-[2.5rem] rounded-full bg-emerald-500 text-white font-bold text-[clamp(0.75rem,1vw,1.25rem)] md:text-[clamp(0.875rem,1.2vw,1.25rem)] shadow-lg hover:scale-90 transition-transform duration-200 flex items-center justify-center z-10 border-0.5 border-slate-950"
                aria-label="Ver paso 3"
              >
                3
              </button>

              {/* Step 4 Button - Grid Connection */}
              <button
                onClick={() => setOpenStepCard(openStepCard === 4 ? null : 4)}
                className="absolute top-[60%] left-[7%] w-[1.8vw] h-[1.8vw] min-w-[1.5rem] min-h-[1.5rem] md:w-[2.5vw] md:h-[2.5vw] md:min-w-[2rem] md:min-h-[2rem] max-w-[2.5rem] max-h-[2.5rem] rounded-full bg-emerald-500 text-white font-bold text-[clamp(0.75rem,1vw,1.25rem)] md:text-[clamp(0.875rem,1.2vw,1.25rem)] shadow-lg hover:scale-90 transition-transform duration-200 flex items-center justify-center z-10 border-0.5 border-slate-950"
                aria-label="Ver paso 4"
              >
                4
              </button>

              {/* Step 5 Button - Building Usage */}
              <button
                onClick={() => setOpenStepCard(openStepCard === 5 ? null : 5)}
                className="absolute top-[52%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[1.8vw] h-[1.8vw] min-w-[1.5rem] min-h-[1.5rem] md:w-[2.5vw] md:h-[2.5vw] md:min-w-[2rem] md:min-h-[2rem] max-w-[2.5rem] max-h-[2.5rem] rounded-full bg-emerald-500 text-white font-bold text-[clamp(0.75rem,1vw,1.25rem)] md:text-[clamp(0.875rem,1.2vw,1.25rem)] shadow-lg hover:scale-90 transition-transform duration-200 flex items-center justify-center z-10 border-0.5 border-slate-950"
                aria-label="Ver paso 5"
              >
                5
              </button>

              {/* Step 1 Card */}
              {openStepCard === 1 && (
                <div className="absolute top-1 left-1 -translate-x-1/2 -translate-y-1/2 md:top-[8%] md:left-[calc(42%+clamp(2rem,3vw,3rem))] md:translate-x-0 md:translate-y-0 w-[clamp(14rem,90%,20rem)] md:w-[clamp(16rem,20vw,20rem)] bg-white rounded-2xl shadow-xl p-[clamp(1rem,1.5vw,1.5rem)] z-20 border border-slate-200 animate-fadeIn">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[clamp(1rem,1.25vw,1.25rem)] font-bold text-slate-900">Paso 1: Energía Solar</h3>
                    <button
                      onClick={() => setOpenStepCard(null)}
                      className="text-slate-400 hover:text-slate-600 transition-colors text-[clamp(1.25rem,1.5vw,1.5rem)] leading-none flex-shrink-0"
                      aria-label="Cerrar"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-slate-600 text-[clamp(0.75rem,0.875vw,0.875rem)] leading-relaxed">
                    El sol emite radiación solar que es capturada por los paneles fotovoltaicos,
                    iniciando el proceso de generación de energía limpia y renovable.
                  </p>
                </div>
              )}

              {/* Step 2 Card */}
              {openStepCard === 2 && (
                <div className="absolute top-1 left-1 -translate-x-1/2 -translate-y-1/2 md:top-[20%] md:right-[calc(35%+clamp(2rem,3vw,3rem))] md:left-auto md:translate-x-0 md:translate-y-0 w-[clamp(14rem,90%,20rem)] md:w-[clamp(16rem,20vw,20rem)] bg-white rounded-2xl shadow-xl p-[clamp(1rem,1.5vw,1.5rem)] z-20 border border-slate-200 animate-fadeIn">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[clamp(1rem,1.25vw,1.25rem)] font-bold text-slate-900">Paso 2: Paneles Solares</h3>
                    <button
                      onClick={() => setOpenStepCard(null)}
                      className="text-slate-400 hover:text-slate-600 transition-colors text-[clamp(1.25rem,1.5vw,1.5rem)] leading-none flex-shrink-0"
                      aria-label="Cerrar"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-slate-600 text-[clamp(0.75rem,0.875vw,0.875rem)] leading-relaxed">
                    Los paneles solares capturan la luz solar y la convierten en energía eléctrica en forma de corriente continua (DC).
                  </p>
                </div>
              )}

              {/* Step 3 Card */}
              {openStepCard === 3 && (
                <div className="absolute top-1 left-1 -translate-x-1/2 -translate-y-1/2 md:top-[45%] md:right-[calc(23%+clamp(2rem,3vw,3rem))] md:left-auto md:translate-x-0 md:translate-y-0 w-[clamp(14rem,90%,20rem)] md:w-[clamp(16rem,20vw,20rem)] bg-white rounded-2xl shadow-xl p-[clamp(1rem,1.5vw,1.5rem)] z-20 border border-slate-200 animate-fadeIn">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[clamp(1rem,1.25vw,1.25rem)] font-bold text-slate-900">Paso 3: Inversor</h3>
                    <button
                      onClick={() => setOpenStepCard(null)}
                      className="text-slate-400 hover:text-slate-600 transition-colors text-[clamp(1.25rem,1.5vw,1.5rem)] leading-none flex-shrink-0"
                      aria-label="Cerrar"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-slate-600 text-[clamp(0.75rem,0.875vw,0.875rem)] leading-relaxed">
                    El inversor convierte la corriente continua (DC) en corriente alterna (AC), que es la electricidad que usa el edificio.
                  </p>
                </div>
              )}

              {/* Step 4 Card */}
              {openStepCard === 4 && (
                <div className="absolute top-1 left-1 -translate-x-1/2 -translate-y-1/2 md:top-[60%] md:left-[calc(7%+clamp(2rem,3vw,3rem))] md:translate-x-0 md:translate-y-0 w-[clamp(14rem,90%,20rem)] md:w-[clamp(16rem,20vw,20rem)] bg-white rounded-2xl shadow-xl p-[clamp(1rem,1.5vw,1.5rem)] z-20 border border-slate-200 animate-fadeIn">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[clamp(1rem,1.25vw,1.25rem)] font-bold text-slate-900">Paso 4: Conexión a la Red</h3>
                    <button
                      onClick={() => setOpenStepCard(null)}
                      className="text-slate-400 hover:text-slate-600 transition-colors text-[clamp(1.25rem,1.5vw,1.5rem)] leading-none flex-shrink-0"
                      aria-label="Cerrar"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-slate-600 text-[clamp(0.75rem,0.875vw,0.875rem)] leading-relaxed">
                    El sistema se conecta a la red eléctrica. Si hay exceso de energía, se envía a la red. Si falta energía, la red la provee.
                  </p>
                </div>
              )}

              {/* Step 5 Card */}
              {openStepCard === 5 && (
                <div className="absolute top-1 left-1 -translate-x-1/2 -translate-y-1/2 md:top-[calc(52%+clamp(2rem,3vw,3rem))] md:left-[45%] md:-translate-x-1/2 md:translate-y-0 w-[clamp(14rem,90%,20rem)] md:w-[clamp(16rem,20vw,20rem)] bg-white rounded-2xl shadow-xl p-[clamp(1rem,1.5vw,1.5rem)] z-20 border border-slate-200 animate-fadeIn">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[clamp(1rem,1.25vw,1.25rem)] font-bold text-slate-900">Paso 5: Uso de la Energía</h3>
                    <button
                      onClick={() => setOpenStepCard(null)}
                      className="text-slate-400 hover:text-slate-600 transition-colors text-[clamp(1.25rem,1.5vw,1.5rem)] leading-none flex-shrink-0"
                      aria-label="Cerrar"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-slate-600 text-[clamp(0.75rem,0.875vw,0.875rem)] leading-relaxed">
                    La energía generada se usa para alimentar la operación del edificio: luces, maquinaria y equipos.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950/95 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {/* Card 1: Potencia instalada */}
            <div className="h-full">
              <div
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-slate-900/80 border p-6 rounded-2xl shadow-soft cursor-pointer transition-all duration-500 h-full relative ${
                  hoveredCard === 0
                    ? 'border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.3)] bg-slate-900/90 z-50'
                    : 'border-white/5 z-0'
                }`}
                style={{
                  transform: hoveredCard === 0 ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center center',
                  transition: 'transform 500ms ease-in-out',
                }}
              >
                <Zap
                  className={`w-10 h-10 mx-auto text-solar mb-4 transition-transform duration-500 ${
                    hoveredCard === 0 ? 'scale-110' : ''
                  }`}
                />
                <h3
                  className={`text-3xl font-bold text-slate-50 transition-colors duration-500 ${
                    hoveredCard === 0 ? 'text-emerald-300' : ''
                  }`}
                >
                  +500 kW
                </h3>
                <p className="text-slate-300 text-sm mt-1">Potencia instalada</p>
                <div
                  className={`mt-4 overflow-hidden transition-all duration-500 ${
                    hoveredCard !== null
                      ? 'max-h-32 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Capacidad total de energía solar instalada en proyectos activos, generando
                    electricidad limpia y sostenible.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2: Proyectos */}
            <div className="h-full">
              <div
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-slate-900/80 border p-6 rounded-2xl shadow-soft cursor-pointer transition-all duration-500 h-full relative ${
                  hoveredCard === 1
                    ? 'border-solar/60 shadow-[0_0_30px_rgba(251,191,36,0.3)] bg-slate-900/90 z-50'
                    : 'border-white/5 z-0'
                }`}
                style={{
                  transform: hoveredCard === 1 ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center center',
                  transition: 'transform 500ms ease-in-out',
                }}
              >
                <MapPin
                  className={`w-10 h-10 mx-auto text-solar mb-4 transition-transform duration-500 ${
                    hoveredCard === 1 ? 'scale-110' : ''
                  }`}
                />
                <h3
                  className={`text-3xl font-bold text-slate-50 transition-colors duration-500 ${
                    hoveredCard === 1 ? 'text-solar-light' : ''
                  }`}
                >
                  +50
                </h3>
                <p className="text-slate-300 text-sm mt-1">Proyectos a nivel nacional</p>
                <div
                  className={`mt-4 overflow-hidden transition-all duration-500 ${
                    hoveredCard !== null
                      ? 'max-h-32 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Proyectos completados exitosamente en diferentes regiones de Bolivia, desde
                    sistemas residenciales hasta instalaciones industriales.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3: CO₂ mitigados */}
            <div className="h-full">
              <div
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-slate-900/80 border p-6 rounded-2xl shadow-soft cursor-pointer transition-all duration-500 h-full relative ${
                  hoveredCard === 2
                    ? 'border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.3)] bg-slate-900/90 z-50'
                    : 'border-white/5 z-0'
                }`}
                style={{
                  transform: hoveredCard === 2 ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center center',
                  transition: 'transform 500ms ease-in-out',
                }}
              >
                <Cloud
                  className={`w-10 h-10 mx-auto text-solar mb-4 transition-transform duration-500 ${
                    hoveredCard === 2 ? 'scale-110' : ''
                  }`}
                />
                <h3
                  className={`text-3xl font-bold text-slate-50 transition-colors duration-500 ${
                    hoveredCard === 2 ? 'text-emerald-300' : ''
                  }`}
                >
                  +1060 Tn
                </h3>
                <p className="text-slate-300 text-sm mt-1">CO₂ mitigados</p>
                <div
                  className={`mt-4 overflow-hidden transition-all duration-500 ${
                    hoveredCard !== null
                      ? 'max-h-32 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Toneladas de dióxido de carbono evitadas gracias a la energía solar, contribuyendo
                    significativamente a la lucha contra el cambio climático.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 4: Personas beneficiadas */}
            <div className="h-full">
              <div
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-slate-900/80 border p-6 rounded-2xl shadow-soft cursor-pointer transition-all duration-500 h-full relative ${
                  hoveredCard === 3
                    ? 'border-solar/60 shadow-[0_0_30px_rgba(251,191,36,0.3)] bg-slate-900/90 z-50'
                    : 'border-white/5 z-0'
                }`}
                style={{
                  transform: hoveredCard === 3 ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center center',
                  transition: 'transform 500ms ease-in-out',
                }}
              >
                <Users
                  className={`w-10 h-10 mx-auto text-solar mb-4 transition-transform duration-500 ${
                    hoveredCard === 3 ? 'scale-110' : ''
                  }`}
                />
                <h3
                  className={`text-3xl font-bold text-slate-50 transition-colors duration-500 ${
                    hoveredCard === 3 ? 'text-solar-light' : ''
                  }`}
                >
                  +5000
                </h3>
                <p className="text-slate-300 text-sm mt-1">Personas beneficiadas</p>
                <div
                  className={`mt-4 overflow-hidden transition-all duration-500 ${
                    hoveredCard !== null
                      ? 'max-h-32 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Familias y empresas que ahora disfrutan de energía renovable, reduciendo costos y
                    mejorando su calidad de vida con tecnología sostenible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner Section */}
      <section className="py-16 md:py-20 border-t border-white/5 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Circle Card with Logo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white flex items-center justify-center p-8 shadow-lg">
                <div className="relative w-full h-full">
                  <Image
                    src="/biologic-logo.webp"
                    alt="Biologic Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left md:pt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4">
                Conoce Biologic
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4">
                Estamos lanzando una nueva marca llamada <span className="font-semibold text-solar">Biologic</span>. 
                ¿Quieres saber más sobre nuestros próximos productos y servicios?
              </p>
              <p className="text-slate-400 text-sm md:text-base">
                Pregúntanos sobre Biologic en el formulario de contacto a continuación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 border-t border-white/5 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('/biovida-background-last.webp')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-emerald-900/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-3">
              Contáctanos
          </h2>
            <p className="text-slate-300 text-sm md:text-base mb-6">
            Escríbenos para recibir un estudio preliminar de tu consumo y una propuesta adaptada a
            tu hogar, empresa o industria en Bolivia.
          </p>
            {/* Instagram Link */}
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/biovidabo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 text-slate-300 hover:text-solar transition-colors duration-200 px-4 py-2 rounded-lg border border-white/20 hover:border-solar/50"
              >
                <Instagram className="w-6 h-6" />
                <span className="text-sm font-medium">Síguenos en Instagram</span>
              </a>
            </div>
          </div>

          {/* Two Cards Container */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Email Card */}
            <div className="bg-slate-900/70 border border-white/5 rounded-2xl p-8 md:p-10 shadow-soft shadow-lg flex flex-col">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-solar/20 mb-4">
                  <Mail className="w-6 h-6 text-solar" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50 mb-2">
                  Envíanos un correo
                </h3>
                <p className="text-slate-400 text-sm">
                  Completa el formulario y te responderemos por email
                </p>
              </div>

              <form className="space-y-5 flex-1 flex flex-col" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                
                const subject = encodeURIComponent('Consulta desde BioVida');
                const body = encodeURIComponent(
                  `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:`
                );
                
                window.location.href = `mailto:ventas@biovida.com.bo?subject=${subject}&body=${body}`;
              }}>
                <div>
                  <label htmlFor="name-email" className="block text-sm font-medium text-slate-200 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name-email"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-solar focus:border-transparent transition-all duration-200"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email-email" className="block text-sm font-medium text-slate-200 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-solar focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone-email" className="block text-sm font-medium text-slate-200 mb-2">
                    Número de teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone-email"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-solar focus:border-transparent transition-all duration-200"
                    placeholder="+591 70000000"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-auto inline-flex items-center justify-center bg-solar text-slate-950 px-8 py-3.5 rounded-lg font-semibold text-sm md:text-base shadow-soft hover:bg-solar-dark hover:translate-y-0.5 transition-all duration-200"
                >
                  Enviar correo
                  <Mail className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-900/70 border border-white/5 rounded-2xl p-8 md:p-10 shadow-soft shadow-lg flex flex-col">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 mb-4">
                  <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.173-.149.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .96 4.534.96 10.08c0 1.752.413 3.4 1.141 4.865L.06 24l9.218-2.41a11.87 11.87 0 002.771.332c5.555 0 10.09-4.534 10.09-10.09 0-2.688-1.045-5.216-2.943-7.113"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-50 mb-2">
                  Escríbenos por WhatsApp
                </h3>
                <p className="text-slate-400 text-sm">
                  Chatea con nosotros directamente por WhatsApp
                </p>
              </div>

              <form className="space-y-5 flex-1 flex flex-col" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const phone = formData.get('phone') as string;
                
                const text = encodeURIComponent(
                  `Hola, soy ${name}. Mi email es ${email} y mi número es ${phone}. Me gustaría recibir más información sobre BioVida.`
                );
                
                window.open(`https://wa.me/59178111078?text=${text}`, '_blank');
              }}>
                <div>
                  <label htmlFor="name-whatsapp" className="block text-sm font-medium text-slate-200 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name-whatsapp"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email-whatsapp" className="block text-sm font-medium text-slate-200 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email-whatsapp"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone-whatsapp" className="block text-sm font-medium text-slate-200 mb-2">
                    Número de teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone-whatsapp"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="+591 70000000"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-auto inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-semibold text-sm md:text-base shadow-soft hover:translate-y-0.5 transition-all duration-200"
                >
                  Abrir WhatsApp
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.173-.149.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .96 4.534.96 10.08c0 1.752.413 3.4 1.141 4.865L.06 24l9.218-2.41a11.87 11.87 0 002.771.332c5.555 0 10.09-4.534 10.09-10.09 0-2.688-1.045-5.216-2.943-7.113"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="mb-2">
                <Image
                  src="/biovida-logo.webp"
                  alt="BioVida"
                  width={150}
                  height={60}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Energía solar para un futuro sostenible en Bolivia. Diseñamos, instalamos y mantenemos sistemas fotovoltaicos de alto rendimiento.
              </p>
            </div>

            {/* Quick Links & Services - Merged */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-50 uppercase tracking-wider">Enlaces y Servicios</h4>
              <nav className="flex flex-col space-y-3">
                <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')} className="text-slate-400 hover:text-solar transition-colors text-sm">
                  Inicio
                </a>
                <a href="#quienes-somos" onClick={(e) => handleSmoothScroll(e, 'quienes-somos')} className="text-slate-400 hover:text-solar transition-colors text-sm">
                  ¿Qué hacemos?
                </a>
                <a href="#proyectos" onClick={(e) => handleSmoothScroll(e, 'proyectos')} className="text-slate-400 hover:text-solar transition-colors text-sm">
                  Proyectos
                </a>
                <a href="#servicios" onClick={(e) => handleSmoothScroll(e, 'servicios')} className="text-slate-400 hover:text-solar transition-colors text-sm">
                  Servicios
                </a>
                <a href="#como-funciona" onClick={(e) => handleSmoothScroll(e, 'como-funciona')} className="text-slate-400 hover:text-solar transition-colors text-sm">
                  ¿Cómo Funciona?
                </a>
                <a href="#contacto" onClick={(e) => handleSmoothScroll(e, 'contacto')} className="text-slate-400 hover:text-solar transition-colors text-sm">
                  Contacto
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-50 uppercase tracking-wider">Contacto</h4>
              <div className="flex flex-col space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-solar mt-0.5 flex-shrink-0" />
                  <div className="text-slate-400">
                    <p>Calle J. Lara #3610 / Casilla N. 1864</p>
                    <p>Santa Cruz - Bolivia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-solar mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="text-slate-400">
                    <p>Tel: (591 - 3) 3420257</p>
                    <p>Fax: (591 - 3) 3435244</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-solar flex-shrink-0" />
                  <a href="mailto:ventas@biovida.com.bo" className="text-slate-400 hover:text-solar transition-colors">
                    ventas@biovida.com.bo
                  </a>
                </div>
              </div>
            </div>

            {/* Creator Contact */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-50 uppercase tracking-wider">¿Te gustó esta página?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Si te gustó el diseño y la funcionalidad de este sitio web, Contáctanos para crear algo similar para tu proyecto.
              </p>
              <div className="flex flex-col space-y-2">
                <a 
                  href="mailto:lucianolichten@gmail.com?subject=Interesado en desarrollo web&body=Hola, me gustó el diseño de BioVida y me interesa trabajar contigo."
                  className="inline-flex items-center text-slate-300 hover:text-solar transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contáctanos
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex justify-center items-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} BioVida. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

