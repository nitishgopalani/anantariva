"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon, CTASection } from "@/components/shared";
import { newsroomContent } from "@/content";

export function NewsroomPageClient() {
  return (
    <>
      <section className="relative bg-navy text-white py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/video/istockphoto-1282534827-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Newsroom background video"
          />
          <div className="absolute inset-0 bg-navy/70" aria-hidden />
        </div>

        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-gold/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-emerald/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20">
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
              {newsroomContent.hero.subtitle}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              {newsroomContent.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl"
            >
              {newsroomContent.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* News Sections */}
      <Section>
        <div className="space-y-12">
          {newsroomContent.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center">
                  <Icon name={section.icon} className="text-navy" size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-navy">{section.title}</h2>
                  <p className="text-sm text-gray-500">{section.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <Card
                    key={item.title}
                    className="group flex flex-col overflow-hidden border border-gray-200 bg-white p-0 shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Image + centered section icon */}
                    <div className="relative aspect-[16/8] w-full shrink-0 overflow-hidden bg-navy/10">
                      {item.image && (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-navy/25" aria-hidden />
                        </>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/25 shadow-lg backdrop-blur-sm transition-colors group-hover:bg-white/35 md:h-16 md:w-16">
                          <Icon
                            name={section.icon}
                            className="text-white"
                            size={28}
                          />
                        </div>
                      </div>
                    </div>
                    <CardContent className="flex-1 border-t border-gray-100 bg-white p-6">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <Badge variant="secondary" className="text-xs">
                          {item.type}
                        </Badge>
                        <span className="shrink-0 text-xs text-gray-400">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="mb-2 line-clamp-2 font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="line-clamp-3 text-sm text-gray-600">
                        {item.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Media Contact & Press Kit */}
      <Section variant="gray">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Media Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="group flex h-full flex-col overflow-hidden border border-gray-200 bg-white p-0 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-[16/8] w-full shrink-0 overflow-hidden bg-navy/10">
                <picture className="absolute inset-0 block h-full w-full">
                  <source
                    srcSet="/Insights/Media%20Inquiries/Media%20Inquiries.jpg"
                    type="image/jpeg"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Insights/Media%20Inquiries/Media%20Inquiries.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-navy/25" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/25 shadow-lg backdrop-blur-sm transition-colors group-hover:bg-white/35">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="flex-1 border-t border-gray-100 bg-white p-8">
                <h3 className="mb-4 text-xl font-bold text-navy">
                  {newsroomContent.mediaContact.title}
                </h3>
                <p className="mb-6 text-gray-600">
                  {newsroomContent.mediaContact.description}
                </p>
                <a
                  href={`mailto:${newsroomContent.mediaContact.email}`}
                  className="inline-flex items-center font-medium text-navy hover:text-gold"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {newsroomContent.mediaContact.email}
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  {newsroomContent.mediaContact.note}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Press Kit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="group flex h-full flex-col overflow-hidden border border-gray-200 bg-white p-0 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-[16/8] w-full shrink-0 overflow-hidden bg-navy/10">
                <picture className="absolute inset-0 block h-full w-full">
                  <source
                    srcSet="/Insights/Media%20Inquiries/Press%20Kit.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/Insights/Media%20Inquiries/Press%20Kit.jpg"
                    type="image/jpeg"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Insights/Media%20Inquiries/Press%20Kit.webp"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-navy/35" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/25 shadow-lg backdrop-blur-sm transition-colors group-hover:bg-white/35">
                    <Download className="h-8 w-8 text-gold" />
                  </div>
                </div>
              </div>
              <CardContent className="flex-1 border-t border-gray-100 bg-white p-8">
                <h3 className="mb-4 text-xl font-bold text-navy">
                  {newsroomContent.pressKit.title}
                </h3>
                <p className="mb-6 text-gray-600">
                  {newsroomContent.pressKit.description}
                </p>
                <div className="mb-6 space-y-3">
                  {newsroomContent.pressKit.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between border-b border-gray-100 py-2"
                    >
                      <span className="text-sm text-gray-700">{item.name}</span>
                      <Badge variant="outline" className="border-gray-200 text-navy">
                        {item.format}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  {newsroomContent.pressKit.note}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Have a Story Idea?"
        description="We welcome opportunities to contribute expert commentary on sustainability, compliance, and responsible business practices."
        primaryButton={{ text: "Contact Media Team", href: `mailto:${newsroomContent.mediaContact.email}` }}
      />
    </>
  );
}
