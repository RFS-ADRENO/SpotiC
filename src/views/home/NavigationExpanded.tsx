import { Link } from "react-router-dom";
import * as Icons from "../../components/Icons";
import Tooltip from "../../components/Tooltip";
import { useLayoutStore } from "../../stores/layout";

export default function Navigation(props: React.ComponentProps<"div">) {
    const setPlaylistTabWidth = useLayoutStore(s => s.setPlaylistTabWidth);

    return (
        <div {...props}>
            <div className="min-w-70 w-full h-28 px-3 py-2 bg-primary rounded-lg">
                <ul>
                    <li className="h-12 px-3 py-1">
                        <Link
                            to="/"
                            className="group/nav-home relative size-full flex items-center"
                        >
                            {location.pathname == "/" ? (
                                <Icons.HomeSelected />
                            ) : (
                                <Icons.Home className="group-hover/nav-home:fill-white" />
                            )}
                            <span
                                className={`${
                                    location.pathname == "/"
                                        ? "text-white"
                                        : "text-secondary group-hover/nav-home:text-white duration-300"
                                } ml-5 font-bold`}
                            >
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="h-12 px-3 py-1">
                        <Link
                            to="/search"
                            className="group/nav-search relative size-full flex items-center"
                        >
                            {location.pathname == "/search" ? (
                                <Icons.SearchSelected />
                            ) : (
                                <Icons.Search className="group-hover/nav-search:fill-white" />
                            )}
                            <span
                                className={`${
                                    location.pathname == "/search"
                                        ? "text-white"
                                        : "text-secondary group-hover/nav-search:text-white duration-300"
                                }  ml-5 font-bold`}
                            >
                                Search
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div
                className="min-w-70 bg-primary rounded-lg mt-2"
                style={{
                    minHeight: "calc(100% - 7rem - 0.5rem)",
                }}
            >
                <div>
                    <div className="h-14 px-4 py-2">
                        <div className="size-full flex items-center">
                            <div className="size-full flex items-center justify-start">
                                <button className="group/btn-library relative h-full px-2 py-1 flex items-center" onClick={() => setPlaylistTabWidth(72)}>
                                    <Icons.LibrarySelected className="group-hover/btn-library:fill-white" />
                                    <span className="text-secondary group-hover/btn-library:text-white duration-300 ml-3 font-bold">
                                        Your Library
                                    </span>
                                    <Tooltip className="-left-1 bottom-12 hidden group-hover/btn-library:block">
                                        Collapse Your Library
                                    </Tooltip>
                                </button>
                            </div>
                            <span className="h-full">
                                <button className="group/btn-library relative w-8 h-full px-2 py-1 flex items-center rounded-full hover:bg-[#1a1a1a]">
                                    <Icons.Plus className="group-hover/btn-library:fill-white size-4" />
                                    <Tooltip className="-left-16 bottom-11 hidden group-hover/btn-library:block">
                                         Create playlist or folder
                                    </Tooltip>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
