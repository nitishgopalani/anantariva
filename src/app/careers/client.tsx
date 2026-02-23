"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { PageHeader, Section, SectionHeader } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Icon, FeatureCard, CTASection } from "@/components/shared";
import { careersContent } from "@/content";

const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please enter your years of experience"),
  linkedin: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export function CareersPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    const mailtoLink = `mailto:${careersContent.apply.email}?subject=Application: ${data.position}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "N/A"}\nPosition: ${data.position}\nExperience: ${data.experience} years\nLinkedIn: ${data.linkedin || "N/A"}\n\nCover Letter:\n${data.coverLetter}`
    )}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      <PageHeader
        title={careersContent.hero.title}
        subtitle={careersContent.hero.subtitle}
        description={careersContent.hero.description}
      />

      {/* Who We Welcome */}
      <Section>
        <SectionHeader
          subtitle={careersContent.whoWeWelcome.subtitle}
          title={careersContent.whoWeWelcome.title}
          description={careersContent.whoWeWelcome.description}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {careersContent.whoWeWelcome.roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 rounded-xl p-5 text-center hover:bg-gray-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors">
                <Icon
                  name={role.icon}
                  className="text-navy group-hover:text-gold transition-colors"
                  size={24}
                />
              </div>
              <h3 className="text-sm font-semibold text-navy mb-1">
                {role.title}
              </h3>
              <p className="text-xs text-gray-500">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Work With Us */}
      <Section variant="gray">
        <SectionHeader
          subtitle={careersContent.whyWorkWithUs.subtitle}
          title={careersContent.whyWorkWithUs.title}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careersContent.whyWorkWithUs.benefits.map((benefit, index) => (
            <FeatureCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              index={index}
              variant="bordered"
            />
          ))}
        </div>
      </Section>

      {/* Current Openings */}
      <Section>
        <SectionHeader
          subtitle={careersContent.currentOpenings.subtitle}
          title={careersContent.currentOpenings.title}
          description={careersContent.currentOpenings.note}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {careersContent.currentOpenings.openings.map((opening, index) => (
            <motion.div
              key={opening.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Briefcase className="text-navy h-6 w-6" />
                    <Badge variant="secondary">{opening.type}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {opening.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4" />
                    {opening.location}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {opening.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Application Form */}
      <Section variant="gray" id="apply">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {careersContent.apply.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {careersContent.apply.description}
            </p>
            <div className="inline-flex items-center gap-2 text-navy font-medium">
              <Mail className="h-5 w-5" />
              <a
                href={`mailto:${careersContent.apply.email}`}
                className="hover:text-gold transition-colors"
              >
                {careersContent.apply.email}
              </a>
            </div>
          </div>

          {isSubmitted ? (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" className="text-emerald" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                  Application Prepared
                </h3>
                <p className="text-gray-600 mb-6">
                  Your email client should have opened with your application
                  details. Please send the email to complete your application.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Submit Another Application
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+91 XXXXX XXXXX"
                        {...register("phone")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position of Interest *</Label>
                      <Select
                        id="position"
                        options={careersContent.formFields.fields
                          .find((f) => f.name === "position")
                          ?.options?.map((o) => ({ value: o, label: o })) || []}
                        placeholder="Select a position"
                        {...register("position")}
                        className={errors.position ? "border-red-500" : ""}
                      />
                      {errors.position && (
                        <p className="text-sm text-red-500">
                          {errors.position.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input
                        id="experience"
                        placeholder="e.g., 5"
                        {...register("experience")}
                        className={errors.experience ? "border-red-500" : ""}
                      />
                      {errors.experience && (
                        <p className="text-sm text-red-500">
                          {errors.experience.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile</Label>
                      <Input
                        id="linkedin"
                        placeholder="https://linkedin.com/in/yourprofile"
                        {...register("linkedin")}
                        className={errors.linkedin ? "border-red-500" : ""}
                      />
                      {errors.linkedin && (
                        <p className="text-sm text-red-500">
                          {errors.linkedin.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter *</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us about yourself, your experience, and why you're interested in joining Anantariva..."
                      rows={6}
                      {...register("coverLetter")}
                      className={errors.coverLetter ? "border-red-500" : ""}
                    />
                    {errors.coverLetter && (
                      <p className="text-sm text-red-500">
                        {errors.coverLetter.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Preparing..." : careersContent.apply.cta}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-gray-500 mt-4">
                      Clicking submit will open your email client with your
                      application details pre-filled.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Questions About Careers?"
        description="Reach out to our team to learn more about working at Anantariva and current opportunities."
        primaryButton={{ text: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
