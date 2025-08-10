"use server";

import z from "zod";
import { db } from "./db";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

type UserLogin = {
  email: string;
  password: string;
};

type State = {
  message: string;
  success: boolean;
  errors?: any;
};

export async function login(_prevState: State | undefined, formData: FormData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(formData);

    await signIn("credentials", {
      ...{ email, password },
      redirectTo: "/dashboard",
    });
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
