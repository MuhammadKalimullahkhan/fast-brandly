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
 * Props for the ResourceCard component
 */
interface ResourceCardProps {
  /** Icon component to display */
  icon: React.ReactNode;
  /** Title of the resource */
  title: string;
  /** Description of the resource */
  description: string;
  /** Color class for the icon */
  color: string;
  /** Optional ID for tracking/analytics */
  id?: string;
}

/**
 * A card component that displays a resource with an icon, title, and description
 */
const ResourceCard = memo<ResourceCardProps>(
  ({ icon, title, description, color }) => {
    return (
      <motion.div
        variants={resourceAnimationVariants}
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-center mb-4">
          <div className={`w-8 h-8 ${color} mr-3`}>{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    );
  }
);

ResourceCard.displayName = "ResourceCard";

/**
 * Props for the ResourceUsageSection component
 */
interface ResourceUsageSectionProps extends BaseResourceProps {
  /** Optional array of resource cards to override defaults */
  cards?: ResourceCardProps[];
}

/**
 * Default resource cards
 */
const DEFAULT_CARDS: ResourceCardProps[] = [
  {
    id: "stay-informed",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Stay Informed",
    description:
      "Keep up with the latest blog posts and insights to adapt your campaigns and stay relevant in the ever-evolving digital landscape.",
    color: "text-blue-600",
  },
  {
    id: "learn-success",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Learn from Success",
    description:
      "Apply proven strategies and techniques from real-world case studies that have delivered exceptional results for businesses like yours.",
    color: "text-green-600",
  },
  {
    id: "data-driven",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Data-Driven Approach",
    description:
      "Leverage AI-generated recommendations to refine your targeting, messaging, and design for maximum campaign effectiveness.",
    color: "text-purple-600",
  },
];

/**
 * A section component that displays a grid of resource usage cards
 */
const ResourceUsageSection: React.FC<ResourceUsageSectionProps> = ({
  title,
  cards = DEFAULT_CARDS,
  className = "",
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={defaultTransition}
      viewport={defaultViewport}
      className={`py-12 sm:py-16 px-4 bg-gradient-to-b from-gray-50 to-white ${className}`}
    >
      <div className="">
        <SectionHeading size="md" className="text-center mb-12">
          {title}
        </SectionHeading>

        <motion.div
          variants={resourceAnimationVariants}
          transition={{ ...defaultTransition, staggerChildren: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card) => (
            <ResourceCard key={card.id || card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(ResourceUsageSection);
