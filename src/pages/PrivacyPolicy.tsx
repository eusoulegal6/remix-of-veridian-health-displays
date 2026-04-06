import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container relative max-w-4xl space-y-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Privacy Policy
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Public marketing-site privacy terms.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              This page covers the information collected on the MedScreen
              marketing website. It is intentionally separate from any future
              product or customer application privacy terms.
            </p>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container max-w-4xl">
            <div className="rounded-2xl border bg-card p-8 md:p-10 space-y-8">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  Information we collect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  On this public website, MedScreen may collect contact details
                  that visitors choose to submit, plus standard analytics,
                  device, and browser data used to operate and improve the site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  How public-site data is used
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Information submitted through public forms may be used to
                  respond to sales inquiries, provide demos, share product
                  information, and measure site performance. This page does not
                  describe any protected health information workflows.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  Cookies and analytics
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The marketing website may use analytics and performance
                  cookies to understand traffic, referral sources, and visitor
                  engagement. Product analytics, authentication, and application
                  data handling are out of scope for this public site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about this public website policy, contact the
                  MedScreen team through the contact page.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
