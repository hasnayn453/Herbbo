"use client";

import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import WhatsAppButton from "./WhatsAppButton";
import LivePurchaseToast from "./LivePurchaseToast";
import { CartProvider } from "./CartContext";

export default function Layout({
  children,
  cartOpen,
  setCartOpen,
  whatsappOpen,
  setWhatsAppOpen,
  toastOpen,
  setToastOpen,
}: {
  children: React.ReactNode;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  whatsappOpen: boolean;
  setWhatsAppOpen: (open: boolean) => void;
  toastOpen: boolean;
  setToastOpen: (open: boolean) => void;
}) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-accent">
        <AnnouncementBar />
        <Header onCartToggle={setCartOpen} />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        {whatsappOpen && <WhatsAppButton onClose={() => setWhatsAppOpen(false)} />}
        {toastOpen && <LivePurchaseToast onClose={() => setToastOpen(false)} />}
      </div>
    </CartProvider>
  );
}
