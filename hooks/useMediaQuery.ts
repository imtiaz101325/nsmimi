import { useState, useCallback, useEffect } from 'react';

export default function useMediaQuery(width: number) {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((event: MediaQueryListEvent) => {
    if (event.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const mqList = window.matchMedia(`(min-width: ${width}px)`);
    mqList.addEventListener("change", updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (mqList.matches) {
      setTargetReached(true);
    }

    return () => mqList.removeEventListener("change", updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};

