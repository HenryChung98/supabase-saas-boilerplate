"use client";

import { useAuth } from "@/contexts/auth-context";

export default function Page() {
  const { user } = useAuth();

  return (
    <>
      <div>home</div>
      <div>{user ? `signed in as ${user.email}` : "not signed in"}</div>
    </>
  );
}
