import Footer from "@/components/Footer";
import Header from "@/components/Header";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container relative max-w-4xl space-y-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Terms of Service
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Public website terms for MedScreen.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              These terms apply to use of the public marketing website and its
              content. They do not create product-service commitments, SLA
              terms, or customer application obligations.
            </p>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container max-w-4xl">
            <div className="rounded-2xl border bg-card p-8 md:p-10 space-y-8">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  Website use
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Visitors may browse the MedScreen marketing website for
                  informational purposes. Content, branding, and materials on
                  the site remain the property of MedScreen unless otherwise
                  stated.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  No product agreement
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nothing on this marketing site constitutes a binding offer,
                  product warranty, or customer agreement. Commercial terms for
                  any future MedScreen product relationship would be governed by
                  separate contracts.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  Availability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MedScreen may update, remove, or revise website content and
                  public routes at any time without notice as the marketing site
                  evolves.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about these public website terms can be directed to
                  the MedScreen team through the contact page.
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

export default TermsOfService;
