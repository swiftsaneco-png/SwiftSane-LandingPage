import { useEffect, useState } from 'react';

const MouseGradient = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex: 0,
                background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(253, 245, 166, 0.15) 0%,
          rgba(184, 135, 70, 0.1) 35%,
          rgba(7, 44, 80, 0.05) 70%,
          transparent 100%)`
            }}
        />
    );
};

export default MouseGradient;
