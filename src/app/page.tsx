"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroEmailSignup from '@/components/sections/hero/HeroEmailSignup';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardFourteen from '@/components/sections/feature/FeatureCardFourteen';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { CheckCircle, HelpCircle, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeExtraSmallSpacing"
      background="grid"
      cardStyle="floating"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="MarketFlow"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroEmailSignup
          title="Transform Your Marketing Strategy"
          description="Join hundreds of businesses that have revolutionized their growth with our cutting-edge marketing solutions. Capture leads and drive conversions today."
          tag="Marketing Excellence"
          tagIcon={Sparkles}
          inputPlaceholder="Enter your business email"
          buttonText="Start Free Trial"
          onSubmit={(email) => console.log('Email:', email)}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="About MarketFlow"
          title="Empowering Brands to Reach Their Potential"
          description="We combine strategic insights with creative excellence to deliver marketing solutions that drive measurable results. Our team of experts works tirelessly to understand your business goals and exceed expectations."
          textboxLayout="default"
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796664952-p98apddd.jpg",
            imageAlt: "MarketFlow dashboard showing campaign analytics"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796666054-gh08crj8.jpg",
            imageAlt: "Real-time performance metrics interface"
          }}
          useInvertedBackground="noInvert"
          buttons={[{ text: "Learn Our Story", href: "#" }]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardFourteen
          title="Our Core Services"
          description="Comprehensive marketing solutions tailored to your business needs"
          tag="Services"
          tagIcon={Zap}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: "1",
              title: "Digital Campaign Strategy",
              description: "Data-driven campaigns that maximize ROI and engagement across all digital channels",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796666910-cecj916l.jpg",
              imageAlt: "Digital marketing campaign planning"
            },
            {
              id: "2",
              title: "Social Media Management",
              description: "Creative content strategy and community management to build brand loyalty",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796667547-fy43lucq.jpg",
              imageAlt: "Social media content creation"
            },
            {
              id: "3",
              title: "Analytics & Optimization",
              description: "Detailed performance tracking and continuous optimization for sustained growth",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796668305-umoaqtd9.jpg",
              imageAlt: "Analytics dashboard with metrics"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="MarketFlow transformed our digital presence. Their strategic approach and creative execution resulted in a 300% increase in qualified leads within six months. Highly recommended."
          rating={5}
          author="Sarah Chen, CEO of TechStart"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796668884-3b5e1qvl.jpg",
              alt: "Sarah Chen"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796669809-4a9ycrk2.jpg",
              alt: "Client testimonial"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796670786-233ztsyg.jpg",
              alt: "Client feedback"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796671477-02ggfgax.jpg",
              alt: "Success story"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Trusted by Industry Leaders"
          description="Join the world's most innovative companies that rely on our marketing expertise"
          tag="Trusted Partners"
          tagIcon={CheckCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796672118-mbhwbkfy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796672734-8o3zg1zy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796673569-xef411xu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796674341-alf3r39o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796674928-f44tz44y.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796675537-k9lmsh2j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796676283-36kcqsll.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796677157-l64b72nr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796677819-m2jnxyct.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our marketing services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "How quickly will I see results?",
              content: "Most clients see measurable results within 4-6 weeks. However, this depends on your industry, goals, and existing market position. We provide detailed progress reports every month."
            },
            {
              id: "2",
              title: "What's included in your service packages?",
              content: "Our packages include strategy development, content creation, campaign management, analytics reporting, and monthly optimization. Custom packages are available based on your needs."
            },
            {
              id: "3",
              title: "Do you work with small businesses?",
              content: "Yes! We work with businesses of all sizes. We have flexible packages designed specifically for startups and small businesses looking to grow their online presence."
            },
            {
              id: "4",
              title: "How do you measure campaign success?",
              content: "We track KPIs including lead generation, conversion rates, ROI, engagement metrics, and brand awareness. Custom dashboards provide real-time visibility into campaign performance."
            },
            {
              id: "5",
              title: "Can I cancel or modify my package?",
              content: "Absolutely. We believe in flexibility. You can upgrade, downgrade, or cancel your service with 30 days notice. No hidden fees or long-term contracts."
            },
            {
              id: "6",
              title: "What industries do you specialize in?",
              content: "We have expertise across e-commerce, SaaS, B2B services, healthcare, finance, and consumer brands. Our strategies are customized for your specific industry challenges."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Grow Your Business?"
          description="Contact us today for a free consultation. Let's discuss your marketing goals and create a winning strategy together."
          useInvertedBackground="noInvert"
          buttonText="Send Message"
          inputs={[
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your marketing challenges and goals...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765796678713-dueqy6ir.jpg"
          imageAlt="MarketFlow team collaboration"
          logoText="MarketFlow"
          copyrightText="© 2025 MarketFlow. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Digital Strategy", href: "#services" },
                { label: "Social Media", href: "#services" },
                { label: "Analytics", href: "#services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
                { label: "Blog", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}