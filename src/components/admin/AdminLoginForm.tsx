"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, LogIn } from "lucide-react";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Senha inválida. Tente novamente.");
        return;
      }

      router.refresh();
    } catch {
      setError("Não foi possível autenticar no momento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-lg bg-green-100 p-2 text-green-700">
          <Lock className="h-4 w-4" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-green-950">Acesso ao painel</h1>
          <p className="text-sm text-slate-500">Entre para gerenciar contribuições.</p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label htmlFor="admin-password" className="text-sm font-medium text-green-950">
            Senha do painel
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none ring-0 transition-colors focus:border-green-400"
          />
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <LogIn className="h-4 w-4" />
          {loading ? "Entrando..." : "Entrar no painel"}
        </button>
      </form>
    </div>
  );
}
