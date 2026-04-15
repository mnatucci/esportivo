/*
Design philosophy for this file:
Estilo Vai Viral: limpo, vibrante, com rosa/magenta como primária, azul como secundária.
Mantém a estrutura interativa mas com visual mais acessível, descontraído e com muita prova social.
Badges numerados espalhados, cores vibrantes, layout assimétrico.
*/

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const analyzerSteps = [
  "Verificando requisitos de ativação",
  "Analisando potencial de monetização",
  "Calculando ganhos estimados",
  "Preparando seu TikTok Shop",
];

const proofItems = [
  {
    title: "Seguidores brasileiros",
    description: "Audiência do seu mercado, pronta para comprar seus produtos.",
  },
  {
    title: "Ativação instantânea",
    description: "Comece a ganhar no TikTok Shop em minutos.",
  },
  {
    title: "Suporte especializado",
    description: "Orientação completa para maximizar seus ganhos.",
  },
];

const packages = [
  {
    name: "Essencial",
    price: "R$ 129,90",
    href: "https://pag.ae/81GGLv82K",
    badge: "Comece aqui",
    highlight: false,
    features: ["+2.000 seguidores brasileiros", "+100 de bônus", "Suporte na ativação"],
  },
  {
    name: "PRO",
    price: "R$ 297,90",
    href: "https://pag.ae/81GGM2z-o",
    badge: "Mais ganhos",
    highlight: true,
    features: ["+4.000 seguidores brasileiros", "+250 de bônus", "Aula de monetização"],
  },
];

const liveNames = [
  "Lucas",
  "Ana",
  "Pedro",
  "Julia",
  "Carlos",
  "Camila",
  "Rafael",
  "Beatriz",
];

const badgeColors = ["bg-[#ff1493]", "bg-[#1a3a7a]", "bg-[#22c55e]", "bg-[#eab308]", "bg-[#ef4444]"];

export default function Home() {
  const [username, setUsername] = useState("@");
  const [phase, setPhase] = useState<"idle" | "loading" | "result" | "offer">("idle");
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(8);
  const [selectedPackage, setSelectedPackage] = useState("PRO");
  const [notification, setNotification] = useState(
    "Julia acabou de ativar sua conta para vender no TikTok Shop.",
  );

  const activePackage = useMemo(
    () => packages.find((item) => item.name === selectedPackage) ?? packages[1],
    [selectedPackage],
  );

  useEffect(() => {
    if (phase !== "loading") return;

    setActiveStep(0);
    setProgress(10);

    let stepIndex = 0;
    const interval = window.setInterval(() => {
      stepIndex += 1;
      setActiveStep(Math.min(stepIndex, analyzerSteps.length - 1));
      setProgress(Math.min(100, 10 + stepIndex * 30));

      if (stepIndex >= analyzerSteps.length - 1) {
        window.clearInterval(interval);
        window.setTimeout(() => {
          setProgress(100);
          setPhase("result");
        }, 700);
      }
    }, 950);

    return () => window.clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const name = liveNames[Math.floor(Math.random() * liveNames.length)];
      const messages = [
        `${name} ativou seu TikTok Shop e já está ganhando.`,
        `${name} escolheu o plano PRO e começou a vender.`,
        `${name} recebeu seus primeiros ganhos como afiliado.`,
      ];
      setNotification(messages[Math.floor(Math.random() * messages.length)]);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  function handleAnalyze() {
    setPhase("loading");
  }

  function handleScrollToPlans() {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const score = username.length > 3 ? 86 : 72;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <a
            href="#inicio"
            className="flex items-center gap-2 text-lg font-bold tracking-tight"
          >
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663561899667/Z2h5xfnGvuAxN6xPaJjTry/ChatGPTImage15deabr.de2026,19_30_25_6d91db84.png" alt="meta44" className="h-10" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 lg:flex">
            <a href="#como-funciona" className="transition hover:text-[#ff1493]">
              Como funciona
            </a>
            <a href="#provas" className="transition hover:text-[#ff1493]">
              Por que funciona
            </a>
            <a href="#planos" className="transition hover:text-[#ff1493]">
              Planos
            </a>
          </nav>

          <button
            onClick={handleScrollToPlans}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff1493] to-[#ff69b4] px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver oferta
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden py-12 lg:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-[#ff1493] bg-[rgba(255,20,147,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#ff1493]">
                <Sparkles className="h-4 w-4" />
                Comece a ganhar agora
              </div>

              <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-[#1a1a2e] md:text-6xl">
                Ative seu TikTok Shop
                <span className="block bg-gradient-to-r from-[#ff1493] via-[#ff69b4] to-[#ff1493] bg-clip-text text-transparent">
                  e comece a vender
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
                Ganhe dinheiro como criador e afiliado. Receba seguidores brasileiros, ative seu TikTok Shop em minutos e comece a lucrar com seus produtos e afiliações.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["+1.2K", "Criadores ativos"],
                  ["4.9★", "Taxa de sucesso"],
                  ["Instantâneo", "Ativação"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="card-clean relative overflow-hidden px-5 py-4"
                  >
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br from-[#ff1493]/10 to-transparent" />
                    <div className="relative font-display text-3xl font-bold text-[#ff1493]">{value}</div>
                    <p className="mt-2 text-sm text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="card-clean overflow-hidden p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700">
                      Seu @ do TikTok
                    </label>
                    <div className="mt-3 flex gap-2">
                      <input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="@seuperfil"
                        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#ff1493] focus:outline-none focus:ring-2 focus:ring-[#ff1493]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleAnalyze}
                      className="cta-primary w-full rounded-lg px-5 py-3.5 text-sm font-semibold"
                    >
                      Analisar conta agora
                    </button>
                    <button
                      onClick={handleScrollToPlans}
                      className="cta-secondary w-full rounded-lg px-5 py-3.5 text-sm font-semibold"
                    >
                      Ver planos
                    </button>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center justify-between text-sm text-gray-700">
                      <span className="font-medium">Prontidão</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
                      <motion.div
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#ff1493] to-[#ff69b4]"
                      />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {phase === "idle"
                        ? "Verifique se sua conta está pronta para ganhar dinheiro."
                        : phase === "loading"
                          ? analyzerSteps[activeStep]
                          : phase === "result"
                            ? "Sua conta está pronta! Escolha um plano e comece a vender."
                            : "Plano selecionado. Clique em desbloquear para ativar."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-gradient-to-br from-[#ff1493]/10 to-transparent p-3">
                      <div className="text-2xl font-bold text-[#ff1493]">{score}</div>
                      <p className="text-xs text-gray-600">Score</p>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-[#1a3a7a]/10 to-transparent p-3">
                      <div className="text-2xl font-bold text-[#1a3a7a]">Live</div>
                      <p className="text-xs text-gray-600">Status</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="como-funciona" className="relative py-16 lg:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <p className="section-kicker mx-auto">Processo simples</p>
              <h2 className="section-title mx-auto mt-4 max-w-2xl">
                Crie seu pacote personalizado em 3 passos
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["1", "Ative sua conta", "Escolha o pacote e receba seguidores reais"],
                ["2", "Configure sua loja", "Ative o TikTok Shop com sua nova audiência"],
                ["3", "Comece a vender", "Ganhe com afiliações e seus próprios produtos"],
              ].map(([step, title, description], index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`step-card step-${Number(step)}`}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-50 font-display text-xl font-bold text-[#ff1493]">
                    {step}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#1a1a2e]">{title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="provas" className="relative py-16 lg:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <p className="section-kicker mx-auto">Por que somos diferentes</p>
              <h2 className="section-title mx-auto mt-4 max-w-2xl">
                Seguidores reais que geram vendas
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {proofItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="card-clean relative overflow-hidden p-6"
                >
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-[#ff1493]/10 to-transparent" />
                  <div className="relative">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff1493] to-[#ff69b4] text-white">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-[#1a1a2e]">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="planos" className="relative py-16 lg:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <p className="section-kicker mx-auto">Ativação instantânea</p>
              <h2 className="section-title mx-auto mt-4 max-w-2xl">
                Escolha seu plano e comece a ganhar
              </h2>
              <p className="mt-4 text-lg text-gray-600">Quanto mais seguidores, mais vendas. Escolha o que faz sentido para você.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <div className="grid gap-6 md:grid-cols-2">
                {packages.map((item, idx) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setSelectedPackage(item.name);
                      setPhase("offer");
                    }}
                    className={`card-clean relative overflow-hidden p-6 text-left transition ${
                      selectedPackage === item.name
                        ? "ring-2 ring-[#ff1493] ring-offset-2"
                        : ""
                    } ${item.highlight ? "border-2 border-[#ff1493]" : ""}`}
                  >
                    {item.highlight && (
                      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br from-[#ff1493]/20 to-transparent" />
                    )}
                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                            {item.badge}
                          </p>
                          <h3 className="mt-2 font-display text-3xl font-bold text-[#1a1a2e]">
                            {item.name}
                          </h3>
                        </div>
                        {item.highlight && (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#ff1493] to-[#ff69b4] text-white">
                            ★
                          </span>
                        )}
                      </div>

                      <div className="mt-4 text-3xl font-bold text-[#ff1493]">{item.price}</div>

                      <div className="mt-4 h-px w-full bg-gray-200" />

                      <ul className="mt-4 space-y-3">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex gap-3 text-sm text-gray-700">
                            <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                ))}
              </div>

              <div className="card-clean sticky top-24 p-6 lg:p-8">
                <div className="relative">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#ff1493]/10 to-transparent" />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Resumo
                    </p>
                    <h3 className="mt-3 font-display text-4xl font-bold text-[#1a1a2e]">
                      {activePackage.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {activePackage.name === "PRO"
                        ? "Ideal para quem quer maximizar ganhos com mais audiência e poder de venda."
                        : "Perfeito para começar com uma base sólida de seguidores reais."}
                    </p>

                    <div className="mt-6 rounded-lg bg-gradient-to-br from-[#ff1493]/5 to-transparent p-5">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Investimento</p>
                          <div className="mt-2 text-4xl font-bold text-[#ff1493]">
                            {activePackage.price}
                          </div>
                        </div>
                        <div className="rounded-lg bg-gradient-to-br from-[#22c55e] to-[#84cc16] px-3 py-2 text-xs font-semibold text-white">
                          Acesso imediato
                        </div>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/5511952969285?text=Ol%C3%A1!%20Quero%20contratar%20o%20pacote%20${activePackage.name}.%20Meu%20%40%20do%20TikTok%20%C3%A9:%20${username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-4 text-sm font-semibold"
                    >
                      Desbloquear agora
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setPhase("loading")}
                      className="cta-secondary mt-3 inline-flex w-full items-center justify-center rounded-lg px-5 py-4 text-sm font-semibold"
                    >
                      Refazer análise
                    </button>

                    <div className="mt-6 grid gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-3">
                        <BadgeCheck className="h-4 w-4 text-[#22c55e]" />
                        Seguidores brasileiros do seu mercado.
                      </div>
                      <div className="flex items-center gap-3">
                        <BadgeCheck className="h-4 w-4 text-[#22c55e]" />
                        Ativação instantânea do seu TikTok Shop.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <motion.div
        key={notification}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed left-4 bottom-4 z-50 max-w-sm rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-lg"
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
          <p className="leading-6">{notification}</p>
        </div>
      </motion.div>

      <a
        href="https://wa.me/5511952969285"
        className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#22c55e] to-[#84cc16] text-white shadow-lg transition hover:-translate-y-1"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
