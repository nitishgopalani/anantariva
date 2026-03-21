"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon, CTASection } from "@/components/shared";
import { footprintsContent } from "@/content";

export function FootprintsPageClient() {
  return (
    <>
      <section className="relative bg-navy text-white py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/video/istockphoto-2187418671-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Our Presence background video"
          />
          <div className="absolute inset-0 bg-navy/70" aria-hidden />
        </div>

        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-gold/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-emerald/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
            >
              {footprintsContent.hero.subtitle}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              {footprintsContent.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl"
            >
              {footprintsContent.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

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
            <div className="relative aspect-square bg-gradient-to-br from-navy/5 to-gold/5 rounded-3xl flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/istockphoto-1156098157-1024x1024.jpg"
                alt="India primary hub background"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-white/30"
                aria-hidden
              />
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
      <Section variant="gray" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/video/istockphoto-1376529365-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Sectoral reach background video"
          />
          <div className="absolute inset-0 bg-navy/85" aria-hidden />
        </div>

        <div className="relative z-10">
          <SectionHeader
            subtitle={footprintsContent.sectoralReach.subtitle}
            title={footprintsContent.sectoralReach.title}
            light
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
            <motion.div
              key={element.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 group p-0 border border-gray-200">
                {/* Image band + icon centered on image */}
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-navy/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={element.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/25" aria-hidden />
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl bg-white/25 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg group-hover:bg-white/35 transition-colors">
                      <Icon
                        name={element.icon}
                        className="text-white group-hover:text-gold transition-colors"
                        size={28}
                      />
                    </div>
                  </div>
                </div>
                {/* Text below image */}
                <CardContent className="p-6 md:p-8 flex-1 bg-white">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {element.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {element.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
        <div className="relative aspect-[2/1] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center border border-gray-200 overflow-hidden">
          <div className="absolute inset-0">
            <video
              src="/video/istockphoto-2135230310-640_adpp_is.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              aria-label="Our network map background video"
            />
            <div className="absolute inset-0 bg-navy/35" aria-hidden />
          </div>
          <div className="text-center relative z-10">
            <Icon name="Map" size={64} className="text-white/80 mx-auto mb-4" />
            <p className="text-white/90">{footprintsContent.mapNote.placeholder}</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 text-center"
        >
          <div className="absolute inset-0 z-0" aria-hidden>
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="/video/Work%20With%20Us%20Globally.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-navy/70" />
          </div>
          <div className="relative z-10">
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
          </div>
        </motion.div>
      </Section>
    </>
  );
}
