import LoginForm from "@/components/login-form";
import { Suspense } from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-2 text-center">Login as Admin</h1>
        <p className="text-center text-sm mb-8">
          Your are not supposed to be here.
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
