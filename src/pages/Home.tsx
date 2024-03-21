import { useEffect, useRef } from "react";
import { useHolding, useWindowDimensions } from "../hooks";
import { useLayoutStore } from "../stores/layout";
import Navigation from "../views/home/Navigation";
import NavigationExpanded from "../views/home/NavigationExpanded";
import HomeHeader from "../views/home/HomeHeader";
import HomeMain from "../views/home/HomeMain";

export default function Home() {
    const { width } = useWindowDimensions();
    const {
        playlistTabWidth,
        mainTabWidth,
        playingTabWidth,
        setPlaylistTabWidth,
        setMainTabWidth,
    } = useLayoutStore();
    const resizeBarOneRef = useRef<HTMLDivElement>(null);
    const resizeBarOneIsHolding = useHolding(resizeBarOneRef);
    const mainTabRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMainTabWidth(mainTabRef.current!.getBoundingClientRect().width);
    }, [playlistTabWidth]);

    function updatePlaylistTabWidth(n: number) {
        setPlaylistTabWidth(n);
    }

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            if (resizeBarOneIsHolding) {
                if (e.x > 584 && width >= 1024) updatePlaylistTabWidth(e.x > 592 ? 592 : e.x);
                else if (e.x > 520 && width >= 1024) updatePlaylistTabWidth(584);
                else if (e.x <= 170) updatePlaylistTabWidth(72);
                else if (playlistTabWidth == 584) {
                    if (e.x <= 510 && e.x >= 500 && width >= 1024) updatePlaylistTabWidth(420);
                    else if (e.x > 280 && e.x <= 420) updatePlaylistTabWidth(e.x);
                } else {
                    if (e.x > 280) updatePlaylistTabWidth(e.x > 420 ? 420 : e.x);
                    else if (e.x >= 180) updatePlaylistTabWidth(280);
                }
            }
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.body.style.cursor = resizeBarOneIsHolding ? "grabbing" : "default";

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [playlistTabWidth, resizeBarOneIsHolding]);

    return (
        <div
            className={`p-2 h-screen bg-black text-white ${
                resizeBarOneIsHolding && "pointer-events-none"
            }`}
        >
            <div
                style={{
                    height: "calc(100% - 4.5rem - 0.5rem)",
                }}
            >
                <div className="flex size-full">
                    <div
                        className="min-w-18"
                        style={{
                            width: `${playlistTabWidth}px`,
                            transition: playlistTabWidth > 72 ? "width" : "none",
                        }}
                    >
                        {playlistTabWidth == 72 ? (
                            <Navigation className="size-full" />
                        ) : (
                            <NavigationExpanded className="size-full" />
                        )}
                    </div>
                    <div
                        className={`w-2 flex group/resizeone justify-center items-center ${
                            resizeBarOneIsHolding ? "cursor-grabbing" : "cursor-grab"
                        } select-none`}
                        draggable="false"
                        ref={resizeBarOneRef}
                    >
                        <div
                            className={`w-px h-[calc(100%-16px)] rounded-[1px] transition-[background-color] duration-150 group-hover/resizeone:bg-[rgb(114,114,114)] ${
                                resizeBarOneIsHolding && "bg-white"
                            }`}
                        ></div>
                    </div>
                    <div className="flex-1 bg-primary rounded-lg overflow-hidden" ref={mainTabRef}>
                        <div className="h-83 bg-gradient-to-b from-[rgba(83,83,83,0.2)] from-10%">
                            <HomeHeader />
                            <HomeMain />
                        </div>
                    </div>
                    {/* <div className="w-2"></div>
                    <div className="min-w-70"></div> */}
                </div>
            </div>
            <div className="mt-2 h-18 bg-black"></div>
        </div>
    );
}
