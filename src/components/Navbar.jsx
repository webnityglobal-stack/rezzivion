import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import EnquiryModal from "./EnquiryModal.jsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Why Rezzivion", href: "/why-rezzivion" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Contact", href: "/contact" },
];

const serviceLinks = [
    {
        name: "Legal Process Management",
        href: "/services/legal-process-management",
    },
    {
        name: "Finance & Accounting",
        href: "/services/finance-accounting",
    },
    {
        name: "Data & AI Enablement",
        href: "/services/data-ai-enablement",
    },
    {
        name: "Banking, Financial Services & Insurance",
        href: "/services/bfsi",
    },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    const location = useLocation();

    const closeMenu = () => {
        setIsMenuOpen(false);
        setServicesOpen(false);
    };

    const isActive = (href) => {
        if (href === "/") {
            return location.pathname === "/";
        }

        return location.pathname === href;
    };

    const isServicesActive =
        location.pathname === "/services" ||
        location.pathname.startsWith("/services/");

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="mx-auto max-w-[1440px] px-5  sm:px-6 lg:px-10 xl:px-12">

                {/* ================= NAVBAR ================= */}

                <nav className="flex min-h-[92px] items-center justify-between">

                    {/* ================= LOGO ================= */}

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex shrink-0 items-center overflow-visible py-1"
                    >
                        <img
                            src="/Rezzivion-logo.png"
                            alt="Rezzivion"
                            className="h-[86px] w-auto max-w-[250px] object-contain object-left overflow-visible"
                        />
                    </Link>

                    {/* ================= DESKTOP NAVIGATION ================= */}

                    <div className="ml-auto hidden items-center lg:flex">

                        <div className="flex items-center gap-7 xl:gap-9">

                            {navLinks.map((link) => {

                                /* ================= SERVICES ================= */

                                if (link.name === "Services") {
                                    return (
                                        <div
                                            key={link.name}
                                            className="group relative"
                                        >
                                            {/* Services Button */}
                                            <Link
                                                to="/services"
                                                className={`group/services flex h-[104px] items-center gap-1.5 text-[14px] font-medium transition-colors duration-300 ${isServicesActive
                                                    ? "text-[#B8924A]"
                                                    : "text-[#172033] hover:text-[#B8924A]"
                                                    }`}
                                            >
                                                <span className="relative">
                                                    Services

                                                    <span
                                                        className={`absolute left-0 -bottom-1 h-[1px] bg-[#B8924A] transition-all duration-300 ${isServicesActive
                                                            ? "w-full"
                                                            : "w-0 group-hover/services:w-full"
                                                            }`}
                                                    />
                                                </span>

                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-180"
                                                >
                                                    <path
                                                        d="M5 7.5L10 12.5L15 7.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </Link>

                                            {/* Services Dropdown */}
                                            <div className="invisible absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 translate-y-2 rounded-2xl border border-[#E6E9EF] bg-white p-3 opacity-0 shadow-[0_20px_50px_rgba(13,35,66,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                                                {/* All Services */}
                                                <Link
                                                    to="/services"
                                                    className="mb-2 block rounded-xl bg-[#F7F8FA] px-4 py-3 text-sm font-semibold text-[#0D2342] transition hover:bg-[#F1F3F6]"
                                                >
                                                    All Services
                                                </Link>

                                                {/* Individual Services */}
                                                {serviceLinks.map((service) => (
                                                    <Link
                                                        key={service.href}
                                                        to={service.href}
                                                        className="group/item flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-[#F7F8FA]"
                                                    >
                                                        <span className="max-w-[270px] text-sm text-[#475467] transition group-hover/item:text-[#0D2342]">
                                                            {service.name}
                                                        </span>

                                                        <span className="text-[#B8924A] opacity-0 transition group-hover/item:translate-x-1 group-hover/item:opacity-100">
                                                            →
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }
                                /* ================= OTHER LINKS ================= */

                                return (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        className={`group relative flex h-[104px] items-center text-[14px] font-medium transition-colors duration-300 ${isActive(link.href)
                                            ? "text-[#B8924A]"
                                            : "text-[#172033] hover:text-[#B8924A]"
                                            }`}
                                    >
                                        <span className="relative">
                                            {link.name}

                                            <span
                                                className={`absolute left-0 -bottom-1 h-[1px] bg-[#B8924A] transition-all duration-300 ${isActive(link.href)
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                                    }`}
                                            />
                                        </span>
                                    </Link>
                                );
                            })}

                        </div>

                        {/* ================= DESKTOP CTA ================= */}

                        <button
                            type="button"
                            onClick={() => setIsEnquiryOpen(true)}
                            className="ml-8 inline-flex h-[44px] min-w-[118px] items-center justify-center rounded-[4px] bg-[#0D2342] px-5 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#B8924A] xl:ml-10"
                        >
                            Let's Talk
                        </button>

                    </div>

                    {/* ================= MOBILE MENU BUTTON ================= */}

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md text-[#0D2342] transition hover:bg-[#F7F8FA] lg:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >

                        <span
                            className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${isMenuOpen
                                ? "translate-y-[7px] rotate-45"
                                : ""
                                }`}
                        />

                        <span
                            className={`block h-[2px] w-6 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""
                                }`}
                        />

                        <span
                            className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${isMenuOpen
                                ? "-translate-y-[7px] -rotate-45"
                                : ""
                                }`}
                        />

                    </button>

                </nav>

                {/* ================= MOBILE NAVIGATION ================= */}

                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${isMenuOpen
                        ? "max-h-[700px] pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                >

                    <div className="border-t border-gray-100 pt-4">

                        <div className="flex flex-col">

                            {/* Home */}

                            <Link
                                to="/"
                                onClick={closeMenu}
                                className={`py-3 text-[15px] font-medium transition-colors ${isActive("/")
                                    ? "text-[#B8924A]"
                                    : "text-[#172033] hover:text-[#B8924A]"
                                    }`}
                            >
                                Home
                            </Link>

                            {/* About */}

                            <Link
                                to="/about"
                                onClick={closeMenu}
                                className={`py-3 text-[15px] font-medium transition-colors ${isActive("/about")
                                    ? "text-[#B8924A]"
                                    : "text-[#172033] hover:text-[#B8924A]"
                                    }`}
                            >
                                About
                            </Link>

                            {/* ================= MOBILE SERVICES ================= */}

                            <div className="border-b border-gray-100">

                                <button
                                    type="button"
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className={`flex w-full items-center justify-between py-3 text-[15px] font-medium ${isServicesActive
                                        ? "text-[#B8924A]"
                                        : "text-[#172033]"
                                        }`}
                                >
                                    Services

                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                                            }`}
                                    >
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${servicesOpen
                                        ? "max-h-[450px] pb-3"
                                        : "max-h-0"
                                        }`}
                                >

                                    {/* All Services */}

                                    <Link
                                        to="/services"
                                        onClick={closeMenu}
                                        className="block rounded-lg bg-[#F7F8FA] px-4 py-3 text-sm font-semibold text-[#0D2342]"
                                    >
                                        All Services
                                    </Link>

                                    {/* Individual Services */}

                                    {serviceLinks.map((service) => (
                                        <Link
                                            key={service.href}
                                            to={service.href}
                                            onClick={closeMenu}
                                            className={`block px-4 py-3 text-sm transition-colors ${isActive(service.href)
                                                ? "text-[#B8924A]"
                                                : "text-[#667085] hover:text-[#B8924A]"
                                                }`}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}

                                </div>

                            </div>

                            {/* Why Rezzivion */}

                            <Link
                                to="/why-rezzivion"
                                onClick={closeMenu}
                                className={`py-3 text-[15px] font-medium transition-colors ${isActive("/why-rezzivion")
                                    ? "text-[#B8924A]"
                                    : "text-[#172033] hover:text-[#B8924A]"
                                    }`}
                            >
                                Why Rezzivion
                            </Link>

                            {/* How We Work */}

                            <Link
                                to="/how-we-work"
                                onClick={closeMenu}
                                className={`py-3 text-[15px] font-medium transition-colors ${isActive("/how-we-work")
                                    ? "text-[#B8924A]"
                                    : "text-[#172033] hover:text-[#B8924A]"
                                    }`}
                            >
                                How We Work
                            </Link>

                            {/* Contact */}

                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className={`py-3 text-[15px] font-medium transition-colors ${isActive("/contact")
                                    ? "text-[#B8924A]"
                                    : "text-[#172033] hover:text-[#B8924A]"
                                    }`}
                            >
                                Contact
                            </Link>

                            {/* Mobile CTA */}

                            <button
                                type="button"
                                onClick={() => {
                                    closeMenu();
                                    setIsEnquiryOpen(true);
                                }}
                                className="mt-3 inline-flex h-11 items-center justify-center rounded-[4px] bg-[#0D2342] text-[14px] font-medium text-white transition-colors hover:bg-[#B8924A]"
                            >
                                Let's Talk
                            </button>

                        </div>

                    </div>

                </div>

                <EnquiryModal
                    isOpen={isEnquiryOpen}
                    onClose={() => setIsEnquiryOpen(false)}
                />
            </div>
        </header>
    );
}

export default Navbar;