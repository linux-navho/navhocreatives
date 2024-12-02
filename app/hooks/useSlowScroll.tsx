import { useEffect } from 'react';

// Define the hook's parameter type
const useSlowScroll = (slowdownFactor: number = 0.3): void => {
  useEffect(() => {
    const handleWheel = (e: WheelEvent): void => {
      e.preventDefault();

      const smoothScroll = (): void => {
        window.scrollBy({
          top: e.deltaY * slowdownFactor,
          behavior: 'auto',
        });
      };

      requestAnimationFrame(smoothScroll);
    };

    // Add event listener to handle the scroll event
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [slowdownFactor]);
};

export default useSlowScroll;
