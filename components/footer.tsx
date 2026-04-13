import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="flex flex-col items-center md:items-start">
              <span className="text-primary font-sans text-lg font-semibold tracking-wide">
                Ken&apos;s Sushi Catering
              </span>
              <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
                Premium Private Chef
              </span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:info@kensushicatering.com"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs text-center md:text-right">
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;Ken&apos;s Sushi Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
