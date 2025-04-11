import { motion, Variants } from "framer-motion";
import React, { useState, useCallback, memo } from "react";
import SectionHeading from "./SectionHeading";
import {
  BaseResourceProps,
  resourceAnimationVariants,
  defaultTransition,
  defaultViewport,
} from "../types/resource";

/**
 * Interface for a single FAQ item
 */
interface FAQItem {
  /** The question text */
  question: string;
  /** The answer text */
  answer: string;
  /** Optional ID for tracking/analytics */
  id?: string;
}

/**
 * Props for the FAQItem component
 */
interface FAQItemProps {
  /** The FAQ item data */
  item: FAQItem;
  /** Whether this item is currently expanded */
  isExpanded: boolean;
  /** Callback to toggle the expanded state */
  onToggle: () => void;
  /** Index for aria-controls */
  index: number;
}

/**
 * Animation variants for the answer content
 */
const answerVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1 },
};

/**
 * Individual FAQ item component with collapsible functionality
 */
const FAQItem = memo<FAQItemProps>(({ item, isExpanded, onToggle, index }) => {
  const itemId = `faq-${index}`;
  const answerId = `${itemId}-answer`;

  return (
    <motion.div
      variants={resourceAnimationVariants}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isExpanded}
        aria-controls={answerId}
        id={itemId}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {item.question}
          </h3>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <motion.div
        id={answerId}
        role="region"
        aria-labelledby={itemId}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={answerVariants}
        transition={defaultTransition}
        className="overflow-hidden"
      >
        <div className="p-4 text-gray-600">{item.answer}</div>
      </motion.div>
    </motion.div>
  );
});

FAQItem.displayName = "FAQItem";

/**
 * Props for the FAQSection component
 */
interface FAQSectionProps extends BaseResourceProps {
  /** Optional custom FAQ items to override the default ones */
  items?: FAQItem[];
}

/**
 * Default FAQ items
 */
const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    id: "free-resources",
    question: "Are the resources on Sample.com free?",
    answer: "Yes, all resources provided by Sample.com are free for our users.",
  },
  {
    id: "blog-updates",
    question: "How often is the blog updated?",
    answer: "Our blog is updated regularly with new posts each month.",
  },
  {
    id: "downloads",
    question: "Can I download the resources?",
    answer: "Certain guides and case studies are available in PDF format.",
  },
  {
    id: "content-creators",
    question: "Who creates the content in the Resources section?",
    answer:
      "Our content is created by digital marketing experts and AI specialists.",
  },
  {
    id: "topic-suggestions",
    question: "Can I suggest a topic for the blog?",
    answer: "Absolutely! Reach out to our support team with your ideas.",
  },
  {
    id: "case-studies",
    question: "Are case studies based on real campaigns?",
    answer:
      "Yes, all case studies featured on Sample.com are based on real campaigns run by businesses using our platform.",
  },
];

/**
 * FAQ Section component that displays a list of collapsible FAQ items
 */
const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  items = DEFAULT_FAQ_ITEMS,
  className = "",
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={defaultTransition}
      viewport={defaultViewport}
      className={`bg-gray-100 py-12 sm:py-16 px-4 ${className}`}
    >
      <div className="">
        <SectionHeading>{title}</SectionHeading>
        <motion.div
          variants={resourceAnimationVariants}
          transition={{ ...defaultTransition, staggerChildren: 0.1 }}
          className="mt-8 space-y-4"
        >
          {items.map((item, index) => (
            <FAQItem
              key={item.id || index}
              item={item}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(FAQSection);
