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

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ResourceCard: React.FC<CardProps> = ({
  icon,
  title,
  description,
}) => {
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
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className="p-4 lg:p-6 rounded-xl duration-300 grid grid-rows-[auto_auto] gap-4 border border-gray-100"
    >
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
        <motion.div
          variants={iconVariants}
          className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
        >
          {icon}
        </motion.div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="col-span-full"
      >
        <p className="text-gray-700">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export const BlogCard: React.FC<Omit<CardProps, "icon">> = ({
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

export const CaseStudyCard: React.FC<Omit<CardProps, "icon">> = ({
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

export const AIMarketingCard: React.FC<Omit<CardProps, "icon">> = ({
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
