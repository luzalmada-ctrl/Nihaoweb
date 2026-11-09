import { describe, expect, it } from "vitest";

import { INSTAGRAM_URL, YOUTUBE_URL, whatsappLink } from "@/lib/contact";

describe("contact channels", () => {
  it("WhatsApp button opens a chat with +52 656 354 7539", () => {
    expect(whatsappLink("Hola")).toBe("https://wa.me/526563547539?text=Hola");
  });

  it("Instagram points to @amanda.almada.18", () => {
    expect(INSTAGRAM_URL).toBe("https://www.instagram.com/amanda.almada.18/");
  });

  it("YouTube points to the @nihaojewelrymx Shorts channel", () => {
    expect(YOUTUBE_URL).toBe("https://www.youtube.com/@nihaojewelrymx/shorts");
  });
});
