import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

export const animation = useAnimation();
export const [order, setOrder] = useState(0);
export const [animationStart, setAnimationStart] = useState(false);

export async function sequence() {
  await useAnimation().start({
    y: -20,
    scale: 1.1,
    backgroundColor: '#ffaa00',
  });

  setOrder(order + 1);
}

export const orderManager = () => {
  useEffect(() => {
    if (!(order <= 5)) {
      setOrder(0);
    } else {
      sequence();
    }
  }, [order]);
};
