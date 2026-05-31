import { cookies } from "next/headers";
import { ContentShell } from "@/components/layout/ContentShell";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { PanelPageClient } from "@/components/pages/PanelPageClient";
import { ADMIN_COOKIE_NAME, isValidAdminSessionToken } from "@/lib/adminAuth";

export default async function PainelPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const isAuthenticated = isValidAdminSessionToken(sessionToken);

  return <ContentShell>{isAuthenticated ? <PanelPageClient /> : <AdminLoginForm />}</ContentShell>;
}
