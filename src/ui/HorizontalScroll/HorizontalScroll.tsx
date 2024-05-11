import {
  FC,
  useRef,
  useState,
  useEffect,
  ReactNode,
  MouseEvent,
  useCallback,
  TouchEvent,
} from 'react';

import ArrowSVG from '@assets/svg/arrow';

import style from './HorizontalScroll.module.css';

type HorizontalScrollProps = {
  children: ReactNode[];
};

const HorizontalScroll: FC<HorizontalScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [bounceOffset, setBounceOffset] = useState(0);
  const [bounceDirection, setBounceDirection] = useState(0);
  // const [snapPosition, setSnapPosition] = useState(0);
  const scrollWalkFactor = 1;
  const bounceDecayRate = 0.9;
  const bounceThreshold = 0.01;

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    isMouseDown.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    setIsDragging(true);
    containerRef.current?.classList.add(style.grabbing);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!isMouseDown.current) return;
      e.preventDefault();
      const x = e.pageX - (containerRef.current?.offsetLeft || 0);
      const walk = (x - startX.current) * scrollWalkFactor;

      requestAnimationFrame(() => {
        if (containerRef.current && contentRef.current) {
          const targetScrollLeft = scrollLeft.current - walk;
          const maxScrollLeft = contentRef.current.scrollWidth - containerRef.current.clientWidth;

          let newBounceOffset = 0;
          let newBounceDirection = 0;

          if (targetScrollLeft < 0) {
            newBounceOffset = Math.abs(targetScrollLeft) * 0.1;
            newBounceDirection = 1;
          } else if (targetScrollLeft > maxScrollLeft) {
            newBounceOffset = (targetScrollLeft - maxScrollLeft) * 0.1;
            newBounceDirection = -1;
          }

          setBounceOffset(newBounceOffset);
          setBounceDirection(newBounceDirection);

          // const firstChild = contentRef.current.firstElementChild;
          // const itemWidth = firstChild instanceof HTMLElement ? firstChild.offsetWidth : 0;
          // const newSnapPosition = Math.round(targetScrollLeft / itemWidth) * itemWidth;
          // setSnapPosition(newSnapPosition);

          containerRef.current.scrollTo({
            left: Math.max(0, Math.min(targetScrollLeft, maxScrollLeft)),
            behavior: 'auto',
          });
        }
      });
    },
    [],
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      isMouseDown.current = false;
      setIsDragging(false);
      containerRef.current?.classList.remove(style.grabbing);
      containerRef.current?.classList.add(style.grab);

      // if (containerRef.current && contentRef.current) {
      //   containerRef.current.scrollTo({
      //     left: snapPosition,
      //     behavior: 'smooth',
      //   });
      // }

      setBounceDirection(0);
      setBounceOffset(0);
    }
  }, [isDragging]);

  const handleMouseLeave = useCallback(() => {
    if (isMouseDown.current) {
      isMouseDown.current = false;
      setIsDragging(false);
      containerRef.current?.classList.remove(style.grabbing);
      containerRef.current?.classList.add(style.grab);
      setBounceDirection(0);
      setBounceOffset(0);
    }
  }, []);

  const handlePrevClick = () => {
    if (containerRef.current && contentRef.current) {
      const firstChild = contentRef.current.firstElementChild;
      const itemWidth = firstChild instanceof HTMLElement ? firstChild.offsetWidth : 0;
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - itemWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    if (containerRef.current && contentRef.current) {
      const firstChild = contentRef.current.firstElementChild;
      const itemWidth = firstChild instanceof HTMLElement ? firstChild.offsetWidth : 0;
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + itemWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;

      if (scrollWidth <= clientWidth) {
        setShowPrevButton(false);
        setShowNextButton(false);
      } else {
        setShowPrevButton(scrollLeft > 0);
        setShowNextButton(scrollLeft < scrollWidth - clientWidth - 1);
      }
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    isMouseDown.current = true;
    startX.current = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    setIsDragging(true);
    containerRef.current?.classList.add(style.grabbing);
  };

  const handleTouchMove = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      if (!isMouseDown.current) return;
      e.preventDefault();
      const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
      const walk = (x - startX.current) * scrollWalkFactor;

      requestAnimationFrame(() => {
        if (containerRef.current && contentRef.current) {
          const targetScrollLeft = scrollLeft.current - walk;
          const maxScrollLeft = contentRef.current.scrollWidth - containerRef.current.clientWidth;

          let newBounceOffset = 0;
          let newBounceDirection = 0;

          if (targetScrollLeft < 0) {
            newBounceOffset = Math.abs(targetScrollLeft) * 0.1;
            newBounceDirection = 1;
          } else if (targetScrollLeft > maxScrollLeft) {
            newBounceOffset = (targetScrollLeft - maxScrollLeft) * 0.1;
            newBounceDirection = -1;
          }

          setBounceOffset(newBounceOffset);
          setBounceDirection(newBounceDirection);

          // const firstChild = contentRef.current.firstElementChild;
          // const itemWidth = firstChild instanceof HTMLElement ? firstChild.offsetWidth : 0;
          // const newSnapPosition = Math.round(targetScrollLeft / itemWidth) * itemWidth;
          // setSnapPosition(newSnapPosition);

          containerRef.current.scrollTo({
            left: Math.max(0, Math.min(targetScrollLeft, maxScrollLeft)),
            behavior: 'auto',
          });
        }
      });
    },
    [],
  );

  const handleTouchEnd = useCallback(() => {
    if (isDragging) {
      isMouseDown.current = false;
      setIsDragging(false);
      containerRef.current?.classList.remove(style.grabbing);
      containerRef.current?.classList.add(style.grab);

      // if (containerRef.current && contentRef.current) {
      //   containerRef.current.scrollTo({
      //     left: snapPosition,
      //     behavior: 'smooth',
      //   });
      // }

      setBounceDirection(0);
      setBounceOffset(0);
    }
  }, [isDragging]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [containerRef.current, contentRef.current]);

  useEffect(() => {
    let bounceAnimationFrame: number | null = null;

    const bounceAnimation = () => {
      if (containerRef.current && Math.abs(bounceOffset) > bounceThreshold) {
        setBounceOffset((prevOffset) => prevOffset * bounceDecayRate);
        bounceAnimationFrame = requestAnimationFrame(bounceAnimation);
      } else {
        setBounceOffset(0);
        setBounceDirection(0);
        bounceAnimationFrame = null;
      }
    };

    if (bounceOffset !== 0) {
      bounceAnimationFrame = requestAnimationFrame(bounceAnimation);
    } else if (bounceAnimationFrame) {
      cancelAnimationFrame(bounceAnimationFrame);
    }

    return () => {
      if (bounceAnimationFrame) {
        cancelAnimationFrame(bounceAnimationFrame);
      }
    };
  }, [bounceOffset, bounceDecayRate, bounceThreshold]);

  return (
    <div className={style.outerContainer}>
      {showPrevButton && (
        <button className={style.prevButton} onClick={handlePrevClick}>
          <ArrowSVG />
        </button>
      )}

      <div
        ref={containerRef}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={style.horizontalScroll}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          transform: `translateX(${bounceDirection * bounceOffset}px)`,
          transition: 'transform 0.2s ease',
        }}
      >
        <div ref={contentRef} className={style.horizontalScrollСontent}>
          {children.map((child, index) => (
            <div key={index} className={style.horizontalScrollItem}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showNextButton && (
        <button className={style.nextButton} onClick={handleNextClick}>
          <ArrowSVG />
        </button>
      )}
    </div>
  );
};

export default HorizontalScroll;
