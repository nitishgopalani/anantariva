"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { insightsContent, type InsightCategory } from "@/content";

export function InsightsPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts =
    activeCategory === "all"
      ? insightsContent.posts
      : insightsContent.posts.filter(
          (post) => post.category === activeCategory
        );

  const featuredPost = insightsContent.posts[0];

  return (
    <>
      <section className="relative bg-navy text-white py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/video/istockphoto-2252926696-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Insights background video"
          />
          <div className="absolute inset-0 bg-navy/70" aria-hidden />
        </div>

        {/* Background Pattern */}
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
            {insightsContent.hero.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
              >
                {insightsContent.hero.subtitle}
              </motion.span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              {insightsContent.hero.title}
            </motion.h1>
            {insightsContent.hero.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl"
              >
                {insightsContent.hero.description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <Section className="pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={`/insights/${featuredPost.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-0 lg:items-stretch">
                <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] lg:h-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <picture className="absolute inset-0 block h-full w-full">
                    <source
                      srcSet="/Navigating%20India%27s/istockphoto-685936068-1024x1024.jpg"
                      type="image/jpeg"
                    />
                    <source
                      srcSet="/Navigating%20India%27s/istockphoto-685936068-1024x1024.png"
                      type="image/png"
                    />
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="absolute inset-0 h-full w-full min-h-full object-cover object-center"
                      loading="eager"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-navy/20" aria-hidden />
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-10 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" }
                      )}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readingTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center text-navy font-medium group-hover:text-gold transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </div>
            </Card>
          </Link>
        </motion.div>
      </Section>

      {/* Category Filters */}
      <Section className="py-0">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {insightsContent.categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? "bg-navy text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </Section>

      {/* Posts Grid */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/insights/${post.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-400">
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No articles found in this category.
            </p>
          </div>
        )}
      </Section>

      {/* Newsletter CTA */}
      <Section variant="gray" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/Insights/Stay%20Informed.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Stay informed background video"
          />
          <div className="absolute inset-0 bg-white/75" aria-hidden />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Stay Informed
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive our latest insights on sustainability,
            compliance, and responsible business practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <Button variant="default">Subscribe</Button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Newsletter subscription coming soon.
          </p>
        </div>
      </Section>
    </>
  );
}
