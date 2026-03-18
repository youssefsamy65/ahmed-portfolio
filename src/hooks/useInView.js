import { useState, useEffect, useRef } from "react";

/**
 * useInView - triggers when element enters the viewport.
 * Once visible, the observer disconnects (fires only once).
 *
 * @param {number} threshold - 0–1, how much of the element must be visible
 * @returns {[React.RefObject, boolean]} [ref, inView]
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
