type TProps = React.ComponentProps<"div">;

export default function ContextMenu(props: TProps) {
    return (
        <div {...props} className={`text-sm bg-[rgb(44,44,44)] rounded-[4px] z-10 absolute ${props.className ?? ""}`}>
            {props.children}
        </div>
    );
}
