"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

type State = {
  message: string;
  success: boolean;
  errors?: {
    email?: string[];
    password?: string[];
  };
};

export async function login(_prevState: State | undefined, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return {
      message: "Welcome to Dashboard!",
      success: true,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "Invalid Credentials.",
            success: false,
          } as State;
        default:
          return {
            message: "Error when trying to login.",
            success: false,
          } as State;
      }
    }
    throw error;
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: "/" });
}
