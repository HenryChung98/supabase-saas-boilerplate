import React from "react";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen min-w-5xl max-w-8xl">{children}</div>
    </>
  );
}
