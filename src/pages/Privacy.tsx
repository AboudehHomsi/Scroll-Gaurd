import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-6 glow-primary">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-muted-foreground">
              Last Updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              {/* Section 1 */}
              <section className="mb-12 p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ScrollGuard ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-12 p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To provide our screen time management service, we collect:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Account Information:</strong> Email address and username for account creation and authentication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Usage Data:</strong> Time spent on monitored social media applications (Facebook, Instagram, YouTube, Snapchat, TikTok)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Alert Preferences:</strong> Your customized alert timing settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Task Data:</strong> Focus task information you create within the app</span>
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="mb-12 p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected information to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Track and display your social media usage statistics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Send alerts when you reach your configured time limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Block social media apps when limits are exceeded</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Sync your data across sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Improve app functionality and user experience</span>
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="mb-12 p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Permissions Required</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ScrollGuard requires the following permissions:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Usage Access:</strong> To monitor which apps are in the foreground and track usage time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Display Over Other Apps:</strong> To show blocking overlays and break reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Internet Access:</strong> To sync your data with our secure servers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Foreground Service:</strong> To continuously monitor usage in the background</span>
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="mb-12 p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Storage and Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your data is stored securely using Supabase, a trusted cloud database provider. We implement industry-standard security measures including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Encrypted data transmission (HTTPS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Secure database access controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Regular security updates</span>
                  </li>
                </ul>
              </section>

              {/* Section 6 */}
              <section className="mb-12 p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do NOT:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Sell your personal data to third parties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Share your usage data with advertisers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Use your data for targeted advertising</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share data only:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>With service providers necessary for app operation (Supabase for database hosting)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>If required by law or legal process</span>
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="mb-12 p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your data for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-12 p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ScrollGuard is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              {/* Section 9 */}
              <section className="mb-12 p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Access your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Request correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Request deletion of your data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Withdraw consent at any time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Export your data</span>
                  </li>
                </ul>
              </section>

              {/* Section 10 */}
              <section className="p-8 rounded-2xl bg-card/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
