"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/shared";
import { investorsContent } from "@/content";

export function InvestorsPageClient() {
  return (
    <>
      {/* Hero with full-size video background */}
      <section className="relative min-h-[50vh] flex items-center py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/video/istockphoto-1705765190-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Investors background"
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
            {investorsContent.hero.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
              >
                {investorsContent.hero.subtitle}
              </motion.span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
            >
              {investorsContent.hero.title}
            </motion.h1>
            {investorsContent.hero.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl"
              >
                {investorsContent.hero.description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Strategic Positioning */}
      <Section>
        <SectionHeader
          subtitle="Market Position"
          title={investorsContent.positioning.title}
          description={investorsContent.positioning.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investorsContent.positioning.domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border border-gray-200 p-0 transition-all duration-300 hover:shadow-xl">
                {domain.image && (
                  <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-navy/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={domain.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-navy/20 transition-opacity group-hover:bg-navy/10"
                      aria-hidden
                    />
                  </div>
                )}
                <CardContent className="border-t border-gray-100 bg-white p-6 md:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/15">
                    <Icon
                      name={domain.icon}
                      className="text-navy transition-colors group-hover:text-gold"
                      size={24}
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-navy transition-colors group-hover:text-gold">
                    {domain.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {domain.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Investment Highlights */}
      <Section variant="navy" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <video
            src="/video/istockphoto-1017338764-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative z-10">
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
