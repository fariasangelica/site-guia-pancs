import {
  CheckCircle2,
  Clock3,
  MailCheck,
  PlusCircle,
  Send,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatusBadge } from "@/components/common/StatusBadge";

const FLOW_STEPS = [
  {
    icon: PlusCircle,
    title: "1. Cadastro",
    description: "Pessoa contribuinte preenche os dados da espécie e inclui a imagem.",
  },
  {
    icon: Send,
    title: "2. Envio para análise",
    description: "O painel envia os dados por e-mail à curadoria de conteúdo.",
  },
  {
    icon: Clock3,
    title: "3. Análise técnica",
    description: "A curadoria avalia as informações, imagem e segurança da espécie.",
  },
  {
    icon: CheckCircle2,
    title: "4. Aprovação e publicação",
    description: "O aprovador publica a espécie diretamente — a publicação é feita pelo próprio revisor ao aprovar.",
  },
];

export function ApprovalFlowSection() {
  return (
    <Card className="rounded-xl border border-green-100 bg-white/90 shadow-none backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-950">
          <MailCheck className="h-5 w-5 text-green-700" /> Fluxo de aprovação
        </CardTitle>
        <CardDescription>Como funciona o controle de novas espécies</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-5 gap-3">
          {FLOW_STEPS.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="rounded-xl border border-green-100 bg-white shadow-none"
            >
              <CardContent className="p-4 text-center">
                <Icon className="h-5 w-5 text-green-700 mx-auto mb-2" />
                <p className="font-medium text-green-950">{title}</p>
                <p className="text-sm text-slate-700 mt-1">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>



        <Card className="rounded-xl border border-green-100 bg-green-50/60 shadow-none">
          <CardContent className="p-4 space-y-3 text-sm text-slate-700 leading-6">
            <p className="font-medium text-green-950">Status no sistema</p>
            <div className="flex flex-wrap gap-2">
              <StatusBadge status="enviado" />
              <StatusBadge status="em_analise" />
              <StatusBadge status="aprovado" />
              <StatusBadge status="publicado" />
              <StatusBadge status="rejeitado" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border border-red-100 bg-red-50/60 shadow-none">
          <CardContent className="p-4 space-y-3 text-sm leading-6">
            <p className="font-medium text-red-800">Motivos comuns de rejeição</p>
            <ul className="space-y-2 text-slate-700">
              {[
                "Identificação botânica insuficiente ou imprecisa.",
                "Informações de segurança e cuidados incompletas.",
                "Imagem de baixa qualidade, incorreta ou sem relação com a espécie.",
                "Espécie já catalogada com outro nome popular.",
                "Uso culinário descrito sem embasamento ou com risco alimentar não mencionado.",
              ].map((motivo) => (
                <li key={motivo} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                  {motivo}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </CardContent>
    </Card>
  );
}
