import { type ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimatedSectionProps = {
  children: ReactNode;
  type?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'zoomIn' | 'rotate';
  delay?: number;
};

const animationVariants = {
  fadeUp: { hidden: { opacity: 0, y: 48 }, visible: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 48 }, visible: { opacity: 1, x: 0 } },
  zoomIn: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  rotate: { hidden: { opacity: 0, rotate: -8 }, visible: { opacity: 1, rotate: 0 } },
};

export default function AnimatedSection({
  children,
  type = 'fadeUp',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.section
      ref={ref}
      variants={animationVariants[type] || animationVariants.fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}
