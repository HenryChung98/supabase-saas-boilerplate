import React from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="px-15 py-5 min-h-screen min-w-5xl max-w-8xl">{children}</div>
    </>
  );
}
