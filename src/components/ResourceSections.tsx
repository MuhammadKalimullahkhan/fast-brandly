import { motion } from "framer-motion";
import AIMarketingImage from "../assets/images/ai-marketing.jpg";
import BlogImage from "../assets/images/blog.jpg";
import CaseStudyImage from "../assets/images/case-study.jpg";
import { AIMarketingCard, BlogCard, CaseStudyCard } from "./ResourceCard";
import SectionHeading from "./SectionHeading";
import SubHeading from "./SubHeading";

interface ImageContentGridProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  imageOrder?: "first" | "last";
}

const ImageContentGrid: React.FC<ImageContentGridProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  imageOrder = "first",
}) => (
  <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
    {imageOrder === "first" ? (
      <>
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto rounded-lg"
        />
        <div className="mt-6 md:mt-0">
          <SectionHeading size="sm" align="left">
            {title}
          </SectionHeading>
          <SubHeading>{description}</SubHeading>
        </div>
      </>
    ) : (
      <>
        <div className="order-2 md:order-1 mt-6 md:mt-0">
          <SectionHeading size="sm" align="left">
            {title}
          </SectionHeading>
          <SubHeading>{description}</SubHeading>
        </div>
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={imageSrc}
          alt={imageAlt}
          className="order-1 md:order-2 w-full h-auto rounded-lg"
        />
      </>
    )}
  </div>
);

interface ResourceSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOrder?: "first" | "last";
  cards: React.ReactNode;
  className?: string;
}

const ResourceSection: React.FC<ResourceSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageOrder = "first",
  cards,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.85 }}
    viewport={{ once: true }}
    className={`space-y-8 bg-gradient-to-b from-gray-50 to-white ${className} p-4 lg:p-8 rounded-lg`}
  >
    <ImageContentGrid
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      title={title}
      description={description}
      imageOrder={imageOrder}
    />
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {cards}
    </div>
  </motion.div>
);

export const BlogSection = () => (
  <ResourceSection
    title="1. Blog"
    description="Our blog is packed with articles that cover a wide range of topics related to social media advertising. From the basics of ad creation to advanced targeting techniques, each post is designed to offer practical tips and strategies you can apply to your campaigns."
    imageSrc={BlogImage}
    imageAlt="Blog"
    className="mb-16 sm:mb-20"
    cards={
      <>
        <BlogCard
          title="Ad Creation Tips"
          description="Learn how to create visually appealing and engaging ads that capture attention."
        />
        <BlogCard
          title="Targeting Techniques"
          description="Discover effective methods for reaching the right audience and maximizing engagement."
        />
        <BlogCard
          title="Industry Trends"
          description="Stay informed on the latest trends in digital marketing and social media advertising."
        />
        <BlogCard
          title="AI in Advertising"
          description="Find out how AI technology is transforming the world of advertising and how you can leverage it."
        />
      </>
    }
  />
);

export const CaseStudiesSection = () => (
  <ResourceSection
    title="2. Case Studies"
    description="Our case studies offer real-world examples of how businesses have achieved success using Sample.com. These detailed reports showcase the strategies, tools, and approaches that led to positive outcomes for a variety of brands and industries."
    imageSrc={CaseStudyImage}
    imageAlt="Case Studies"
    imageOrder="last"
    className="mb-16 sm:mb-20"
    cards={
      <>
        <CaseStudyCard
          title="Client Success Stories"
          description="See how our platform has helped clients meet their social media advertising goals."
        />
        <CaseStudyCard
          title="Campaign Strategies"
          description="Understand the specific tactics that contributed to high engagement, conversions, and ROI."
        />
        <CaseStudyCard
          title="Lessons Learned"
          description="Gain insights from each case study that you can apply to your own advertising efforts."
        />
      </>
    }
  />
);

export const AIMarketingSection = () => (
  <ResourceSection
    title="3. AI Marketing Insights"
    description="As a leader in AI-powered advertising, Sample.com continuously analyzes data and industry trends to provide cutting-edge marketing insights. Our AI Marketing Insights section shares the latest findings, helping you stay ahead of the competition and refine your marketing strategy."
    imageSrc={AIMarketingImage}
    imageAlt="AI Marketing Insights"
    cards={
      <>
        <AIMarketingCard
          title="Audience Behavior Trends"
          description="Discover emerging trends in audience behaviors and preferences that impact ad performance."
        />
        <AIMarketingCard
          title="Data-Driven Recommendations"
          description="Access insights generated by our AI, offering practical suggestions to improve ad effectiveness."
        />
        <AIMarketingCard
          title="Platform-Specific Insights"
          description="Learn about platform-specific trends to optimize your campaigns on Facebook, Instagram, LinkedIn, and more."
        />
      </>
    }
  />
);
