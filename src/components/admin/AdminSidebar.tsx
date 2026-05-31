import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CURADORIA_EMAILS } from "@/data/constants";

export function AdminRulesCard() {
  return (
    <Card className="rounded-xl border border-green-100 bg-white/90 shadow-none backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-green-950">Regras do painel</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-slate-700 leading-6">
        <p>• Qualquer pessoa pode cadastrar novas espécies para contribuição.</p>
        <p>• As espécies podem receber imagem por URL ou upload local.</p>
        <p>• Se a imagem falhar, o sistema mostra uma ilustração padrão no card.</p>
        <p>• Nenhuma espécie nova é publicada diretamente.</p>
        <p>• Toda submissão deve ser enviada para análise técnica.</p>
        <p>• Apenas após aprovação a espécie pode ser publicada.</p>
      </CardContent>
    </Card>
  );
}

export function CuratoriaCard() {
  return (
    <Card className="rounded-xl border border-green-100 bg-white/90 shadow-none backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-green-950">
          Curadoria de conteúdo responsável
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {CURADORIA_EMAILS.map((email) => (
          <div
            key={email}
            className="rounded-xl border border-green-100 p-3 bg-green-50/60"
          >
            <p className="font-medium text-green-950">Curadoria de conteúdo</p>
            <p className="text-sm text-slate-700">{email}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
