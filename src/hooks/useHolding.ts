import { useEffect, useState } from "react";

// react refs
type THoldingProps = React.RefObject<HTMLElement>;

export function useHolding(props: THoldingProps) {
    const [holding, setHolding] = useState(false);
    // console.log(holding);

    useEffect(() => {
        console.log(2);
        const handleMouseUpAndDragend = () => {
            setHolding(false);
        };

        document.addEventListener("mouseup", handleMouseUpAndDragend);

        return () => {
            document.removeEventListener("mouseup", handleMouseUpAndDragend);
        };
    }, []);

    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
            if (e.button == 0) setHolding(true);
        };

        if (props.current) {
            props.current.addEventListener("mousedown", handleMouseDown);
        }

        return () => {
            if (props.current) {
                props.current.removeEventListener("mousedown", handleMouseDown);
            }
        };
    }, [props]);

    return holding;
}
