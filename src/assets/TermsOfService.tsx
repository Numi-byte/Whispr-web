import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function TermsOfService() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50 text-gray-900 p-8 lg:p-16"
        >
            <Link to="/" className="text-purple-600 hover:underline">&larr; Back to Home</Link>
            <h1 className="text-4xl font-bold mt-4 mb-6">Terms of Service</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
                <p>
                    By accessing or using Whispr (“the App”), you agree to be bound by these Terms of Service
                    (“Terms”). If you do not agree, do not use the App.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Use of the App</h2>
                <p>
                    Whispr provides secure, ephemeral messaging. You must be at least 13 years old and
                    only use the App for lawful, personal communication.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. Account Security</h2>
                <p>
                    You are responsible for keeping your username and credentials confidential. You agree to
                    notify us immediately of any unauthorized use.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">4. Prohibited Conduct</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>No harassment, hate speech, threats, or illegal activity.</li>
                    <li>No spamming or bulk unsolicited messages.</li>
                    <li>No reverse-engineering or tampering with the App.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">5. Intellectual Property</h2>
                <p>
                    All content, trademarks, logos and code are the property of Whispr Inc. You may not use
                    them without our express permission.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">6. Payment and Subscriptions</h2>
                <p>
                    Whispr is currently free. In future, paid features may be offered under separate terms.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>
                <p>
                    We may suspend or terminate your access at any time, for any reason, with or without
                    notice.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">8. Disclaimers</h2>
                <p className="italic">
                    THE APP IS PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">9. Limitation of Liability</h2>
                <p>
                    Whispr AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR
                    CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE APP.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">10. Governing Law</h2>
                <p>
                    These Terms are governed by the laws of the State of California, without regard to
                    conflict-of-law principles.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">11. Changes to Terms</h2>
                <p>
                    We may update these Terms at any time. Your continued use after changes indicates your
                    acceptance.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">12. Contact Us</h2>
                <p>
                    For questions about these Terms, please email us at{' '}
                    <a href="mailto:support@whispr.biz" className="text-purple-600 hover:underline">
                        support@whispr.biz
                    </a>.
                </p>
            </section>
        </motion.div>
    );
}
