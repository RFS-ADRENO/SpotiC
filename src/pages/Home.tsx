import * as Icons from "../components/Icons";
import { Link } from "react-router-dom";
import Tooltip from "../components/Tooltip";
import { useLocation } from "react-router-dom";
import { useLayoutStore } from "../stores/layout";
import { useHolding } from "../hooks/useHolding";
import { useEffect, useRef } from "react";

export default function Home() {
    const location = useLocation();
    const { playlistTabWidth, mainTabWidth, playingTabWidth, setPlaylistTabWidth } = useLayoutStore();
    const resizeBarOneRef = useRef<HTMLDivElement>(null);
    const resizeBarOneIsHolding = useHolding(resizeBarOneRef);

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            if (resizeBarOneIsHolding) {
                if (e.x > 280) setPlaylistTabWidth(e.x > 420 ? 420 : e.x);
                else if (e.x >= 180) setPlaylistTabWidth(280);
                else if (e.x <= 170) setPlaylistTabWidth(72);
            }
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.body.style.cursor = resizeBarOneIsHolding ? "grabbing" : "default";

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        }
    }, [resizeBarOneIsHolding]);

    return (
        <div className={`p-2 h-screen bg-black text-white ${resizeBarOneIsHolding && "pointer-events-none"}`}>
            <div
                style={{
                    height: "calc(100% - 4.5rem - 0.5rem)",
                }}
            >
                <div className="flex size-full">
                    <div className="min-w-18 transition-all" style={{
                        width: `${playlistTabWidth}px`
                    }}>
                        <div className="w-full h-28 px-3 py-2 bg-primary rounded-lg">
                            <ul>
                                <li className="h-12 px-3 py-1">
                                    <Link
                                        to="/"
                                        className="group/nav-home relative size-full flex items-center"
                                    >
                                        {location.pathname == "/" ? (
                                            <Icons.HomeSelected />
                                        ) : (
                                            <Icons.Home />
                                        )}
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
                                        <button className="group/btn-library relative size-full px-2 py-1 flex items-center">
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
                    <div className={`w-2 flex group/resizeone justify-center items-center ${resizeBarOneIsHolding ? "cursor-grabbing" : "cursor-grab"} select-none`} draggable="false" ref={resizeBarOneRef}>
                        <div className={`w-px h-[calc(100%-16px)] rounded-[1px] transition-[background-color] duration-150 group-hover/resizeone:bg-[rgb(114,114,114)] ${resizeBarOneIsHolding && "bg-white"}`}></div>
                    </div>
                    <div className="flex-1 bg-primary rounded-lg overflow-hidden">
                        <div
                            className="h-83 bg-gradient-to-b from-[rgb(83,83,83)] from-10% brightness-[0.4]"
                            style={
                                {
                                    // backgroundColor: "rgb(83, 83, 83)",
                                }
                            }
                        ></div>
                    </div>
                    {/* <div className="w-2"></div>
                    <div className="min-w-70"></div> */}
                </div>
            </div>
            <div className="mt-2 h-18 bg-black"></div>
        </div>
    );
}
