"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Icon, CTASection, FeatureCard } from "@/components/shared";
import { aboutContent } from "@/content";

export function AboutPageClient() {
  return (
    <>
      <PageHeader
        title={aboutContent.hero.title}
        subtitle={aboutContent.hero.subtitle}
        backgroundImage="/vision/vision.png"
      />

      {/* Identity Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              {aboutContent.identity.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {aboutContent.identity.etymology}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {aboutContent.identity.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100"
          >
            <video
              src="/video/istockphoto-1262727952-640_adpp_is.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              aria-label="Our story"
            />
          </motion.div>
        </div>
      </Section>

      {/* Mission & Purpose */}
      <Section variant="gray">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full relative overflow-hidden">
              {/* Full-size mission background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                aria-hidden
                style={{
                  backgroundImage: "url('/vision/mision.png')",
                }}
              />
              <CardContent className="p-8 relative z-10">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="Target" className="text-navy" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {aboutContent.mission.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {aboutContent.mission.statement}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {aboutContent.mission.elaboration}
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full relative overflow-hidden">
              {/* Full-size purpose background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-15"
                aria-hidden
                style={{
                  backgroundImage: "url('/vision/Our%20Purpose.png')",
                }}
              />
              <CardContent className="p-8 relative z-10">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="Compass" className="text-gold" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {aboutContent.purpose.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {aboutContent.purpose.statement}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {aboutContent.purpose.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          subtitle="What Guides Us"
          title="Our Values"
          description="The principles that shape every engagement and decision we make."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutContent.values.map((value, index) => (
            <FeatureCard
              key={value.title}
              title={value.title}
              description={value.description}
              icon={value.icon}
              image={value.image}
              index={index}
              variant="bordered"
            />
          ))}
        </div>
      </Section>

      {/* Operating Principles */}
      <Section variant="navy" className="relative">
        <SectionHeader
          subtitle="How We Work"
          title="Operating Principles"
          description="The standards that govern our professional conduct and ensure the integrity of our work."
          light
        />
        {/* Full-size background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          aria-hidden
          style={{
            backgroundImage: "url('/opration_princple/opration%20princple.png')",
          }}
        />
        <div className="grid md:grid-cols-2 gap-6">
          {aboutContent.operatingPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Regional Expertise */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              {aboutContent.regionalExpertise.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {aboutContent.regionalExpertise.description}
            </p>
            <ul className="space-y-3">
              {aboutContent.regionalExpertise.areas.map((area) => (
                <li key={area} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600">{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: "Globe", label: "Global Standards" },
              { icon: "MapPin", label: "Local Insight" },
              { icon: "Users", label: "Expert Network" },
              { icon: "Award", label: "Proven Methods" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} className="text-navy" size={24} />
                </div>
                <span className="text-navy font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Expert Network */}
      <Section variant="gray" id="experts">
        <SectionHeader
          subtitle={aboutContent.experts.subtitle}
          title={aboutContent.experts.title}
          description={aboutContent.experts.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutContent.experts.team.map((expert, index) => (
            <motion.div
              key={index}
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
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Expert profiles will be updated with actual team member information.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to Work With Us?"
        description="Partner with Anantariva for independent assurance and strategic guidance aligned with global standards."
        primaryButton={{ text: "Get in Touch", href: "/contact" }}
        secondaryButton={{ text: "View Our Services", href: "/services" }}
      />
    </>
  );
}
