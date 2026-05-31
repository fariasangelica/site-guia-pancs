"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sprout, BookOpen, ShieldCheck, Users } from "lucide-react";
import { initialEspecies } from "@/data/species";
import { ImageFrame } from "@/components/common/ImageFrame";

const PILLARS = [
  {
    icon: Sprout,
    title: "Biodiversidade alimentar",
    description:
      "Redescubra plantas que crescem ao redor e que há séculos fazem parte da nossa mesa.",
  },
  {
    icon: BookOpen,
    title: "Conhecimento acessível",
    description:
      "Fichas claras com uso culinário, partes comestíveis e cuidados essenciais de segurança.",
  },
  {
    icon: ShieldCheck,
    title: "Curadoria técnica",
    description:
      "Nenhuma espécie é publicada sem revisão. O catálogo cresce com responsabilidade.",
  },
  {
    icon: Users,
    title: "Construção coletiva",
    description:
      "Pessoas que querem contribuir podem cadastrar novas espécies, que passam por análise antes de entrar.",
  },
];

export function HomeSection() {
  const publicadas = initialEspecies.filter((e) => e.status === "publicado").length;

  return (
    <div className="space-y-8">
      {/* Hero visual com título integrado */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-800 text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="pointer-events-none absolute -top-24 right-[-90px] h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="relative z-10 px-8 py-10 md:px-12 md:py-14 space-y-10">
            <div className="max-w-2xl space-y-4">
              <h1 className="font-display text-3xl md:text-5xl font-bold leading-[1.15] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.5)]">
                Portal das Plantas que Nutrem
              </h1>
              <p className="text-green-100/95 text-base md:text-lg leading-relaxed drop-shadow-[0_3px_12px_rgba(0,0,0,0.38)]">
                PANCs são plantas com potencial alimentar ainda pouco explorado. Este portal
                reúne espécies com rigor técnico, uso culinário e cuidados de segurança.
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold tabular-nums drop-shadow-[0_4px_16px_rgba(0,0,0,0.48)]">{publicadas}</p>
                <p className="text-sm text-green-200/80 mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  espécies catalogadas
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold tabular-nums drop-shadow-[0_4px_16px_rgba(0,0,0,0.48)]">4</p>
                <p className="text-sm text-green-200/80 mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  categorias
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold tabular-nums drop-shadow-[0_4px_16px_rgba(0,0,0,0.48)]">100%</p>
                <p className="text-sm text-green-200/80 mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  com curadoria
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pilares */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {PILLARS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-green-100 bg-white p-6 space-y-3 hover:border-green-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-green-700 group-hover:bg-green-800 transition-colors">
              <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-bold text-green-950 text-base">{title}</p>
              <p className="mt-1.5 text-sm text-slate-500 leading-6">{description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Destaques do catálogo */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="space-y-5"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              Catálogo
            </p>
            <h2 className="text-xl font-bold text-green-950 mt-0.5">
              Espécies em destaque
            </h2>
          </div>
          <Link
            href="/especies"
            className="flex items-center gap-1.5 text-sm text-green-700 font-medium hover:text-green-900 transition-colors"
          >
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {initialEspecies
            .filter((e) => e.status === "publicado" && e.destaque)
            .slice(0, 3)
            .map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-green-100 bg-white overflow-hidden hover:shadow-md hover:border-green-200 transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden bg-green-50">
                  <ImageFrame
                    src={item.imageUrl}
                    nome={item.nome}
                    className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-green-600 mb-1">
                    {item.classe}
                  </p>
                  <h3 className="font-bold text-green-950">{item.nome}</h3>
                  <p className="text-xs italic text-slate-400 mb-2">{item.nomeCientifico}</p>
                  <p className="text-sm text-slate-600 leading-5 line-clamp-2">{item.uso}</p>
                </div>
              </div>
            ))}
        </div>
      </motion.div>

    </div>
  );
}
