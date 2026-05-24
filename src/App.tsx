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
  Star,
  Code,
  Palette,
  Shield
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
    category: "México",
    title: "On-demand asset amplification",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Ornamental_Bandera_vertical_de_M%C3%A9xico.png",
    description: "Create high-quality on-brand assets for every campaign using our image generation and editing tools.",
    highlights: ["10x Output velocity", "Consistent brand guardrails", "Adaptive format aspect-ratios"],
    icon: Sparkles
  },
  {
    category: "Argentina",
    title: "Desarrollo y Compromiso Autónomo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Argentina_%28vertical_with_Sol_de_Mayo%29.svg/1280px-Flag_of_Argentina_%28vertical_with_Sol_de_Mayo%29.svg.png",
    description: "Desarrollamos sitios web y soluciones de alto nivel para marcas de todo tipo.",
    highlights: ["Compromiso local", "Calidad garantizada", "Atención ultra personalizada"],
    icon: Sparkles
  },
  {
    category: "Ecuador",
    title: "Acompañamiento y Desarrollo Digital",
    image: "https://w0.peakpx.com/wallpaper/242/817/HD-wallpaper-flag-ecuador-ecuador-flag.jpg",
    description: "Acompañamos a empresas y emprendedores en soluciones de alta calidad.",
    highlights: ["Asesoría personalizada", "Diseño responsivo", "Soporte permanente"],
    icon: Sparkles
  }
];

export default function App() {
  const [promptText, setPromptText] = useState("Vivid rose-gold headphone, warm golden hour backlighting, photorealistic portrait shot, octane render, beautiful braid strands");
  const [isPrompting, setIsPrompting] = useState(false);

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
            <a href="#quienes-somos" className="text-white group-hover:text-white transition-opacity text-xs font-semibold uppercase tracking-wider">
              QUIÉNES SOMOS
            </a>
            <span className="w-1 h-1 rounded-full bg-[#9D7BFF] group-hover:bg-[#B49BFF] group-hover:scale-150 transition-all duration-300 shadow-[0_0_6px_rgba(157,123,255,0.6)]" />
          </div>

          {/* VER SERVICIOS */}
          <div className="group flex flex-col items-center gap-1">
            <a href="#services" className="text-white group-hover:text-white transition-opacity text-xs font-semibold uppercase tracking-wider">
              VER SERVICIOS
            </a>
            <span className="w-1 h-1 rounded-full bg-[#9D7BFF] group-hover:bg-[#B49BFF] group-hover:scale-150 transition-all duration-300 shadow-[0_0_6px_rgba(157,123,255,0.6)]" />
          </div>
          
          {/* Selector de Idiomas */}
          <div className="relative group flex flex-col items-center gap-1">
            <button
              id="lang-selector-btn"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1.5 text-white group-hover:text-white transition-all text-xs font-bold tracking-wider uppercase focus:outline-none cursor-pointer"
            >
              <span>{selectedLang === "es" ? "🇪🇸 ES" : "🇺🇸 US"}</span>
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
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3.5 w-[150px] bg-[#0E0E10]/95 backdrop-blur-md border border-white/15 rounded-xl p-1.5 shadow-2xl z-50 flex flex-col gap-1"
                  >
                    <button
                      onClick={() => {
                        setSelectedLang("es");
                        setIsLangMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium w-full text-left transition-all ${selectedLang === 'es' ? 'bg-[#9D7BFF]/20 text-[#9D7BFF] font-bold' : 'text-white hover:bg-white/5 hover:text-white'}`}
                    >
                      <span className="text-sm">🇪🇸</span>
                      <span>Español (ES)</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedLang("en");
                        setIsLangMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium w-full text-left transition-all ${selectedLang === 'en' ? 'bg-[#9D7BFF]/20 text-[#9D7BFF] font-bold' : 'text-white hover:bg-white/5 hover:text-white'}`}
                    >
                      <span className="text-sm">🇺🇸</span>
                      <span>English (US)</span>
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* PORTAFOLIO */}
          <div className="group flex flex-col items-center gap-1">
            <a href="#deployment" className="text-white group-hover:text-white transition-opacity text-xs font-semibold uppercase tracking-wider">
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
            className="bg-[#9D7BFF] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#8A66FF] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#9D7BFF]/20 text-xs tracking-wider uppercase cursor-pointer"
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
              <div className="inline-flex items-center gap-2 mb-2 select-none bg-[#9D7BFF]/15 border border-[#9D7BFF]/30 px-3.5 py-1.5 rounded-full">
                <div className="relative flex items-center justify-center w-2 h-2">
                  <span className="absolute w-3.5 h-3.5 rounded-full bg-white/70 opacity-75 animate-ping" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
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

              <p className="text-sm md:text-base text-white max-w-md font-sans mb-4 leading-relaxed pointer-events-auto text-left">
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
                <p className="text-white text-[11px] md:text-xs font-sans leading-relaxed">
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
                      className="w-4 h-4 shrink-0 fill-white" 
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
      </section>

      {/* SECCIÓN 3: ¿QUIÉNES SOMOS? */}
      <section id="quienes-somos" className="bg-black text-white pt-28 pb-16 px-6 relative z-20">
        
        {/* Contenedor Superior Centrado */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#9D7BFF]/10 text-[#9D7BFF] px-3.5 py-1.5 rounded-full text-xs font-mono uppercase font-bold mb-4">
            <Layers className="w-3.5 h-3.5" />
            SOBRE AURORA
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-[1.05]">
            <span className="relative inline-block pb-3">
              ¿Quiénes somos?
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#9D7BFF] rounded-full" />
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white font-sans max-w-2xl mx-auto mb-4 leading-relaxed font-semibold">
            Aurora Services nació en Argentina para llevar el desarrollo web de alto nivel más allá de las fronteras.{" "}
            Con presencia en Argentina, México y Ecuador, nuestro equipo combina talento y perseverancia para transformar cada proyecto en una experiencia digital única, donde la tecnología y la calidez se encuentran para impulsar tu éxito.
          </p>
        </div>

        {/* Las tres tarjetas debajo de ¿Quiénes somos? (Banderas en orden México - Izquierda, Argentina - Centro, Ecuador - Derecha) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
          {INDUSTRIES_DATA.map((ind, idx) => {
            return (
              <div 
                key={idx}
                className="aspect-[2/3] relative rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl bg-zinc-950"
              >
                {/* Background image component */}
                <div className="w-full h-full absolute inset-0 select-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                  <img
                    src={ind.image}
                    alt={ind.category}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center z-0 brightness-100 contrast-[1.05]"
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
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/95 to-transparent z-20">
                  {idx === 0 ? (
                    <div className="text-left py-2">
                      <p className="text-white text-xs sm:text-[13px] leading-relaxed mb-4 font-sans font-semibold [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)]">
                        En México trabajamos con clientes locales e internacionales para desarrollar sitios web y soluciones digitales que reflejan la identidad de cada marca, con el mismo nivel de calidad, atención personalizada y excelencia técnica que ofrecemos en todos nuestros proyectos.
                      </p>
                      <p className="text-white text-xs sm:text-[12.5px] leading-relaxed font-sans font-semibold [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)] pt-2 border-t border-white/10">
                        Estamos presentes en ciudades como <span className="font-extrabold text-[#9D7BFF]">Ciudad de México</span> y <span className="font-extrabold text-[#9D7BFF]">Monterrey</span>.
                      </p>
                    </div>
                  ) : idx === 1 ? (
                    <div className="text-left py-2">
                      <p className="text-white text-xs sm:text-[13px] leading-relaxed mb-4 font-sans font-semibold [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)]">
                        En Argentina desarrollamos sitios web y soluciones digitales para empresas de todo tipo, acompañando cada proyecto con el mismo nivel de calidad, atención personalizada y compromiso técnico que caracteriza a Aurora Services.
                      </p>
                      <p className="text-white text-xs sm:text-[12.5px] leading-relaxed font-sans font-semibold [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)] pt-2 border-t border-white/10">
                        Estamos presentes en ciudades como <span className="font-extrabold text-[#9D7BFF]">Buenos Aires</span> y <span className="font-extrabold text-[#9D7BFF]">Córdoba</span>.
                      </p>
                    </div>
                  ) : (
                    <div className="text-left py-2">
                      <p className="text-white text-xs sm:text-[13px] leading-relaxed mb-4 font-sans font-semibold [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)]">
                        En Ecuador acompañamos a empresas y emprendedores en el desarrollo de sitios web y soluciones digitales pensadas para destacar su marca y conectar con su audiencia, con el mismo cuidado en el diseño, la funcionalidad y el acompañamiento post‑entrega que Aurora Services ofrece en todos sus proyectos.
                      </p>
                      <p className="text-white text-xs sm:text-[12.5px] leading-relaxed font-sans font-semibold [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)] pt-2 border-t border-white/10">
                        Estamos presentes en ciudades como <span className="font-extrabold text-[#9D7BFF]">Quito</span> y <span className="font-extrabold text-[#9D7BFF]">Guayaquil</span>.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECCIÓN 3.5: NUESTROS SERVICIOS */}
      <section id="services" className="bg-black text-white pt-28 pb-24 px-6 relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Centered underlined title */}
          <div className="text-center mb-20 relative">
            <div className="absolute h-96 w-96 rounded-full bg-[#9D7BFF]/5 blur-[120px] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="inline-flex items-center gap-2 bg-[#9D7BFF]/10 text-[#9D7BFF] px-3.5 py-1.5 rounded-full text-xs font-mono uppercase font-bold mb-4">
              <Layers className="w-3.5 h-3.5" />
              SOBRE NUESTROS SERVICIOS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]">
               <span className="relative inline-block pb-3">
                 Nuestros Servicios
                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#9D7BFF] rounded-full" />
              </span>
            </h2>
          </div>
 
          {/* Three columns layout for the service blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Bloque 1 - Desarrollo Web */}
            <div className="flex flex-col text-left p-8 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2.5 mb-5 select-none">
                <span className="text-[#9D7BFF] text-sm shrink-0 font-sans">✔️</span>
                <img
                  src="https://img.icons8.com/?size=100&id=Dr0n9Rgyl5Lp&format=png&color=ffffff"
                  alt="Desarrollo Web"
                  referrerPolicy="no-referrer"
                  className="h-6 w-6 object-contain shrink-0 filter brightness-100"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight underline decoration-[#9D7BFF] decoration-2 underline-offset-4">
                  Desarrollo Web
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white font-sans leading-relaxed font-semibold">
                Creamos sitios web modernos, rápidos y completamente responsivos para todos los dispositivos. Una arquitectura robusta pensada para atraer clientes, mejorar la conversión y garantizar un rendimiento estable en el tiempo.
              </p>
            </div>
 
            {/* Bloque 2 - Diseño Visual */}
            <div className="flex flex-col text-left p-8 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2.5 mb-5 select-none">
                <span className="text-[#9D7BFF] text-sm shrink-0 font-sans">✔️</span>
                <img
                  src="https://img.icons8.com/?size=100&id=4bRnRUyLzrOg&format=png&color=ffffff"
                  alt="Diseño Visual"
                  referrerPolicy="no-referrer"
                  className="h-6 w-6 object-contain shrink-0 filter brightness-100"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight underline decoration-[#9D7BFF] decoration-2 underline-offset-4">
                  Diseño Visual
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white font-sans leading-relaxed font-semibold">
                Diseñamos experiencias visuales estratégicas que comunican la identidad de tu marca. Usamos un enfoque minimalista y premium para generar confianza, profesionalismo y reconocimiento inmediato.
              </p>
            </div>
 
            {/* Bloque 3 - Soporte */}
            <div className="flex flex-col text-left p-8 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2.5 mb-5 select-none">
                <span className="text-[#9D7BFF] text-sm shrink-0 font-sans">✔️</span>
                <img
                  src="https://img.icons8.com/?size=100&id=43657&format=png&color=ffffff"
                  alt="Soporte"
                  referrerPolicy="no-referrer"
                  className="h-6 w-6 object-contain shrink-0 filter brightness-100"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight underline decoration-[#9D7BFF] decoration-2 underline-offset-4">
                  Soporte
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white font-sans leading-relaxed font-semibold">
                Tu sitio web necesita mantenimiento continuo. Ofrecemos actualizaciones de seguridad, seguimiento de rendimiento y soporte técnico especializado para asegurar una presencia digital estable, segura y siempre operativa.
              </p>
            </div>
 
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: WORKFLOW Y COLLAGE DE PANTALLAS (Réplica Imagen 5) */}
      <section id="workflow" className="bg-[#F2EFE9] text-black py-24 px-6 md:px-12 relative z-20">
        
        {/* Massive Centered Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#9D7BFF]/10 text-[#9D7BFF] px-3.5 py-1.5 rounded-full text-xs font-mono uppercase font-bold mb-4">
            <Layers className="w-3.5 h-3.5" />
            SOBRE NUESTRO PROCESO
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-6 text-[#1A1A1A]">
            <span className="relative inline-block pb-3">
              Nuestro Proceso
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#9D7BFF] rounded-full" />
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#444444] font-sans max-w-2xl mx-auto leading-relaxed">
            Nuestro proceso está pensado para acompañarte desde la concepción del proyecto hasta la entrega y más allá. Diseñamos y desarrollamos tu sitio web de forma ordenada, con tiempos estimados transparentes, revisiones colaborativas y un acompañamiento constante antes y después del lanzamiento, para que siempre te sientas seguro y en control de tu proyecto digital.
          </p>
        </div>

        {/* Content Showcase: Row and screen collage container */}
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Block 1 (Image 5 Top): "Stay in Control" block */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden border border-black/5 p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-xl">
            
            {/* Left Col: Text Description */}
            <div className="lg:col-span-5 text-left space-y-6">
              {/* Step 1 – Desarrollo */}
              <div className="flex items-start gap-4 p-1">
                <div className="p-2 bg-[#9D7BFF]/10 rounded-xl shrink-0 mt-0.5">
                  <img
                    src="https://img.icons8.com/?size=100&id=Dr0n9Rgyl5Lp&format=png&color=000000"
                    alt="Desarrollo"
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-800 font-sans tracking-tight">Desarrollo</h4>
                  <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed mt-0.5">
                    Diseñamos y desarrollamos tu sitio con profesionalismo.
                  </p>
                </div>
              </div>

              {/* Step 2 – Tiempos */}
              <div className="flex items-start gap-4 p-1">
                <div className="p-2 bg-[#9D7BFF]/10 rounded-xl shrink-0 mt-0.5">
                  <img
                    src="https://img.icons8.com/?size=100&id=43666&format=png&color=000000"
                    alt="Tiempos"
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-800 font-sans tracking-tight">Tiempos</h4>
                  <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed mt-0.5">
                    Landing page: aproximadamente 7 días.<br />
                    Sitio multipágina: aproximadamente 10 días.<br />
                    Tienda / E‑commerce: tiempos según complejidad e integraciones.
                  </p>
                </div>
              </div>

              {/* Step 3 – Revisión */}
              <div className="flex items-start gap-4 p-1">
                <div className="p-2 bg-[#9D7BFF]/10 rounded-xl shrink-0 mt-0.5">
                  <img
                    src="https://img.icons8.com/?size=100&id=48003&format=png&color=000000"
                    alt="Revisión"
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-800 font-sans tracking-tight">Revisión</h4>
                  <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed mt-0.5">
                    Revisamos juntos cada detalle e imagen hasta que estés conforme.
                  </p>
                </div>
              </div>

              {/* Step 4 – Entrega */}
              <div className="flex items-start gap-4 p-1">
                <div className="p-2 bg-[#9D7BFF]/10 rounded-xl shrink-0 mt-0.5">
                  <img
                    src="https://img.icons8.com/?size=100&id=69463&format=png&color=000000"
                    alt="Entrega"
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-800 font-sans tracking-tight">Entrega</h4>
                  <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed mt-0.5">
                    Una vez aprobado, publicamos tu sitio para todo el mundo.
                  </p>
                </div>
              </div>

              {/* Step 5 – Soporte */}
              <div className="flex items-start gap-4 p-1">
                <div className="p-2 bg-[#9D7BFF]/10 rounded-xl shrink-0 mt-0.5">
                  <img
                    src="https://img.icons8.com/?size=100&id=44804&format=png&color=000000"
                    alt="Soporte"
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-800 font-sans tracking-tight">Soporte</h4>
                  <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed mt-0.5">
                    Estamos disponibles para ayudarte ante cualquier duda post‑entrega.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: High-Fidelity Showcase Image */}
            <div className="lg:col-span-7 relative rounded-[2rem] min-h-[440px] h-full overflow-hidden border border-black/10 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1651684195895-38708dc94cfa?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Nuestro Proceso" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Block 2 (Image 5 Bottom): "Proven. Trusted. Ready." block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-2">
            
            {/* Left Col (Tall Image aspect container) */}
            <div className="md:col-span-7 bg-white rounded-[2.5rem] overflow-hidden border border-black/5 relative shadow-lg min-h-[380px]">
              <img 
                src="https://images.unsplash.com/photo-1764044371545-dfd065b01e6f?q=80&w=1169&auto=format&fit=crop" 
                alt="Material Necesario" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right Col: Detailed Content Description text */}
            <div className="md:col-span-5 bg-white rounded-[2.5rem] border border-black/5 p-8 md:p-12 flex flex-col justify-center text-left shadow-lg">
              
              <div className="text-center w-full mb-5">
                <h3 className="text-3xl font-extrabold tracking-tighter text-black leading-tight relative inline-block pb-2">
                  Material Necesario
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#9D7BFF] rounded-full" />
                </h3>
              </div>

              <div className="space-y-3.5 mt-2">
                {[
                  {
                    icon: "https://img.icons8.com/?size=100&id=43604&format=png&color=000000",
                    text: "Fotos profesionales",
                  },
                  {
                    icon: "https://img.icons8.com/?size=100&id=49436&format=png&color=000000",
                    text: "Logo en buena calidad",
                  },
                  {
                    icon: "https://img.icons8.com/?size=100&id=ndJssbHAnr7w&format=png&color=000000",
                    text: "Textos e información",
                  },
                  {
                    icon: "https://img.icons8.com/?size=100&id=JL8iKYmtsqyk&format=png&color=000000",
                    text: "Colores y estilo",
                  },
                  {
                    icon: "https://img.icons8.com/?size=100&id=44048&format=png&color=000000",
                    text: "Redes sociales",
                  },
                  {
                    icon: "https://img.icons8.com/?size=100&id=43677&format=png&color=000000",
                    text: "WhatsApp",
                  },
                  {
                    icon: "https://img.icons8.com/?size=100&id=43622&format=png&color=000000",
                    text: "Dirección o ubicación",
                  },
                  {
                    icon: "https://img.icons8.com/?size=100&id=XBJfETMfZHpS&format=png&color=000000",
                    text: "¡Y tu idea!",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-1.5 bg-[#9D7BFF]/10 rounded-lg shrink-0">
                      <img
                        src={item.icon}
                        alt={item.text}
                        referrerPolicy="no-referrer"
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span className="text-sm font-sans font-medium text-zinc-600">
                      {item.text}
                    </span>
                  </div>
                ))}
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
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 pb-6 border-b border-white/5 relative">
            <div className="flex-1 text-center">
              <div className="inline-flex items-center gap-2 bg-[#9D7BFF]/10 text-[#9D7BFF] px-3.5 py-1.5 rounded-full text-xs font-mono uppercase font-bold mb-4">
                <Layers className="w-3.5 h-3.5" />
                NUESTRO PORTAFOLIO
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-6 text-white text-center">
                <span className="relative inline-block pb-3">
                  Portafolio
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#9D7BFF] rounded-full" />
                </span>
              </h2>
            </div>
          </div>

          {/* Tres tarjetas separadas, una al lado de la otra, con espacio entre ellas (igual diseño que Argentina - México - Ecuador) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16 px-4">
            <div className="aspect-[2/3] relative rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl bg-zinc-950">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            </div>
            <div className="aspect-[2/3] relative rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl bg-zinc-950">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            </div>
            <div className="aspect-[2/3] relative rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl bg-zinc-950">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Textos ordenados secuencialmente debajo de las tres tarjetas */}
          <div className="text-center w-full mt-12 pb-10">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#ffffff] block mb-8 leading-[1.05]">
              Proyectos que impulsan marcas
            </span>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-24 px-6 text-center w-full">
              <div className="text-lg md:text-xl font-black text-[#ffffff] hover:text-white/80 transition-colors cursor-pointer tracking-tighter text-center">
                Landing Page
              </div>
              <div className="text-lg md:text-xl font-black text-[#ffffff] hover:text-white/80 transition-colors cursor-pointer tracking-tighter text-center">
                Multipágina
              </div>
              <div className="text-lg md:text-xl font-black text-[#ffffff] hover:text-white/80 transition-colors cursor-pointer tracking-tighter text-center">
                E‑Commerce
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
