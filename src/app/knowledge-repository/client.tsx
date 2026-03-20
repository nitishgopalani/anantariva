"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Filter } from "lucide-react";
import { PageHeader, Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon, CTASection } from "@/components/shared";
import { knowledgeContent, type ResourceCategory } from "@/content";

export function KnowledgePageClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredResources =
    activeCategory === "all"
      ? knowledgeContent.resources
      : knowledgeContent.resources.filter(
          (resource) => resource.category === activeCategory
        );

  const featuredResources = knowledgeContent.resources.filter((r) => r.featured);

  return (
    <>
      <PageHeader
        title={knowledgeContent.hero.title}
        subtitle={knowledgeContent.hero.subtitle}
        description={knowledgeContent.hero.description}
      />

      {/* Featured Resources */}
      <Section className="pb-8">
        <div className="mb-8">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">
            Featured Resources
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-gold/20 bg-gradient-to-br from-white to-gold/5">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                      <FileText className="text-gold h-6 w-6" />
                    </div>
                    <Badge variant="gold">{resource.format}</Badge>
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {resource.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {resource.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-gold group-hover:text-navy group-hover:border-gold transition-colors"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Category Filters */}
      <Section variant="gray" className="py-8">
        <div className="flex flex-wrap justify-center gap-2">
          {knowledgeContent.categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? "bg-navy text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <Icon name={category.icon} size={16} />
              {category.name}
            </button>
          ))}
        </div>
      </Section>

      {/* All Resources */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <FileText className="text-navy group-hover:text-gold h-5 w-5 transition-colors" />
                    </div>
                    <Badge variant="outline">{resource.format}</Badge>
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {resource.category}
                  </Badge>
                  <h3 className="font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No resources found in this category.</p>
          </div>
        )}
      </Section>

      {/* Download Note */}
      <Section variant="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-navy mb-4">Coming Soon</h3>
          <p className="text-gray-600 mb-6">
            {knowledgeContent.gatedDownload.note}
          </p>
          <Button variant="default" asChild>
            <a href="mailto:info@anantariva.com">Request Resources</a>
          </Button>
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
