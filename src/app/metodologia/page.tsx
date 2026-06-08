import React from "react";

export default function MetodologiaPage() {
  return (
    <main className="prose mx-auto p-6">
      <h1>Metodologia</h1>

      <section>
        <h2>Setor de aplicação</h2>
        <p>
          Conservação e divulgação de Plantas Alimentícias Não Convencionais (PANCs) —
          plataforma web para cadastro, revisão e publicação de espécies.
        </p>

        <h2>Objetivo</h2>
        <p>
          Desenvolver um painel colaborativo para submissão, análise e publicação de
          registros de espécies PANC, com fluxo de aprovação e exibição pública.
        </p>

        <h2>Passo a passo (resumo)</h2>
        <ol>
          <li>Levantamento de requisitos e definição do setor de aplicação.</li>
          <li>Modelagem de dados e definição dos recursos necessários.</li>
          <li>Implementação do backend e rotas de API.</li>
          <li>Implementação do frontend (formulários, listagens, painel).</li>
          <li>Testes, revisão e ajustes de UX.</li>
          <li>Deploy e monitoramento.</li>
          <li>Manutenção e iterações.</li>
        </ol>
      </section>

      <section>
        <h2>Diagrama da metodologia</h2>
        <p>Segue abaixo o diagrama com a sequência de atividades do projeto.</p>
        <div className="mt-4">
          <img src="/diagrams/metodologia.svg" alt="Diagrama de metodologia" style={{ maxWidth: "100%" }} />
        </div>
      </section>

      <section>
        <h2>Referências e fontes</h2>
        <p>
          As informações de metodologia e as descrições de fluxo foram elaboradas com base no
          desenvolvimento do próprio projeto e nas práticas de gestão de projetos de software.
        </p>
        <ul>
          <li>Fonte do diagrama de metodologia: adaptado de Robson Camargo, "Diagrama de rede na gestão de projetos".</li>
          <li>Imagens de plantas e peças visuais: capturas de tela geradas pelo sistema durante o desenvolvimento.</li>
          <li>Textos de descrição e segurança das PANCs: baseados em pesquisa sobre alimentação alternativa e uso culinário das plantas.</li>
        </ul>
      </section>
    </main>
  );
}
