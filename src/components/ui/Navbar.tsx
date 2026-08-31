import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Logo = () => (
  <a
    href="#"
    aria-label="GROTH home"
    className="flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight text-brand-orange sm:text-2xl"
  >
    <svg
      className="h-6 w-6 fill-current"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
    </svg>
    GROTH
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="z-50 w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
      <div className="flex w-full items-center justify-between gap-3 sm:gap-4">
        {/* Logo — always visible */}
        <Logo />

        {/* Tablet / desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-4 text-sm font-medium text-gray-300 md:flex lg:gap-7 lg:text-base"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tablet / desktop actions */}
        <div className="hidden shrink-0 items-center gap-2 md:flex lg:gap-4">
          <a
            href="#login"
            className="whitespace-nowrap text-sm font-medium text-gray-300 transition-colors hover:text-white lg:text-base"
          >
            Login
          </a>
          <a
            href="#demo"
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-orange px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-brand-orange lg:px-6 lg:py-3"
          >
            Start Growing
          </a>
        </div>

        {/* Mobile / small-tablet hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile / small-tablet menu */}
      {open && (
        <div
          id="mobile-nav"
          className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-brand-navy/95 p-4 shadow-elegant backdrop-blur-sm md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="w-full rounded-full border border-white/15 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Login
            </a>
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="w-full rounded-full bg-brand-orange px-5 py-2.5 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-brand-orange"
            >
              Start Growing
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
