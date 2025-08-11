"use client";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { login } from "@/lib/actions";
import { useToast } from "./toast-context";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, {
    success: false,
    message: "",
  });
  const router = useRouter();
  const { showToast } = useToast();

  useEffect(() => {
    if (state?.success) {
      router.push("/dashboard");
      showToast(state.message, "success");
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-5 flex flex-col">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state?.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        {state?.errors?.password && (
          <p className="text-sm text-red-500">{state?.errors.password[0]}</p>
        )}
      </div>

      {!state?.success && (
        <p className="text-sm text-red-500">{state?.message}</p>
      )}
      <button
        disabled={isPending}
        type="submit"
        className="self-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Logging In..." : "Login"}
      </button>

      <Link
        href="/"
        className="self-center text-blue-600 text-sm block hover:text-blue-700 hover:underline duration-300 transition-all"
      >
        ← Homepage
      </Link>
    </form>
  );
}
