import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant mt-auto">
      <div className="container mx-auto max-w-[1200px] px-5 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-2">Subnautica 2 Guide</h3>
            <p className="text-on-surface-variant text-sm">
              Complete guide and interactive map for Subnautica 2 Early Access.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/map" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Interactive Map</Link>
              <Link href="/items" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Items Database</Link>
              <Link href="/blueprints" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Blueprints</Link>
              <Link href="/creatures" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Creatures</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-outline-variant">
          <p className="text-on-surface-variant text-xs text-center">
            Subnautica 2 Guide is an independent fan site. We are not affiliated with Unknown Worlds Entertainment or Krafton. Subnautica is a trademark of Unknown Worlds Entertainment.
          </p>
        </div>
      </div>
    </footer>
  );
}
