"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const EVITE = [
  {
    title: "Nunca consuma por semelhança",
    description:
      "Uma planta parecida com outra espécie conhecida não é garantia de segurança. Espécies tóxicas e comestíveis podem ser visualmente idênticas.",
  },
  {
    title: "Não confie só em fotos",
    description:
      "A identificação botânica por foto não é suficiente. Ângulos, estágios de desenvolvimento e variações regionais podem enganar.",
  },
  {
    title: "Evite plantas ornamentais",
    description:
      "Plantas cultivadas para decoração frequentemente recebem defensivos químicos não registrados para uso alimentar.",
  },
];

const FACA = [
  {
    title: "Busque apoio especializado",
    description:
      "A identificação correta deve ser feita com apoio de botânicos, agrônomos ou grupos especializados em PANC quando houver qualquer dúvida.",
  },
  {
    title: "Reconheça os limites do guia",
    description:
      "Este portal oferece informação introdutória. Não substitui validação botânica, orientação técnica ou acompanhamento profissional.",
  },
  {
    title: "Higienize corretamente",
    description:
      "Mesmo espécies seguras exigem higienização adequada. Consuma apenas material identificado, limpo e preparado corretamente.",
  },
];

export function SecuritySection() {
  return (
    <div className="space-y-6">

      {/* aviso */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-3"
      >
        <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
        <p className="text-sm text-amber-900">
          <strong>Atenção:</strong> identificação incorreta de plantas pode causar intoxicações graves. Nunca consuma baseando-se apenas em conteúdo online — mesmo neste guia.
        </p>
      </motion.div>

      {/* Evite */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="space-y-3"
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
            <XCircle className="h-4 w-4 text-red-500" />
          </div>
          <h3 className="text-sm font-bold text-red-700 uppercase tracking-wider">
            Evite
          </h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {EVITE.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-red-100 bg-red-50 p-5 space-y-2"
            >
              <p className="font-semibold text-red-900 text-sm leading-snug">{title}</p>
              <p className="text-xs text-red-800/70 leading-5">{description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Faça */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="space-y-3"
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </div>
          <h3 className="text-sm font-bold text-green-700 uppercase tracking-wider">
            Faça
          </h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {FACA.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-green-100 bg-green-50 p-5 space-y-2"
            >
              <p className="font-semibold text-green-900 text-sm leading-snug">{title}</p>
              <p className="text-xs text-green-800/70 leading-5">{description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* nota */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.3 }}
        className="rounded-xl bg-stone-100 border border-stone-200 px-6 py-4 text-sm text-slate-500 leading-6"
      >
        <strong className="text-slate-700">Sobre este guia:</strong> todas as espécies publicadas
        passam por curadoria técnica antes de aparecerem no catálogo público. Mesmo assim, as
        informações aqui são introdutórias e não substituem fontes científicas primárias.
      </motion.div>

    </div>
  );
}
