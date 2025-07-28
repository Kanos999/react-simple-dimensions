import React, { useState, useEffect, useRef, CSSProperties } from 'react';

type Measurement = {
  width: number;
  height: number;
};

type Conversions = {
  px: number;
  rem: number;
  em: number;
  pt: number;
};

type Position = 'top' | 'bottom' | 'left' | 'right';

interface DimensionProps {
  color: string;
  distance: number | 'auto';
  angle?: number;
  units?: keyof Conversions;
  position: Position;
  offset?: number;
}

// Hook
export function useElementSize() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [measurement, setMeasurement] = useState<Measurement>({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setMeasurement({ width, height });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, measurement };
}

// Component
const Dimension: React.FC<DimensionProps> = ({
  color,
  distance,
  angle,
  units,
  position,
  offset = 0,
}) => {
  const { ref, measurement } = useElementSize();
  const [conversions, setConversions] = useState<Conversions>({
    px: 0,
    rem: 0,
    em: 0,
    pt: 0,
  });
  const [label, setLabel] = useState('');
  const tickLength = 20;

  useEffect(() => {
    if (!ref.current || !ref.current.parentElement) return;

    const element = ref.current;
    const px = 1;

    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const rem = px / rootFontSize;

    const elementFontSize = parseFloat(getComputedStyle(element).fontSize);
    const em = px / elementFontSize;

    const pt = px * (72 / 96);

    setConversions({ px, rem, em, pt });
  }, []);

  useEffect(() => {
    if (!ref.current || !ref.current.parentElement) return;

    let labelValue = 0;
    if (position === 'top' || position === 'bottom') labelValue = measurement.width;
    else if (position === 'left' || position === 'right') labelValue = measurement.height;

    if (units && conversions[units] !== undefined) {
      labelValue = Math.floor(conversions[units] * labelValue);
      setLabel(`${labelValue} ${units}`);
    } else {
      setLabel(`${Math.floor(labelValue)}`);
    }
  }, [conversions, measurement, position, units]);

  const styles: CSSProperties = {
    position: 'absolute',
    margin: 0,
    padding: 0,
    color: color || 'black',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textWrap: 'nowrap',
    pointerEvents: 'none',
  };

  // Horizontal dimensions
  if (position === 'top') {
    styles.height = `${offset + tickLength}px`;
    styles.top = -offset - 1.5 * tickLength;
    styles.left = 0;
    styles.right = 0;
    styles.borderLeft = `1px solid ${color || 'black'}`;
    styles.borderRight = `1px solid ${color || 'black'}`;

    return (
      <div style={styles}>
        <div
          ref={ref}
          style={{
            width: '100%',
            height: 'auto',
            borderBottom: `1px solid ${color || 'black'}`,
            bottom: `calc(100% - ${tickLength / 2}px)`,
            position: 'absolute',
            padding: 0,
          }}
        >
          {label}
        </div>
      </div>
    );
  }

  if (position === 'bottom') {
    styles.height = `${offset + tickLength}px`;
    styles.bottom = -offset - 1.5 * tickLength;
    styles.left = 0;
    styles.right = 0;
    styles.borderLeft = `1px solid ${color || 'black'}`;
    styles.borderRight = `1px solid ${color || 'black'}`;

    return (
      <div style={styles}>
        <div
          ref={ref}
          style={{
            width: '100%',
            height: 'auto',
            borderTop: `1px solid ${color || 'black'}`,
            top: `calc(100% - ${tickLength / 2}px)`,
            position: 'absolute',
            padding: 0,
          }}
        >
          {label}
        </div>
      </div>
    );
  }

  if (position === 'right') {
    styles.width = `${offset + tickLength}px`;
    styles.right = -offset - 1.5 * tickLength;
    styles.top = 0;
    styles.bottom = 0;
    styles.height = distance === 'auto' ? '100%' : `${distance}px`;
    styles.borderTop = `1px solid ${color || 'black'}`;
    styles.borderBottom = `1px solid ${color || 'black'}`;
    styles.textAlign = 'center';
    styles.display = 'flex';
    styles.flexDirection = 'row';

    return (
      <div style={styles}>
        <div
          ref={ref}
          style={{
            height: '100%',
            width: 'auto',
            borderLeft: `1px solid ${color || 'black'}`,
            left: `calc(100% - ${tickLength / 2}px)`,
            position: 'absolute',
            padding: 0,
            writingMode: 'vertical-rl',
          }}
        >
          {label}
        </div>
      </div>
    );
  }

  if (position === 'left') {
    styles.width = `${offset + tickLength}px`;
    styles.left = -offset - 1.5 * tickLength;
    styles.top = 0;
    styles.bottom = 0;
    styles.height = distance === 'auto' ? '100%' : `${distance}px`;
    styles.borderTop = `1px solid ${color || 'black'}`;
    styles.borderBottom = `1px solid ${color || 'black'}`;
    styles.textAlign = 'center';
    styles.display = 'flex';
    styles.flexDirection = 'row';

    return (
      <div style={styles}>
        <div
          ref={ref}
          style={{
            height: '100%',
            width: 'auto',
            borderRight: `1px solid ${color || 'black'}`,
            right: `calc(100% - ${tickLength / 2}px)`,
            position: 'absolute',
            padding: 0,
            writingMode: 'vertical-rl',
          }}
        >
          {label}
        </div>
      </div>
    );
  }

  return null;
};

export default Dimension;
