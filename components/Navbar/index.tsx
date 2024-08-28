import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";
import {
  X,
  Menu,
  House,
  Coffee,
  Images,
  ContactRound,
  Info,
} from "lucide-react";

import CartButton from "@/components/CartButton";

import { LinkInterface } from "@/utils/types";

const defaultLinks: LinkInterface[] = [
  { path: "/", label: "Home", Icon: House, isActive: false },
  { path: "/product", label: "Our Products", Icon: Coffee, isActive: false },
  { path: "/about", label: "About", Icon: Info, isActive: false },
  { path: "/gallery", label: "Gallery", Icon: Images, isActive: false },
  { path: "/contact", label: "Contact", Icon: ContactRound, isActive: false },
];

export default function Nav() {


  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Nav must be used within an AppProvider");
  }

  const { state, setState } = context;
  const [links, setLinks] = useState<LinkInterface[]>(defaultLinks);
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [mobileMenuPosition, setMobileMenuPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setLinks((prevLinks) =>
      prevLinks.map((link) => ({
        ...link,
        isActive: link.path === router.pathname,
      }))
    );
  }, [router.pathname]);

  const deleteProduct = (productId: number) => {
    setState((prevState) => ({
      ...prevState,
      cartContent: prevState.cartContent.filter(
        (product) => product.product_id !== productId
      ),
    }));
  };


  useEffect(() => {
    if(isMenuOpen) {
      setMobileMenuPosition(0);
    } else {
      setMobileMenuPosition(100);
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-gray-100">
      <div className="relative flex justify-between items-center w-full p-4 relative m-auto max-w-[1200px]">
        <div className="flex gap-2 items-center">
          <Image
            width={64}
            height={64}
            src="/logo-transparent.png"
            alt="logo"
          />
          <div className="flex flex-col items-start justify-center">
            <p className="text-primary font-bold">Libcoffee</p>
            <p className="text-slate-600 ">
              Caffeine for the mind, books for the soul
            </p>
          </div>
        </div>

        <ul className={`hidden md:flex gap-4`}>
          {links.map(({ path, label, isActive }, idx) => (
            <li
              key={idx}
              className={`nav-link-item ${isActive ? "active" : ""}`}
            >
              <Link href={path} legacyBehavior>
                <a className={isActive ? "active" : ""}>
                  <span>{label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={`mobile-menu md:hidden fixed left-[50%] top-0 bg-white w-[50vw] h-screen p-4 z-10 flex flex-col gap-4 transition-transform duration-300 ease-in-out translate-x-[${mobileMenuPosition}%]`}>
          {links.map(({ path, label, isActive }, idx) => (
            <li
              key={idx}
              className={`nav-link-item ${isActive ? "active" : ""}`}
            >
              <Link href={path} legacyBehavior>
                <a className={isActive ? "active" : ""}>
                  <span>{label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <CartButton
            deleteProduct={deleteProduct}
            products={state.cartContent}
          />

          <button
            className="border-none bg-none inline-flex md:hidden z-50"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
