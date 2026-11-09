import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Gem, Instagram, Play, Sparkles, Tag, Youtube, HeartHandshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/brand-icons";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  YOUTUBE_SHORTS,
  YOUTUBE_URL,
  whatsappLink,
} from "@/lib/contact";
import tienda from "@/assets/tienda-interior.jpg";
import joyeria from "@/assets/joyeria.jpg";
import cosmeticos from "@/assets/cosmeticos.jpg";
import cabello from "@/assets/accesorios-cabello.jpg";
import logo from "@/assets/logo-nihao.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nihao Jewelry MX — Joyería, accesorios y belleza" },
      {
        name: "description",
        content:
          "Joyería, accesorios para el cabello y cosméticos a precio de fábrica. Pide tus piezas por WhatsApp con Amanda.",
      },
      { property: "og:title", content: "Nihao Jewelry MX — Joyería, accesorios y belleza" },
      {
        property: "og:description",
        content:
          "Joyería, accesorios para el cabello y cosméticos a precio de fábrica. Pide tus piezas por WhatsApp con Amanda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  {
    title: "Joyería",
    text: "Collares, aretes, anillos y pulseras con acabado dorado y perlas para todos los días.",
    image: joyeria,
    message: "¡Hola Amanda! Quiero ver el catálogo de joyería.",
  },
  {
    title: "Accesorios para el cabello",
    text: "Pinzas, scrunchies, diademas y moños en las tendencias de la temporada.",
    image: cabello,
    message: "¡Hola Amanda! Quiero ver los accesorios para el cabello.",
  },
  {
    title: "Belleza y cuidado de la piel",
    text: "Sérums, cremas y cosméticos para tu rutina de cuidado personal.",
    image: cosmeticos,
    message: "¡Hola Amanda! Me interesan los productos de belleza y skincare.",
  },
];

const perks = [
  { icon: Tag, title: "Precios de fábrica", text: "Piezas con precio directo y sin pedido mínimo." },
  { icon: Gem, title: "Novedades cada semana", text: "Colecciones nuevas en joyería y accesorios." },
  { icon: HeartHandshake, title: "Atención personal", text: "Te asesoro directo por WhatsApp." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Perks />
        <YoutubeSection />
        <InstagramSection />
        <ContactBand />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Logotipo Nihao Joyería China"
            width={56}
            height={56}
            className="size-14 drop-shadow-sm"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-2xl font-semibold tracking-tight">Nihao</span>
            <span className="eyebrow mt-1 text-[0.6rem]">Jewelry MX</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#productos" className="transition-colors hover:text-foreground">Productos</a>
          <a href="#videos" className="transition-colors hover:text-foreground">Videos</a>
          <a href="#instagram" className="transition-colors hover:text-foreground">Instagram</a>
          <a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a>
        </nav>
        <Button asChild variant="whatsapp" size="sm" className="px-4">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> <span className="hidden sm:inline">Escríbeme</span>
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <img
        src={tienda}
        alt="Interior de la tienda con joyería, bolsas y accesorios para el cabello"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl items-center px-5 py-24 md:px-8">
        <div className="max-w-xl animate-rise">
          <p className="eyebrow">Joyería · Accesorios · Belleza</p>
          <h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl">
            El detalle que <em className="text-gold-gradient">completa</em> tu estilo
          </h1>
          <p className="mt-6 max-w-md text-lg font-light text-muted-foreground">
            Joyería, accesorios para el cabello y cosméticos a precio de fábrica. Elige tus piezas y
            pídelas directo por WhatsApp.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Pedir por WhatsApp
              </a>
            </Button>
            <Button asChild variant="line" size="xl">
              <a href="#productos">
                Ver productos <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Collares", "Aretes", "Pinzas", "Scrunchies", "Diademas", "Sérums", "Cremas", "Bolsas", "Anillos"];
  return (
    <div className="overflow-hidden border-y border-border bg-espresso py-4 text-espresso-foreground">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 font-display text-xl italic">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-8">
            {item}
            {i < items.length - 1 && <Sparkles className="size-3.5 text-gold" />}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl md:text-5xl">{title}</h2>
      {text && <p className="mt-4 font-light text-muted-foreground">{text}</p>}
    </div>
  );
}

function Categories() {
  return (
    <section id="productos" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8">
      <SectionTitle
        eyebrow="Nuestras colecciones"
        title="Todo para lucir increíble"
        text="Escoge una categoría y te comparto fotos, precios y disponibilidad al momento."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {categories.map((c) => (
          <article
            key={c.title}
            className="group overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-elegant"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                width={1008}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl">{c.title}</h3>
              <p className="mt-2 text-sm font-light text-muted-foreground">{c.text}</p>
              <a
                href={whatsappLink(c.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Pedir catálogo <ArrowRight className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        {perks.map((p) => (
          <div key={p.title} className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground">
              <p.icon className="size-5" />
            </span>
            <div>
              <h3 className="text-2xl">{p.title}</h3>
              <p className="mt-1 text-sm font-light text-muted-foreground">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShortCard({ id }: { id: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-espresso shadow-soft">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title="Video de Nihao Jewelry MX"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Reproducir video"
          className="group absolute inset-0 cursor-pointer"
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/oar2.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-espresso/20 transition-colors group-hover:bg-espresso/35">
            <span className="flex size-14 items-center justify-center rounded-full bg-youtube text-whatsapp-foreground shadow-elegant">
              <Play className="size-6 fill-current" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

function YoutubeSection() {
  return (
    <section id="videos" className="scroll-mt-20 bg-espresso text-espresso-foreground">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Canal de YouTube</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Míralo en movimiento</h2>
            <p className="mt-3 max-w-md font-light opacity-75">
              Novedades, unboxings y cómo combinar cada pieza en nuestros Shorts.
            </p>
          </div>
          <Button asChild variant="lineLight" size="xl">
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              <Youtube /> Suscríbete al canal
            </a>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {YOUTUBE_SHORTS.map((id) => (
            <ShortCard key={id} id={id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  const tiles = [joyeria, cabello, cosmeticos, tienda];
  return (
    <section id="instagram" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow">Instagram</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Sígueme en @{INSTAGRAM_HANDLE}</h2>
          <p className="mt-4 max-w-md font-light text-muted-foreground">
            Ahí publico los ingresos nuevos, promociones y looks con nuestras piezas. ¡Mándame mensaje
            por ahí también!
          </p>
          <Button asChild variant="hero" size="xl" className="mt-8">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram /> Ver perfil de Instagram
            </a>
          </Button>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-3xl bg-instagram p-[2px] shadow-elegant"
        >
          <div className="rounded-[calc(1.5rem-2px)] bg-card p-4">
            <div className="flex items-center gap-3 px-1 pb-4">
              <span className="rounded-full bg-instagram p-[2px]">
                <span className="flex size-10 items-center justify-center rounded-full bg-card font-display text-lg">
                  A
                </span>
              </span>
              <div className="leading-tight">
                <p className="text-sm font-medium">{INSTAGRAM_HANDLE}</p>
                <p className="text-xs text-muted-foreground">Joyería · Accesorios · Belleza</p>
              </div>
              <span className="ml-auto rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground">
                Seguir
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {tiles.map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-md">
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section id="contacto" className="scroll-mt-20 px-5 pb-24 md:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-blush px-6 py-16 text-center shadow-soft md:px-16">
        <p className="eyebrow">Contacto</p>
        <h2 className="mt-4 text-4xl md:text-6xl">¿Te gustó algo? Escríbeme</h2>
        <p className="mx-auto mt-4 max-w-lg font-light text-muted-foreground">
          Mándame mensaje por WhatsApp y con gusto te comparto catálogo, precios y formas de entrega.
        </p>
        <Button asChild variant="whatsapp" size="xl" className="mt-9">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </Button>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-crimson-gradient text-crimson-foreground">
      <div className="h-px w-full bg-gradient-gold" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[auto_1fr_auto] md:gap-14 md:px-8">
        <img
          src={logo.url}
          alt="Logotipo Nihao Joyería China"
          width={160}
          height={160}
          loading="lazy"
          className="mx-auto size-36 drop-shadow-2xl md:size-40"
        />
        <div className="text-center md:text-left">
          <p className="font-display text-3xl italic md:text-4xl">Tradición que brilla contigo</p>
          <p className="mt-2 text-sm font-light opacity-75">
            Joyería, accesorios para el cabello y belleza con atención personal de Amanda.
          </p>
          <nav className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:justify-start">
            {[
              ["#productos", "Productos"],
              ["#videos", "Videos"],
              ["#instagram", "Instagram"],
              ["#contacto", "Contacto"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="opacity-80 transition-opacity hover:text-gold hover:opacity-100">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex justify-center gap-3">
          {[
            { href: whatsappLink(), label: "WhatsApp", Icon: WhatsAppIcon },
            { href: INSTAGRAM_URL, label: "Instagram", Icon: Instagram },
            { href: YOUTUBE_URL, label: "YouTube", Icon: Youtube },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-12 items-center justify-center rounded-full border border-gold/50 bg-crimson-foreground/5 text-gold backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-crimson"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-crimson-foreground/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-xs tracking-wide opacity-60 md:px-8">
          © {new Date().getFullYear()} Nihao Jewelry MX · Amanda Almada
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant animate-pulse-ring transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
