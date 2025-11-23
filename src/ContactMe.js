import React from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import TransitionWrapper from "./component/TransitionWrapper";

const backgroundGlyphs = [
  { glyph: "[]", top: "8%", left: "10%", delay: "0.2s", duration: "20s" },
  { glyph: "{}", top: "40%", left: "85%", delay: "1s", duration: "18s" },
  { glyph: "()", top: "65%", left: "5%", delay: "0.5s", duration: "22s" },
  { glyph: "[]", top: "25%", left: "60%", delay: "1.4s", duration: "16s" },
  { glyph: "{}", top: "75%", left: "70%", delay: "0.8s", duration: "24s" },
  { glyph: "()", top: "50%", left: "30%", delay: "1.1s", duration: "19s" },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    console.log("Form data:", data);
    // You can add your form submission logic here (e.g., send to API, email service, etc.)
    alert("Thank you for your message! I'll get back to you soon.");
    e.target.reset();
  };

  const handleKeyDown = (event, url) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <TransitionWrapper>
      <section className="relative min-h-screen overflow-hidden bg-white text-brand-navy">
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
              className="absolute text-4xl sm:text-6xl md:text-8xl font-semibold text-slate-200/60 opacity-40 blur-[0.2px] motion-safe:animate-spin"
            >
              {glyph}
            </span>
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20 min-h-screen">
          <div className="max-w-4xl mx-auto w-full">
            <div className="mb-8 sm:mb-12 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 font-display scroll-mt-14 sm:scroll-mt-24">
                Get in Touch
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
                Let's discuss your next project or potential collaboration
                opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 animate-slide-up">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 font-display">
                  Send a Message
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
                  Fill out the form and I'll get back to you within 24 hours.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-4"
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs sm:text-sm font-medium text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-colors min-h-[44px]"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs sm:text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-colors min-h-[44px]"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs sm:text-sm font-medium text-slate-700"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-colors min-h-[44px]"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs sm:text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-colors resize-vertical"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-teal text-white py-3 px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-teal-600 transition-colors focus-ring min-h-[44px]"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div
                  className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 animate-slide-up"
                  style={{ animationDelay: "100ms" }}
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 font-display">
                    Contact Information
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                    Prefer to reach out directly? Here are other ways to
                    connect.
                  </p>
                  <a
                    href="mailto:arshnoorsinghkairon@gmail.com"
                    className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-slate-600 hover:text-brand-teal transition-colors focus-ring rounded p-2 min-h-[44px]"
                    aria-label="Send email"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      handleKeyDown(e, "mailto:arshnoorsinghkairon@gmail.com")
                    }
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="break-all">
                      arshnoorsinghkairon@gmail.com
                    </span>
                  </a>
                </div>

                <div
                  className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 animate-slide-up"
                  style={{ animationDelay: "200ms" }}
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 font-display">
                    Social Links
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                    Connect with me on social media platforms.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <a
                      href="https://www.linkedin.com/in/arshnoor-singh-82559b229/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-slate-600 hover:text-brand-teal transition-colors focus-ring rounded p-2 min-h-[44px]"
                      aria-label="Visit LinkedIn profile"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        handleKeyDown(
                          e,
                          "https://www.linkedin.com/in/arshnoor-singh-82559b229/"
                        )
                      }
                    >
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/Arshnoor19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-slate-600 hover:text-brand-teal transition-colors focus-ring rounded p-2 min-h-[44px]"
                      aria-label="Visit GitHub profile"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        handleKeyDown(e, "https://github.com/Arshnoor19")
                      }
                    >
                      <Github className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://x.com/10_kairon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-slate-600 hover:text-brand-teal transition-colors focus-ring rounded p-2 min-h-[44px]"
                      aria-label="Visit Twitter profile"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        handleKeyDown(e, "https://x.com/10_kairon")
                      }
                    >
                      <Twitter className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default Contact;
