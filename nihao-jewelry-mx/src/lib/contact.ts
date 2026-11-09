// Public contact channels shown across the landing page.
export const WHATSAPP_NUMBER = "526563547539"; // México (+52) 656 354 7539
export const WHATSAPP_DISPLAY = "656 354 7539";
export const INSTAGRAM_HANDLE = "amanda.almada.18";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const YOUTUBE_URL = "https://www.youtube.com/@nihaojewelrymx/shorts";

export const YOUTUBE_SHORTS = ["iGXmh5BsIb4", "lDgvRhXqjU8", "f5EdjreYC50", "iFiB2iYG4fg"];

export function whatsappLink(message = "¡Hola Amanda! Me interesa información sobre sus productos.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
