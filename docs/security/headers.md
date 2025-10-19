# HTTP Security Headers Strategie

## Content-Security-Policy

Verwenden Sie eine Nonce-basierte CSP, um Inline-Skripte zu verhindern. Beispiel:

```
Content-Security-Policy:
  default-src 'self';
  base-uri 'self';
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https://avatars.githubusercontent.com;
  object-src 'none';
  script-src 'self' 'nonce-<generated>' https://embed.meetergo.com; // Keine eval oder inline Events
  style-src 'self' 'nonce-<generated>'; // Nur benötigte Domains whitelisten
  connect-src 'self' https://api.supabase.co https://api.stripe.com;
  frame-ancestors 'none';
```

> Cloudflare Pages Functions können die Nonce injizieren und die Header konsistent setzen.

Fügen Sie weitere erlaubte Quellen nur gezielt hinzu. Für das Meetergo-Sidebar-Widget ist `https://embed.meetergo.com` erforderlich und wird mit Nonce abgesichert; zusätzliche Domains sind erst nach Sicherheitsprüfung zu erlauben.

## Weitere Header

- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Frame-Options: DENY` (nur lockern, wenn einzelne Seiten ein Embedding benötigen)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), geolocation=(), microphone=(), fullscreen=(self)` (anpassen nach Bedarf)
- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Embedder-Policy: require-corp` (nur wenn kompatibel mit Third-Party-Skripten)

## Cloudflare Pages Hinweise

- Setzen Sie identische Header via `_headers` oder Cloudflare Functions, damit CDN und SSR deckungsgleich sind.
- Aktivieren Sie Always HTTPS und HSTS im Dashboard.
- Dokumentieren Sie Ausnahmen und Audit-Trails im Ordner `docs/compliance`.
