import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  label: string;
  to: string;
  type: "anchor" | "route";
}

const menuItems: MenuItem[] = [
  {
    label: "Damatlıklar",
    to: "/#wedding",
    type: "anchor",
  },
  {
    label: "Nişan Takımları",
    to: "/#engagement",
    type: "anchor",
  },
  {
    label: "Özel Tasarım",
    to: "/create-your-suit",
    type: "route",
  },
  {
    label: "Hakkımızda",
    to: "/about",
    type: "route",
  },
  {
    label: "Randevu Al",
    to: "/appointment",
    type: "route",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setOpen(false);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Lock background body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Close mobile drawer if viewport is resized to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  // Handle smooth scrolling for anchor links on desktop
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
  ) => {
    if (location.pathname === "/") {
      const id = to.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        window.history.pushState(null, "", `#${id}`);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle smooth scrolling for anchor links on mobile (after closing drawer)
  const handleMobileItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: MenuItem,
  ) => {
    setOpen(false);
    if (item.type === "anchor" && location.pathname === "/") {
      const id = item.to.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        window.history.pushState(null, "", `#${id}`);
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/90
        backdrop-blur-md
        text-white
        transition-colors
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <Link
          to="/"
          className="
            text-lg
            sm:text-xl
            font-semibold
            tracking-[0.25em]
            sm:tracking-[0.3em]
            shrink-0
            transition-opacity
            hover:opacity-90
          "
        >
          TERZİ MURAT
        </Link>

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-5
            lg:gap-8
          "
          aria-label="Ana Navigasyon"
        >
          {menuItems.map((item) => {
            const isActive =
              item.type === "route" && location.pathname === item.to;
            const linkClass = `
              text-xs
              lg:text-sm
              tracking-wide
              transition-colors
              duration-200
              ${
                isActive
                  ? "text-[#C8A45D] font-medium"
                  : "text-white/70 hover:text-white"
              }
            `;

            if (item.type === "route") {
              return (
                <Link key={item.label} to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={(e) => handleAnchorClick(e, item.to)}
                className={linkClass}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <Link
            to="/create-your-suit"
            className="
              hidden
              md:inline-flex
              items-center
              justify-center
              bg-[#C8A45D]
              text-black
              px-5
              lg:px-7
              py-3
              text-xs
              tracking-[0.2em]
              uppercase
              font-medium
              rounded-sm
              transition-colors
              duration-200
              hover:bg-white
              shrink-0
            "
          >
            Takımını Oluştur
          </Link>

          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="
              md:hidden
              p-2.5
              min-h-[44px]
              min-w-[44px]
              inline-flex
              items-center
              justify-center
              text-white/90
              hover:text-white
              focus:outline-none
              focus:ring-1
              focus:ring-[#C8A45D]
              transition-colors
            "
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil navigasyon menüsü"
          className="
            md:hidden
            fixed
            inset-x-0
            top-20
            bottom-0
            bg-black/95
            backdrop-blur-xl
            z-50
            overflow-y-auto
            border-t
            border-white/10
            flex
            flex-col
            justify-between
          "
        >
          <div className="flex flex-col py-2">
            {menuItems.map((item) => {
              const isActive =
                item.type === "route" && location.pathname === item.to;

              if (item.type === "route") {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`
                      min-h-[48px]
                      px-6
                      py-4
                      text-sm
                      uppercase
                      tracking-[0.15em]
                      flex
                      items-center
                      border-b
                      border-white/5
                      transition-colors
                      ${
                        isActive
                          ? "text-[#C8A45D] font-medium bg-white/[0.04]"
                          : "text-white/80 hover:text-white hover:bg-white/[0.02]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={(e) => handleMobileItemClick(e, item)}
                  className="
                    min-h-[48px]
                    px-6
                    py-4
                    text-sm
                    uppercase
                    tracking-[0.15em]
                    flex
                    items-center
                    border-b
                    border-white/5
                    text-white/80
                    hover:text-white
                    hover:bg-white/[0.02]
                    transition-colors
                  "
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="p-6 space-y-3 mt-auto border-t border-white/10">
            <Link
              to="/create-your-suit"
              onClick={() => setOpen(false)}
              className="
                block
                w-full
                py-4
                text-center
                text-xs
                uppercase
                tracking-[0.2em]
                font-medium
                bg-[#C8A45D]
                text-black
                hover:bg-white
                transition-colors
                rounded-sm
              "
            >
              Takımını Oluştur
            </Link>

            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="
                block
                w-full
                py-3.5
                text-center
                text-xs
                uppercase
                tracking-[0.2em]
                font-medium
                border
                border-[#C8A45D]/60
                text-[#C8A45D]
                hover:bg-[#C8A45D]
                hover:text-black
                transition-colors
                rounded-sm
              "
            >
              Randevu Al
            </Link>

            <p className="pt-2 text-center text-[10px] uppercase tracking-[0.25em] text-gray-500">
              2004'ten beri — Kişiye Özel Terzilik
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
