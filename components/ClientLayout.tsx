"use client";

import Layout from "./layout";
import { useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartOpen, setCartOpen] = useState(false);
  const [whatsappOpen, setWhatsAppOpen] = useState(true);
  const [toastOpen, setToastOpen] = useState(true);

  return (
    <Layout
      children={children}
      cartOpen={cartOpen}
      setCartOpen={setCartOpen}
      whatsappOpen={whatsappOpen}
      setWhatsAppOpen={setWhatsAppOpen}
      toastOpen={toastOpen}
      setToastOpen={setToastOpen}
    />
  );
}
