import { socials } from "@/lib/siteData";
function Icon({ name }) {
  if (name === "Instagram") return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
  if (name === "LinkedIn") return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.1 3.6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.4 9h3.4v11.4H3.4V9Zm5.6 0h3.3v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.3 4.3 5.2v6.5h-3.4v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9H9V9Z"/></svg>;
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8.2v3h2.7v8H14Z"/></svg>;
}
export default function SocialLinks() {
  return <section className="social-section wrap" aria-labelledby="social-title"><div><p className="eyebrow">STAY CONNECTED</p><h2 id="social-title">Let’s keep the conversation going.</h2></div><div className="social-badges">{socials.map(s=><a href={s.href} key={s.label} target="_blank" rel="noopener noreferrer" aria-label={`Connect with Shivendra on ${s.label} (opens in a new tab)`}><Icon name={s.label}/><span>{s.label}</span><span className="social-arrow" aria-hidden="true">↗</span></a>)}</div></section>;
}
