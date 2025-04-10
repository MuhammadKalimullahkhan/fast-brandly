import {
  BookOpenIcon,
  ChartBarIcon,
  ChartBarSquareIcon,
  ChartPieIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  LightBulbIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import SubHeading from "../components/SubHeading";
import ScrollToSection from "../utils";

// images
import AIMarketingImage from "../assets/images/ai-marketing.jpg";
import BlogImage from "../assets/images/blog.jpg";
import CaseStudyImage from "../assets/images/case-study.jpg";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ResourceCard: React.FC<CardProps> = ({ icon, title, description }) => {
  // const controls = useAnimation();

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2,
      },
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 0.85,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: false, margin: "-50px" }}
      variants={cardVariants}
      className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300 flex items-start"
    >
      <motion.div
        variants={iconVariants}
        className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
      >
        {icon}
      </motion.div>
      <motion.div
        className="ml-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="font-semibold text-lg mb-4">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const BlogCard: React.FC<Omit<CardProps, "icon">> = ({
  title,
  description,
}) => {
  const icons = {
    "Ad Creation Tips": <LightBulbIcon className="w-6 h-6 text-blue-700" />,
    "Targeting Techniques": <UserGroupIcon className="w-6 h-6 text-blue-700" />,
    "Industry Trends": <ChartBarIcon className="w-6 h-6 text-blue-700" />,
    "AI in Advertising": <SparklesIcon className="w-6 h-6 text-blue-700" />,
  };

  return (
    <ResourceCard
      icon={icons[title as keyof typeof icons]}
      title={title}
      description={description}
    />
  );
};

const CaseStudyCard: React.FC<Omit<CardProps, "icon">> = ({
  title,
  description,
}) => {
  const icons = {
    "Client Success Stories": (
      <BookOpenIcon className="w-6 h-6 text-blue-700" />
    ),
    "Campaign Strategies": (
      <DocumentTextIcon className="w-6 h-6 text-blue-700" />
    ),
    "Lessons Learned": <ChartPieIcon className="w-6 h-6 text-blue-700" />,
  };

  return (
    <ResourceCard
      icon={icons[title as keyof typeof icons]}
      title={title}
      description={description}
    />
  );
};

const AIMarketingCard: React.FC<Omit<CardProps, "icon">> = ({
  title,
  description,
}) => {
  const icons = {
    "Audience Behavior Trends": (
      <ChartBarSquareIcon className="w-6 h-6 text-blue-700" />
    ),
    "Data-Driven Recommendations": (
      <ComputerDesktopIcon className="w-6 h-6 text-blue-700" />
    ),
    "Platform-Specific Insights": (
      <ChartBarIcon className="w-6 h-6 text-blue-700" />
    ),
  };

  return (
    <ResourceCard
      icon={icons[title as keyof typeof icons]}
      title={title}
      description={description}
    />
  );
};

export default function ResourcesOverview() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-white text-gray-900"
    >
      {/* Hero Section */}
      <motion.section
        variants={fadeInUp}
        transition={{ duration: 0.85 }}
        className="hero__section h-screen flex flex-col justify-center items-center lg:items-start py-20 text-white text-center lg:text-left px-4 lg:px-32 relative"
      >
        <div className="hero__section-overlay absolute inset-0 bg-black/50 z-0"></div>

        {/* Rotating Sphere */}
        <motion.div
          className="hero__sphere absolute right-32 z-10 opacity-50 rounded-full shadow-blue-400"
          animate={{
            rotateY: 360,
            rotateX: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: "400px",
            height: "400px",
            backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(4) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(240,6.7%,17.6%,1)'/><path d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'  stroke-width='0.5' stroke='hsla(47,80.9%,61%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
          }}
        >
          <div
            className="w-full h-full bg-blue-400 opacity-50 shadow-lg rounded-full"
            style={{ filter: "blur(2px)" }}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.85 }}
          className="relative z-10"
        >
          <SectionHeading
            variant="secondary"
            size="lg"
            align="left"
            className="text-white max-w-2xl"
          >
            Welcome to the Resources Overview Page for Sample.com
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.85 }}
            className="max-w-3xl mx-auto text-lg mb-8"
          >
            Here, you'll find a wealth of information and tools designed to help
            you get the most out of your social media advertising. Whether
            you're new to digital marketing or an experienced professional, our
            resources are here to guide you through every stage of the ad
            creation and optimization process.From blogs and case studies to AI
            marketing insights, we provide valuable content to keep you
            informed, inspired, and ready to achieve your advertising goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.85 }}
          >
            <Button
              variant="primary"
              onClick={() => ScrollToSection("#why-explore-resources")}
            >
              Explore Resources
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Explore Resources */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true }}
        id="why-explore-resources"
        className="py-16 px-4 max-w-5xl mx-auto"
      >
        <SectionHeading>Why Explore Sample.com's Resources?</SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
          className="mb-6 text-lg text-center"
        >
          <motion.div
            animate={{ height: isExpanded ? "auto" : "60px" }}
            className={`inline-block overflow-hidden transition-all duration-300`}
          >
            <p>
              Social media advertising is an ever-evolving field, and staying
              up-to-date on the latest trends, strategies, and tools can be
              challenging. That's where our resources come in. Sample.com's
              library of resources provides actionable insights, best practices,
              and expert advice to help you create effective campaigns, optimize
              ad performance, and make data-driven decisions. By exploring these
              resources, you'll gain a deeper understanding of the tools and
              techniques that make social media advertising successful.
            </p>
          </motion.div>
          <Button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </motion.div>
      </motion.section>

      {/* Resource Categories */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-16 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeading className="mb-12">
            What You'll Find in Our Resources Section
          </SectionHeading>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="text-lg text-center mb-16"
          >
            <p className="max-w-3xl mx-auto">
              Our Resources Overview page includes several key areas to explore,
              each tailored to provide you with unique insights and support for
              your campaigns.
            </p>
          </motion.div>

          {/* Blog Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mb-20 space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={BlogImage}
                alt="Blog"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-6 md:mt-0">
                <SectionHeading size="sm" align="left">
                  1. Blog
                </SectionHeading>
                <SubHeading>
                  Our blog is packed with articles that cover a wide range of
                  topics related to social media advertising. From the basics of
                  ad creation to advanced targeting techniques, each post is
                  designed to offer practical tips and strategies you can apply
                  to your campaigns.
                </SubHeading>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
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
            </div>
          </motion.div>

          {/* Case Studies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mb-20 space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="mt-6 md:mt-0">
                <SectionHeading size="sm" align="left">
                  2. Case Studies
                </SectionHeading>
                <SubHeading>
                  Our case studies offer real-world examples of how businesses
                  have achieved success using Sample.com. These detailed reports
                  showcase the strategies, tools, and approaches that led to
                  positive outcomes for a variety of brands and industries.
                </SubHeading>
              </div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={CaseStudyImage}
                alt="Case Studies"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
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
            </div>
          </motion.div>

          {/* AI Marketing Insights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={AIMarketingImage}
                alt="AI Marketing Insights"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-6 md:mt-0">
                <SectionHeading size="sm" align="left">
                  3. AI Marketing Insights
                </SectionHeading>
                <SubHeading>
                  As a leader in AI-powered advertising, Sample.com continuously
                  analyzes data and industry trends to provide cutting-edge
                  marketing insights. Our AI Marketing Insights section shares
                  the latest findings, helping you stay ahead of the competition
                  and refine your marketing strategy.
                </SubHeading>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
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
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* How to Use Resources */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true }}
        className="py-16 px-4 max-w-5xl mx-auto"
      >
        <SectionHeading size="md">
          How to Use Sample.com's Resources to Enhance Your Campaigns
        </SectionHeading>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="list-disc pl-5 space-y-2"
        >
          <motion.li variants={fadeInUp}>
            Stay Informed: Keep up with the latest blog posts and insights to
            adapt your campaigns and stay relevant.
          </motion.li>
          <motion.li variants={fadeInUp}>
            Learn from Success Stories: Apply strategies and techniques that
            have worked for others.
          </motion.li>
          <motion.li variants={fadeInUp}>
            Apply Data-Driven Strategies: Use AI-generated recommendations to
            refine targeting, messaging, and design.
          </motion.li>
        </motion.ul>
      </motion.section>

      {/* Featured Resources */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-16 px-4"
      >
        <SectionHeading>Featured Resources</SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded shadow"
          >
            <h3 className="text-xl font-semibold mb-2">
              Beginner's Guide to Social Media Advertising
            </h3>
            <p>
              This guide covers the basics of ad creation, audience targeting,
              and performance tracking to help you build a strong foundation.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded shadow"
          >
            <h3 className="text-xl font-semibold mb-2">
              The Power of AI in Advertising: An In-Depth Look
            </h3>
            <p>
              Discover how AI is revolutionizing advertising and how to leverage
              it for better ad performance.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded shadow"
          >
            <h3 className="text-xl font-semibold mb-2">
              Understanding Audience Behavior: A Key to Social Media Success
            </h3>
            <p>
              Explore audience behavior trends and how to create ads that
              resonate with different audience segments.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded shadow"
          >
            <h3 className="text-xl font-semibold mb-2">
              Social Media Advertising Best Practices for 2024
            </h3>
            <p>
              Actionable tips and platform-specific strategies to ensure
              campaign success in 2024.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Invest Time */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true }}
        className="py-16 px-4 max-w-5xl mx-auto"
      >
        <SectionHeading size="md">
          Why Invest Time in Learning and Improving?
        </SectionHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
        >
          Social media advertising is a highly competitive space. By exploring
          Sample.com's resources, you're equipping yourself with the knowledge
          and tools needed to adapt, innovate, and succeed.
        </motion.p>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading>
            Frequently Asked Questions About Our Resources
          </SectionHeading>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.li variants={fadeInUp}>
              <strong>Q: Are the resources on Sample.com free?</strong>
              <br />
              A: Yes, all resources provided by Sample.com are free for our
              users.
            </motion.li>
            <motion.li variants={fadeInUp}>
              <strong>Q: How often is the blog updated?</strong>
              <br />
              A: Our blog is updated regularly with new posts each month.
            </motion.li>
            <motion.li variants={fadeInUp}>
              <strong>Q: Can I download the resources?</strong>
              <br />
              A: Certain guides and case studies are available in PDF format.
            </motion.li>
            <motion.li variants={fadeInUp}>
              <strong>
                Q: Who creates the content in the Resources section?
              </strong>
              <br />
              A: Our content is created by digital marketing experts and AI
              specialists.
            </motion.li>
            <motion.li variants={fadeInUp}>
              <strong>Q: Can I suggest a topic for the blog?</strong>
              <br />
              A: Absolutely! Reach out to our support team with your ideas.
            </motion.li>
            <motion.li variants={fadeInUp}>
              <strong>Q: Are case studies based on real campaigns?</strong>
              <br />
              A: Yes, all case studies featured on Sample.com are based on real
              campaigns run by businesses using our platform.
            </motion.li>
          </motion.ul>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true }}
        className="bg-blue-700 text-white py-16 px-4 text-center"
      >
        <SectionHeading variant="secondary" className="text-white">
          Get Started with Sample.com's Resources Today
        </SectionHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          Take advantage of our comprehensive blog, in-depth case studies, and
          expert AI marketing insights. Discover how Sample.com can empower you
          to create smarter, more effective social media campaigns.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Explore Resources
          </Button>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
