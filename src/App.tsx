import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  ChevronRight, 
  Sparkles, 
  Globe, 
  Command, 
  Music, 
  Cpu, 
  Gamepad2, 
  Play, 
  Check, 
  Volume2, 
  Layers, 
  Sliders, 
  ArrowRight,
  ChevronLeft,
  ChevronDown,
  MessageCircle,
  Star
} from "lucide-react";

// Types for the interactive model configuration
interface BrandModel {
  id: string;
  name: string;
  color: string;
  image: string;
  badgeColor: string;
  details: {
    acoustic: string;
    anc: string;
    battery: string;
  };
}

const BRANDS_MODELS: BrandModel[] = [
  {
    id: "model-aura",
    name: "Rose Quartz Aura",
    color: "#E297B2",
    badgeColor: "bg-pink-500",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1200",
    details: {
      acoustic: "99.8% Spatial Alignment",
      anc: "Active Isolation Pro (-42dB)",
      battery: "48 hours Ultra-low-latency"
    }
  },
  {
    id: "model-onyx",
    name: "Onyx Cyber Core",
    color: "#9D7BFF",
    badgeColor: "bg-[#9D7BFF]",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200",
    details: {
      acoustic: "99.9% Quantum Depth",
      anc: "Dynamic Neutralization (-45dB)",
      battery: "60 hours Core Duration"
    }
  },
  {
    id: "model-chrome",
    name: "Solar Titanium",
    color: "#FFBD3E",
    badgeColor: "bg-amber-400",
    image: "https://images.unsplash.com/photo-1484755560695-a4c7477ab95b?auto=format&fit=crop&q=80&w=1200",
    details: {
      acoustic: "99.6% Warm Analog Tone",
      anc: "Hybrid Isolation (-38dB)",
      battery: "40 hours Studio Charge"
    }
  }
];

const INDUSTRIES_DATA = [
  {
    category: "Marketing",
    title: "On-demand asset amplification",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",
    description: "Create high-quality on-brand assets for every campaign using our image generation and editing tools.",
    highlights: ["10x Output velocity", "Consistent brand guardrails", "Adaptive format aspect-ratios"],
    icon: Sparkles
  },
  {
    category: "Gaming",
    title: "Next-gen volumetric mechanics",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=1000",
    description: "Build immersive worlds with our 3D and 4D video models that take volumetric generative media to the next level.",
    highlights: ["Instant high-poly assets", "4D temporal coherence", "Native esbuild meshes output"],
    icon: Gamepad2
  },
  {
    category: "Entertainment",
    title: "Cinematic final-cut deployment",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000",
    description: "From storyboarding to color grading, our image and video tools help you get to the final cut faster.",
    highlights: ["Vector storyboard generation", "Intelligent rotoscoping pro", "Automated LUTs transfer"],
    icon: Music
  }
];

const REVIEWS_DATA = [
  {
    logo: "ELECTRONIC ARTS",
    quote: "Electronic Arts Partners With James Cameron-Backed Stability AI for Game Developer Tools That Serve as Smarter Paintbrushes",
    source: "Variety",
    date: "May 20, 2026"
  },
  {
    logo: "UNIVERSAL MUSIC GROUP",
    quote: "Universal Music Group integrates deep model weights to empower audio synthesis with structural brand safety rules",
    source: "Billboard",
    date: "April 18, 2026"
  },
  {
    logo: "ARM ARCHITECTURE",
    quote: "Arm licenses custom on-device silicon neural matrices designed to compute high-definition diffusion models under 1.5 Watts",
    source: "Teardown News",
    date: "February 11, 2026"
  }
];

export default function App() {
  const [promptText, setPromptText] = useState("Vivid rose-gold headphone, warm golden hour backlighting, photorealistic portrait shot, octane render, beautiful braid strands");
  const [isPrompting, setIsPrompting] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const ROTATING_WORDS = ["landing page", "multipágina", "e‑commerce"];
  const [wordIndex, setWordIndex] = useState(0);
  const selectedBrandModel = BRANDS_MODELS[wordIndex % BRANDS_MODELS.length];
  const [selectedLang, setSelectedLang] = useState<"es" | "en">("es");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Prompt suggestions
  const PROMPT_SUGGESTIONS = [
    "Warm sunset cinematic light, golden studio vibes, hyper-detailed over-ear headphones, 8k",
    "Cyberpunk neon purple reflections, dark premium layout, close-up industrial design profile",
    "Minimalist editorial beige clean backdrop, organic shadows, macro lens aesthetic"
  ];

  const handlePromptChange = (suggestion: string) => {
    setPromptText(suggestion);
  };

  const executePromptAnimation = () => {
    setIsPrompting(true);
    setTimeout(() => {
      setIsPrompting(false);
    }, 1800);
  };

  return (
    <div className="w-full bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#9D7BFF] selection:text-black font-sans">
      
      {/* SECCIÓN 1: NAVBAR (Transparente y Fijo) */}
      <nav id="app-navbar" className="w-full absolute top-0 left-0 z-50 flex justify-between items-center px-8 py-6 bg-transparent">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer group select-none bg-transparent border-none p-0 focus:outline-none text-left"
          title="Volver al inicio"
        >
          <div className="w-8 h-8 bg-[#9D7BFF] rounded-sm flex items-center justify-center font-bold text-black group-hover:bg-[#B49BFF] transition-colors duration-300">
            A
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold tracking-tighter text-xl text-white group-hover:text-[#9D7BFF] transition-colors duration-300 leading-none pb-1">
              AURORA SERVICES
            </span>
            <span className="h-[1.5px] w-[70%] bg-[#9D7BFF] rounded-full transition-all duration-300 group-hover:bg-[#B49BFF] group-hover:w-[85%]" />
          </div>
        </button>

        {/* Central links with interactive indicator status */}
        <div className="hidden lg:flex items-center gap-8 bg-black/10 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/10 select-none">
          
          {/* QUIÉNES SOMOS */}
          <div className="group flex flex-col items-center gap-1">
            <a href="#reviews" className="text-white/60 group-hover:text-white transition-opacity text-xs font-semibold uppercase tracking-wider">
              QUIÉNES SOMOS
            </a>
            <span className="w-1 h-1 rounded-full bg-[#9D7BFF] group-hover:bg-[#B49BFF] group-hover:scale-150 transition-all duration-300 shadow-[0_0_6px_rgba(157,123,255,0.6)]" />
          </div>

          {/* VER SERVICIOS */}
          <div className="group flex flex-col items-center gap-1">
            <a href="#industries" className="text-white/60 group-hover:text-white transition-opacity text-xs font-semibold uppercase tracking-wider">
              VER SERVICIOS
            </a>
            <span className="w-1 h-1 rounded-full bg-[#9D7BFF] group-hover:bg-[#B49BFF] group-hover:scale-150 transition-all duration-300 shadow-[0_0_6px_rgba(157,123,255,0.6)]" />
          </div>
          
          {/* Selector de Idiomas */}
          <div className="relative group flex flex-col items-center gap-1">
            <button
              id="lang-selector-btn"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1.5 text-white/80 group-hover:text-white transition-all text-xs font-bold tracking-wider uppercase focus:outline-none cursor-pointer"
            >
              <span>{selectedLang === "es" ? "🇦🇷" : "🇺🇸"}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180 text-[#9D7BFF]' : 'text-white/40'}`} />
            </button>
            <span className="w-1 h-1 rounded-full bg-[#9D7BFF] group-hover:bg-[#B49BFF] group-hover:scale-150 transition-all duration-300 shadow-[0_0_6px_rgba(157,123,255,0.6)]" />
            
            <AnimatePresence>
              {isLangMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3.5 w-32 bg-[#0E0E10]/95 backdrop-blur-md border border-white/15 rounded-xl p-1.5 shadow-2xl z-50 flex flex-col gap-1"
                  >
                    <button
                      onClick={() => {
                        setSelectedLang("es");
                        setIsLangMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium w-full text-left transition-all ${selectedLang === 'es' ? 'bg-[#9D7BFF]/20 text-[#9D7BFF] font-bold' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                    >
                      <span className="text-sm">🇦🇷</span>
                      <span>Español</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedLang("en");
                        setIsLangMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium w-full text-left transition-all ${selectedLang === 'en' ? 'bg-[#9D7BFF]/20 text-[#9D7BFF] font-bold' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                    >
                      <span className="text-sm">🇺🇸</span>
                      <span>English</span>
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* PORTAFOLIO */}
          <div className="group flex flex-col items-center gap-1">
            <a href="#deployment" className="text-white/60 group-hover:text-white transition-opacity text-xs font-semibold uppercase tracking-wider">
              PORTAFOLIO
            </a>
            <span className="w-1 h-1 rounded-full bg-[#9D7BFF] group-hover:bg-[#B49BFF] group-hover:scale-150 transition-all duration-300 shadow-[0_0_6px_rgba(157,123,255,0.6)]" />
          </div>
        </div>

        {/* Right action button */}
        <div>
          <button 
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#9D7BFF] text-black font-bold px-6 py-2.5 rounded-full hover:bg-[#8A66FF] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#9D7BFF]/20 text-xs tracking-wider uppercase cursor-pointer"
          >
            CONTÁCTANOS
          </button>
        </div>
      </nav>

      {/* SECCIÓN 2: HERO ASIMÉTRICO DE CAPAS SUPERPUESTAS (Réplica Imagen 1) */}
      <section id="hero" className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-center">
        
        {/* Cinematic Backdrop with Subtle Violet Grid/Texture Detail */}
        <div className="absolute inset-0 w-full h-full z-10 select-none overflow-hidden bg-gradient-to-b from-black via-[#0a0a0d] to-black">
          {/* Subtle glowing radial accent in the background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(157,123,255,0.07),transparent_70%)]" />
          
          {/* Grid pattern with low-opacity #9D7BFF strokes */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="micro-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9D7BFF" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="1.2" fill="#9D7BFF" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#micro-grid)" />
          </svg>

          {/* Elegant oblique trace lines for extra depth and cinematic style */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <line x1="-10%" y1="10%" x2="110%" y2="90%" stroke="#9D7BFF" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="-10%" y1="40%" x2="110%" y2="120%" stroke="#9D7BFF" strokeWidth="1" strokeDasharray="5,5" />
          </svg>
        </div>

        {/* Background outline text layer */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 z-0 transform rotate-90 origin-left select-none pointer-events-none hidden xl:block">
          <p className="text-[120px] font-black text-outline uppercase tracking-tighter">HYPERFOCUS</p>
        </div>

        {/* Centered Main Layout Frame (Two column layout on lg+ with left aligned editorial and right side floating card) */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center items-center z-30 pt-28 lg:pt-0">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full py-12 lg:py-0">
            
            {/* Left Col: Capa de Texto (Z-30): Contenedor Asimétrico Editorial ALINEADO A LA IZQUIERDA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-5 w-full">
              
              {/* Tag indicator */}
              <div className="flex items-center gap-2 mb-2 select-none">
                <div className="relative flex items-center justify-center w-2.5 h-2.5">
                  <span className="absolute w-2 h-2 rounded-full bg-[#9D7BFF] opacity-75 animate-ping" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-[#9D7BFF]" />
                </div>
                <span className="tracking-widest text-[#9D7BFF] font-mono text-xs uppercase font-extrabold">
                  aurora services
                </span>
              </div>

              <motion.h1 
                className="text-white text-5xl sm:text-6xl md:text-[85px] font-extrabold leading-[0.85] tracking-tighter mb-4 text-left w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="block">Creamos tu</span>
                <span className="relative block h-[1.2em] text-[#9D7BFF] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ y: "80%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-80%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 block w-full whitespace-nowrap text-left"
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              <p className="text-sm md:text-base text-gray-300 max-w-md font-sans mb-4 leading-relaxed pointer-events-auto text-left">
                Con diseño web profesional donde cada detalle refleja la calidad que tu marca merece.
              </p>

              {/* Row of Buttons with pointer-events-auto enabled */}
              <div className="flex flex-wrap items-center gap-4 pointer-events-auto mb-2">
                <motion.button 
                  onClick={() => {
                    document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6,
                    ease: "easeInOut"
                  }}
                  className="bg-[#9D7BFF] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#8A66FF] hover:shadow-[0_4px_30px_rgba(157,123,255,0.45)] hover:scale-[1.02] active:scale-95 transition-all duration-300 text-xs tracking-wider uppercase shadow-[0_4px_25px_rgba(157,123,255,0.25)] flex items-center gap-2 cursor-pointer"
                >
                  Inicia tu proyecto
                  <Star className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                </motion.button>
                <button 
                  onClick={() => {
                    document.getElementById("workflow")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#9D7BFF] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#8A66FF] active:scale-95 transition-all text-xs tracking-wider uppercase shadow-[0_4px_25px_rgba(157,123,255,0.25)] flex items-center gap-2 cursor-pointer"
                >
                  Planes
                </button>
              </div>
            </div>

            {/* Right Col: Tarjeta Unica: Garantía de satisfacción total (Alineada a la derecha de la sección en escritorio, pero internamente centrada) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="pointer-events-auto w-full max-w-[380px] backdrop-blur-xl bg-black/60 border border-white/15 rounded-2xl p-6 md:p-8 text-white shadow-2xl flex flex-col items-center text-center gap-4 hover:border-white/25 transition-all select-none">
                
                {/* Título de la tarjeta */}
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                  <div className="flex gap-1 justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-[#FFD700] text-[#FFD700] animate-pulse" 
                        style={{ animationDelay: `${i * 150}ms` }}
                      />
                    ))}
                  </div>
                  <h3 className="text-white font-black text-lg tracking-tight uppercase leading-tight">
                    Garantía de satisfacción total
                  </h3>
                </div>

                {/* Texto principal */}
                <p className="text-gray-200 text-xs md:text-sm font-sans leading-relaxed font-semibold">
                  Si no quedás conforme con el resultado, realizamos todas las revisiones que sean necesarias sin costo adicional hasta que el proyecto sea exactamente lo que necesitás. Tu satisfacción es nuestra prioridad.
                </p>

                {/* Separador */}
                <div className="w-full h-[1px] bg-white/10" />

                {/* Texto secundario */}
                <p className="text-gray-400 text-[11px] md:text-xs font-sans leading-relaxed">
                  Analizamos tu idea y qué tipo de sitio se adapta mejor a tu negocio: landing page, multipágina o e-commerce.
                </p>

                {/* Botones */}
                <div className="w-full flex justify-center mt-2 px-1">
                  <button
                    onClick={() => {
                       window.open("https://wa.me/5491176219808", "_blank");
                    }}
                    className="w-full bg-[#1FAF38] text-white font-extrabold py-3.5 px-6 rounded-full hover:bg-[#179530] active:scale-95 transition-all text-xs tracking-wider uppercase text-center cursor-pointer shadow-[0_4px_25px_rgba(31,175,56,0.25)] flex items-center justify-center gap-2"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-4 h-4 shrink-0 fill-[#25D366]" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.709 1.458h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    CONSULTA GRATUITA
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* CAPA DE OVERLAYS / INTERFAZ FLOTANTE (Z-40) */}



        {/* Scroll anchor arrow removed to keep bottom of head section clean and empty */}
      </section>

      {/* SECCIÓN 3: GRID DE INDUSTRIAS ULTRA-VERTICALES (Réplica Imagen 2 y 3) */}
      <section id="industries" className="bg-black text-white pt-28 pb-16 px-6 relative z-20">
        
        {/* Contenedor Superior Centrado */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#9D7BFF]/10 text-[#9D7BFF] px-3.5 py-1.5 rounded-full text-xs font-mono uppercase font-bold mb-4">
            <Layers className="w-3.5 h-3.5" />
            Adaptive Engine Capabilities
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-[1.05]">
            We’ll help <span className="opacity-30">you make it</span><br />
            like nobody’s business.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-xl mx-auto mb-4 leading-relaxed">
            No creative challenge too big, no timeline too tight. Get to production with Stability AI, your enterprise-ready creative partner.{" "}
            <a href="#contact" className="text-[#9D7BFF] underline cursor-pointer hover:text-[#8A66FF] transition-colors font-medium">Work with us.</a>
          </p>
        </div>

        {/* El Grid de Aspect Ratio Alto aspect-[2/3] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-28">
          {INDUSTRIES_DATA.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <div 
                key={idx}
                className="aspect-[2/3] relative rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl hover:border-[#9D7BFF]/40 transition-all duration-500 bg-zinc-950 cursor-pointer"
              >
                {/* Background image component scaled on hover */}
                <div className="w-full h-full absolute inset-0 select-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 md:via-black/20 to-transparent z-10 duration-500 group-hover:via-black/10" />
                  <img
                    src={ind.image}
                    alt={ind.category}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out brightness-90 contrast-[1.02]"
                  />
                </div>

                {/* Floating Industry Category Badge */}
                <div className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9D7BFF]" />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-white/95">
                    {ind.category}
                  </span>
                </div>

                {/* Superposición de texto inferior */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/85 to-transparent z-20 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className="w-4.5 h-4.5 text-[#9D7BFF]" />
                    <span className="text-[#9D7BFF] font-bold">—</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#9D7BFF] uppercase font-bold">Core Module</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 ml-1 leading-tight tracking-tight">
                    {ind.title}
                  </h3>

                  <p className="text-gray-300 text-xs leading-relaxed mb-4 ml-1">
                    {ind.description}
                  </p>

                  {/* Highlights list visible or highlighting on hover */}
                  <div className="space-y-1.5 border-t border-white/10 pt-4 mt-2 ml-1">
                    {ind.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-[10.5px] text-gray-400">
                        <span className="w-1 h-1 rounded-full bg-[#9D7BFF]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link overlay */}
                  <div className="mt-5 flex justify-end">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#9D7BFF] flex items-center gap-1 group-hover:translate-x-1.5 duration-300 transition-transform">
                      Deploy Model Weight <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloque Intermedio Diagonal (Imagen 3) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10 border-t border-white/5 relative">
          
          {/* Left: Collage image rotated -5deg with floral and face blends */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Background absolute floating neon orb strictly styled */}
            <div className="absolute h-96 w-96 rounded-full bg-[#9D7BFF]/10 blur-[130px] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div 
              className="relative w-full max-w-lg aspect-square rounded-[2rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10"
              style={{
                transform: "rotate(-5deg)",
                transition: "transform 0.5s ease-out"
              }}
            >
              {/* Main image representing collage of faces and floral textures */}
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                alt="Collage Base Studio Headshot"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />

              {/* Flower graphics removed and simplified to keep pristine clean layout below the action */}

              {/* Bottom tag indicator overlay */}
              <div className="absolute bottom-6 right-6 z-20 bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-mono border border-white/10 uppercase tracking-widest text-[#9D7BFF] font-bold">
                MGD-WEIGHT: BRAND_COHERENCE
              </div>

              {/* Frame text outline relative layout detailing custom style */}
              <div className="absolute top-4 left-6 z-20 select-none">
                <span className="text-[10px] font-mono tracking-widest text-white/50 bg-black/30 px-2 py-1 rounded">PERSPECTIVE OVERRIDE</span>
              </div>
            </div>
          </div>

          {/* Right: Minimalist Text Content vertically aligned */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left px-4 lg:pl-12">
            
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-6 bg-[#9D7BFF] rounded-full" />
              <span className="font-mono text-xs uppercase text-[#9D7BFF] tracking-widest font-bold">Enterprise Custom Engine</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-white leading-none mb-6">
              Solve creative<br />
              problems <span className="opacity-40">without<br />creating new ones.</span>
            </h3>

            <p className="text-sm text-gray-400 font-sans mb-8 leading-relaxed max-w-md">
              Our business solutions are built for stable real-world output schedules. Obtain the full customization, managed virtual weight hosting, and detailed deployment support you need for production pipelines, without any legacy technical friction.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#9D7BFF]/10 text-[#9D7BFF]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-xs text-gray-300">
                  <strong>Granular model fine-tuning:</strong> Train only on curated style sets with specific license safety.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#9D7BFF]/10 text-[#9D7BFF]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-xs text-gray-300">
                  <strong>Unified on-prem hosting:</strong> Secure private API pipelines that adhere to standard local strict policies.
                </span>
              </div>
            </div>

            <div>
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#9D7BFF] hover:text-[#8A66FF] transition-colors"
              >
                Book custom consultation demo 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Floating cream brand block from Sleek Interface */}
        <div className="absolute bottom-0 right-0 z-0 bg-[#F2EFE9] w-72 h-32 transform translate-x-12 translate-y-12 rotate-[-5deg] flex items-center justify-center p-8 border-l-[12px] border-[#9D7BFF] shadow-2xl overflow-hidden hidden lg:flex select-none">
          <p className="text-black font-black text-sm tracking-tighter leading-tight">
            NEW WORKFLOW<br />
            <span className="opacity-40">MORE THAN A PROMPT.</span>
          </p>
        </div>
      </section>

      {/* SECCIÓN 4: WORKFLOW Y COLLAGE DE PANTALLAS (Réplica Imagen 5) */}
      <section id="workflow" className="bg-[#F2EFE9] text-black py-24 px-6 md:px-12 relative z-20">
        
        {/* Massive Centered Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#9D7BFF]/10 text-[#5c3bf2] px-3.5 py-1.5 rounded-full text-xs font-mono uppercase font-bold mb-4">
            <Command className="w-3.5 h-3.5" />
            Adaptive Pipelines
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tighter mb-6 text-[#1A1A1A]">
            Your future workflow is<br />
            more than <span className="text-[#9D7BFF]">a prompt.</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-sans max-w-md mx-auto leading-relaxed">
            Keep the power of creativity where it belongs: in human hands. Train weight schemas, review steps, and render absolute consistency.
          </p>
        </div>

        {/* Content Showcase: Row and screen collage container */}
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Block 1 (Image 5 Top): "Stay in Control" block */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden border border-black/5 p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-xl">
            
            {/* Left Col: Text Description */}
            <div className="lg:col-span-5 text-left">
              <span className="font-mono text-[10px] uppercase font-bold text-[#9D7BFF] tracking-widest block mb-1">
                PIPELINES v3.2
              </span>
              <h3 className="text-4xl font-extrabold tracking-tighter text-black mb-4">
                Stay in control
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Your creative process isn't just one input and output. Our custom brand tools enable generating and editing in sequential workflows that reflect actual production pipelines, with precise control at every step from idea to high-fidelity output.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-gray-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9D7BFF]" />
                  <span>Iterative step tuning controls</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9D7BFF]" />
                  <span>Advanced spatial depth layout masking</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9D7BFF]" />
                  <span>Interactive canvas weight brush painting</span>
                </div>
              </div>

              <div>
                <a 
                  href="#contact" 
                  className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest font-extrabold text-black hover:text-[#9D7BFF] transition-colors"
                >
                  Speak with an expert 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Col: High-Fidelity Collage representing screen assets (Imagen 5 Graphic) */}
            <div className="lg:col-span-7 relative bg-black rounded-[2rem] p-4 md:p-8 min-h-[440px] flex items-center justify-center overflow-hidden border border-black/10 shadow-inner group">
              
              {/* Background ambient pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#301f5c_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

              {/* FLOATING SCREENS INNER CONTAINER */}
              <div className="relative w-full h-full min-h-[400px]">
                
                {/* 1. Shoe asset mockup (Left center, tilted) */}
                <div className="absolute top-[8%] left-[2%] w-[42%] z-20 transform -rotate-[4deg] hover:rotate-0 hover:scale-105 duration-500 transition-all pointer-events-auto">
                  <div className="bg-zinc-950 rounded-2xl p-2 border border-white/10 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=400" 
                      alt="Product Boot Preview" 
                      referrerPolicy="no-referrer"
                      className="w-full aspect-square object-cover rounded-xl mb-1.5"
                    />
                    <div className="flex justify-between items-center text-[8px] font-mono text-gray-400 px-1">
                      <span>STABLE MUD CORE_3</span>
                      <span className="text-[#9D7BFF]">98.2% TRUE</span>
                    </div>
                  </div>
                </div>

                {/* 2. Phone display preview card mock (Center right, tall) */}
                <div className="absolute bottom-[2%] left-[34%] w-[33%] z-30 transform hover:-translate-y-2 hover:scale-105 duration-500 transition-all pointer-events-auto">
                  <div className="bg-[#4D3399]/40 backdrop-blur-md rounded-2xl p-2.5 border border-[#9D7BFF]/30 shadow-2xl text-white">
                    <div className="flex justify-between items-center text-[7px] font-mono text-white/50 mb-1">
                      <span>O-MOBILE DETECT</span>
                      <Globe className="w-2.5 h-2.5 text-[#9D7BFF]" />
                    </div>
                    <div className="aspect-[9/16] bg-zinc-950 rounded-xl overflow-hidden relative mb-2 group-hover:brightness-110">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" 
                        alt="Phone UI Overlay mockup"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 text-left">
                        <span className="block text-[8px] uppercase tracking-wider text-[#9D7BFF] font-black leading-none">STABLE</span>
                        <span className="block text-[8px] uppercase tracking-wider text-white/90 font-bold leading-none">AUDIO v4.0</span>
                        <span className="text-[6px] font-mono text-white/40 block">0.8s synthesis</span>
                      </div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-1 text-[8.5px] font-mono flex items-center justify-between">
                      <span className="truncate pr-1">"STABLE MUD"</span>
                      <span className="text-[7.5px] bg-[#9D7BFF] text-black px-1 rounded font-bold uppercase">OUT</span>
                    </div>
                  </div>
                </div>

                {/* 3. Billboard card mockup (Right edge, tilted) */}
                <div className="absolute top-[21%] right-[2%] w-[44%] z-20 transform rotate-[6deg] hover:rotate-0 hover:scale-105 duration-500 transition-all pointer-events-auto">
                  <div className="bg-zinc-950 rounded-[1.5rem] p-3 border border-white/10 shadow-2xl">
                    <div className="aspect-[1.8/1] rounded-xl overflow-hidden mb-2 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400" 
                        alt="Outdoor Billboard Canvas mockup" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[#9D7BFF]/10 mix-blend-color" />
                    </div>
                    <div className="flex justify-between items-center text-[7.5px] font-mono text-white/40">
                      <span>OUTDOOR WEIGHT PROXY</span>
                      <span className="text-[#9D7BFF]">ROTATING</span>
                    </div>
                  </div>
                </div>

                {/* 4. Small details overlay: Vector stamp grid */}
                <div className="absolute bottom-[10%] left-[4%] z-40 bg-black/90 rounded-xl p-2 border border-white/5 shadow-md flex items-center gap-2 max-w-[130px] pointer-events-auto hover:bg-zinc-900 transition-colors">
                  <div className="h-6 w-6 rounded bg-[#9D7BFF]/20 flex items-center justify-center">
                    <Cpu className="text-[#9D7BFF] h-3.5 w-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[7.5px] font-mono text-white/40 uppercase">Latency Engine</span>
                    <span className="block text-[8.5px] font-mono text-white font-bold leading-none">12.5ms RT</span>
                  </div>
                </div>

                {/* 5. Poster mockup from Street frame */}
                <div className="absolute -top-[5%] left-[30%] w-[33%] z-10 opacity-70 border border-white/5 rounded-xl overflow-hidden shadow-lg hover:opacity-100 transition-opacity">
                  <img 
                    src="https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=200" 
                    alt="Laptop render layout" 
                    referrerPolicy="no-referrer"
                    className="w-full h-24 object-cover"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* Block 2 (Image 5 Bottom): "Proven. Trusted. Ready." block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-2">
            
            {/* Left Col (Tall Image aspect container) */}
            <div className="md:col-span-7 bg-white rounded-[2.5rem] overflow-hidden border border-black/5 p-4 flex flex-col justify-between relative shadow-lg min-h-[380px]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Proven woman looking up in clear blue sky" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
              </div>

              {/* Stamp graphic breaking the corners */}
              <div className="relative z-20 self-start p-4">
                <div className="bg-transparent backdrop-blur-md rounded-full border border-black/10 p-2 transform rotate-12 flex items-center justify-center h-20 w-20">
                  <span className="font-mono text-[7px] font-black text-center text-black/80 tracking-tighter uppercase leading-none block">
                    TRUSTED SYSTEM • MODEL AUDITED
                  </span>
                </div>
              </div>

              {/* Bottom detail text Overlay */}
              <div className="relative z-20 p-6 self-start text-left mt-auto">
                <span className="font-mono text-[9px] uppercase font-bold text-[#5c3bf2] bg-[#9D7BFF]/20 px-2.5 py-1 rounded-full tracking-wider inline-block mb-1.5">
                  _ ENTERPRISE CERTIFIED
                </span>
                <h4 className="text-xl font-bold text-black tracking-tight leading-tight">
                  Strict weight isolation protocols for financial and security compliance.
                </h4>
              </div>
            </div>

            {/* Right Col: Detailed Content Description text */}
            <div className="md:col-span-5 bg-white rounded-[2.5rem] border border-black/5 p-8 md:p-12 flex flex-col justify-center text-left shadow-lg">
              
              <div className="h-10 w-10 rounded-xl bg-[#9D7BFF]/10 flex items-center justify-center mb-6">
                <Globe className="text-[#9D7BFF] h-5 w-5" />
              </div>

              <h3 className="text-3xl font-extrabold tracking-tighter text-black mb-4 leading-none">
                Proven.<br />
                Trusted.<br />
                Ready.
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Everything you need for confident enterprise implementation, backed by robust SLA metrics, rigorous model safety guarantees, and deep structural parameters fine-tuning authority.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 font-mono text-xs font-bold text-[#9D7BFF]">SLA</span>
                  <span className="text-xs text-gray-600">99.99% Guaranteed private endpoint uptime orchestration with deep load balancing logic.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 font-mono text-xs font-bold text-[#9D7BFF]">SEC</span>
                  <span className="text-xs text-gray-600">Weights encryption at rest and in transit. Your prompts and fine-tuning datasets remain isolated from base model updates.</span>
                </div>
              </div>

              <div>
                <a 
                  href="#contact" 
                  className="bg-black text-white font-mono font-bold px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors text-xs inline-block text-center tracking-wider uppercase"
                >
                  Contact enterprise sales
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ADDITIONAL SECCIÓN: REVIEWS & TRUSTED PARTNERS SLIDER (Réplica Imagen 4 y 7) */}
      <section id="reviews" className="bg-black text-white py-24 px-6 md:px-12 relative z-20 border-t border-white/5 overflow-hidden">
        
        {/* Floating gradient lights */}
        <div className="absolute top-[20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-[#9D7BFF]/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-6 border-b border-white/5">
            <div>
              <span className="font-mono text-xs text-[#9D7BFF] uppercase tracking-widest font-bold">Press & Partners</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mt-1">In the Spotlight</h2>
            </div>
            
            {/* Slider triggers */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button 
                onClick={() => setActiveReviewIndex((val) => (val - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length)}
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#9D7BFF]/40 hover:bg-white/5 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveReviewIndex((val) => (val + 1) % REVIEWS_DATA.length)}
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#9D7BFF]/40 hover:bg-white/5 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Review Box */}
          <div className="min-h-[220px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReviewIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-4xl"
              >
                {/* Brand stylized logo badge */}
                <div className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-md text-[10px] font-mono tracking-widest text-[#9D7BFF] uppercase">
                  {REVIEWS_DATA[activeReviewIndex].logo}
                </div>

                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white/90 leading-tight">
                  “{REVIEWS_DATA[activeReviewIndex].quote}”
                </p>

                <div className="flex items-center gap-3 pt-2 text-xs text-gray-400 font-mono">
                  <span className="font-bold text-white">{REVIEWS_DATA[activeReviewIndex].source}</span>
                  <span>•</span>
                  <span>{REVIEWS_DATA[activeReviewIndex].date}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Trusted partners bottom band (Inspired by Imagen 4 UMG/EA/Warner/Arm) */}
          <div className="mt-28 pt-10 border-t border-white/5 text-center">
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest font-black block mb-8">
              Trusted by the world's most innovative companies
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center opacity-40 px-6">
              <div className="text-xl md:text-2xl font-black text-white hover:opacity-100 transition-opacity cursor-pointer tracking-tighter">
                Electronic Arts
              </div>
              <div className="text-xl md:text-2xl font-black text-white hover:opacity-100 transition-opacity cursor-pointer tracking-tighter">
                Universal Music Group
              </div>
              <div className="text-xl md:text-2xl font-black text-white hover:opacity-100 transition-opacity cursor-pointer tracking-tighter">
                WARNER MUSIC GROUP
              </div>
              <div className="text-xl md:text-2xl font-black text-white hover:opacity-100 transition-opacity cursor-pointer tracking-tighter font-mono">
                ARM ARCHITECTURE
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ADDITIONAL SECCIÓN: DEPLOYMENT MODULE CARDS (Inspired by Imagen 6) */}
      <section id="deployment" className="bg-[#F2EFE9] text-black py-24 px-6 md:px-12 relative z-20 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-[#1A1A1A]">
              Gen AI that works with you,<br />
              <span className="text-[#9D7BFF]">where you work.</span>
            </h2>
            <p className="text-gray-600 text-xs md:text-sm font-sans max-w-md mx-auto">
              Maintain full flexibility. Compile and bind your weights on-prem, self-hosted, via robust APIs, or safely isolated using our Cloud Service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            {/* 1. Self-Hosted */}
            <div className="bg-[#E6E1D8] border border-black/5 hover:border-[#9D7BFF]/35 rounded-[1.8rem] p-8 flex flex-col justify-between min-h-[300px] hover:scale-[1.02] duration-300 transition-transform">
              <div className="text-left">
                <span className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">MODULE 01</span>
                <h4 className="text-xl font-bold mb-3 tracking-tight">Self-Hosted</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Deploy our precise model weights inside your own air-gapped secure environment for ultimate customized security policies and total guardrail control.
                </p>
              </div>
              <button className="bg-black text-white hover:bg-[#9D7BFF] hover:text-black font-mono font-bold py-2 rounded-xl text-[10px] uppercase tracking-wider transition-colors mt-8">
                Get license
              </button>
            </div>

            {/* 2. Applications */}
            <div className="bg-[#E6E1D8] border border-black/5 hover:border-[#9D7BFF]/35 rounded-[1.8rem] p-8 flex flex-col justify-between min-h-[300px] hover:scale-[1.02] duration-300 transition-transform">
              <div className="text-left">
                <span className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">MODULE 02</span>
                <h4 className="text-xl font-bold mb-3 tracking-tight">Applications</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Utilize Brand Studio, our fully managed drag-and-drop orchestration suite made specifically for design production and creative directors.
                </p>
              </div>
              <button className="bg-black text-white hover:bg-[#9D7BFF] hover:text-black font-mono font-bold py-2 rounded-xl text-[10px] uppercase tracking-wider transition-colors mt-8">
                See plans
              </button>
            </div>

            {/* 3. API */}
            <div className="bg-[#E6E1D8] border border-black/5 hover:border-[#9D7BFF]/35 rounded-[1.8rem] p-8 flex flex-col justify-between min-h-[300px] hover:scale-[1.02] duration-300 transition-transform">
              <div className="text-left">
                <span className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">MODULE 03</span>
                <h4 className="text-xl font-bold mb-3 tracking-tight">API</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Seamlessly register and query endpoints using optimized JSON weights. Integrate generation scripts directly inside your game engine pipeline.
                </p>
              </div>
              <button className="bg-black text-white hover:bg-[#9D7BFF] hover:text-black font-mono font-bold py-2 rounded-xl text-[10px] uppercase tracking-wider transition-colors mt-8">
                See plans
              </button>
            </div>

            {/* 4. Cloud Service */}
            <div className="bg-[#E6E1D8] border border-black/5 hover:border-[#9D7BFF]/35 rounded-[1.8rem] p-8 flex flex-col justify-between min-h-[300px] hover:scale-[1.02] duration-300 transition-transform">
              <div className="text-left">
                <span className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">MODULE 04</span>
                <h4 className="text-xl font-bold mb-3 tracking-tight">Cloud Service</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Direct hosting across our secure global matrix servers. Automatic scale architecture that resolves peak demands instantly.
                </p>
              </div>
              <button className="bg-black text-white hover:bg-[#9D7BFF] hover:text-black font-mono font-bold py-2 rounded-xl text-[10px] uppercase tracking-wider transition-colors mt-8">
                See plans
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer id="contact" className="bg-black text-white border-t border-white/5 pt-20 pb-12 px-6 relative z-20">
        
        {/* Absolute glow background block */}
        <div className="absolute bottom-0 left-[20%] h-[200px] w-[500px] rounded-full bg-[#5c3bf2]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
            
            {/* Brand column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-3xl font-extrabold tracking-tighter text-white">stability.ai</span>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Empowering artistic expression through robust open models. Build future workflow architectures that adapt automatically to professional guidelines.
              </p>
              
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">All systems operational — v4.1.14</span>
              </div>
            </div>

            {/* Link directories */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="space-y-4">
                <span className="block text-[10px] font-mono uppercase text-[#9D7BFF] tracking-widest font-extrabold">Models Core</span>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Stable Diffusion 3</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Stable Video 3D</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Stable Audio 2.0</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Fine-tuning weights</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <span className="block text-[10px] font-mono uppercase text-[#9D7BFF] tracking-widest font-extrabold">Developers</span>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">SDK weights loader</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">GitHub Repository</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">On-prem installation</a></li>
                </ul>
              </div>

              <div className="space-y-4 col-span-2 sm:col-span-1">
                <span className="block text-[10px] font-mono uppercase text-[#9D7BFF] tracking-widest font-extrabold">Stay in touch</span>
                <p className="text-[11px] text-gray-400 leading-normal mb-3">
                  Submit email for monthly fine-tuning releases notes.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#9D7BFF]/50 text-white w-full font-sans"
                  />
                  <button className="bg-[#9D7BFF] text-black font-bold p-2 px-3 rounded-lg text-xs hover:bg-[#8A66FF] transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Sub footer */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div>
              <span>© {new Date().getFullYear()} Stability AI Ltd. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">SLA Guarantees</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
