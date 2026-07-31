import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { translations } from "./translations";
import { 
  ArrowUp,
  ArrowUpRight, 
  Layers, 
  ArrowRight,
  ChevronDown,
  Mail,
  Instagram,
  Star,
  Check,
  X,
  Plus
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
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format,compress&fit=crop&q=auto&w=800",
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
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format,compress&fit=crop&q=auto&w=800",
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
    image: "https://images.unsplash.com/photo-1484755560695-a4c7477ab95b?auto=format,compress&fit=crop&q=auto&w=800",
    details: {
      acoustic: "99.6% Warm Analog Tone",
      anc: "Hybrid Isolation (-38dB)",
      battery: "40 hours Studio Charge"
    }
  }
];


export default function App() {
  const [promptText, setPromptText] = useState("Vivid rose-gold headphone, warm golden hour backlighting, photorealistic portrait shot, octane render, beautiful braid strands");
  const [isPrompting, setIsPrompting] = useState(false);
  const [isProject1Open, setIsProject1Open] = useState(false);
  const [isProject2Open, setIsProject2Open] = useState(false);
  const [isProject3Open, setIsProject3Open] = useState(false);
  const [isProject4Open, setIsProject4Open] = useState(false);
  const [isProject5Open, setIsProject5Open] = useState(false);
  const [isProject6Open, setIsProject6Open] = useState(false);
  const [isLandingPageDetailsOpen, setIsLandingPageDetailsOpen] = useState(false);
  const [isMultipaginaDetailsOpen, setIsMultipaginaDetailsOpen] = useState(false);
  const [isEcommerceDetailsOpen, setIsEcommerceDetailsOpen] = useState(false);
  const [isPersonalizadoDetailsOpen, setIsPersonalizadoDetailsOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const [selectedLang, setSelectedLang] = useState<"es" | "en">(() => (localStorage.getItem("lang") as "es" | "en") || "es");
  const t = translations[selectedLang];
  const ROTATING_WORDS = t.headings.rotatingWords;
  const [wordIndex, setWordIndex] = useState(0);
  const selectedBrandModel = BRANDS_MODELS[wordIndex % BRANDS_MODELS.length];
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", selectedLang);
  }, [selectedLang]);

  useEffect(() => {
    if (isProject1Open || isProject2Open || isProject3Open || isProject4Open || isProject5Open || isProject6Open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isProject1Open, isProject2Open, isProject3Open, isProject4Open, isProject5Open, isProject6Open]);

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

  const highlightCities = (text: string) => {
    const citiesToHighlight = [
      "Mexico City", "Monterrey", "Ciudad de México", 
      "Buenos Aires", "Córdoba", "Quito", "Guayaquil"
    ];
    
    const regex = new RegExp(`(${citiesToHighlight.join('|')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => {
      if (citiesToHighlight.some(city => city.toLowerCase() === part.toLowerCase())) {
        return (
          <span key={i} className="text-[#9D7BFF] font-bold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

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
      <nav id="app-navbar" className="w-full absolute top-0 left-0 z-50 flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 bg-transparent">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer group select-none bg-transparent border-none p-0 focus:outline-none text-left"
          title="Volver al inicio"
        >
          <img 
            src="https://res.cloudinary.com/dkc39tw6r/image/upload/f_auto,q_auto/v1779721974/image_s39ibp.jpg" 
            alt="Logo" 
            className="w-8 h-8 rounded-sm object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-bold tracking-tighter text-lg sm:text-xl text-white group-hover:text-[#9D7BFF] transition-colors duration-300 leading-none pb-1 whitespace-nowrap">
              SERVICES AURORA
            </span>
            <span className="h-[1.5px] w-[70%] bg-[#9D7BFF] rounded-full transition-all duration-300 group-hover:bg-[#B49BFF] group-hover:w-[85%]" />
          </div>
        </button>

        {/* Central links with interactive indicator status */}
        <div className="hidden lg:flex items-center gap-8 bg-black/10 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/10 select-none">
          
          {/* QUIÉNES SOMOS */}
          <div className="group flex flex-col items-center gap-1">
            <a href="#quienes-somos" className="text-white group-hover:text-white transition-opacity text-xs font-semibold uppercase tracking-wider">
              {translations[selectedLang].navbar.quienesSomos}
            </a>
            <span className="w-1 h-1 rounded-full bg-[#9D7BFF] group-hover:bg-[#B49BFF] group-hover:scale-150 transition-all duration-300 shadow-[0_0_6px_rgba(157,123,255,0.6)]" />
          </div>

          {/* VER SERVICIOS */}
          <div className="group flex flex-col items-center gap-1">
            <a href="#services" className="text-white group-hover:text-white transition-opacity text-xs font-semibold uppercase tracking-wider">
              {translations[selectedLang].navbar.verServicios}
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
            <a 
              href="#reviews" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="text-white group-hover:text-white transition-opacity text-xs font-semibold uppercase tracking-wider"
            >
              {translations[selectedLang].navbar.portafolio}
            </a>
            <span className="w-1 h-1 rounded-full bg-[#9D7BFF] group-hover:bg-[#B49BFF] group-hover:scale-150 transition-all duration-300 shadow-[0_0_6px_rgba(157,123,255,0.6)]" />
          </div>
        </div>

        {/* Right action button */}
        <div>
          <button 
            onClick={() => {
              document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#9D7BFF] text-white font-bold px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-[#8A66FF] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#9D7BFF]/20 text-[10px] sm:text-xs tracking-wider uppercase cursor-pointer"
          >
            {translations[selectedLang].navbar.contactanos}
          </button>
        </div>
      </nav>

      {/* SECCIÓN 2: HERO ASIMÉTRICO DE CAPAS SUPERPUESTAS (Réplica Imagen 1) */}
      <section id="hero" className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-center">
        
        {/* Cinematic Backdrop with Hero Photo */}
        <div className="absolute inset-0 w-full h-full z-10 select-none overflow-hidden bg-black flex items-center justify-center">
          {/* Hero background image in full original resolution and sharpness */}
          <img 
            src="https://res.cloudinary.com/dkc39tw6r/image/upload/v1785507554/image_msmkyi.jpg"
            alt="Hero Services Aurora Web"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            style={{ imageRendering: 'auto' }}
          />
          {/* Subtle soft gradient at top/bottom/left edges to ensure header & edges blend smoothly without dimming the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent pointer-events-none" />

          {/* Subtle glowing radial accent in the background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(157,123,255,0.1),transparent_70%)] pointer-events-none" />
          
          {/* Grid pattern with low-opacity #9D7BFF strokes */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="micro-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9D7BFF" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="1.2" fill="#9D7BFF" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#micro-grid)" />
          </svg>

          {/* Elegant oblique trace lines for extra depth and cinematic style */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
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
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-5 w-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              
              {/* Tag indicator */}
              <div className="inline-flex items-center gap-2 mb-2 select-none bg-[#9D7BFF]/15 border border-[#9D7BFF]/30 px-3.5 py-1.5 rounded-full">
                <div className="relative flex items-center justify-center w-2 h-2">
                  <span className="absolute w-3.5 h-3.5 rounded-full bg-white/70 opacity-75 animate-ping" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
                </div>
                <span className="tracking-widest text-[#9D7BFF] font-mono text-xs uppercase font-extrabold">
                  {translations[selectedLang].hero.tag}
                </span>
              </div>

              <motion.h1 
                className="text-white text-5xl sm:text-6xl md:text-[85px] font-extrabold leading-[0.85] tracking-tighter mb-4 text-left w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="block">{translations[selectedLang].hero.title}</span>
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
                {translations[selectedLang].hero.description}
              </p>

              {/* Row of Buttons with pointer-events-auto enabled */}
              <div className="flex flex-wrap items-center gap-4 pointer-events-auto mb-2">
                <motion.button 
                  onClick={() => {
                    window.open(`https://wa.me/5492664688717?text=${encodeURIComponent(translations[selectedLang].whatsapp.general)}`, "_blank");
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
                  {translations[selectedLang].hero.boton}
                  <Star className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                </motion.button>
                <button 
                  onClick={() => {
                    document.getElementById("deployment")?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="bg-[#9D7BFF] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#8A66FF] active:scale-95 transition-all text-xs tracking-wider uppercase shadow-[0_4px_25px_rgba(157,123,255,0.25)] flex items-center gap-2 cursor-pointer"
                >
                  {translations[selectedLang].navbar.planes}
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
                    {translations[selectedLang].headings.garantiaSatisfaccion}
                  </h3>
                </div>

                {/* Texto principal */}
                <p className="text-gray-200 text-xs md:text-sm font-sans leading-relaxed font-semibold">
                  {translations[selectedLang].headings.garantiaTexto}
                </p>

                {/* Separador */}
                <div className="w-full h-[1px] bg-white/10" />

                {/* Texto secundario */}
                <p className="text-white text-[11px] md:text-xs font-sans leading-relaxed">
                  {translations[selectedLang].headings.analisisIdea}
                </p>

                {/* Botones */}
                <div className="w-full flex justify-center mt-2 px-1">
                  <button
                    onClick={() => {
                       window.open(`https://wa.me/5492664688717?text=${encodeURIComponent(translations[selectedLang].whatsapp.consultaGratuita)}`, "_blank");
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
                    {translations[selectedLang].headings.consultaGratuita}
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
            {translations[selectedLang].headings.quienesSomos}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-[1.05]">
            <span className="relative inline-block pb-3">
              {translations[selectedLang].headings.seccionQuienesSomos}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#9D7BFF] rounded-full" />
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white font-sans max-w-2xl mx-auto mb-4 leading-relaxed font-semibold">
            {translations[selectedLang].headings.descripcionSobre}
          </p>
        </div>

        {/* Las tres tarjetas debajo de ¿Quiénes somos? (Banderas en orden México - Izquierda, Argentina - Centro, Ecuador - Derecha) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
          {translations[selectedLang].industries.map((ind, idx) => {
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
                    alt={`${ind.title} - ${translations[selectedLang].headings.nuestroPortafolio}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
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
                    <div className="text-left py-2">
                      <p className="text-white text-xs sm:text-[13px] leading-relaxed mb-4 font-sans font-semibold [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)]">
                        {ind.description}
                      </p>
                      <p className="text-white text-xs sm:text-[12.5px] leading-relaxed font-sans font-semibold [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)] pt-2 border-t border-white/10">
                        {highlightCities(ind.cities)}
                      </p>
                    </div>
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
              {translations[selectedLang].headings.sobreNuestrosServicios}
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]">
               <span className="relative inline-block pb-3">
                 {translations[selectedLang].headings.nuestrosServicios}
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
                  alt="Servicios de diseño web profesional y desarrollo a medida"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-6 w-6 object-contain shrink-0 filter brightness-100"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight underline decoration-[#9D7BFF] decoration-2 underline-offset-4">
                  {t.services.web.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white font-sans leading-relaxed font-semibold">
                {t.services.web.desc}
              </p>
            </div>
 
            {/* Bloque 2 - Diseño Visual */}
            <div className="flex flex-col text-left p-8 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2.5 mb-5 select-none">
                <span className="text-[#9D7BFF] text-sm shrink-0 font-sans">✔️</span>
                <img
                  src="https://img.icons8.com/?size=100&id=4bRnRUyLzrOg&format=png&color=ffffff"
                  alt="Diseño visual personalizado e identidad de marca"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-6 w-6 object-contain shrink-0 filter brightness-100"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight underline decoration-[#9D7BFF] decoration-2 underline-offset-4">
                  {t.services.design.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white font-sans leading-relaxed font-semibold">
                {t.services.design.desc}
              </p>
            </div>
 
            {/* Bloque 3 - Soporte */}
            <div className="flex flex-col text-left p-8 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2.5 mb-5 select-none">
                <span className="text-[#9D7BFF] text-sm shrink-0 font-sans">✔️</span>
                <img
                  src="https://img.icons8.com/?size=100&id=43657&format=png&color=ffffff"
                  alt="Hosting confiable para tu sitio con soporte continuo"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-6 w-6 object-contain shrink-0 filter brightness-100"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight underline decoration-[#9D7BFF] decoration-2 underline-offset-4">
                  {t.services.support.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white font-sans leading-relaxed font-semibold">
                {t.services.support.desc}
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
            {translations[selectedLang].headings.sobreNuestroProceso}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-6 text-[#1A1A1A]">
            <span className="relative inline-block pb-3">
                {translations[selectedLang].headings.nuestroProceso}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#9D7BFF] rounded-full" />
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#444444] font-sans max-w-2xl mx-auto leading-relaxed">
            {translations[selectedLang].headings.textoProceso}
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
                    alt="Servicios de desarrollo web y diseño web profesional"
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-800 font-sans tracking-tight">{translations[selectedLang].headings.desarrollo.split(": ")[0]}</h4>
                  <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed mt-0.5">
                    {translations[selectedLang].headings.desarrollo.split(": ")[1]}
                  </p>
                </div>
              </div>

              {/* Step 2 – Tiempos */}
              <div className="flex items-start gap-4 p-1">
                <div className="p-2 bg-[#9D7BFF]/10 rounded-xl shrink-0 mt-0.5">
                  <img
                    src="https://img.icons8.com/?size=100&id=43666&format=png&color=000000"
                    alt={translations[selectedLang].headings.tiemposTitle}
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-800 font-sans tracking-tight">{translations[selectedLang].headings.tiemposTitle}</h4>
                  <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed mt-0.5">
                    {translations[selectedLang].headings.tiempos.split(". ").map((s, i) => s.trim() && <span key={i}>{s}.<br /></span>)}
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
                  <h4 className="text-base sm:text-lg font-bold text-zinc-800 font-sans tracking-tight">{translations[selectedLang].headings.revision.split(": ")[0]}</h4>
                  <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed mt-0.5">
                    {translations[selectedLang].headings.revision.split(": ")[1]}
                  </p>
                </div>
              </div>

              {/* Step 4 – Entrega */}
              <div className="flex items-start gap-4 p-1">
                <div className="p-2 bg-[#9D7BFF]/10 rounded-xl shrink-0 mt-0.5">
                  <img
                    src="https://img.icons8.com/?size=100&id=69463&format=png&color=000000"
                    alt={translations[selectedLang].headings.entrega.split(": ")[0]}
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-800 font-sans tracking-tight">{translations[selectedLang].headings.entrega.split(": ")[0]}</h4>
                  <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed mt-0.5">
                    {translations[selectedLang].headings.entrega.split(": ")[1]}
                  </p>
                </div>
              </div>

              {/* Step 5 – Soporte */}
              <div className="flex items-start gap-4 p-1">
                <div className="p-2 bg-[#9D7BFF]/10 rounded-xl shrink-0 mt-0.5">
                  <img
                    src="https://img.icons8.com/?size=100&id=44804&format=png&color=000000"
                    alt={translations[selectedLang].headings.soporte.split(": ")[0]}
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-800 font-sans tracking-tight">{translations[selectedLang].headings.soporte.split(": ")[0]}</h4>
                  <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed mt-0.5">
                    {translations[selectedLang].headings.soporte.split(": ")[1]}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: High-Fidelity Showcase Image */}
            <div className="lg:col-span-7 relative rounded-[2rem] min-h-[440px] h-full overflow-hidden border border-black/10 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1651684195895-38708dc94cfa?q=auto&w=1000&auto=format&fit=crop" 
                alt="Nuestro proceso de diseño web profesional con revisiones ilimitadas" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Block 2 (Image 5 Bottom): "Proven. Trusted. Ready." block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-2">
            
            {/* Left Col (Tall Image aspect container) */}
            <div className="md:col-span-7 bg-white rounded-[2.5rem] overflow-hidden border border-black/5 relative shadow-lg min-h-[380px]">
              <img 
                src="https://images.unsplash.com/photo-1764044371545-dfd065b01e6f?q=auto&w=1000&auto=format&fit=crop" 
                alt="Materiales y contenido para cotizar proyecto web y lanzar tu sitio" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right Col: Detailed Content Description text */}
            <div className="md:col-span-5 bg-white rounded-[2.5rem] border border-black/5 p-8 md:p-12 flex flex-col justify-center text-left shadow-lg">
              
              <div className="text-center w-full mb-5">
                <h3 className="text-3xl font-extrabold tracking-tighter text-black leading-tight relative inline-block pb-2">
                  {translations[selectedLang].headings.materialTitulo}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#9D7BFF] rounded-full" />
                </h3>
              </div>

              <div className="space-y-3.5 mt-2">
                {translations[selectedLang].material.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-1.5 bg-[#9D7BFF]/10 rounded-lg shrink-0">
                      <img
                        src={item.icon}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span className="text-sm font-sans font-medium text-zinc-600">
                      {item.name}
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
                {translations[selectedLang].headings.nuestroPortafolio}
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-6 text-white text-center">
                <span className="relative inline-block pb-3">
                  {translations[selectedLang].headings.portafolio}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#9D7BFF] rounded-full" />
                </span>
              </h2>
            </div>
          </div>

          {/* Tres tarjetas separadas, una al lado de la otra, con espacio entre ellas (igual diseño que Argentina - México - Ecuador) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16 px-4">
            {/* Tarjeta 1 (Landing Page) con imágenes y botón "Abrir proyecto" */}
            <div className="aspect-[2/3] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex flex-col group">
              {/* Contenedor scrolleable interno con las imágenes ordenadas y textos */}
              <div className="absolute inset-0 overflow-y-auto scrollbar-none p-5 pb-24 flex flex-col gap-6 scroll-smooth">
                {t.portfolio.projects.gym.sections.map((sec, idx) => {
                  const images = [
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM1_eqtxit.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM3_l64tyb.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM2_klkmbw.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM5_v8qtjt.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM4_b0bml0.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM6_drvqov.png"
                  ];
                  return (
                    <div key={idx} className="w-full flex flex-col gap-2 rounded-xl bg-zinc-900/50 p-2.5 border border-white/5">
                      <div className="overflow-hidden rounded-lg aspect-[16/10] bg-zinc-950 relative">
                        <img 
                          src={images[idx].replace('/upload/', '/upload/f_auto,q_auto/')} 
                          alt={`${sec.label} - Portafolio de Diseño Web Profesional`} 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <span className="font-sans text-[11px] font-semibold text-[#ffffff] text-center tracking-wide uppercase mt-1">
                        {sec.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Botón de "Abrir proyecto" que abre la ventana emergente hacia arriba */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsProject1Open(true)}
                  className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#9D7BFF]/25 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.planes.abrirProyecto}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tarjeta 2 (Multipágina) con imágenes y botón "Abrir proyecto" */}
            <div className="aspect-[2/3] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex flex-col group">
              {/* Contenedor scrolleable interno con las imágenes ordenadas y textos de Odontología */}
              <div className="absolute inset-0 overflow-y-auto scrollbar-none p-5 pb-24 flex flex-col gap-6 scroll-smooth">
                {t.portfolio.projects.dentistry.sections.map((sec, idx) => {
                  const images = [
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513819/1_dmk2am.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513817/2_odsadm.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513817/3_x6dqbi.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513817/3_-_SECCION_A_PARTE_DE_NUESTROS_TRATAMIENTOS_ibbqns.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513818/4_nqrmw5.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513820/5_-_SECCION_A_PARTE_DE_GALERIA_DE_CONSULTORIO_fpl00w.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778519186/7_qjxory.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513818/6_owzwc4.png"
                  ];
                  return (
                    <div key={idx} className="w-full flex flex-col gap-2 rounded-xl bg-zinc-900/50 p-2.5 border border-white/5">
                      <div className="overflow-hidden rounded-lg aspect-[16/10] bg-zinc-950 relative">
                        <img 
                          src={images[idx].replace('/upload/', '/upload/f_auto,q_auto/')} 
                          alt={`${sec.label} - Desarrollo de Sitio Web Profesional`} 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <span className="font-sans text-[11px] font-semibold text-[#ffffff] text-center tracking-wide uppercase mt-1">
                        {sec.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Botón de "Abrir proyecto" que abre la ventana emergente hacia arriba */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsProject2Open(true)}
                  className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#9D7BFF]/25 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.planes.abrirProyecto}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tarjeta 3 (E‑Commerce) con imágenes y botón "Abrir proyecto" */}
            <div className="aspect-[2/3] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex flex-col group">
              {/* Contenedor scrolleable interno con las imágenes ordenadas y textos de Keito */}
              <div className="absolute inset-0 overflow-y-auto scrollbar-none p-5 pb-24 flex flex-col gap-6 scroll-smooth">
                {t.portfolio.projects.ecommerce.sections.map((sec, idx) => {
                  const images = [
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026426/1_k96xxk.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026426/2_lvv2zu.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026426/6_xkyb4d.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026426/3_wiwzun.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026426/5_xplgy4.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026427/7_ixmtlh.png"
                  ];
                  return (
                    <div key={idx} className="w-full flex flex-col gap-2 rounded-xl bg-zinc-900/50 p-2.5 border border-white/5">
                      <div className="overflow-hidden rounded-lg aspect-[16/10] bg-zinc-950 relative">
                        <img 
                          src={images[idx].replace('/upload/', '/upload/f_auto,q_auto/')} 
                          alt={`${sec.label} - Plataforma de E-Commerce`} 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <span className="font-sans text-[11px] font-semibold text-[#ffffff] text-center tracking-wide uppercase mt-1">
                        {sec.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Botón de "Abrir proyecto" que abre la ventana emergente hacia arriba */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsProject3Open(true)}
                  className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#9D7BFF]/25 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.planes.abrirProyecto}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tarjeta 4 (Óptica — Lentes & Anteojos) con imágenes y botón "Abrir proyecto" */}
            <div className="aspect-[2/3] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex flex-col group">
              {/* Contenedor scrolleable interno con las imágenes ordenadas y textos de Óptica */}
              <div className="absolute inset-0 overflow-y-auto scrollbar-none p-5 pb-24 flex flex-col gap-6 scroll-smooth">
                {t.portfolio.projects.architecture.sections.map((sec, idx) => {
                  const images = [
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782931741/1_q2nr3r.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782931740/2_lovsse.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782931742/3_FINAL_ngpncn.png"
                  ];
                  return (
                    <div key={idx} className="w-full flex flex-col gap-2 rounded-xl bg-zinc-900/50 p-2.5 border border-white/5">
                      <div className="overflow-hidden rounded-lg aspect-[16/10] bg-zinc-950 relative">
                        <img 
                          src={images[idx].replace('/upload/', '/upload/f_auto,q_auto/')} 
                          alt={`${sec.label} - Services Aurora Web`} 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <span className="font-sans text-[11px] font-semibold text-[#ffffff] text-center tracking-wide uppercase mt-1">
                        {sec.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Botón de "Abrir proyecto" que abre la ventana emergente hacia arriba */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsProject4Open(true)}
                  className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#9D7BFF]/25 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.planes.abrirProyecto}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tarjeta 5 (Fábrica de Sillones — Muebles a Medida) con imágenes y botón "Abrir proyecto" */}
            <div className="aspect-[2/3] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex flex-col group">
              {/* Contenedor scrolleable interno con las imágenes ordenadas y textos de Fábrica de Sillones */}
              <div className="absolute inset-0 overflow-y-auto scrollbar-none p-5 pb-24 flex flex-col gap-6 scroll-smooth">
                {t.portfolio.projects.hotel.sections.map((sec, idx) => {
                  const images = [
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940561/1_s3l4dy.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940559/3_m9ojlc.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940558/2_ygvzqs.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940556/4_cmwdcc.png"
                  ];
                  return (
                    <div key={idx} className="w-full flex flex-col gap-2 rounded-xl bg-zinc-900/50 p-2.5 border border-white/5">
                      <div className="overflow-hidden rounded-lg aspect-[16/10] bg-zinc-950 relative">
                        <img 
                          src={images[idx % images.length].replace('/upload/', '/upload/f_auto,q_auto/')} 
                          alt={`${sec.label} - Services Aurora Web`} 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <span className="font-sans text-[11px] font-semibold text-[#ffffff] text-center tracking-wide uppercase mt-1">
                        {sec.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Botón de "Abrir proyecto" que abre la ventana emergente hacia arriba */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsProject5Open(true)}
                  className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#9D7BFF]/25 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.planes.abrirProyecto}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tarjeta 6 (Tienda de Calzado & Ropa) con imágenes y botón "Abrir proyecto" */}
            <div className="aspect-[2/3] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex flex-col group">
              {/* Contenedor scrolleable interno con las imágenes ordenadas y textos de Tienda de Calzado & Ropa */}
              <div className="absolute inset-0 overflow-y-auto scrollbar-none p-5 pb-24 flex flex-col gap-6 scroll-smooth">
                {t.portfolio.projects.medical.sections.map((sec, idx) => {
                  const images = [
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940961/1_rg8po5.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940961/2_luhex4.png",
                    "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940959/3_nd1fzu.png"
                  ];
                  return (
                    <div key={idx} className="w-full flex flex-col gap-2 rounded-xl bg-zinc-900/50 p-2.5 border border-white/5">
                      <div className="overflow-hidden rounded-lg aspect-[16/10] bg-zinc-950 relative">
                        <img 
                          src={images[idx % images.length].replace('/upload/', '/upload/f_auto,q_auto/')} 
                          alt={`${sec.label} - Services Aurora Web`} 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <span className="font-sans text-[11px] font-semibold text-[#ffffff] text-center tracking-wide uppercase mt-1">
                        {sec.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Botón de "Abrir proyecto" que abre la ventana emergente hacia arriba */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsProject6Open(true)}
                  className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#9D7BFF]/25 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.planes.abrirProyecto}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tarjetas vacías para futuros proyectos (2 restantes) */}
            {[1, 2].map((num) => (
              <div key={num} className="aspect-[2/3] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex flex-col justify-center items-center p-8 text-center group hover:border-[#9D7BFF]/30 transition-all duration-300">
                {/* Grid pattern background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />
                
                {/* Glowing decorative orb in background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#9D7BFF]/5 blur-3xl pointer-events-none group-hover:bg-[#9D7BFF]/10 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Decorative Icon */}
                  <div className="w-16 h-16 rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#9D7BFF]/20 group-hover:bg-[#9D7BFF]/5 transition-all duration-300">
                    <Plus className="w-6 h-6 text-zinc-500 group-hover:text-[#9D7BFF] transition-colors duration-300" />
                  </div>
                  
                  {/* Badge */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9D7BFF] bg-[#9D7BFF]/10 px-3 py-1 rounded-full font-bold mb-3">
                    {selectedLang === "es" ? "Próximamente" : "Coming Soon"}
                  </span>

                  {/* Text */}
                  <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
                    {selectedLang === "es" ? "Futuro Proyecto" : "Future Project"}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans max-w-[200px] leading-relaxed">
                    {selectedLang === "es" 
                      ? "Tu próximo éxito digital podría estar aquí. ¡Consúltanos hoy!" 
                      : "Your next digital success could be here. Contact us today!"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Textos ordenados secuencialmente debajo de las tres tarjetas */}
          <div className="text-center w-full mt-14 pb-10 flex flex-col items-center justify-center">
            <div className="inline-block relative pb-3 mb-5">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#ffffff] block leading-tight">
                {translations[selectedLang].headings.proyectosTitulo}
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9D7BFF] mx-auto" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#ffffff] tracking-tight">
              {translations[selectedLang].headings.proyectosSubtitulo}
            </div>
          </div>

        </div>
      </section>

      {/* ADDITIONAL SECCIÓN: DEPLOYMENT MODULE CARDS (Inspired by Imagen 6) */}
      <section id="deployment" className="bg-[#F2EFE9] text-black py-24 px-6 md:px-12 relative z-20 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <div className="inline-block relative pb-3 mb-5">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-[#1A1A1A] leading-tight">
                {t.planes.titulo}
              </h2>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1.5px] bg-[#9D7BFF]" />
              </div>
              <p className="text-[#1A1A1A] text-sm font-sans font-medium max-w-2xl mx-auto leading-relaxed mt-2 text-center">
                {t.planes.descripcion}
              </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            {/* 1. Landing Page */}
            <div className="bg-[#E6E1D8] border-2 border-black rounded-[1.8rem] p-8 flex flex-col justify-between min-h-[300px] h-full hover:scale-[1.02] duration-300 transition-all">
              <div className="text-center flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-2 tracking-tight text-black font-sans text-center">{t.planes.landing.titulo}</h4>
                  
                  <div className="mb-4 space-y-1 text-center">
                    <span className="text-sm font-extrabold text-black block font-sans">
                      {t.planes.desde} $250.000 ARS / $169,14 USD
                    </span>
                    <span className="text-xs font-semibold text-gray-700 block font-sans">
                      {t.planes.mantenimiento}: $90.000 ARS/{t.planes.mes} / $60,89 USD/{t.planes.mes}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed text-center font-sans">
                    {t.planes.landing.descripcion}
                  </p>
                </div>

                {/* Collapsible Details */}
                <AnimatePresence>
                  {isLandingPageDetailsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-left border-t border-black/10 pt-5 mt-5"
                    >
                      <ul className="space-y-3">
                        {t.planes.landing.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-black font-sans font-medium leading-tight">
                            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#9D7BFF]/20 text-[#8B66FF] flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span className="text-gray-900">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        onClick={() => {
                          window.open(`https://wa.me/5492664688717?text=${encodeURIComponent(t.whatsapp.planLanding)}`, "_blank");
                        }}
                        className="w-full bg-black hover:bg-[#8B66FF] text-white font-sans font-bold py-2.5 px-4 rounded-full text-xs mt-6 transition-all hover:scale-[1.03] active:scale-95 cursor-pointer block text-center shadow-md hover:shadow-[#8B66FF]/25"
                      >
                        {t.planes.contratar}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                type="button"
                onClick={() => {
                  setIsLandingPageDetailsOpen(!isLandingPageDetailsOpen);
                }}
                className="bg-black text-white hover:bg-[#9D7BFF] hover:text-black font-mono font-bold py-2 rounded-xl text-[10px] uppercase tracking-wider transition-colors mt-8 cursor-pointer w-full text-center"
              >
                {isLandingPageDetailsOpen ? t.planes.ocultarDetalles : t.planes.verDetalles}
              </button>
            </div>

            {/* 2. Multipágina */}
            <div className="bg-[#E6E1D8] border-2 border-black rounded-[1.8rem] p-8 flex flex-col justify-between min-h-[300px] h-full hover:scale-[1.02] duration-300 transition-all">
              <div className="text-center flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-2 tracking-tight text-black font-sans text-center">{t.planes.multipagina.titulo}</h4>
                  
                  <div className="mb-4 space-y-1 text-center font-sans">
                    <span className="text-sm font-extrabold text-black block">
                      {t.planes.desde} $350.000 ARS / $202,97 USD
                    </span>
                    <span className="text-xs font-semibold text-gray-700 block">
                      {t.planes.mantenimiento}: $120.000 ARS/{t.planes.mes} / $81,19 USD/{t.planes.mes}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed text-center font-sans">
                    {t.planes.multipagina.descripcion}
                  </p>
                </div>

                {/* Collapsible Details */}
                <AnimatePresence>
                  {isMultipaginaDetailsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-left border-t border-black/10 pt-5 mt-5"
                    >
                      <ul className="space-y-3">
                        {t.planes.multipagina.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-black font-sans font-medium leading-tight">
                            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#9D7BFF]/20 text-[#8B66FF] flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span className="text-gray-900">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        onClick={() => {
                          window.open(`https://wa.me/5492664688717?text=${encodeURIComponent(t.whatsapp.planMultipagina)}`, "_blank");
                        }}
                        className="w-full bg-black hover:bg-[#8B66FF] text-white font-sans font-bold py-2.5 px-4 rounded-full text-xs mt-6 transition-all hover:scale-[1.03] active:scale-95 cursor-pointer block text-center shadow-md hover:shadow-[#8B66FF]/25"
                      >
                        {t.planes.contratar}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                type="button"
                onClick={() => {
                  setIsMultipaginaDetailsOpen(!isMultipaginaDetailsOpen);
                }}
                className="bg-black text-white hover:bg-[#9D7BFF] hover:text-black font-mono font-bold py-2 rounded-xl text-[10px] uppercase tracking-wider transition-colors mt-8 cursor-pointer w-full text-center"
              >
                {isMultipaginaDetailsOpen ? t.planes.ocultarDetalles : t.planes.verDetalles}
              </button>
            </div>

            {/* 3. E-Commerce */}
            <div className="bg-[#E6E1D8] border-2 border-black rounded-[1.8rem] p-8 flex flex-col justify-between min-h-[300px] h-full hover:scale-[1.02] duration-300 transition-all">
              <div className="text-center flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-2 tracking-tight text-black font-sans text-center">{t.planes.ecommerce.titulo}</h4>
                  
                  <div className="mb-4 space-y-1 text-center font-sans">
                    <span className="text-sm font-extrabold text-black block">
                      {t.planes.desde} $700.000 ARS / $500 USD
                    </span>
                    <span className="text-xs font-semibold text-gray-700 block">
                      {t.planes.mantenimiento}: {t.planes.desde.toLowerCase()} $150.000 ARS/{t.planes.mes} / $105 USD/{t.planes.mes}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed text-center font-sans">
                    {t.planes.ecommerce.descripcion}
                  </p>
                </div>

                {/* Collapsible Details */}
                <AnimatePresence>
                  {isEcommerceDetailsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-left border-t border-black/10 pt-5 mt-5"
                    >
                      <ul className="space-y-3">
                        {t.planes.ecommerce.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-black font-sans font-medium leading-tight">
                            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#9D7BFF]/20 text-[#8B66FF] flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span className="text-gray-900">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        onClick={() => {
                          window.open(`https://wa.me/5492664688717?text=${encodeURIComponent(t.whatsapp.planEcommerce)}`, "_blank");
                        }}
                        className="w-full bg-black hover:bg-[#8B66FF] text-white font-sans font-bold py-2.5 px-4 rounded-full text-xs mt-6 transition-all hover:scale-[1.03] active:scale-95 cursor-pointer block text-center shadow-md hover:shadow-[#8B66FF]/25"
                      >
                        {t.planes.contratar}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                type="button"
                onClick={() => {
                  setIsEcommerceDetailsOpen(!isEcommerceDetailsOpen);
                }}
                className="bg-black text-white hover:bg-[#9D7BFF] hover:text-black font-mono font-bold py-2 rounded-xl text-[10px] uppercase tracking-wider transition-colors mt-8 cursor-pointer w-full text-center"
              >
                {isEcommerceDetailsOpen ? t.planes.ocultarDetalles : t.planes.verDetalles}
              </button>
            </div>

            {/* 4. Plan personalizado */}
            <div className="bg-[#E6E1D8] border-2 border-black rounded-[1.8rem] p-8 flex flex-col justify-between min-h-[300px] h-full hover:scale-[1.02] duration-300 transition-all">
              <div className="text-center flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-2 tracking-tight text-black font-sans text-center">{translations[selectedLang].planes.personalizado.titulo}</h4>
                  
                  <div className="mb-4 space-y-1 text-center font-sans">
                    <span className="text-sm font-extrabold text-black block">
                      {t.planes.desde} $480.000 ARS / $340 USD
                    </span>
                    <span className="text-xs font-semibold text-gray-700 block">
                      {t.planes.mantenimiento}: {t.planes.desde.toLowerCase()} $130.000 ARS/{t.planes.mes} / $92 USD/{t.planes.mes}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed text-center font-sans">
                    {translations[selectedLang].planes.personalizado.descripcion}
                  </p>
                </div>

                {/* Collapsible Details */}
                <AnimatePresence>
                  {isPersonalizadoDetailsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-left border-t border-black/10 pt-5 mt-5 space-y-6"
                    >
                      {/* Plan: Gestión de tareas */}
                      <div className="border border-black/5 bg-black/5 rounded-2xl p-4">
                        <h5 className="text-xs font-bold text-black font-sans flex items-center gap-1.5 mb-1 text-left">
                          <span className="text-xs">🔹</span> {translations[selectedLang].planes.personalizado.gestionTareas.titulo}
                        </h5>
                        <div className="mb-3 space-y-0.5 font-sans text-left">
                          <span className="text-xs font-extrabold text-black block">
                            {translations[selectedLang].planes.desde} $480.000 ARS / $340 USD
                          </span>
                          <span className="text-[10px] font-semibold text-gray-700 block">
                            {translations[selectedLang].planes.mantenimiento}: {translations[selectedLang].planes.desde.toLowerCase()} $130.000 ARS/{translations[selectedLang].planes.mes} / $92 USD/{translations[selectedLang].planes.mes}
                          </span>
                        </div>
                        
                        <ul className="space-y-2 mb-4">
                          {translations[selectedLang].planes.personalizado.gestionTareas.features.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[11px] text-black font-sans font-medium leading-tight">
                              <span className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-[#9D7BFF]/20 text-[#8B66FF] flex items-center justify-center">
                                <Check className="w-2 h-2 stroke-[3]" />
                              </span>
                              <span className="text-gray-900">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          type="button"
                          onClick={() => {
                            window.open(`https://wa.me/5492664688717?text=${encodeURIComponent(translations[selectedLang].whatsapp.planGestion)}`, "_blank");
                          }}
                          className="w-full bg-black hover:bg-[#8B66FF] text-white font-sans font-bold py-2 px-3 rounded-full text-[11px] transition-all hover:scale-[1.03] active:scale-95 cursor-pointer block text-center"
                        >
                          {translations[selectedLang].planes.contratar}
                        </button>
                      </div>

                      {/* Plan: Stock e inventario */}
                      <div className="border border-black/5 bg-black/5 rounded-2xl p-4">
                        <h5 className="text-xs font-bold text-black font-sans flex items-center gap-1.5 mb-1 text-left">
                          <span className="text-xs">🔹</span> {translations[selectedLang].planes.personalizado.stockInventario.titulo}
                        </h5>
                        <div className="mb-3 space-y-0.5 font-sans text-left">
                          <span className="text-xs font-extrabold text-black block">
                            {translations[selectedLang].planes.desde} $500.000 ARS / $355 USD
                          </span>
                          <span className="text-[10px] font-semibold text-gray-700 block">
                            {translations[selectedLang].planes.mantenimiento}: {translations[selectedLang].planes.desde.toLowerCase()} $130.000 ARS/{translations[selectedLang].planes.mes} / $92 USD/{translations[selectedLang].planes.mes}
                          </span>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {translations[selectedLang].planes.personalizado.stockInventario.features.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[11px] text-black font-sans font-medium leading-tight">
                              <span className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-[#9D7BFF]/20 text-[#8B66FF] flex items-center justify-center">
                                <Check className="w-2 h-2 stroke-[3]" />
                              </span>
                              <span className="text-gray-900">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          type="button"
                          onClick={() => {
                            window.open(`https://wa.me/5492664688717?text=${encodeURIComponent(translations[selectedLang].whatsapp.planStock)}`, "_blank");
                          }}
                          className="w-full bg-black hover:bg-[#8B66FF] text-white font-sans font-bold py-2 px-3 rounded-full text-[11px] transition-all hover:scale-[1.03] active:scale-95 cursor-pointer block text-center"
                        >
                          {translations[selectedLang].planes.contratar}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                type="button"
                onClick={() => {
                  setIsPersonalizadoDetailsOpen(!isPersonalizadoDetailsOpen);
                }}
                className="bg-black text-white hover:bg-[#9D7BFF] hover:text-black font-mono font-bold py-2 rounded-xl text-[10px] uppercase tracking-wider transition-colors mt-8 cursor-pointer w-full text-center"
              >
                {isPersonalizadoDetailsOpen ? translations[selectedLang].planes.ocultarDetalles : translations[selectedLang].planes.verDetalles}
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CONTACT & FAQ SECTION */}
      <section id="faq-section" className="bg-[#F2EFE9] text-black py-24 px-6 md:px-12 relative z-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Columna izquierda – Contáctanos */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <div className="inline-block relative pb-3 mb-4">
                  <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-[#1A1A1A] leading-tight">
                    {translations[selectedLang].headings.contacto}
                  </h2>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1.5px] bg-[#9D7BFF]" />
                </div>
                <p className="text-gray-800 text-sm font-sans font-medium leading-relaxed">
                  {translations[selectedLang].headings.contactoDesc}
                </p>
              </div>

              <div className="space-y-6 pt-2">
                {/* WhatsApp */}
                <div className="group">
                  <span className="block text-[11px] font-mono uppercase text-[#8B66FF] tracking-wider font-bold mb-1">
                    WhatsApp:
                  </span>
                  <a
                    href={`https://wa.me/5492664688717?text=${encodeURIComponent(translations[selectedLang].whatsapp.consulta)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-base md:text-lg font-bold text-black hover:text-[#8B66FF] transition-colors font-sans"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8B66FF]/10 text-[#8B66FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    +54 9 2664 68-8717
                  </a>
                </div>

                {/* E-mail */}
                <div className="group">
                  <span className="block text-[11px] font-mono uppercase text-[#8B66FF] tracking-wider font-bold mb-1">
                    E‑mail:
                  </span>
                  <a
                    href="mailto:auroraserviceem@gmail.com"
                    className="inline-flex items-center gap-2.5 text-base md:text-lg font-bold text-black hover:text-[#8B66FF] transition-colors font-sans"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8B66FF]/10 text-[#8B66FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </span>
                    auroraserviceem@gmail.com
                  </a>
                </div>

                {/* Instagram */}
                <div className="group">
                  <span className="block text-[11px] font-mono uppercase text-[#8B66FF] tracking-wider font-bold mb-1">
                    Instagram:
                  </span>
                  <a
                    href="https://instagram.com/auroraservicesweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-base md:text-lg font-bold text-black hover:text-[#8B66FF] transition-colors font-sans"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8B66FF]/10 text-[#8B66FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="w-4 h-4" />
                    </span>
                    @auroraservicesweb
                  </a>
                </div>
              </div>
            </div>

            {/* Columna derecha – Preguntas frecuentes (FAQ) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-block relative pb-3 mb-4">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-[#1A1A1A] leading-tight">
                  {translations[selectedLang].headings.faq}
                </h2>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1.5px] bg-[#9D7BFF]" />
              </div>

              <div className="space-y-4">
                {translations[selectedLang].faq.map((item, index) => {
                  const isOpen = activeFaqIndex === index;
                  return (
                    <div 
                      key={index} 
                      className="bg-white border border-black/5 rounded-[1.4rem] p-5 md:p-6 shadow-sm hover:shadow transition-all duration-300"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                        className="w-full flex justify-between items-start text-left font-sans font-extrabold text-black hover:text-[#8B66FF] transition-colors focus:outline-none gap-4 group cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-lg bg-[#8B66FF]/10 text-[#8B66FF] flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                          <span className="text-base md:text-lg tracking-tight leading-snug text-gray-900 group-hover:text-[#8B66FF] transition-colors">
                            {item.q}
                          </span>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 mt-1 ${isOpen ? "rotate-180 text-[#8B66FF]" : ""}`} 
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-black/5 pt-4 mt-4 text-gray-800 text-sm font-sans font-medium leading-relaxed whitespace-pre-line">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer id="contact" className="bg-black text-white border-t border-white/5 py-12 px-6 relative z-20">
        
        {/* Absolute glow background block */}
        <div className="absolute bottom-0 left-[20%] h-[150px] w-[500px] rounded-full bg-[#5c3bf2]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div>
              <span>© {new Date().getFullYear()} Services Aurora Web. Todos los derechos reservados.</span>
            </div>
            <div className="flex gap-6">
              <a href="https://instagram.com/auroraservicesweb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="mailto:auroraserviceem@gmail.com" className="hover:text-white transition-colors">Contacto</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Immersive slide-up drawer for the gym landing page project */}
      <AnimatePresence>
        {isProject1Open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="w-full max-w-5xl h-[88vh] sm:h-[92vh] bg-[#F9FAFB] border border-zinc-200 shadow-2xl rounded-[2.5rem] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-zinc-200 bg-white sticky top-0 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9D7BFF] animate-pulse" />
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-zinc-900">{t.portfolio.projects.gym.title}</h3>
                    <p className="font-sans text-[11px] text-zinc-500">{t.portfolio.projects.gym.subtitle}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsProject1Open(false)}
                  className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 flex items-center justify-center transition-all duration-200 cursor-pointer hover:rotate-90 active:scale-95"
                  title={t.portfolio.modal.closeProject}
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Scrollable Project Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 space-y-12 pb-24 scroll-smooth scrollbar-thin">
                <div className="max-w-3xl mx-auto text-center mb-6">
                  <span className="font-mono text-[10px] text-[#7C3AED] bg-[#9D7BFF]/10 px-3 py-1 rounded-full uppercase font-bold tracking-widest inline-block mb-3">{t.portfolio.projects.gym.tag}</span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">{t.portfolio.projects.gym.mainDescription}</h4>
                  <p className="text-xs sm:text-sm text-black font-sans mt-2 max-w-xl mx-auto leading-relaxed">
                    {t.portfolio.projects.gym.mainWalkthrough}
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                  {t.portfolio.projects.gym.sections.map((item, index) => {
                    const images = [
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM1_eqtxit.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM3_l64tyb.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM2_klkmbw.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM5_v8qtjt.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM4_b0bml0.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1779253352/GYM6_drvqov.png"
                    ];
                    return (
                      <div key={index} className="flex flex-col gap-4 bg-white p-5 sm:p-6 rounded-3xl border border-zinc-200 shadow-md hover:border-[#9D7BFF]/30 transition-all duration-300">
                        <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#9D7BFF]/10 text-[#7C3AED] font-mono text-xs font-bold flex items-center justify-center">
                              {index + 1}
                            </span>
                            <span className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight">{item.label}</span>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md">
                            {t.portfolio.modal.section} {index + 1}
                          </span>
                        </div>
                        <div className="overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/50 shadow-inner">
                          <img 
                            src={images[index]} 
                            alt={`${item.label} - Services Aurora Web`} 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover max-h-[70vh] hover:scale-[1.01] transition-transform duration-500" 
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-black font-sans leading-relaxed px-1">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Call to Action inside Slide Up drawer */}
                <div className="bg-[#9D7BFF]/5 rounded-3xl border border-[#9D7BFF]/20 p-8 max-w-4xl mx-auto text-center mt-12 mb-16">
                  <h5 className="text-lg font-extrabold text-zinc-900 mb-2">{t.portfolio.modal.routeFinished}</h5>
                  <p className="text-xs text-black max-w-md mx-auto leading-relaxed mb-6">
                    {t.portfolio.modal.routeFinishedDesc}
                  </p>
                  <button
                    onClick={() => setIsProject1Open(false)}
                    className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-8 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>{t.portfolio.modal.close}</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive slide-up drawer for the dentistry multipaging project */}
      <AnimatePresence>
        {isProject2Open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="w-full max-w-5xl h-[88vh] sm:h-[92vh] bg-[#F9FAFB] border border-zinc-200 shadow-2xl rounded-[2.5rem] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-zinc-200 bg-white sticky top-0 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9D7BFF] animate-pulse" />
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-zinc-900">{t.portfolio.projects.dentistry.title}</h3>
                    <p className="font-sans text-[11px] text-zinc-500">{t.portfolio.projects.dentistry.subtitle}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsProject2Open(false)}
                  className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 flex items-center justify-center transition-all duration-200 cursor-pointer hover:rotate-90 active:scale-95"
                  title={t.portfolio.modal.closeProject}
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Scrollable Project Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 space-y-12 pb-24 scroll-smooth scrollbar-thin">
                <div className="max-w-3xl mx-auto text-center mb-6">
                  <span className="font-mono text-[10px] text-[#7C3AED] bg-[#9D7BFF]/10 px-3 py-1 rounded-full uppercase font-bold tracking-widest inline-block mb-3">{t.portfolio.projects.dentistry.tag}</span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">{t.portfolio.projects.dentistry.mainDescription}</h4>
                  <p className="text-xs sm:text-sm text-black font-sans mt-2 max-w-xl mx-auto leading-relaxed">
                    {t.portfolio.projects.dentistry.mainWalkthrough}
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                  {t.portfolio.projects.dentistry.sections.map((item, index) => {
                    const images = [
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513819/1_dmk2am.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513817/2_odsadm.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513817/3_x6dqbi.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513817/3_-_SECCION_A_PARTE_DE_NUESTROS_TRATAMIENTOS_ibbqns.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513818/4_nqrmw5.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513820/5_-_SECCION_A_PARTE_DE_GALERIA_DE_CONSULTORIO_fpl00w.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778519186/7_qjxory.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778513818/6_owzwc4.png"
                    ];
                    return (
                      <div key={index} className="flex flex-col gap-4 bg-white p-5 sm:p-6 rounded-3xl border border-zinc-200 shadow-md hover:border-[#9D7BFF]/30 transition-all duration-300">
                        <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#9D7BFF]/10 text-[#7C3AED] font-mono text-xs font-bold flex items-center justify-center">
                              {index + 1}
                            </span>
                            <span className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight">{item.label}</span>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md">
                            {t.portfolio.modal.section} {index + 1}
                          </span>
                        </div>
                        <div className="overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/50 shadow-inner">
                          <img 
                            src={images[index]} 
                            alt={`${item.label} - Services Aurora Web`} 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover max-h-[70vh] hover:scale-[1.01] transition-transform duration-500" 
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-black font-sans leading-relaxed px-1">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Call to Action inside Slide Up drawer */}
                <div className="bg-[#9D7BFF]/5 rounded-3xl border border-[#9D7BFF]/20 p-8 max-w-4xl mx-auto text-center mt-12 mb-16">
                  <h5 className="text-lg font-extrabold text-[#7C3AED] mb-2">{t.portfolio.modal.routeFinished}</h5>
                  <p className="text-xs text-black max-w-md mx-auto leading-relaxed mb-6">
                    {t.portfolio.modal.routeFinishedDesc}
                  </p>
                  <button
                    onClick={() => setIsProject2Open(false)}
                    className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-8 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>{t.portfolio.modal.close}</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive slide-up drawer for the Keito E‑Commerce project */}
      <AnimatePresence>
        {isProject3Open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="w-full max-w-5xl h-[88vh] sm:h-[92vh] bg-[#F9FAFB] border border-zinc-200 shadow-2xl rounded-[2.5rem] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-zinc-200 bg-white sticky top-0 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9D7BFF] animate-pulse" />
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-zinc-900">{t.portfolio.projects.ecommerce.title}</h3>
                    <p className="font-sans text-[11px] text-zinc-500">{t.portfolio.projects.ecommerce.subtitle}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsProject3Open(false)}
                  className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 flex items-center justify-center transition-all duration-200 cursor-pointer hover:rotate-90 active:scale-95"
                  title={t.portfolio.modal.closeProject}
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Scrollable Project Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 space-y-12 pb-24 scroll-smooth scrollbar-thin">
                <div className="max-w-3xl mx-auto text-center mb-6">
                  <span className="font-mono text-[10px] text-[#7C3AED] bg-[#9D7BFF]/10 px-3 py-1 rounded-full uppercase font-bold tracking-widest inline-block mb-3">{t.portfolio.projects.ecommerce.tag}</span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">{t.portfolio.projects.ecommerce.mainDescription}</h4>
                  <p className="text-xs sm:text-sm text-black font-sans mt-2 max-w-xl mx-auto leading-relaxed">
                    {t.portfolio.projects.ecommerce.mainWalkthrough}
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                  {t.portfolio.projects.ecommerce.sections.map((item, index) => {
                    const images = [
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026426/1_k96xxk.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026426/2_lvv2zu.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026426/6_xkyb4d.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026426/3_wiwzun.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026426/5_xplgy4.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1778026427/7_ixmtlh.png"
                    ];
                    return (
                      <div key={index} className="flex flex-col gap-4 bg-white p-5 sm:p-6 rounded-3xl border border-zinc-200 shadow-md hover:border-[#9D7BFF]/30 transition-all duration-300">
                        <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#9D7BFF]/10 text-[#7C3AED] font-mono text-xs font-bold flex items-center justify-center">
                              {index + 1}
                            </span>
                            <span className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight">{item.label}</span>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md">
                            {t.portfolio.modal.section} {index + 1}
                          </span>
                        </div>
                        <div className="overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/50 shadow-inner">
                          <img 
                            src={images[index]} 
                            alt={`${item.label} - Services Aurora Web`} 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover max-h-[70vh] hover:scale-[1.01] transition-transform duration-500" 
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-black font-sans leading-relaxed px-1">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Call to Action inside Slide Up drawer */}
                <div className="bg-[#9D7BFF]/5 rounded-3xl border border-[#9D7BFF]/20 p-8 max-w-4xl mx-auto text-center mt-12 mb-16">
                  <h5 className="text-lg font-extrabold text-[#7C3AED] mb-2">{t.portfolio.modal.routeFinished}</h5>
                  <p className="text-xs text-black max-w-md mx-auto leading-relaxed mb-6">
                    {t.portfolio.modal.routeFinishedDesc}
                  </p>
                  <button
                    onClick={() => setIsProject3Open(false)}
                    className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-8 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>{t.portfolio.modal.close}</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive slide-up drawer for the Optics project */}
      <AnimatePresence>
        {isProject4Open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="w-full max-w-5xl h-[88vh] sm:h-[92vh] bg-[#F9FAFB] border border-zinc-200 shadow-2xl rounded-[2.5rem] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-zinc-200 bg-white sticky top-0 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9D7BFF] animate-pulse" />
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-zinc-900">{t.portfolio.projects.architecture.title}</h3>
                    <p className="font-sans text-[11px] text-zinc-500">{t.portfolio.projects.architecture.subtitle}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsProject4Open(false)}
                  className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 flex items-center justify-center transition-all duration-200 cursor-pointer hover:rotate-90 active:scale-95"
                  title={t.portfolio.modal.closeProject}
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Scrollable Project Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 space-y-12 pb-24 scroll-smooth scrollbar-thin">
                <div className="max-w-3xl mx-auto text-center mb-6">
                  <span className="font-mono text-[10px] text-[#7C3AED] bg-[#9D7BFF]/10 px-3 py-1 rounded-full uppercase font-bold tracking-widest inline-block mb-3">{t.portfolio.projects.architecture.tag}</span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">{t.portfolio.projects.architecture.mainDescription}</h4>
                  <p className="text-xs sm:text-sm text-black font-sans mt-2 max-w-xl mx-auto leading-relaxed">
                    {t.portfolio.projects.architecture.mainWalkthrough}
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                  {t.portfolio.projects.architecture.sections.map((item, index) => {
                    const images = [
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782931741/1_q2nr3r.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782931740/2_lovsse.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782931742/3_FINAL_ngpncn.png"
                    ];
                    return (
                      <div key={index} className="flex flex-col gap-4 bg-white p-5 sm:p-6 rounded-3xl border border-zinc-200 shadow-md hover:border-[#9D7BFF]/30 transition-all duration-300">
                        <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#9D7BFF]/10 text-[#7C3AED] font-mono text-xs font-bold flex items-center justify-center">
                              {index + 1}
                            </span>
                            <span className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight">{item.label}</span>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md">
                            {t.portfolio.modal.section} {index + 1}
                          </span>
                        </div>
                        <div className="overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/50 shadow-inner">
                          <img 
                            src={images[index]} 
                            alt={`${item.label} - Services Aurora Web`} 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover max-h-[70vh] hover:scale-[1.01] transition-transform duration-500" 
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-black font-sans leading-relaxed px-1">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Call to Action inside Slide Up drawer */}
                <div className="bg-[#9D7BFF]/5 rounded-3xl border border-[#9D7BFF]/20 p-8 max-w-4xl mx-auto text-center mt-12 mb-16">
                  <h5 className="text-lg font-extrabold text-[#7C3AED] mb-2">{t.portfolio.modal.routeFinished}</h5>
                  <p className="text-xs text-black max-w-md mx-auto leading-relaxed mb-6">
                    {t.portfolio.modal.routeFinishedDesc}
                  </p>
                  <button
                    onClick={() => setIsProject4Open(false)}
                    className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-8 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>{t.portfolio.modal.close}</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive slide-up drawer for the Sofa Factory project */}
      <AnimatePresence>
        {isProject5Open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="w-full max-w-5xl h-[88vh] sm:h-[92vh] bg-[#F9FAFB] border border-zinc-200 shadow-2xl rounded-[2.5rem] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-zinc-200 bg-white sticky top-0 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9D7BFF] animate-pulse" />
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-zinc-900">{t.portfolio.projects.hotel.title}</h3>
                    <p className="font-sans text-[11px] text-zinc-500">{t.portfolio.projects.hotel.subtitle}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsProject5Open(false)}
                  className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 flex items-center justify-center transition-all duration-200 cursor-pointer hover:rotate-90 active:scale-95"
                  title={t.portfolio.modal.closeProject}
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Scrollable Project Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 space-y-12 pb-24 scroll-smooth scrollbar-thin">
                <div className="max-w-3xl mx-auto text-center mb-6">
                  <span className="font-mono text-[10px] text-[#7C3AED] bg-[#9D7BFF]/10 px-3 py-1 rounded-full uppercase font-bold tracking-widest inline-block mb-3">{t.portfolio.projects.hotel.tag}</span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">{t.portfolio.projects.hotel.mainDescription}</h4>
                  <p className="text-xs sm:text-sm text-black font-sans mt-2 max-w-xl mx-auto leading-relaxed">
                    {t.portfolio.projects.hotel.mainWalkthrough}
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                  {t.portfolio.projects.hotel.sections.map((item, index) => {
                    const images = [
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940561/1_s3l4dy.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940559/3_m9ojlc.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940558/2_ygvzqs.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940556/4_cmwdcc.png"
                    ];
                    return (
                      <div key={index} className="flex flex-col gap-4 bg-white p-5 sm:p-6 rounded-3xl border border-zinc-200 shadow-md hover:border-[#9D7BFF]/30 transition-all duration-300">
                        <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#9D7BFF]/10 text-[#7C3AED] font-mono text-xs font-bold flex items-center justify-center">
                              {index + 1}
                            </span>
                            <span className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight">{item.label}</span>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md">
                            {t.portfolio.modal.section} {index + 1}
                          </span>
                        </div>
                        <div className="overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/50 shadow-inner">
                          <img 
                            src={images[index % images.length]} 
                            alt={`${item.label} - Services Aurora Web`} 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover max-h-[70vh] hover:scale-[1.01] transition-transform duration-500" 
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-black font-sans leading-relaxed px-1">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Call to Action inside Slide Up drawer */}
                <div className="bg-[#9D7BFF]/5 rounded-3xl border border-[#9D7BFF]/20 p-8 max-w-4xl mx-auto text-center mt-12 mb-16">
                  <h5 className="text-lg font-extrabold text-[#7C3AED] mb-2">{t.portfolio.modal.routeFinished}</h5>
                  <p className="text-xs text-black max-w-md mx-auto leading-relaxed mb-6">
                    {t.portfolio.modal.routeFinishedDesc}
                  </p>
                  <button
                    onClick={() => setIsProject5Open(false)}
                    className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-8 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>{t.portfolio.modal.close}</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive slide-up drawer for the Fashion Store project */}
      <AnimatePresence>
        {isProject6Open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="w-full max-w-5xl h-[88vh] sm:h-[92vh] bg-[#F9FAFB] border border-zinc-200 shadow-2xl rounded-[2.5rem] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-zinc-200 bg-white sticky top-0 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9D7BFF] animate-pulse" />
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-zinc-900">{t.portfolio.projects.medical.title}</h3>
                    <p className="font-sans text-[11px] text-zinc-500">{t.portfolio.projects.medical.subtitle}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsProject6Open(false)}
                  className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 flex items-center justify-center transition-all duration-200 cursor-pointer hover:rotate-90 active:scale-95"
                  title={t.portfolio.modal.closeProject}
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Scrollable Project Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 space-y-12 pb-24 scroll-smooth scrollbar-thin">
                <div className="max-w-3xl mx-auto text-center mb-6">
                  <span className="font-mono text-[10px] text-[#7C3AED] bg-[#9D7BFF]/10 px-3 py-1 rounded-full uppercase font-bold tracking-widest inline-block mb-3">{t.portfolio.projects.medical.tag}</span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">{t.portfolio.projects.medical.mainDescription}</h4>
                  <p className="text-xs sm:text-sm text-black font-sans mt-2 max-w-xl mx-auto leading-relaxed">
                    {t.portfolio.projects.medical.mainWalkthrough}
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                  {t.portfolio.projects.medical.sections.map((item, index) => {
                    const images = [
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940961/1_rg8po5.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940961/2_luhex4.png",
                      "https://res.cloudinary.com/dkc39tw6r/image/upload/v1782940959/3_nd1fzu.png"
                    ];
                    return (
                      <div key={index} className="flex flex-col gap-4 bg-white p-5 sm:p-6 rounded-3xl border border-zinc-200 shadow-md hover:border-[#9D7BFF]/30 transition-all duration-300">
                        <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#9D7BFF]/10 text-[#7C3AED] font-mono text-xs font-bold flex items-center justify-center">
                              {index + 1}
                            </span>
                            <span className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight">{item.label}</span>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md">
                            {t.portfolio.modal.section} {index + 1}
                          </span>
                        </div>
                        <div className="overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/50 shadow-inner">
                          <img 
                            src={images[index % images.length]} 
                            alt={`${item.label} - Services Aurora Web`} 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover max-h-[70vh] hover:scale-[1.01] transition-transform duration-500" 
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-black font-sans leading-relaxed px-1">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Call to Action inside Slide Up drawer */}
                <div className="bg-[#9D7BFF]/5 rounded-3xl border border-[#9D7BFF]/20 p-8 max-w-4xl mx-auto text-center mt-12 mb-16">
                  <h5 className="text-lg font-extrabold text-[#7C3AED] mb-2">{t.portfolio.modal.routeFinished}</h5>
                  <p className="text-xs text-black max-w-md mx-auto leading-relaxed mb-6">
                    {t.portfolio.modal.routeFinishedDesc}
                  </p>
                  <button
                    onClick={() => setIsProject6Open(false)}
                    className="bg-[#9D7BFF] hover:bg-[#8B66FF] text-white font-sans font-bold text-xs py-2.5 px-8 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>{t.portfolio.modal.close}</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante para subir (Ir arriba) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#9D7BFF] text-white shadow-lg shadow-[#9D7BFF]/30 hover:bg-[#8A66FF] active:scale-95 transition-all cursor-pointer flex items-center justify-center border border-white/10"
            title="Ir arriba"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
