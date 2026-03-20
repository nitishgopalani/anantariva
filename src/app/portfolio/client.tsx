"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, Calendar, Filter } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/shared";
import { portfolioContent } from "@/content";

export function PortfolioPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioContent.items
      : portfolioContent.items.filter((item) => item.category === activeCategory);

  const featuredItems = portfolioContent.items.filter((item) => item.featured);

  return (
    <>
      <section className="relative bg-navy text-white py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/video/istockphoto-1447915370-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Portfolio background video"
          />
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
            {portfolioContent.hero.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
              >
                {portfolioContent.hero.subtitle}
              </motion.span>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              {portfolioContent.hero.title}
            </motion.h1>

            {portfolioContent.hero.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl"
              >
                {portfolioContent.hero.description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Videos */}
      <Section className="pb-8 md:pb-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-navy mb-2">Featured Content</h2>
          <p className="text-gray-600">
            Highlights from our project documentaries and thought leadership
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {featuredItems.slice(0, 2).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-video overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-label={item.title}
                  >
                    <source src={item.thumbnail} type="video/mp4" />
                    <source src={item.thumbnail.replace(/\.mp4$/i, ".m4b")} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-navy/25" aria-hidden />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="h-8 w-8 text-navy ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-black/70 text-white border-0"
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      {item.duration}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold">{item.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.publishedAt}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Category Filters */}
      <Section variant="gray" className="py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {portfolioContent.categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.value
                    ? "bg-navy text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="h-4 w-4" />
            <span>{filteredItems.length} videos</span>
          </div>
        </div>
      </Section>

      {/* Video Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-label={item.title}
                  >
                    <source src={item.thumbnail} type="video/mp4" />
                    <source src={item.thumbnail.replace(/\.mp4$/i, ".m4b")} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-navy/20" aria-hidden />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-navy ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Badge
                      variant="secondary"
                      className="bg-black/70 text-white border-0 text-xs"
                    >
                      {item.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="font-semibold text-navy text-sm mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {item.publishedAt}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500 mb-2">No videos found</p>
            <p className="text-sm text-gray-400">
              Try selecting a different category
            </p>
          </div>
        )}
      </Section>

      {/* Video Player Notice */}
      <Section variant="gray" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/video/Portfolio/istockphoto-1624779787-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Portfolio video library background"
          />
          <div className="absolute inset-0 bg-navy/65" aria-hidden />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Video Library Coming Soon
          </h2>
          <p className="text-gray-200 mb-6">
            Our video portfolio is being prepared for online viewing. Contact us
            for access to specific project documentation or case study videos.
          </p>
          <p className="text-sm text-white/90 bg-white/10 border border-white/20 rounded-lg p-4">
            {portfolioContent.videoPlayer.note}
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title={portfolioContent.cta.title}
        description={portfolioContent.cta.description}
        primaryButton={{ text: portfolioContent.cta.button, href: "/contact" }}
      />
    </>
  );
}
