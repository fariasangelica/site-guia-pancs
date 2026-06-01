import { ContentShell } from "@/components/layout/ContentShell";
import { PanelPageClient } from "@/components/pages/PanelPageClient";

export default async function PainelPage() {
  return (
    <ContentShell>
      <PanelPageClient />
    </ContentShell>
  );
}
