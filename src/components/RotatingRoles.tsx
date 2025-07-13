import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  roles: string[];
  interval?: number; // ms
}

const variants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function RotatingRoles({ roles, interval = 2000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      interval
    );
    return () => clearInterval(id);
  }, [roles.length, interval]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={roles[index]}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  );
}
