"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon, CTASection } from "@/components/shared";
import { clientsContent } from "@/content";

export function ClientsPageClient() {
  return (
    <>
      {/* Hero with full-size video background */}
      <section className="relative min-h-[50vh] flex items-center py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/video/istockphoto-1472333975-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Partnerships background"
          />
          <div className="absolute inset-0 bg-navy/70" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-gold/10 to-transparent opacity-80" aria-hidden />
        </div>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {clientsContent.hero.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
              >
                {clientsContent.hero.subtitle}
              </motion.span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
            >
              {clientsContent.hero.title}
            </motion.h1>
            {clientsContent.hero.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl"
              >
                {clientsContent.hero.description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            {clientsContent.introduction.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {clientsContent.introduction.description}
          </p>
          <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 md:p-8">
            <p className="text-navy font-medium">
              {clientsContent.introduction.callout}
            </p>
          </div>
        </div>
      </Section>

      {/* Partner Types */}
      <Section variant="gray">
        <SectionHeader
          subtitle="Who We Work With"
          title="Our Partner Ecosystem"
          description="We collaborate with diverse organizations united by their commitment to sustainable practices and responsible growth."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientsContent.partnerTypes.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {partner.image && (
                  <div className="absolute inset-0 z-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.image}
                      alt={partner.title}
                      className="w-full h-full object-cover opacity-80"
                      loading="eager"
                    />
                    {/* Text readable rahe isliye image ke upar very light tint */}
                    <div className="absolute inset-0 bg-navy/45" aria-hidden />
                  </div>
                )}
                <CardContent className="p-6 md:p-8 relative z-10">
                  <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon
                      name={partner.icon}
                      className="text-white group-hover:text-gold transition-colors"
                      size={28}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {partner.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  <div className="space-y-2">
                    {partner.examples.map((example) => (
                      <div key={example} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-white/85">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Partnership Models */}
      <Section>
        <SectionHeader
          subtitle={clientsContent.partnershipModels.subtitle}
          title={clientsContent.partnershipModels.title}
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {clientsContent.partnershipModels.models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-gray-100 transition-colors"
            >
              <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center mb-4 text-lg font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                {model.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Client Logos Placeholder */}
      <Section
        variant="gray"
        className="relative overflow-hidden"
        containerClassName="max-w-none w-full px-0"
      >
        <div className="absolute inset-0">
          <video
            src="/video/istockphoto-1360047233-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Trusted partners background"
          />
          <div className="absolute inset-0 bg-navy/60" aria-hidden />
        </div>

        <div className="text-center relative z-10 px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Building Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted Partners Coming Soon
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-12">
              As we establish our practice, we&apos;re actively building relationships
              with organizations committed to sustainable transformation. Client
              logos will be featured here as partnerships develop.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-[3/2] bg-white rounded-xl border border-gray-200 flex items-center justify-center"
                >
                  <div className="text-white/70 text-sm font-medium">
                    Partner Logo
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Partnership Links */}
      <Section>
        <SectionHeader
          subtitle={clientsContent.partnershipLinks.subtitle}
          title={clientsContent.partnershipLinks.title}
          description={clientsContent.partnershipLinks.description}
        />
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="h-full">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-navy mb-5 pb-3 border-b border-gold/30">
                ESG Platform Linkage
              </h3>
              <div className="space-y-4">
                {clientsContent.partnershipLinks.esgPlatforms.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl border border-gray-200 hover:border-gold hover:shadow-sm transition-all"
                  >
                    <span className="inline-flex items-center gap-2 text-navy font-medium">
                      {item.name}
                      <ExternalLink className="h-4 w-4" />
                    </span>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-navy mb-5 pb-3 border-b border-gold/30">
                ISO Repository Links
              </h3>
              <div className="space-y-4">
                {clientsContent.partnershipLinks.isoRepositories.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl border border-gray-200 hover:border-gold hover:shadow-sm transition-all"
                  >
                    <span className="inline-flex items-center gap-2 text-navy font-medium">
                      {item.name}
                      <ExternalLink className="h-4 w-4" />
                    </span>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-navy via-navy to-navy-light rounded-3xl p-8 md:p-12 lg:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {clientsContent.cta.title}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {clientsContent.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact">
                {clientsContent.cta.primaryButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
              asChild
            >
              <Link href="/contact">{clientsContent.cta.secondaryButton}</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
