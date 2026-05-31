"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Sprout, Users } from "lucide-react";
import { initialEspecies } from "@/data/species";

const PUBLICO = [
  {
    emoji: "🌿",
    title: "Curioso de primeira viagem",
    desc: "Nunca ouviu falar de PANC mas quer entender o que cresce ao redor.",
  },
  {
    emoji: "🍽️",
    title: "Quem busca variedade",
    desc: "Quer experimentar novos ingredientes e ampliar os sabores do dia a dia.",
  },
  {
    emoji: "🌱",
    title: "Quem pensa em sustentabilidade",
    desc: "Valoriza alimentação consciente, local e com menor impacto ambiental.",
  },
];

const PILARES = [
  { icon: Sprout,     label: "Biodiversidade" },
  { icon: Leaf,       label: "Educação" },
  { icon: ShieldCheck,label: "Responsabilidade" },
  { icon: Users,      label: "Participação" },
];

export function ProjectSection() {
  const totalPublicadas = initialEspecies.filter((e) => e.status === "publicado").length;

  return (
    <div className="space-y-6">

      {/* Missão — destaque máximo, sem card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-800 text-white"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -top-24 right-[-90px] h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative z-10 px-8 py-10 md:px-14 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-300 mb-4">
            Missão
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-2xl">
            Educar pessoas sobre alimentação alternativa e sustentável através das PANCs.
          </h2>
          <p className="mt-4 text-green-100/95 leading-7 max-w-xl text-[15px]">
            Vivemos rodeados de plantas com potencial alimentar que desconhecemos. Este guia
            existe para mudar isso — reunindo informação clara, segura e acessível, aproximando
            qualquer pessoa de uma alimentação mais diversa e conectada ao meio ambiente.
          </p>

          {/* pilares em linha dentro do bloco escuro */}
          <div className="mt-8 flex flex-wrap gap-3">
            {PILARES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full bg-white/8 border border-white/12 px-3.5 py-1.5 text-xs font-medium text-green-100/90"
              >
                <Icon className="h-3.5 w-3.5 text-green-300/90" strokeWidth={1.75} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Propósito + catálogo lado a lado */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid md:grid-cols-[1.4fr_1fr] gap-5"
      >
        {/* Para quem */}
        <div className="rounded-2xl border border-green-100 bg-white p-7 space-y-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-green-600 mb-1">
              Propósito
            </p>
            <h3 className="text-lg font-bold text-green-950">Para quem é este guia?</h3>
            <p className="mt-1 text-sm text-slate-500 leading-6">
              Para qualquer pessoa que queira ampliar sua alimentação com plantas acessíveis.
            </p>
          </div>
          <div className="space-y-3">
            {PUBLICO.map(({ emoji, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="text-xl mt-0.5 shrink-0">{emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-green-950">{title}</p>
                  <p className="text-xs text-slate-500 leading-5 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* O catálogo */}
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl border border-green-100 bg-white p-7 space-y-3 flex-1">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1">
                O catálogo
              </p>
              <h3 className="text-lg font-bold text-green-950">Como o conteúdo é construído</h3>
            </div>
            <p className="text-sm text-slate-600 leading-6">
              O catálogo cresce de forma progressiva com curadoria técnica. Pessoas que querem
              contribuir podem cadastrar novas espécies, mas nenhuma ficha é publicada sem revisão
              prévia.
            </p>

            {/* passos compactos */}
            <div className="space-y-2 pt-1">
              {[
                { n: "01", t: "Cadastro por pessoas contribuidoras" },
                { n: "02", t: "Análise técnica pela curadoria" },
                { n: "03", t: "Publicação após aprovação" },
              ].map(({ n, t }) => (
                <div key={n} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-green-300 w-5 shrink-0">{n}</span>
                  <span className="text-sm text-slate-600">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* contador */}
          <div className="rounded-2xl bg-green-700 text-white p-6 text-center">
            <p className="text-4xl font-bold">{totalPublicadas}</p>
            <p className="text-green-200 text-sm mt-1">espécies publicadas</p>
            <p className="text-green-300 text-xs mt-0.5">com curadoria técnica</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
