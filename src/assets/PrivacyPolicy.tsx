import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50 text-gray-900 p-8 lg:p-16"
        >
            <Link to="/" className="text-purple-600 hover:underline">&larr; Back to Home</Link>
            <h1 className="text-4xl font-bold mt-4 mb-6">Privacy Policy</h1>

            <p className="mb-4">Last updated: May 1, 2025</p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                <p>
                    Whispr (“we,” “us,” or “our”) respects your privacy and is committed to
                    protecting your personal data. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you use our application.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Data We Collect</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Account Information:</strong> Username and user ID.</li>
                    <li><strong>Messages & Whispers:</strong> Content you send one-on-one.</li>
                    <li><strong>Friendships:</strong> Who you add, pending requests, confirmations.</li>
                    <li><strong>Usage Data:</strong> Timestamps, actions, error logs.</li>
                    <li><strong>Device & Technical:</strong> Model, OS, IP address.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Core Functionality:</strong> To enable chat, friend requests, Realms.</li>
                    <li><strong>Security & Anti-Fraud:</strong> To detect and prevent abuse.</li>
                    <li><strong>Analytics:</strong> Anonymous usage statistics to improve the App.</li>
                    <li><strong>Notifications:</strong> For incoming messages or friend acceptances.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">4. Data Retention</h2>
                <p>
                    <strong>Messages & Whispers:</strong> Stored indefinitely, encrypted at rest.<br/>
                    <strong>Friend Records:</strong> Until you remove them or delete your account.<br/>
                    <strong>Account & Logs:</strong> Retained for up to 2 years for security.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">5. Data Sharing & Disclosure</h2>
                <p>
                    We may share your data with:
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>Service Providers (e.g. our database host, analytics).</li>
                        <li>Legal authorities when required by law.</li>
                        <li>Successor entities in a business transfer.</li>
                    </ul>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">6. Your Choices</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Delete Account:</strong> Coming soon in Settings.</li>
                    <li><strong>Opt-Out Analytics:</strong> Contact <a href="mailto:support@whispr.biz" className="text-purple-600 hover:underline">support@whispr.biz</a>.</li>
                    <li><strong>Push Notifications:</strong> Disable via device settings.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">7. Security</h2>
                <p>
                    We implement industry-standard measures (HTTPS, encryption at rest,
                    access controls) to protect your data. However, no system is 100% secure.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
                <p>
                    Our App is not intended for children under 13. We do not knowingly
                    collect data from minors. If we discover we have, we will delete it.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">9. International Transfers</h2>
                <p>
                    Your data may be processed in the United States or other jurisdictions.
                    By using the App, you consent to cross-border transfers.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">10. Changes to This Policy</h2>
                <p>
                    We may update this policy. The “Last updated” date above will reflect
                    any changes. We encourage you to review it periodically.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
                <p>
                    If you have questions about this Privacy Policy, contact us at<br/>
                    <a href="mailto:support@whispr.biz" className="text-purple-600 hover:underline">
                        support@whispr.biz
                    </a><br/>
                    Or visit <a href="https://whispr.biz/privacy" className="text-purple-600 hover:underline">
                    https://whispr.biz/privacy
                </a>
                </p>
            </section>
        </motion.div>
    );
}
