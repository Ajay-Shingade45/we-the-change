'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Count-up animation hook
function useCountUp(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    if (!isCounting) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(start + (end - start) * easeOutQuart);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start, isCounting]);

  return { count, startCounting: () => setIsCounting(true) };
}

function formatFullIndian(value) {
  const isInteger = Number.isInteger(value);
  const options = isInteger
    ? { maximumFractionDigits: 0 }
    : { minimumFractionDigits: 0, maximumFractionDigits: 2 };
  return value.toLocaleString('en-IN', options);
}

function formatCompactIndian(value) {
  const absVal = Math.abs(value);
  const sign = value < 0 ? '-' : '';
  if (absVal >= 10000000) { // 1 crore
    const num = absVal / 10000000;
    return `${sign}${num.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Crore`;
  }
  if (absVal >= 100000) { // 1 lakh
    const num = absVal / 100000;
    return `${sign}${num.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Lakh`;
  }
  // Below 1 lakh: use standard Indian commas
  return `${sign}${formatFullIndian(absVal)}`;
}

function CounterCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const isNumeric = typeof item.value === 'number';
  const endValue = isNumeric ? Number(item.value) : 0;
  const { count, startCounting } = useCountUp(endValue, 2000, 0);

  useEffect(() => {
    if (isInView && isNumeric) {
      startCounting();
    }
  }, [isInView, isNumeric, startCounting]);

  const displayValue = isNumeric ? formatCompactIndian(count) : item.value;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.1 + 0.3,
        ease: "easeOut"
      }
    }
  };

  const isWide = !isNumeric || String(item.value).length > 10;

  return (
    <motion.li
      ref={ref}
      className={`group h-full rounded-2xl p-6 md:p-8 text-center border border-muted/10 bg-gradient-to-b from-bg-alt to-bg-alt/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-300 ${isWide ? 'md:col-span-2 xl:col-span-2' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      role="listitem"
      aria-labelledby={`impact-title-${index}`}
      aria-describedby={`impact-desc-${index}`}
    >
      {item.icon && (
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <div className="w-5 h-5">
              {item.icon}
            </div>
          </div>
        </div>
      )}
      
      <motion.div
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-primary mb-2 leading-tight break-words overflow-hidden max-w-full mx-auto"
        variants={numberVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {displayValue}
      </motion.div>
      <div className="h-px w-10 bg-muted/20 mx-auto my-2" />
      
      <h3 id={`impact-title-${index}`} className="text-base md:text-lg font-semibold text-foreground mb-1 max-w-[22ch] mx-auto">
        {item.label}
      </h3>
      
      <p id={`impact-desc-${index}`} className="text-muted leading-relaxed text-xs md:text-sm max-w-[48ch] mx-auto">
        {item.desc}
      </p>
    </motion.li>
  );
}

export default function ImpactCounters({ items, className = "" }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={`py-16 lg:py-24 ${className}`} aria-labelledby="impact-heading">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="impact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Every number tells a story of transformation, empowerment, and sustainable change 
            across communities and borders.
          </p>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          role="list"
          aria-label="Impact statistics"
        >
          {items.map((item, index) => (
            <CounterCard key={index} item={item} index={index} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
