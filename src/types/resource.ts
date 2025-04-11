/**
 * Base interface for all resource-related components
 */
export interface BaseResourceProps {
  /** The title of the resource */
  title: string;
  /** Optional CSS class names */
  className?: string;
}

/**
 * Common animation variants used across resource components
 */
export const resourceAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Common transition settings
 */
export const defaultTransition = {
  duration: 0.85,
  ease: "easeInOut",
};

/**
 * Common viewport settings
 */
export const defaultViewport = {
  once: true,
  margin: "0px 0px -100px 0px",
};
