"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, FileText, Filter } from "lucide-react";
import { PageHeader, Section } from "@/components/layout";
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
      <PageHeader
        title={knowledgeContent.hero.title}
        subtitle={knowledgeContent.hero.subtitle}
        description={knowledgeContent.hero.description}
      />

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
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-gold/20 bg-gradient-to-br from-gold/5 to-transparent">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                      <FileText className="text-gold h-6 w-6" />
                    </div>
                    <Badge variant="gold">{resource.format}</Badge>
                  </div>
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
                    className="w-full group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-colors"
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
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <FileText className="text-navy group-hover:text-gold h-5 w-5 transition-colors" />
                    </div>
                    <Badge variant="secondary">{resource.format}</Badge>
                  </div>
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
      <Section variant="gray">
        <div className="max-w-2xl mx-auto text-center">
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
