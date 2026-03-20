"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Icon } from "@/components/shared";
import { contactContent } from "@/content";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  organization: z.string().min(2, "Organization name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  sector: z.string().min(1, "Please select a sector"),
  service: z.string().min(1, "Please select a service area"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const mailtoLink = `mailto:info@anantariva.com?subject=Inquiry from ${data.organization} - ${data.service}&body=${encodeURIComponent(
      `Name: ${data.name}\nOrganization: ${data.organization}\nEmail: ${data.email}\nPhone: ${data.phone || "N/A"}\nSector: ${data.sector}\nService Required: ${data.service}\n\nMessage:\n${data.message}`
    )}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      <section className="relative bg-navy text-white py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Contact background video"
          >
            <source
              src="/video/istockphoto-2247679581-640_adpp_is.mp4"
              type="video/mp4"
            />
            <source
              src="/video/istockphoto-2247679581-640_adpp_is.m4b"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-navy/70" aria-hidden />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-gold/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-emerald/10 to-transparent" />
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {contactContent.hero.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
              >
                {contactContent.hero.subtitle}
              </motion.span>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              {contactContent.hero.title}
            </motion.h1>

            {contactContent.hero.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl"
              >
                {contactContent.hero.description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <Section>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                {contactContent.form.title}
              </h2>
              <p className="text-gray-600">{contactContent.form.subtitle}</p>
            </div>

            {isSubmitted ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-emerald h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    Message Prepared
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {contactContent.form.successMessage}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {contactContent.form.fields.name.label} *
                        </Label>
                        <Input
                          id="name"
                          placeholder={
                            contactContent.form.fields.name.placeholder
                          }
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
                        <Label htmlFor="organization">
                          {contactContent.form.fields.organization.label} *
                        </Label>
                        <Input
                          id="organization"
                          placeholder={
                            contactContent.form.fields.organization.placeholder
                          }
                          {...register("organization")}
                          className={errors.organization ? "border-red-500" : ""}
                        />
                        {errors.organization && (
                          <p className="text-sm text-red-500">
                            {errors.organization.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {contactContent.form.fields.email.label} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={
                            contactContent.form.fields.email.placeholder
                          }
                          {...register("email")}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          {contactContent.form.fields.phone.label}
                        </Label>
                        <Input
                          id="phone"
                          placeholder={
                            contactContent.form.fields.phone.placeholder
                          }
                          {...register("phone")}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="sector">
                          {contactContent.form.fields.sector.label} *
                        </Label>
                        <Select
                          id="sector"
                          options={contactContent.form.fields.sector.options.map(
                            (o) => ({ value: o, label: o })
                          )}
                          placeholder={
                            contactContent.form.fields.sector.placeholder
                          }
                          {...register("sector")}
                          className={errors.sector ? "border-red-500" : ""}
                        />
                        {errors.sector && (
                          <p className="text-sm text-red-500">
                            {errors.sector.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">
                          {contactContent.form.fields.service.label} *
                        </Label>
                        <Select
                          id="service"
                          options={contactContent.form.fields.service.options.map(
                            (o) => ({ value: o, label: o })
                          )}
                          placeholder={
                            contactContent.form.fields.service.placeholder
                          }
                          {...register("service")}
                          className={errors.service ? "border-red-500" : ""}
                        />
                        {errors.service && (
                          <p className="text-sm text-red-500">
                            {errors.service.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {contactContent.form.fields.message.label} *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={
                          contactContent.form.fields.message.placeholder
                        }
                        rows={5}
                        {...register("message")}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">
                          {errors.message.message}
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
                        {isSubmitting
                          ? "Preparing..."
                          : contactContent.form.submitButton}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                      <p className="text-xs text-gray-500 mt-4">
                        Clicking submit will open your email client with your
                        message pre-filled.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct Contacts */}
            <div>
              <h3 className="text-lg font-semibold text-navy mb-4">
                {contactContent.contacts.title}
              </h3>
              <div className="space-y-4">
                {contactContent.contacts.items.map((contact) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} className="text-navy" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy text-sm">
                        {contact.title}
                      </h4>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-gold hover:text-gold-light text-sm font-medium"
                      >
                        {contact.email}
                      </a>
                      <p className="text-xs text-gray-500 mt-1">
                        {contact.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Strategic Engagement */}
            <Card className="bg-navy text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {contactContent.strategicEngagement.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {contactContent.strategicEngagement.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-navy"
                  asChild
                >
                  <a href="mailto:investors@anantariva.com">
                    {contactContent.strategicEngagement.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="bg-gold/10 border border-gold/20 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">
                {contactContent.responseTime.title}
              </h4>
              <p className="text-sm text-gray-600">
                {contactContent.responseTime.description}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
