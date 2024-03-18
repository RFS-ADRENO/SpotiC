import { useEffect, useRef, useState } from "react";

type TProps = {
    position: number;
    height?: number;
    onSeek?: (n: number) => void;
    radius?: number;
};

export default function Seekbar(props: TProps) {
    const seekbarRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState(props.position);
    const [isHolding, setIsHolding] = useState(false);

    const height = props.height ?? 4;
    const radius = props.radius ?? 6;

    function calculateNextPosition(mousePosX: number) {
        if (seekbarRef.current == null) return;
        const { x, width } = seekbarRef.current.getBoundingClientRect();

        const newPos =
            mousePosX <= x ? 0 : mousePosX >= x + width ? 100 : ((mousePosX - x) / width) * 100;

        setPos(newPos);
    };

    useEffect(() => {
        function handleMouseUp() {
            setIsHolding(false);
        }

        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            if (isHolding) calculateNextPosition(e.x);
        }

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isHolding]);

    function handleMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        calculateNextPosition(e.clientX);
        setIsHolding(true);
    }

    return (
        <div
            ref={seekbarRef}
            className="relative w-full flex items-center select-none"
            style={{
                height: radius * 2 > height ? radius * 2 : height,
            }}
            onMouseDown={handleMouseDown}
        >
            <div
                className="relative w-full bg-[hsla(0,0%,100%,.3);] rounded-full overflow-hidden"
                style={{
                    height,
                }}
            >
                <div
                    className="w-full bg-[#1db954] absolute"
                    style={{
                        height,
                        left: `-${100 - pos}%`,
                    }}
                ></div>
            </div>
            <div
                className="absolute bg-white rounded-full cursor-pointer"
                style={{
                    height: radius * 2,
                    width: radius * 2,
                    left: `calc(${pos}% - ${radius}px)`,
                }}
            ></div>
        </div>
    );
}
