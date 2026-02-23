"use client";

import { motion } from "framer-motion";
import { PageHeader, Section, SectionHeader } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon, CTASection, FeatureCard } from "@/components/shared";
import { servicesContent } from "@/content";

export function ServicesPageClient() {
  return (
    <>
      <PageHeader
        title={servicesContent.hero.title}
        subtitle={servicesContent.hero.subtitle}
        description={servicesContent.hero.description}
      />

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
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Header Area */}
                    <div className="bg-gradient-to-br from-navy to-navy-light p-8 lg:p-10 text-white">
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

                    {/* Content Area */}
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                          Who It&apos;s For
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {industry.forWhom}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                          Example Deliverables
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {industry.deliverables.map((deliverable) => (
                            <div
                              key={deliverable}
                              className="flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
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

      {/* Delivery Approach Section */}
      <Section variant="gray" id="approach">
        <SectionHeader
          subtitle={servicesContent.deliveryApproach.subtitle}
          title={servicesContent.deliveryApproach.title}
          description={servicesContent.deliveryApproach.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesContent.deliveryApproach.pillars.map((pillar, index) => (
            <FeatureCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              index={index}
              variant="default"
            />
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
