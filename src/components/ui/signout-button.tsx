"use client"

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();

    router.push("/auth/sign-in")
  };

  return (
    <Button onClick={handleSignOut}>
      Sign out
    </Button>
  );
};