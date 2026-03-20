"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { InsightPost } from "@/content";

interface InsightDetailClientProps {
  post: InsightPost;
  relatedPosts: InsightPost[];
}

export function InsightDetailClient({
  post,
  relatedPosts,
}: InsightDetailClientProps) {
  return (
    <>
      {/* Article Header */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link
              href="/insights"
              className="inline-flex items-center text-gray-300 hover:text-gold text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>
            <Badge variant="gold" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-white">{post.author.name}</p>
                  <p className="text-xs text-gray-400">{post.author.role}</p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-8 bg-white/20" />
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <Section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-navy prose-a:no-underline hover:prose-a:text-gold prose-strong:text-navy prose-ul:text-gray-600 prose-li:marker:text-gold"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# ")) {
                      return `<h1>${line.slice(2)}</h1>`;
                    }
                    if (line.startsWith("## ")) {
                      return `<h2>${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith("### ")) {
                      return `<h3>${line.slice(4)}</h3>`;
                    }
                    if (line.startsWith("- **")) {
                      const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
                      if (match) {
                        return `<li><strong>${match[1]}</strong>: ${match[2]}</li>`;
                      }
                    }
                    if (line.startsWith("- ")) {
                      return `<li>${line.slice(2)}</li>`;
                    }
                    if (line.trim() === "") {
                      return "";
                    }
                    return `<p>${line}</p>`;
                  })
                  .join("\n"),
              }}
            />
          </motion.article>

          {/* Share & Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Topics:</span>
                <Badge variant="secondary">{post.category}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Share:</span>
                <Button variant="ghost" size="sm">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm">
                  Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section variant="gray">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Related Articles
            </h2>
            <p className="text-gray-600">Continue exploring our insights</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/insights/${relatedPost.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <span className="inline-flex items-center text-sm text-navy font-medium group-hover:text-gold transition-colors">
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Want to Discuss This Topic?
          </h2>
          <p className="text-gray-600 mb-8">
            Our experts are available to explore how these insights apply to
            your organization.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
