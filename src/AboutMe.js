import React from "react";
import { Calendar, Clock } from "lucide-react";
import TransitionWrapper from "./component/TransitionWrapper";

const backgroundGlyphs = [
  { glyph: "[]", top: "8%", left: "10%", delay: "0.2s", duration: "20s" },
  { glyph: "{}", top: "40%", left: "85%", delay: "1s", duration: "18s" },
  { glyph: "()", top: "65%", left: "5%", delay: "0.5s", duration: "22s" },
  { glyph: "[]", top: "25%", left: "60%", delay: "1.4s", duration: "16s" },
  { glyph: "{}", top: "75%", left: "70%", delay: "0.8s", duration: "24s" },
  { glyph: "()", top: "50%", left: "30%", delay: "1.1s", duration: "19s" },
];

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices and patterns for building React applications that can grow from MVP to enterprise scale.",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Best Practices"],
  },
  {
    title: "The Product Engineer's Mindset",
    excerpt:
      "What makes a product engineer different from a traditional software engineer? Exploring the intersection of product thinking and technical execution.",
    date: "March 8, 2024",
    readTime: "6 min read",
    tags: ["Product", "Career", "Engineering"],
  },
  {
    title: "Optimizing Database Queries at Scale",
    excerpt:
      "Lessons learned from optimizing database performance for applications serving millions of requests per day.",
    date: "February 28, 2024",
    readTime: "10 min read",
    tags: ["Database", "Performance", "PostgreSQL"],
  },
  {
    title: "From Design to Code: Bridging the Gap",
    excerpt:
      "How to work effectively with designers and translate beautiful designs into pixel-perfect implementations.",
    date: "February 20, 2024",
    readTime: "7 min read",
    tags: ["Design", "Frontend", "Collaboration"],
  },
  {
    title: "TypeScript Tips for Production Apps",
    excerpt:
      "Advanced TypeScript patterns and configurations that have improved code quality in production applications.",
    date: "February 12, 2024",
    readTime: "9 min read",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    title: "Building Real-Time Features with WebSockets",
    excerpt:
      "A practical guide to implementing real-time collaboration features using WebSockets and modern frameworks.",
    date: "February 5, 2024",
    readTime: "12 min read",
    tags: ["WebSocket", "Real-time", "Backend"],
  },
];

const Blog = () => {
  const handlePostClick = (post) => {
    // Handle post click - you can navigate to a detailed post page or open a modal
    console.log("Post clicked:", post.title);
    // You can add navigation logic here if you have individual post pages
  };

  const handleKeyDown = (event, post) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handlePostClick(post);
    }
  };

  return (
    <TransitionWrapper>
      <section className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-900 text-brand-navy dark:text-slate-100 transition-colors duration-300">
        <div className="pointer-events-none absolute inset-0 z-0">
          {backgroundGlyphs.map(({ glyph, top, left, delay, duration }) => (
            <span
              key={`${glyph}-${top}-${left}`}
              aria-hidden="true"
              style={{
                top,
                left,
                animationDelay: delay,
                animationDuration: duration,
              }}
              className="absolute text-4xl sm:text-6xl md:text-8xl font-semibold text-slate-200/60 dark:text-slate-700/40 opacity-40 blur-[0.2px] motion-safe:animate-spin"
            >
              {glyph}
            </span>
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20 min-h-screen">
          <div className="max-w-4xl mx-auto w-full">
            <div className="mb-8 sm:mb-12 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 font-display scroll-mt-14 sm:scroll-mt-24">
                Blog
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Thoughts on product engineering, technical leadership, and
                building great software.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  onClick={() => handlePostClick(post)}
                  onKeyDown={(e) => handleKeyDown(e, post)}
                  className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer p-4 sm:p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Read blog post: ${post.title}`}
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100 hover:text-brand-teal dark:hover:text-teal-400 transition-colors mb-2 font-display">
                    {post.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 sm:mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default Blog;
