import { Link } from "react-router-dom";
import Tooltip from "../../components/Tooltip";
import * as Icons from "../../components/Icons";
import { useLayoutStore } from "../../stores/layout";

export default function Navigation(props: React.ComponentProps<"div">) {
    const setPlaylistTabWidth = useLayoutStore(s => s.setPlaylistTabWidth);

    return (
        <div {...props}>
            <div className="w-full h-28 px-3 py-2 bg-primary rounded-lg">
                <ul>
                    <li className="h-12 px-3 py-1">
                        <Link
                            to="/"
                            className="group/nav-home relative size-full flex items-center"
                        >
                            {location.pathname == "/" ? <Icons.HomeSelected /> : <Icons.Home />}
                            <Tooltip className="left-8 hidden group-hover/nav-home:block">
                                Home
                            </Tooltip>
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
                                <Icons.Search />
                            )}
                            <Tooltip className="left-8 hidden group-hover/nav-search:block">
                                Search
                            </Tooltip>
                        </Link>
                    </li>
                </ul>
            </div>
            <div
                className="bg-primary rounded-lg mt-2"
                style={{
                    minHeight: "calc(100% - 7rem - 0.5rem)",
                }}
            >
                <div>
                    <div className="h-14 px-4 py-2">
                        <div className="size-full flex items-center justify-center">
                            <button className="group/btn-library relative size-full px-2 py-1 flex items-center" onClick={() => setPlaylistTabWidth(280)}>
                                <Icons.Library className="group-hover/btn-library:fill-white" />
                                <Tooltip className="left-12 hidden group-hover/btn-library:block">
                                    Expand Your Library
                                </Tooltip>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
