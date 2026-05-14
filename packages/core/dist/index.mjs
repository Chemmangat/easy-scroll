// src/hooks/useScrollAnimation.ts
import { useEffect, useRef, useState } from "react";
var animationStyles = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  fadeInUp: {
    initial: { opacity: 0, transform: "translateY(40px)" },
    animate: { opacity: 1, transform: "translateY(0)" }
  },
  fadeInDown: {
    initial: { opacity: 0, transform: "translateY(-40px)" },
    animate: { opacity: 1, transform: "translateY(0)" }
  },
  fadeInLeft: {
    initial: { opacity: 0, transform: "translateX(-40px)" },
    animate: { opacity: 1, transform: "translateX(0)" }
  },
  fadeInRight: {
    initial: { opacity: 0, transform: "translateX(40px)" },
    animate: { opacity: 1, transform: "translateX(0)" }
  },
  slideInLeft: {
    initial: { opacity: 0, transform: "translateX(-80px)" },
    animate: { opacity: 1, transform: "translateX(0)" }
  },
  slideInRight: {
    initial: { opacity: 0, transform: "translateX(80px)" },
    animate: { opacity: 1, transform: "translateX(0)" }
  },
  slideInUp: {
    initial: { opacity: 0, transform: "translateY(80px)" },
    animate: { opacity: 1, transform: "translateY(0)" }
  },
  slideInDown: {
    initial: { opacity: 0, transform: "translateY(-80px)" },
    animate: { opacity: 1, transform: "translateY(0)" }
  },
  scaleUp: {
    initial: { opacity: 0, transform: "scale(0.8)" },
    animate: { opacity: 1, transform: "scale(1)" }
  },
  scaleDown: {
    initial: { opacity: 0, transform: "scale(1.2)" },
    animate: { opacity: 1, transform: "scale(1)" }
  },
  rotateIn: {
    initial: { opacity: 0, transform: "rotate(-10deg) scale(0.9)" },
    animate: { opacity: 1, transform: "rotate(0deg) scale(1)" }
  },
  rotateInLeft: {
    initial: { opacity: 0, transform: "rotate(-45deg) translateX(-20px)" },
    animate: { opacity: 1, transform: "rotate(0deg) translateX(0)" }
  },
  rotateInRight: {
    initial: { opacity: 0, transform: "rotate(45deg) translateX(20px)" },
    animate: { opacity: 1, transform: "rotate(0deg) translateX(0)" }
  },
  blurIn: {
    initial: { opacity: 0, filter: "blur(12px)" },
    animate: { opacity: 1, filter: "blur(0px)" }
  },
  flipIn: {
    initial: { opacity: 0, transform: "perspective(600px) rotateY(90deg)" },
    animate: { opacity: 1, transform: "perspective(600px) rotateY(0deg)" }
  },
  flipInX: {
    initial: { opacity: 0, transform: "perspective(600px) rotateX(90deg)" },
    animate: { opacity: 1, transform: "perspective(600px) rotateX(0deg)" }
  },
  flipInY: {
    initial: { opacity: 0, transform: "perspective(600px) rotateY(90deg)" },
    animate: { opacity: 1, transform: "perspective(600px) rotateY(0deg)" }
  },
  bounceIn: {
    initial: { opacity: 0, transform: "scale(0.3)" },
    animate: { opacity: 1, transform: "scale(1)" }
  },
  zoomIn: {
    initial: { opacity: 0, transform: "scale(0.4)" },
    animate: { opacity: 1, transform: "scale(1)" }
  },
  zoomOut: {
    initial: { opacity: 0, transform: "scale(1.6)" },
    animate: { opacity: 1, transform: "scale(1)" }
  },
  swingIn: {
    initial: { opacity: 0, transform: "rotate(-20deg)", transformOrigin: "top center" },
    animate: { opacity: 1, transform: "rotate(0deg)", transformOrigin: "top center" }
  },
  dropIn: {
    initial: { opacity: 0, transform: "translateY(-120px) scale(0.9)" },
    animate: { opacity: 1, transform: "translateY(0) scale(1)" }
  },
  riseFade: {
    initial: { opacity: 0, transform: "translateY(60px)", filter: "blur(4px)" },
    animate: { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }
  },
  expandWidth: {
    initial: { opacity: 0, transform: "scaleX(0)", transformOrigin: "left center" },
    animate: { opacity: 1, transform: "scaleX(1)", transformOrigin: "left center" }
  },
  shrinkIn: {
    initial: { opacity: 0, transform: "scale(1.8)" },
    animate: { opacity: 1, transform: "scale(1)" }
  },
  tiltLeft: {
    initial: { opacity: 0, transform: "rotate(6deg) translateX(20px)" },
    animate: { opacity: 1, transform: "rotate(0deg) translateX(0)" }
  },
  tiltRight: {
    initial: { opacity: 0, transform: "rotate(-6deg) translateX(-20px)" },
    animate: { opacity: 1, transform: "rotate(0deg) translateX(0)" }
  },
  popIn: {
    initial: { opacity: 0, transform: "scale(0.6) translateY(20px)" },
    animate: { opacity: 1, transform: "scale(1) translateY(0)" }
  },
  glideUp: {
    initial: { opacity: 0, transform: "translateY(100px)" },
    animate: { opacity: 1, transform: "translateY(0)" }
  },
  glideDown: {
    initial: { opacity: 0, transform: "translateY(-100px)" },
    animate: { opacity: 1, transform: "translateY(0)" }
  },
  glideLeft: {
    initial: { opacity: 0, transform: "translateX(-120px)" },
    animate: { opacity: 1, transform: "translateX(0)" }
  },
  glideRight: {
    initial: { opacity: 0, transform: "translateX(120px)" },
    animate: { opacity: 1, transform: "translateX(0)" }
  },
  spiralIn: {
    initial: { opacity: 0, transform: "rotate(-180deg) scale(0.3)" },
    animate: { opacity: 1, transform: "rotate(0deg) scale(1)" }
  },
  stretchIn: {
    initial: { opacity: 0, transform: "scaleY(0.2) scaleX(1.4)" },
    animate: { opacity: 1, transform: "scaleY(1) scaleX(1)" }
  },
  rollInLeft: {
    initial: { opacity: 0, transform: "translateX(-100px) rotate(-120deg)" },
    animate: { opacity: 1, transform: "translateX(0) rotate(0deg)" }
  },
  rollInRight: {
    initial: { opacity: 0, transform: "translateX(100px) rotate(120deg)" },
    animate: { opacity: 1, transform: "translateX(0) rotate(0deg)" }
  }
};
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function useScrollAnimation(animation, options = {}) {
  const {
    delay = 0,
    duration = 600,
    threshold = 0.1,
    once = true,
    easing = "ease-out",
    onAnimationStart,
    onAnimationComplete
  } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const hasAnimated = useRef(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reducedMotion = prefersReducedMotion();
    const styles = animationStyles[animation] ?? animationStyles["fadeIn"];
    if (reducedMotion) {
      Object.assign(element.style, styles.animate);
      setIsVisible(true);
      return;
    }
    Object.assign(element.style, styles.initial);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true;
            onAnimationStart?.();
            setTimeout(() => {
              if (!element) return;
              element.style.transition = `all ${duration}ms ${easing}`;
              Object.assign(element.style, styles.animate);
              setTimeout(() => {
                onAnimationComplete?.();
              }, duration);
            }, delay);
          }
          if (!once && !entry.isIntersecting && hasAnimated.current) {
            hasAnimated.current = false;
            element.style.transition = "";
            Object.assign(element.style, styles.initial);
          }
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;
            const elementProgress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
            setProgress(elementProgress);
          }
        });
      },
      { threshold }
    );
    observer.observe(element);
    const handleScroll = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementProgress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setProgress(elementProgress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animation, delay, duration, easing, threshold, once, onAnimationStart, onAnimationComplete]);
  return { ref, isVisible, progress };
}

// src/components/RevealOnScroll.tsx
import { jsx } from "react/jsx-runtime";
function RevealOnScroll({
  as,
  animation,
  children,
  className = "",
  delay,
  duration,
  threshold,
  once,
  easing,
  onAnimationStart,
  onAnimationComplete,
  ...rest
}) {
  const { ref } = useScrollAnimation(animation, {
    delay,
    duration,
    threshold,
    once,
    easing,
    onAnimationStart,
    onAnimationComplete
  });
  const Tag = as ?? "div";
  return /* @__PURE__ */ jsx(Tag, { ref, className, ...rest, children });
}

// src/components/ScrollProgress.tsx
import { useEffect as useEffect2, useState as useState2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function ScrollProgress({
  color = "#6366f1",
  height = 3,
  zIndex = 9999
}) {
  const [progress, setProgress] = useState2(0);
  useEffect2(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress2 = scrolled / documentHeight * 100;
      setProgress(Math.min(100, Math.max(0, progress2)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsx2(
    "div",
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: `${height}px`,
        zIndex,
        pointerEvents: "none",
        background: "transparent"
      },
      children: /* @__PURE__ */ jsx2(
        "div",
        {
          style: {
            height: "100%",
            width: `${progress}%`,
            background: color,
            transition: "width 0.1s ease-out"
          }
        }
      )
    }
  );
}

// src/components/ParallaxSection.tsx
import { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
function ParallaxSection({
  speed = 0.5,
  children,
  className = ""
}) {
  const ref = useRef2(null);
  const [offset, setOffset] = useState3(0);
  useEffect3(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const parallaxOffset = (scrolled - elementTop) * (speed - 1);
        setOffset(parallaxOffset);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);
  return /* @__PURE__ */ jsx3("div", { ref, className: `relative overflow-hidden ${className}`, children: /* @__PURE__ */ jsx3(
    "div",
    {
      style: {
        transform: `translateY(${offset}px)`,
        willChange: "transform"
      },
      children
    }
  ) });
}

// src/components/CountOnScroll.tsx
import { useEffect as useEffect4, useRef as useRef3, useState as useState4 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
function CountOnScroll({
  from,
  to,
  duration = 2e3,
  formatFn = (value) => value.toLocaleString(),
  className = ""
}) {
  const ref = useRef3(null);
  const [count, setCount] = useState4(from);
  const [hasAnimated, setHasAnimated] = useState4(false);
  useEffect4(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const difference = to - from;
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = from + difference * easeOutQuart;
              setCount(currentCount);
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(to);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [from, to, duration, hasAnimated]);
  return /* @__PURE__ */ jsx4("div", { ref, className, children: formatFn(Math.round(count)) });
}

// src/components/StaggerChildren.tsx
import { Children, isValidElement } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
function StaggerChildren({
  animation,
  staggerDelay = 100,
  children,
  className = "",
  duration,
  threshold,
  once,
  easing,
  onAnimationStart,
  onAnimationComplete
}) {
  const childArray = Children.toArray(children);
  return /* @__PURE__ */ jsx5("div", { className, children: childArray.map((child, index) => {
    if (!isValidElement(child)) return child;
    return /* @__PURE__ */ jsx5(
      RevealOnScroll,
      {
        animation,
        delay: index * staggerDelay,
        duration,
        threshold,
        once,
        easing,
        onAnimationStart: index === 0 ? onAnimationStart : void 0,
        onAnimationComplete: index === childArray.length - 1 ? onAnimationComplete : void 0,
        children: child
      },
      index
    );
  }) });
}
export {
  CountOnScroll,
  ParallaxSection,
  RevealOnScroll,
  ScrollProgress,
  StaggerChildren,
  useScrollAnimation
};
