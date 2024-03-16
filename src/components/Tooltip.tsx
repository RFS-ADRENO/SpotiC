type TProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Tooltip(props: TProps) {
    return (
        <div className={`w-max text-sm font-semibold bg-[rgb(44,44,44)] rounded-[4px] animate-tooltip-fade-in opacity-0 px-2 py-1 z-10 absolute ${props.className ?? ""}`}>
            {props.children}
        </div>
    );
}
