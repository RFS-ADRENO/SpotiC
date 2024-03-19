type TIconProps = React.ComponentProps<"svg"> & {
    size?: number;
};

export function Home(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`fill-secondary hover:fill-white transition-[fill] duration-300 ${
                props.className ?? ""
            }`}
            viewBox="0 0 24 24"
        >
            <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
        </svg>
    );
}

export function HomeSelected(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`fill-white ${props.className ?? ""}`}
            viewBox="0 0 24 24"
        >
            <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
        </svg>
    );
}

export function Search(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`fill-secondary hover:fill-white transition-[fill] duration-300 ${
                props.className ?? ""
            }`}
            viewBox="0 0 24 24"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
            </svg>
        </svg>
    );
}

export function SearchSelected(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`fill-white ${props.className ?? ""}`}
            viewBox="0 0 24 24"
        >
            <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path>
            <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
        </svg>
    );
}

export function Library(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`fill-[#A7A7A7] hover:fill-white transition-[fill] duration-300 ${
                props.className ?? ""
            }`}
            viewBox="0 0 24 24"
        >
            <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
        </svg>
    );
}

export function LibrarySelected(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`fill-[#A7A7A7] hover:fill-white transition-[fill] duration-300 ${
                props.className ?? ""
            }`}
            viewBox="0 0 24 24"
        >
            <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
        </svg>
    );
}

export function Plus(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`fill-[#A7A7A7] hover:fill-white transition-[fill] duration-300 ${
                props.className ?? ""
            }`}
            viewBox="0 0 16 16"
        >
            <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
        </svg>
    );
}

export function List(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`hover:fill-white transition-[fill] duration-300 ${props.className ?? ""}`}
            viewBox="0 0 16 16"
        >
            <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
        </svg>
    );
}

export function Compact(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`hover:fill-white transition-[fill] duration-300 ${props.className ?? ""}`}
            viewBox="0 0 16 16"
        >
            <path d="M15.5 13.5H.5V12h15v1.5zm0-4.75H.5v-1.5h15v1.5zm0-4.75H.5V2.5h15V4z"></path>
        </svg>
    );
}

export function Grid(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`hover:fill-white transition-[fill] duration-300 ${props.className ?? ""}`}
            viewBox="0 0 16 16"
        >
            <path d="M1 1h6v6H1V1zm1.5 1.5v3h3v-3h-3zM1 9h6v6H1V9zm1.5 1.5v3h3v-3h-3zM9 1h6v6H9V1zm1.5 1.5v3h3v-3h-3zM9 9h6v6H9V9zm1.5 1.5v3h3v-3h-3z"></path>
        </svg>
    );
}

export function Tick(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`transition-[fill] duration-300 ${props.className ?? ""}`}
            viewBox="0 0 16 16"
        >
            <path d="M15.53 2.47a.75.75 0 0 1 0 1.06L4.907 14.153.47 9.716a.75.75 0 0 1 1.06-1.06l3.377 3.376L14.47 2.47a.75.75 0 0 1 1.06 0z"></path>
        </svg>
    );
}

export function RightArrow(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`transition-[fill] duration-300 ${props.className ?? ""}`}
            viewBox="0 0 16 16"
        >
            <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path>
        </svg>
    );
}

export function LeftArrow(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`transition-[fill] duration-300 ${props.className ?? ""}`}
            viewBox="0 0 16 16"
        >
            <path d="M8.81 1A.749.749 0 0 0 7.53.47L0 7.99l7.53 7.521a.75.75 0 0 0 1.234-.815.75.75 0 0 0-.174-.243L2.87 8.74h12.38a.75.75 0 1 0 0-1.498H2.87l5.72-5.713c.14-.14.22-.331.22-.53z"></path>
        </svg>
    );
}

export function Back(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`transition-[fill] duration-300 ${props.className ?? ""}`}
            viewBox="0 0 16 16"
        >
            <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
        </svg>
    );
}

export function Forward(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`transition-[fill] duration-300 ${props.className ?? ""}`}
            viewBox="0 0 16 16"
        >
            <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
        </svg>
    );
}

export function Bell(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`transition-[fill] duration-300 ${props.className ?? ""}`}
            viewBox="0 0 16 16"
        >
            <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>
        </svg>
    );
}

export function Play(props: TIconProps) {
    const size = props.size ?? 24;
    return (
        <svg
            {...props}
            height={size}
            width={size}
            role="img"
            className={`transition-[fill] duration-300 ${props.className ?? ""}`}
            viewBox="0 0 16 16"
        >
            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
        </svg>
    );
}
