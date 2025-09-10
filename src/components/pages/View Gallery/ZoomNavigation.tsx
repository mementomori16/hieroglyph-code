import React, { useState, useEffect, useRef, useCallback } from 'react';
//import { TransformState } from 'react-zoom-pan-pinch'; // Removed incorrect import
import './ZoomNavigation.scss';

interface TransformState { // Defined the interface
    scale: number;
    positionX: number;
    positionY: number;
}

interface ZoomNavigationProps {
    transform: TransformState | null;
    largeImageRef: React.RefObject<HTMLImageElement>;
}

const ZoomNavigation: React.FC<ZoomNavigationProps> = ({ transform, largeImageRef }) => {
    const navigationRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 20, y: 20 });
    const [isVisible, setIsVisible] = useState(false);
    const navigationCanvasRef = useRef<HTMLCanvasElement>(null);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        const startX = e.clientX - position.x;
        const startY = e.clientY - position.y;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX - startX,
                y: e.clientY - startY,
            });
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [position.x, position.y]);

    useEffect(() => {
        if (transform && transform.scale > 1.2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [transform?.scale]);

    useEffect(() => {
        if (navigationCanvasRef.current && largeImageRef.current && transform) {
            const navCtx = navigationCanvasRef.current.getContext('2d');
            const largeImage = largeImageRef.current;
            const navWidth = navigationCanvasRef.current.width;
            const navHeight = navigationCanvasRef.current.height;
            const imageWidth = largeImage.naturalWidth;
            const imageHeight = largeImage.naturalHeight;

            if (!navCtx) return;

            navCtx.clearRect(0, 0, navWidth, navHeight);
            navCtx.drawImage(largeImage, 0, 0, navWidth, navHeight);

            const visibleWidth = navWidth / transform.scale;
            const visibleHeight = navHeight / transform.scale;
            const translateXRatio = transform.positionX / (imageWidth * (transform.scale - 1) || 1);
            const translateYRatio = transform.positionY / (imageHeight * (transform.scale - 1) || 1);

            const rectX = -translateXRatio * navWidth;
            const rectY = -translateYRatio * navHeight;

            navCtx.strokeStyle = 'white';
            navCtx.lineWidth = 2;
            navCtx.strokeRect(rectX, rectY, visibleWidth, visibleHeight);
        }
    }, [transform, largeImageRef]);


    if (!isVisible) {
        return null;
    }

    return (
        <div
            ref={navigationRef}
            className="zoomNavigation"
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
            }}
            onMouseDown={handleMouseDown}
        >
            <canvas
                ref={navigationCanvasRef}
                width={150}
                height={100}
                className="zoomNavigationCanvas"
            />
        </div>
    );
};

export default ZoomNavigation;
