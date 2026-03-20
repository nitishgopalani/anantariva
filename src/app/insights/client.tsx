"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { PageHeader, Section } from "@/components/layout";
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
      <PageHeader
        title={insightsContent.hero.title}
        subtitle={insightsContent.hero.subtitle}
        description={insightsContent.hero.description}
      />

      {/* Featured Post */}
      <Section className="pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={`/insights/${featuredPost.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-navy/10 to-gold/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Badge variant="gold" className="mb-4">
                      Featured
                    </Badge>
                    <div className="w-20 h-20 bg-navy/10 rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-4xl font-serif text-navy/30">A</span>
                    </div>
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
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-navy/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-serif text-navy/30">A</span>
                    </div>
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
      <Section variant="gray">
        <div className="max-w-2xl mx-auto text-center">
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
