import { motion } from "framer-motion";
import React, { memo } from "react";
import SectionHeading from "./SectionHeading";
import {
  BaseResourceProps,
  resourceAnimationVariants,
  defaultTransition,
  defaultViewport,
} from "../types/resource";

/**
 * Props for the FeaturedResourceCard component
 */
interface FeaturedResourceCardProps {
  /** The title of the resource */
  title: string;
  /** A brief description of the resource */
  description: string;
  /** Optional ID for tracking/analytics */
  id?: string;
}

/**
 * A card component that displays a featured resource with title and description
 */
const FeaturedResourceCard = memo<FeaturedResourceCardProps>(
  ({ title, description }) => {
    return (
      <motion.div
        variants={resourceAnimationVariants}
        whileHover={{ scale: 1.02 }}
        className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </motion.div>
    );
  }
);

FeaturedResourceCard.displayName = "FeaturedResourceCard";

/**
 * Props for the FeaturedResourcesSection component
 */
interface FeaturedResourcesSectionProps extends BaseResourceProps {
  /** Optional array of featured resources to override defaults */
  resources?: FeaturedResourceCardProps[];
}

/**
 * Default featured resources
 */
const DEFAULT_RESOURCES: FeaturedResourceCardProps[] = [
  {
    id: "beginners-guide",
    title: "Beginner's Guide to Social Media Advertising",
    description:
      "This guide covers the basics of ad creation, audience targeting, and performance tracking to help you build a strong foundation.",
  },
  {
    id: "ai-advertising",
    title: "The Power of AI in Advertising: An In-Depth Look",
    description:
      "Discover how AI is revolutionizing advertising and how to leverage it for better ad performance.",
  },
  {
    id: "audience-behavior",
    title: "Understanding Audience Behavior: A Key to Social Media Success",
    description:
      "Explore audience behavior trends and how to create ads that resonate with different audience segments.",
  },
  {
    id: "best-practices-2024",
    title: "Social Media Advertising Best Practices for 2024",
    description:
      "Actionable tips and platform-specific strategies to ensure campaign success in 2024.",
  },
];

/**
 * A section component that displays a grid of featured resources
 */
const FeaturedResourcesSection: React.FC<FeaturedResourcesSectionProps> = ({
  title,
  resources = DEFAULT_RESOURCES,
  className = "",
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={defaultTransition}
      viewport={defaultViewport}
      className={`bg-gray-50 py-12 sm:py-16 px-4 ${className}`}
    >
      <div className="">
        <SectionHeading>{title}</SectionHeading>
        <motion.div
          variants={resourceAnimationVariants}
          transition={{ ...defaultTransition, staggerChildren: 0.1 }}
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-8"
        >
          {resources.map((resource) => (
            <FeaturedResourceCard
              key={resource.id || resource.title}
              {...resource}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(FeaturedResourcesSection);
