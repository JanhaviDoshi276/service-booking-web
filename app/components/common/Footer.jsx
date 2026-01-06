import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-24 bg-heroBg border-t border-border">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4 text-sm">

                {/* Brand */}
                <div>
                    <h3 className="text-lg font-semibold text-midnight_text mb-4">
                        Service<span className="text-primary">Booking</span>
                    </h3>
                    <p className="text-muted leading-relaxed">
                        A modern platform to discover services, book appointments, and manage
                        business operations with ease.
                    </p>
                </div>

                {/* Platform */}
                <div>
                    <h4 className="font-semibold text-midnight_text mb-4">Platform</h4>
                    <ul className="space-y-3 text-muted">
                        <li>
                            <Link href="/businesses" className="hover:text-primary transition">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" className="hover:text-primary transition">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="hover:text-primary transition">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold text-midnight_text mb-4">Company</h4>
                    <ul className="space-y-3 text-muted">
                        <li>
                            <Link href="/about" className="hover:text-primary transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-primary transition">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-primary transition">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Get Started */}
                <div>
                    <h4 className="font-semibold text-midnight_text mb-4">Get Started</h4>
                    <ul className="space-y-3 text-muted">
                        <li>
                            <Link href="/signup" className="hover:text-primary transition">
                                Create Account
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:text-primary transition">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border">
                <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-muted">
                    © {new Date().getFullYear()} Janhavi Doshi · All rights reserved
                </div>
            </div>
        </footer>
    );
}
