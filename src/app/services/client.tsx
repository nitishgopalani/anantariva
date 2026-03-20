"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Icon, CTASection } from "@/components/shared";
import { servicesContent } from "@/content";

export function ServicesPageClient() {
  return (
    <>
      {/* Hero with full-size video background */}
      <section className="relative min-h-[50vh] flex items-center py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/video/istockphoto-2191630839-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Services background"
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
            {servicesContent.hero.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
              >
                {servicesContent.hero.subtitle}
              </motion.span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
            >
              {servicesContent.hero.title}
            </motion.h1>
            {servicesContent.hero.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl"
              >
                {servicesContent.hero.description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <Section id="industries">
        <SectionHeader
          subtitle="Sectors We Serve"
          title="Industries We Cater To"
          description="Deep expertise across sectors, delivering tailored solutions for your specific challenges and opportunities."
        />
        <div className="space-y-8">
          {servicesContent.industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Header Area — matches home navy hero accents */}
                    <div className="bg-gradient-to-br from-navy to-navy-light p-6 md:p-8 lg:p-10 text-white lg:rounded-l-2xl">
                      <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                        <Icon name={industry.icon} className="text-gold" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                      {industry.subtitle && (
                        <p className="text-gold text-sm font-medium mb-4">
                          {industry.subtitle}
                        </p>
                      )}
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {industry.focus}
                      </p>
                    </div>

                    {/* Content Area — same padding rhythm as home Service Highlights */}
                    <div className="lg:col-span-2 p-6 md:p-8">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                          Who It&apos;s For
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {industry.forWhom}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3 pb-2 border-b border-gold/30">
                          Example Deliverables
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {industry.deliverables.map((deliverable) => (
                            <div
                              key={deliverable}
                              className="flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600 leading-relaxed">
                                {deliverable}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Delivery Approach — same glass-card window style as home Section of Offerings */}
      <Section variant="gradient" id="approach">
        <SectionHeader
          subtitle={servicesContent.deliveryApproach.subtitle}
          title={servicesContent.deliveryApproach.title}
          description={servicesContent.deliveryApproach.description}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesContent.deliveryApproach.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/60">
                <CardContent className="p-6">
                  {pillar.image ? (
                    <div className="w-full h-28 rounded-xl overflow-hidden mb-4 bg-gray-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={pillar.icon} className="text-gold" size={28} />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-navy text-center mb-4 pb-3 border-b border-gold/30">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quick Navigation */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Quick Navigation
          </h2>
          <p className="text-gray-600">Jump to a specific industry</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {servicesContent.industries.map((industry) => (
            <a
              key={industry.id}
              href={`#${industry.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-navy hover:border-gold hover:text-gold transition-colors"
            >
              <Icon name={industry.icon} size={16} />
              {industry.title.split("&")[0].trim()}
            </a>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Need a Tailored Solution?"
        description="Every organization is unique. Let's discuss how our services can be customized to meet your specific requirements."
        primaryButton={{ text: "Request Consultation", href: "/contact" }}
        secondaryButton={{ text: "View Client Partnerships", href: "/clients-partnerships" }}
      />
    </>
  );
}
