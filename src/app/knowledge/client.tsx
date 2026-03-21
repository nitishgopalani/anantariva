"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, FileText, Filter } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon, CTASection } from "@/components/shared";
import { knowledgeContent, type ResourceCategory } from "@/content";

export function KnowledgePageClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = knowledgeContent.resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "all" || resource.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredResources = knowledgeContent.resources.filter((r) => r.featured);

  return (
    <>
      <section className="relative bg-navy text-white py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/video/istockphoto-1455157631-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Knowledge repository background video"
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
              {knowledgeContent.hero.subtitle}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              {knowledgeContent.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl"
            >
              {knowledgeContent.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <Section className="pb-8 md:pb-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-navy mb-2">Featured Resources</h2>
          <p className="text-gray-600">Our most popular and recommended publications</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border border-gold/20 p-0 transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-navy/10">
                  {resource.image && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={resource.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-navy/30" aria-hidden />
                    </>
                  )}
                  <div className="absolute left-4 top-4 z-10 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <FileText className="text-white h-6 w-6" />
                  </div>
                  <div className="absolute right-4 top-4 z-10">
                    <Badge variant="gold">{resource.format}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 border-t border-gray-100 bg-white">
                  <Badge variant="outline" className="mb-3">
                    {resource.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    disabled
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Search and Filter */}
      <Section variant="gray" className="py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="h-4 w-4" />
            <span>{filteredResources.length} resources found</span>
          </div>
        </div>
      </Section>

      {/* Category Filters */}
      <Section className="py-0 pt-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {knowledgeContent.categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? "bg-navy text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Icon name={category.icon} size={16} />
              {category.name}
            </button>
          ))}
        </div>
      </Section>

      {/* Resources Grid */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="group h-full overflow-hidden border border-gray-200 p-0 transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-navy/10">
                  {resource.image && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={resource.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-navy/25" aria-hidden />
                    </>
                  )}
                  <div className="absolute left-3 top-3 z-10 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FileText className="text-white h-5 w-5" />
                  </div>
                  <div className="absolute right-3 top-3 z-10">
                    <Badge variant="secondary">{resource.format}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 border-t border-gray-100 bg-white">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {resource.category}
                  </Badge>
                  <h3 className="font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {resource.publishedAt}
                    </span>
                    <Button variant="ghost" size="sm" disabled>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500 mb-2">No resources found</p>
            <p className="text-sm text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </Section>

      {/* Gated Download Notice */}
      <Section variant="gray" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/Knowledge%20Repository/Access%20Our%20Resources.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Access resources background video"
          />
          <div className="absolute inset-0 bg-white/75" aria-hidden />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Download className="h-8 w-8 text-navy" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            {knowledgeContent.gatedDownload.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {knowledgeContent.gatedDownload.description}
          </p>
          <p className="text-sm text-gray-500 bg-gold/10 border border-gold/20 rounded-lg p-4">
            {knowledgeContent.gatedDownload.note}
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title={knowledgeContent.cta.title}
        description={knowledgeContent.cta.description}
        primaryButton={{ text: knowledgeContent.cta.button, href: "/contact" }}
      />
    </>
  );
}
