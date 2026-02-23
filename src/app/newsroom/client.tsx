"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { PageHeader, Section, SectionHeader } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon, CTASection } from "@/components/shared";
import { newsroomContent } from "@/content";

export function NewsroomPageClient() {
  return (
    <>
      <PageHeader
        title={newsroomContent.hero.title}
        subtitle={newsroomContent.hero.subtitle}
        description={newsroomContent.hero.description}
      />

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
                {section.items.map((item, itemIndex) => (
                  <Card
                    key={item.title}
                    className="hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {item.type}
                        </Badge>
                        <span className="text-xs text-gray-400">{item.date}</span>
                      </div>
                      <h3 className="font-semibold text-navy mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
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
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="text-navy h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  {newsroomContent.mediaContact.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {newsroomContent.mediaContact.description}
                </p>
                <a
                  href={`mailto:${newsroomContent.mediaContact.email}`}
                  className="inline-flex items-center text-gold hover:text-gold-light font-medium"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {newsroomContent.mediaContact.email}
                </a>
                <p className="text-sm text-gray-500 mt-4">
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
            <Card className="h-full bg-navy text-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Download className="text-gold h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {newsroomContent.pressKit.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {newsroomContent.pressKit.description}
                </p>
                <div className="space-y-3 mb-6">
                  {newsroomContent.pressKit.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 border-b border-white/10"
                    >
                      <span className="text-sm">{item.name}</span>
                      <Badge variant="outline" className="border-white/30 text-white">
                        {item.format}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400">
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
