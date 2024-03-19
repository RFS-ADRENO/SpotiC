import { useRef } from "react";
import { Link } from "react-router-dom";
import * as Icons from "../../components/Icons";
import { useLayoutStore } from "../../stores/layout";

export default function HomeMain() {
    const mainTabWidth = useLayoutStore((s) => s.mainTabWidth);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative px-6 mt-2" ref={containerRef}>
            <div
                className="sticky flex gap-2 text-sm top-0"
            >
                <button className="bg-white text-black rounded-full py-1 px-3 hover:opacity-95 transition-all">
                    All
                </button>
                <button className="bg-[hsla(0,0%,100%,.07)] hover:bg-[hsla(0,0%,100%,0.1)] text-white rounded-full py-1 px-3 hover:opacity-95 transition-all">
                    Music
                </button>
                <button className="bg-[hsla(0,0%,100%,.07)] hover:bg-[hsla(0,0%,100%,0.1)] text-white rounded-full py-1 px-3 hover:opacity-95 transition-all">
                    Podcasts
                </button>
            </div>
            <div className="mt-7">
                <div className="grid grid-cols-2 data-[large=true]:grid-cols-4 gap-3"data-large={mainTabWidth > 862}>
                    <Link
                        to={"/collection/tracks"}
                        className="relative group h-12 xl:h-16 flex items-center rounded-[4px] overflow-x-hidden"
                    >
                        <img
                            src="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                            alt="liked"
                            className="size-12 xl:size-16"
                        />
                        <div className="pl-2 xl:pl-4 flex items-center transition-colors duration-300 font-bold text-nowrap text-sm bg-[hsla(0,0%,100%,.07)] group-hover:bg-[hsla(0,0%,100%,.2)] size-full">
                            <span className="flex-1">Liked Songs</span>
                            <span className="mr-2 h-full flex items-center">
                                <div className="group/playbtn hidden group-hover:flex hover:scale-[1.04] hover:bg-[#1fdf64] rounded-full size-8 xl:size-12 bg-[#1ed760] items-center justify-center">
                                    <Icons.Play size={19} className="fill-black" />
                                </div>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
