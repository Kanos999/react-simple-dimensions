import React from 'react';
import { useState, useEffect, useRef } from 'react';

export function useElementSize() {
    const ref = useRef(null);
    const [measurement, setMeasurement] = useState(0);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setMeasurement({width, height});
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return { ref, measurement };
}

const Dimension = ({ color, distance, angle, units, position, offset=0 }) => {
    const { ref, measurement } = useElementSize();
    const [conversions, setConversions] = useState({
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

        // 1. rem (root font size)
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const rem = px / rootFontSize;

        // 2. em (element's own font size)
        const elementFontSize = parseFloat(getComputedStyle(element).fontSize);
        const em = px / elementFontSize;

        // 4. pt (CSS points; 1pt = 1.333px)
        const pt = px * (72 / 96);

        setConversions({ px, rem, em, pt });
    }, []);

    useEffect(() => {
        if (!ref.current || !ref.current.parentElement) return;

        let labelValue = 0;
        if (position === "top" || position === "bottom") labelValue = measurement.width;
        else if (position === "left" || position === "right") labelValue = measurement.height;

        labelValue = Math.floor(conversions[units] * labelValue);
        // console.log()
        setLabel(`${labelValue} ${units}`);
    }, [conversions, measurement]);



    let styles = {
        position: 'absolute',
        margin: 0,
        padding: 0,
        color: color,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        textWrap: 'nowrap',
        PointerEvents: 'none',
    };

    // Horiztonal dimensions
    if (position === "top") {
        styles.height = `${offset + tickLength}px`,
        styles.top = - offset - 1.5 * tickLength;
        styles.left = 0;
        styles.right = 0;
        // styles.transform = 'translateY(-50%)';
        styles.borderLeft = `1px solid ${color}`;
        styles.borderRight = `1px solid ${color}`;

        return (
            <div style={styles}>
                <div ref={ref} style={{
                    width: '100%',
                    height: 'auto',
                    borderBottom: `1px solid ${color}`,
                    bottom: `calc(100% - ${tickLength/2}px)`,
                    position: "absolute",
                    padding: 0
                }}>
                    {label}
                </div>
            </div>
        )
    }

    if (position === "bottom") {
        styles.height = `${offset + tickLength}px`,
        styles.bottom = - offset - 1.5 * tickLength;
        styles.left = 0;
        styles.right = 0;
        // styles.transform = 'translateY(-50%)';
        styles.borderLeft = `1px solid ${color}`;
        styles.borderRight = `1px solid ${color}`;

        return (
            <div style={styles}>
                <div ref={ref} style={{
                    width: '100%',
                    height: 'auto',
                    borderTop: `1px solid ${color}`,
                    top: `calc(100% - ${tickLength/2}px)`,
                    position: "absolute",
                    padding: 0
                }}>
                    {label}
                </div>
            </div>
        )
    }

    if (position === "right") {
        styles.width = `${offset + tickLength}px`,
        styles.right = - offset - 1.5 * tickLength;
        styles.top = 0;
        styles.bottom = 0;
        styles.height = (distance == "auto" ? "100%" : `${distance}px`);
        styles.borderTop = `1px solid ${color}`,
        styles.borderBottom = `1px solid ${color}`,
        styles.color = color;
        styles.textAlign = 'center';
        styles.display = 'flex';
        styles.flexDirection = 'row';

        return (
            <div style={styles}>
                <div ref={ref} style={{
                    height: '100%',
                    width: 'auto',
                    borderLeft: `1px solid ${color}`,
                    left: `calc(100% - ${tickLength/2}px)`,
                    position: "absolute",
                    padding: 0,
                    writingMode: 'vertical-rl'
                }}>
                    {label}
                </div>
            </div>
        )
    }

    if (position === "left") {
        styles.width = `${offset + tickLength}px`,
        styles.left = - offset - 1.5 * tickLength;
        styles.top = 0;
        styles.bottom = 0;
        styles.height = (distance == "auto" ? "100%" : `${distance}px`);
        styles.borderTop = `1px solid ${color}`,
        styles.borderBottom = `1px solid ${color}`,
        styles.color = color;
        styles.textAlign = 'center';
        styles.display = 'flex';
        styles.flexDirection = 'row';

        return (
            <div style={styles}>
                <div ref={ref} style={{
                    height: '100%',
                    width: 'auto',
                    borderRight: `1px solid ${color}`,
                    right: `calc(100% - ${tickLength/2}px)`,
                    position: "absolute",
                    padding: 0,
                    writingMode: 'vertical-rl'
                }}>
                    {label}
                </div>
            </div>
        )
    }

};

export default Dimension;