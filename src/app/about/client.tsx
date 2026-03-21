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
            <Card className="h-full flex flex-col overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group p-0">
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-navy/10">
                <picture className="absolute inset-0 block h-full w-full">
                  <source srcSet="/vision/mision.jpg" type="image/jpeg" />
                  <source srcSet="/vision/mision.png" type="image/png" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/vision/mision.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </picture>
                <div className="absolute inset-0 bg-navy/25" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl bg-white/25 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg group-hover:bg-white/35 transition-colors">
                    <Icon name="Target" className="text-white" size={28} />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 md:p-8 flex-1 bg-white">
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
            <Card className="h-full flex flex-col overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group p-0">
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-navy/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vision/Our%20Purpose.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/25" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl bg-white/25 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg group-hover:bg-white/35 transition-colors">
                    <Icon name="Compass" className="text-gold" size={28} />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 md:p-8 flex-1 bg-white">
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
      <Section variant="navy" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/opration_princple/opration%20princple.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <SectionHeader
          className="relative z-10"
          subtitle="How We Work"
          title="Operating Principles"
          description="The standards that govern our professional conduct and ensure the integrity of our work."
          light
        />
        <div className="relative z-10 grid md:grid-cols-2 gap-6">
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
              {
                icon: "Globe",
                label: "Global Standards",
                image: "/Regional_Expertise/card_1_global_standards.png",
              },
              {
                icon: "MapPin",
                label: "Local Insight",
                image: "/Regional_Expertise/card_2_local_insight.png",
              },
              {
                icon: "Users",
                label: "Expert Network",
                image: "/Regional_Expertise/card_3_expert_network.png",
              },
              {
                icon: "Award",
                label: "Proven Methods",
                image: "/Regional_Expertise/card_4_proven_methods.png",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-center shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                {/* Image + centered icon */}
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-navy/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/25" aria-hidden />
                  <div className="absolute inset-0 flex items-center justify-center p-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/25 shadow-lg backdrop-blur-sm transition-colors group-hover:bg-white/35 md:h-16 md:w-16">
                      <Icon
                        name={item.icon}
                        className="text-white"
                        size={26}
                      />
                    </div>
                  </div>
                </div>
                {/* Label below image */}
                <div className="border-t border-gray-100 bg-white px-4 py-4">
                  <span className="text-sm font-semibold text-navy md:text-base">
                    {item.label}
                  </span>
                </div>
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
