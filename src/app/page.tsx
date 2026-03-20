"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/layout";
import { Icon, CTASection, FeatureCard } from "@/components/shared";
import { homeContent, siteConfig, aboutContent } from "@/content";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - full-bleed background video with content overlay */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Full-size background video */}
        <div className="absolute inset-0">
          <video
            src="/video/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Anantariva hero background"
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-navy/75" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald/5 via-transparent to-transparent" aria-hidden />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gold text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                {siteConfig.pillars.join(" • ")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8"
            >
              {homeContent.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl"
            >
              {homeContent.hero.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="gold" size="xl" asChild>
                <Link href="/contact">
                  {homeContent.hero.primaryCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white/30 text-white hover:bg-white hover:text-navy"
                asChild
              >
                <Link href="/services">{homeContent.hero.secondaryCta}</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-gold rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Startup Agility Section */}
      <Section variant="gray">
        <SectionHeader
          subtitle={homeContent.startupAgility.subtitle}
          title={homeContent.startupAgility.title}
          description={homeContent.startupAgility.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {homeContent.startupAgility.features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              variant="bordered"
              index={index}
              className={
                index === 3
                  ? "lg:col-span-4 lg:col-start-3"
                  : index === 4
                    ? "lg:col-span-4 lg:col-start-7"
                    : "lg:col-span-4"
              }
            />
          ))}
        </div>
      </Section>

      {/* Global Voice Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Reach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              {homeContent.globalVoice.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {homeContent.globalVoice.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {homeContent.globalVoice.partners.map((partner) => (
                <span
                  key={partner}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-navy"
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100"
          >
            <video
              src="/video/161343-823146723.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              aria-label="Our global reach"
            />
            {/* Floating elements on top of video */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
              <Icon name="Leaf" className="text-gold" size={28} />
            </div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
              <Icon name="Shield" className="text-emerald" size={28} />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Who We Are Section */}
      <Section variant="navy" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <video
            src="/video/istockphoto-1160868560-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10">
        <SectionHeader
          title={homeContent.whoWeAre.title}
          description={homeContent.whoWeAre.etymology}
          light
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {homeContent.whoWeAre.coreFocus.map((focus, index) => (
            <motion.div
              key={focus.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <Icon name={focus.icon} className="text-gold" size={24} />
              </div>
              <span className="text-white text-sm font-medium">{focus.name}</span>
            </motion.div>
          ))}
        </div>
        </div>
      </Section>

      {/* Why Anantariva Section */}
      <Section variant="gray">
        <SectionHeader
          subtitle={homeContent.whyAnantariva.subtitle}
          title={homeContent.whyAnantariva.title}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeContent.whyAnantariva.reasons.map((reason, index) => (
            <FeatureCard
              key={reason.title}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              image={reason.image}
              variant="default"
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Our Expert Network Section */}
      <Section variant="gray">
        <SectionHeader
          subtitle={aboutContent.experts.subtitle}
          title={aboutContent.experts.title}
          description={aboutContent.experts.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutContent.experts.team.map((expert, index) => (
            <motion.div
              key={`${expert.sector}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={expert.image}
                    alt={expert.sector}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-xs font-medium text-gold uppercase tracking-wider">
                    {expert.sector}
                  </span>
                  <h3 className="text-lg font-semibold text-navy mt-2 mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{expert.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {expert.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Service Highlights Section */}
      <Section>
        <SectionHeader
          subtitle="What We Do"
          title="Our Service Offerings"
          description="Comprehensive solutions designed to help organizations navigate complexity, achieve compliance, and drive sustainable growth."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeContent.serviceHighlights.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                  <CardContent className="p-6 md:p-8">
                    {service.image ? (
                      <div className="w-full h-32 bg-navy/5 rounded-xl overflow-hidden mb-6 group-hover:bg-gold/10 transition-colors">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                        <Icon
                          name={service.icon}
                          className="text-navy group-hover:text-gold transition-colors"
                          size={28}
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-navy group-hover:text-gold transition-colors">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section of Offerings — 4 columns (tracker) */}
      <Section variant="gradient" id="section-of-offerings" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <video
            src="/video/istockphoto-1407820720-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="relative z-10">
        <SectionHeader
          subtitle={homeContent.serviceOfferings.subtitle}
          title={homeContent.serviceOfferings.title}
          description={homeContent.serviceOfferings.description}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeContent.serviceOfferings.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={category.icon} className="text-gold" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy text-center mb-4 pb-3 border-b border-gold/30">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Sustainability Journey?"
        description="Partner with Anantariva for independent assurance, strategic guidance, and measurable impact aligned with global standards."
        primaryButton={{ text: "Know More", href: "/contact" }}
        secondaryButton={{ text: "Explore Services", href: "/services" }}
      />
    </>
  );
}
