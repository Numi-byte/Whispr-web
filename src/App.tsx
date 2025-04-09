import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "./supabaseClient"; // Ensure supabaseClient.ts is correctly configured
import { LockClosedIcon, BoltIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

/* ========================
   Minimalistic Navbar
======================== */
function NavBar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="text-gray-900 text-2xl font-bold">Whispr</span>
                <div className="space-x-6">
                    <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
                        Features
                    </a>
                    <a href="#waitlist" className="text-gray-600 hover:text-gray-900 transition">
                        Waitlist
                    </a>
                </div>
            </div>
        </nav>
    );
}

/* ========================
   Fullscreen Hero Section
======================== */
function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-gray-900"
                >
                    Whispr
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 text-lg md:text-xl text-gray-600"
                >
                    Secure. Simple. Elegant messaging.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-8"
                >
                    <CountdownTimer targetDate="2025-05-01T00:00:00" />
                </motion.div>
            </div>
        </section>
    );
}

/* ========================
   Animated Countdown Timer
======================== */
function CountdownTimer({ targetDate }: { targetDate: string }) {
    const launchDate = new Date(targetDate);
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(launchDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining(launchDate));
        }, 1000);
        return () => clearInterval(interval);
    }, [launchDate]);

    return (
        <div className="flex justify-center space-x-4">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
      <span className="bg-gray-200 px-3 py-2 rounded-md text-xl font-mono text-gray-900">
        {String(value).padStart(2, "0")}
      </span>
            <span className="mt-1 text-xs text-gray-500">{label}</span>
        </div>
    );
}

function getTimeRemaining(target: Date) {
    const diff = target.getTime() - Date.now();
    return {
        days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
        minutes: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
        seconds: Math.max(Math.floor((diff / 1000) % 60), 0)
    };
}

/* ========================
   Clean "What We Offer" Section
======================== */
function FeaturesSection() {
    const features = [
        {
            icon: <LockClosedIcon className="h-6 w-6" />,
            title: "Encryption",
            desc: "State-of-the-art encryption for your messages."
        },
        {
            icon: <BoltIcon className="h-6 w-6" />,
            title: "Privacy",
            desc: "Self-destructing messages for your peace of mind."
        },
        {
            icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
            title: "Universal",
            desc: "Available on all platforms."
        }
    ];

    return (
        <section id="features" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold text-center text-gray-900 mb-12"
                >
                    What We Offer
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white shadow rounded-lg p-6 border border-gray-200"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="text-gray-800">{feat.icon}</div>
                                <h3 className="text-xl font-medium text-gray-900">{feat.title}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ========================
   Waitlist & Newsletter Section
======================== */
function WaitlistSection() {
    // State for the main email input.
    const [email, setEmail] = useState("");
    // State for errors and success messages.
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    // Honeypot state; if a bot fills this field, its value won't be an empty string.
    const [botField, setBotField] = useState("");

    // State to track when the form was rendered.
    const [startTime, setStartTime] = useState<number>(Date.now());

    // Set the start time when the component mounts.
    useEffect(() => {
        setStartTime(Date.now());
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Anti-bot check #1: Honeypot must be empty.
        if (botField !== "") {
            setError("Spam detected.");
            return;
        }

        // Anti-bot check #2: Form must not be submitted too quickly (minimum 3 seconds).
        if (Date.now() - startTime < 3000) {
            setError("Form submitted too quickly, please wait a moment.");
            return;
        }

        // Basic email validation.
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email.");
            return;
        }

        setError("");
        setIsSubmitting(true);

        // Insert into Supabase "newsletter" table.
        const { error: insertError } = await supabase.from("newsletter").insert({ email });
        if (insertError) {
            setError(insertError.message);
        } else {
            setSuccess(true);
            setEmail("");
            setTimeout(() => setSuccess(false), 4000);
        }
        setIsSubmitting(false);
    };

    return (
        <section id="waitlist" className="py-16 bg-white">
            <div className="max-w-md mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                >
                    Join Our Waitlist
                </motion.h2>
                <p className="text-gray-600 mb-6">
                    Get early access to the future of messaging.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Hidden honeypot field (should remain empty) */}
                    <input
                        type="text"
                        value={botField}
                        onChange={(e) => setBotField(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                        style={{ position: "absolute", left: "-10000px" }}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring focus:ring-gray-400 text-gray-900 placeholder-gray-500"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition disabled:opacity-50"
                    >
                        {isSubmitting ? "Submitting..." : "Sign Up"}
                    </button>
                </form>
                <AnimatePresence>
                    {success && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-4 text-green-500 text-sm"
                        >
                            Success! You've joined the waitlist.
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}


/* ========================
   Minimalistic Footer
======================== */
function Footer() {
    return (
        <footer className="py-8 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-xs">
                <p>© {new Date().getFullYear()} Whispr Inc. All rights reserved.</p>
                <div className="mt-2 space-x-2">
                    <a href="#" className="hover:text-gray-900 transition">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-gray-900 transition">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}

/* ========================
   Main App Component
======================== */
export default function App() {
    return (
        <div className="relative min-h-screen bg-gray-50 overflow-hidden">
            <NavBar />
            <main className="relative z-10">
                <HeroSection />
                <FeaturesSection />
                <WaitlistSection />
            </main>
            <Footer />
        </div>
    );
}
