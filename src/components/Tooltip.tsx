type TProps = React.ComponentProps<"div">;

export default function Tooltip(props: TProps) {
    return (
        <div {...props} className={`w-max text-sm bg-[rgb(44,44,44)] rounded-[4px] animate-tooltip-fade-in opacity-0 px-2 py-1 z-10 absolute ${props.className ?? ""}`}>
            {props.children}
        </div>
    );
}
