const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "object-src 'none'",
  "script-src 'self' 'nonce-__DYNAMIC__' https://embed.meetergo.com https://wa.me",
  "style-src 'self' 'nonce-__DYNAMIC__'",
  "connect-src 'self' https://api.supabase.co https://api.stripe.com",
  "frame-ancestors 'none'",
  "form-action 'self'",
];

export function buildSecurityHeaders(nonce: string) {
  const csp = cspDirectives
    .map((directive) => directive.replace("__DYNAMIC__", nonce))
    .join("; ");

  return {
    "Content-Security-Policy": csp,
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), geolocation=(), microphone=(), fullscreen=(self)",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Embedder-Policy": "credentialless",
  } as const;
}

export type SecurityHeaders = ReturnType<typeof buildSecurityHeaders>;
