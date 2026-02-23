"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { PageHeader, Section, SectionHeader } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon, FeatureCard } from "@/components/shared";
import { investorsContent } from "@/content";

export function InvestorsPageClient() {
  return (
    <>
      <PageHeader
        title={investorsContent.hero.title}
        subtitle={investorsContent.hero.subtitle}
        description={investorsContent.hero.description}
      />

      {/* Strategic Positioning */}
      <Section>
        <SectionHeader
          subtitle="Market Position"
          title={investorsContent.positioning.title}
          description={investorsContent.positioning.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investorsContent.positioning.domains.map((domain, index) => (
            <FeatureCard
              key={domain.title}
              title={domain.title}
              description={domain.description}
              icon={domain.icon}
              index={index}
              variant="bordered"
            />
          ))}
        </div>
      </Section>

      {/* Investment Highlights */}
      <Section variant="navy">
        <SectionHeader
          subtitle={investorsContent.investmentHighlights.subtitle}
          title={investorsContent.investmentHighlights.title}
          light
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investorsContent.investmentHighlights.highlights.map(
            (highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon name={highlight.icon} className="text-gold" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </Section>

      {/* Market Context */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-wider mb-4 block">
              Industry Landscape
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              {investorsContent.marketContext.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {investorsContent.marketContext.description}
            </p>
            <ul className="space-y-3">
              {investorsContent.marketContext.trends.map((trend) => (
                <li key={trend} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600">{trend}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-navy to-navy-light text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">
                  {investorsContent.engagement.title}
                </h3>
                <p className="text-gray-300 mb-8">
                  {investorsContent.engagement.description}
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="text-gold h-6 w-6" />
                  <a
                    href={`mailto:${investorsContent.engagement.email}`}
                    className="text-gold hover:text-gold-light font-medium"
                  >
                    {investorsContent.engagement.email}
                  </a>
                </div>
                <p className="text-sm text-gray-400">
                  {investorsContent.engagement.note}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section variant="gray" className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500 leading-relaxed">
            {investorsContent.disclaimer.text}
          </p>
        </div>
      </Section>
    </>
  );
}
