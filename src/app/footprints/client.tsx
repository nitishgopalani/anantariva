"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHeader, Section, SectionHeader } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon, FeatureCard, CTASection } from "@/components/shared";
import { footprintsContent } from "@/content";

export function FootprintsPageClient() {
  return (
    <>
      <PageHeader
        title={footprintsContent.hero.title}
        subtitle={footprintsContent.hero.subtitle}
        description={footprintsContent.hero.description}
      />

      {/* Primary Hub */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-wider mb-4 block">
              Headquarters
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {footprintsContent.primaryHub.title}:{" "}
              {footprintsContent.primaryHub.location}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {footprintsContent.primaryHub.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {footprintsContent.primaryHub.capabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{capability}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-navy/5 to-gold/5 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-navy/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="MapPin" size={48} className="text-navy/40" />
                </div>
                <p className="text-navy font-semibold text-xl">India</p>
                <p className="text-gray-500 text-sm">Primary Operations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Sectoral Reach */}
      <Section variant="gray">
        <SectionHeader
          subtitle={footprintsContent.sectoralReach.subtitle}
          title={footprintsContent.sectoralReach.title}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {footprintsContent.sectoralReach.regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                    <Icon
                      name={region.icon}
                      className="text-navy group-hover:text-gold transition-colors"
                      size={24}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {region.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-3">
                    {region.focus}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {region.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Operating Model */}
      <Section>
        <SectionHeader
          subtitle={footprintsContent.operatingModel.subtitle}
          title={footprintsContent.operatingModel.title}
          description={footprintsContent.operatingModel.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {footprintsContent.operatingModel.elements.map((element, index) => (
            <FeatureCard
              key={element.title}
              title={element.title}
              description={element.description}
              icon={element.icon}
              index={index}
              variant="bordered"
            />
          ))}
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section variant="gray">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            {footprintsContent.mapNote.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {footprintsContent.mapNote.description}
          </p>
        </div>
        <div className="aspect-[2/1] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center border border-gray-200">
          <div className="text-center">
            <Icon name="Map" size={64} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400">{footprintsContent.mapNote.placeholder}</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-navy via-navy to-navy-light rounded-3xl p-8 md:p-12 lg:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {footprintsContent.cta.title}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {footprintsContent.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact">
                {footprintsContent.cta.primaryButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
              asChild
            >
              <Link href="/services">{footprintsContent.cta.secondaryButton}</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
