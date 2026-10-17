"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "Top selling", href: "/top-selling" },
  { name: "Men Health", href: "/men-health" },
  { name: "Women Health", href: "/women-health" },
  { name: "Weight Loss", href: "/weight-loss" },
  { name: "Weight Gain", href: "/weight-gain" },
  { name: "Blogs", href: "/blogs" },
  { name: "Health Guides", href: "/health-guides" },
];

const certifications = [
  { name: "DRAP Approved", color: "bg-blue-50 text-blue-700 border-blue-200/50" },
  { name: "ISO Certified", color: "bg-green-50 text-green-700 border-green-200/50" },
  { name: "Halal Certified", color: "bg-emerald-50 text-emerald-700 border-emerald-200/50" },
  { name: "GMP Compliant", color: "bg-teal-50 text-teal-700 border-teal-200/50" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/herbonatural", icon: "f" },
  { name: "Instagram", href: "https://instagram.com/herbonatural", icon: "camera" },
  { name: "WhatsApp", href: "https://wa.me/923000000000", icon: "phone" },
  { name: "Twitter", href: "https://twitter.com/herbonatural", icon: "bird" },
];

const SocialIcon = ({ name }: { name: string }) => {
  const paths: Record<string, string> = {
    f: "M22 12c0-5.52-4.48-10-10-10H2c-5.52 0-10 4.48-10 10c0 5.52 4.48 10 10 10h10c-5.52 0-10-4.48-10-10v-6h2v6h6v-6.62c0-2.94 1.84-4.78 4.33-4.78l3.24-.01c2.69.01 4.34 1.9 4.34 4.81V14h-3c-.39 0-.78.31-.78.77v1.94h3.18l-.41 4H15V12c0-.39.31-.78.78-.78h3c-.39 0-.78.31-.78.77v2.11c0 2.94-1.65 4.81-4.34 4.81h-10c-2.49 0-4.33-1.97-4.33-4.45v-2.42c0-1.32.72-2.13 1.76-2.45v-.14c0-.39.31-.78.78-.78h3c0-2.94 2.15-4.78 4.33-4.78h3.56c.39 0 .78.31.78.78v4.21c0 2.33-1.82 3.92-4.08 3.92H15c-2.32 0-4.08-1.59-4.08-3.92V8.3c0-2.03 1.73-3.28 3.8-3.28h3c.39 0 .78-.31.78-.78V6c0-1.28-.68-2.1-1.71-2.45C20.67 3.27 22 4.76 22 7.74c0 2.49-1.83 4.5-4.27 4.55v-4.63c0-.39-.31-.78-.78-.78h-3c-.39 0-.78.31-.78.78v2.42c0 1.32-.72 2.13-1.76 2.45z",
    camera: "M14.3 4.8C14.3 4.16 13.74 3.6 13.1 3.6c-.63 0-1.19.56-1.19 1.19s.56 1.19 1.19 1.19c.66 0 1.2-.54 1.2-1.19zM17 3a4 4 0 11-8 0 4 4 0 018 0zM11 21a1 1 0 100-2 1 1 0 000 2z",
    phone: "M15.52 17.52c-1.57-1.57-4.1-1.57-5.67 0l-1.59 1.59c-3.78-.16-7.39-1.4-10.29-4.3-2.19-2.2-3.39-5.03-3.72-8.2-.15-1.27-.05-2.57.34-3.82l1.59-1.59c1.57-1.57 4.1-1.57 5.67 0l1.59 1.59c3.78.16 7.39 1.4 10.29 4.3 2.19 2.2 3.39 5.03 3.72 8.2.15 1.27.05 2.57-.34 3.82l-1.59 1.59zm-1.59-1.59L18.91 4.3c2.19 2.2 3.39 5.03 3.72 8.2.15 1.27.05 2.57-.34 3.82l-1.59 1.59c-1.57 1.57-4.1 1.57-5.67 0l-1.59-1.59c-3.78.16-7.39 1.4-10.29 4.3-2.19 2.2-3.39 5.03-3.72 8.2-.15 1.27-.05 2.57.34 3.82l1.59 1.59c1.57-1.57 4.1-1.57 5.67 0l1.59 1.59c3.78-.16 7.39-1.4 10.29-4.3 2.19-2.2 3.39-5.03 3.72-8.2.15-1.27.05-2.57-.34-3.82z",
    bird: "M23 9c0-3.4-2.1-6.3-5.1-7.8 1-.1 2.1-.2 3.2-.4-1.5.9-2.6 2.2-3.5 3.7-1.4-1.5-3.3-2.4-5.3-2.4-4 0-7.2 3.2-7.2 7.2 0 .6.1 1.2.2 1.8-6-3-9.3-7.6-9.3-14 0-1.7.4-3.3 1-4.8-.3 0-.6-.1-.9-.1C2.5 3 1 5.8 1 9c0 2.4 1 4.6 2.7 6-1-.1-2.2-.2-3.4-.5v.1c0 2.2 1.6 4.1 3.8 4.5-1.6.1-3.2-.5-4.3-1.3v.2c0 2 1.4 3.7 3.3 4.1-1.4.6-3 .9-4.6.9C1.2 18.9 3 20 4.9 20c5.1 0 8-3.8 8-8.7V9.9h3.5c-1.3 1.7-3.1 2.8-5.1 2.8-.8 0-1.6-.2-2.3-.7c1.2 1.7 2.8 2.8 4.6 2.8 5.5 0 10-4.5 10-10 0-1.1-.2-2.2-.6-3.2 1.8-.3 3.6-1 5.2-2z",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={paths[name]}
      />
    </svg>
  );
};

const CertificationBadge = ({ name, color }: { name: string; color: string }) => (
  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md border border-solid ${color} text-xs font-medium`}>
    <span className="flex h-3 w-3 rounded-full bg-current opacity-20" />
    <span>{name}</span>
  </div>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-secondary border-t border-solid border-primary/30 mt-auto">
      <div className="px-4 mx-auto max-w-7xl py-10 md:py-16">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-primary tracking-wider">HERBBO</span>
            </div>
            <p className="text-sm text-accent/90 leading-relaxed max-w-xs">
              Your Trusted Source for Natural Health &amp; Wellness — DRAP-approved
              herbal supplements crafted with laboratory-certified ingredients for
              every stage of your wellness journey.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent/90 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Certifications */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Certifications
            </h3>
            <div className="flex flex-col gap-2">
              {certifications.map((cert) => (
                <CertificationBadge key={cert.name} name={cert.name} color={cert.color} />
              ))}
            </div>
          </div>

          {/* Column 4: Contact + Subscribe */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-accent/90">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-[3px]">📍</span>
                Lahore, Punjab, Pakistan
              </li>
              <li className="flex items-center gap-2">
                <span className="flex-shrink-0">📞</span>
                +92 371 1327029
              </li>
              <li className="flex items-center gap-2">
                <span className="flex-shrink-0">✉️</span>
                herbbo3241@gmail.com
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                Newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  className="flex-1 rounded-md border border-solid border-accent bg-white px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                    subscribed
                      ? "bg-accent text-accent cursor-not-allowed"
                      : "bg-primary text-white hover:bg-secondary"
                  }`}
                >
                  {subscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar: social + copyright */}
        <div className="border-t border-solid border-primary/30 pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-accent text-accent/70 hover:bg-primary hover:text-white transition-colors"
                aria-label={s.name}
              >
                <SocialIcon name={s.icon} />
              </Link>
            ))}
          </div>
          <p className="text-xs text-accent/70">
            &copy; {year} Herbo Natural. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
