import { useRef } from "react";
import { Link } from "react-router-dom";
import * as Icons from "../../components/Icons";
import { useLayoutStore } from "../../stores/layout";

export default function HomeMain() {
    const mainTabWidth = useLayoutStore((s) => s.mainTabWidth);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative px-6 mt-2" ref={containerRef}>
            <div className="sticky flex gap-2 text-sm top-0">
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
                <div
                    className="grid data-[large=false]:grid-cols-2 data-[large=true]:grid-cols-4 gap-3"
                    data-large={mainTabWidth > 856}
                >
                    <Link
                        to={"/collection/tracks"}
                        className="relative group data-[large=false]:h-12 data-[large=true]:h-16 flex items-center rounded-[4px] overflow-x-hidden"
                        data-large={mainTabWidth > 856}
                    >
                        <img
                            src="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                            alt="liked"
                            className="data-[large=false]:size-12 data-[large=true]::size-16"
                            data-large={mainTabWidth > 856}
                        />
                        <div
                            className="data-[large=false]:pl-2 data-[large=true]:pl-4 flex items-center transition-colors duration-300 font-bold text-nowrap text-sm bg-[hsla(0,0%,100%,.07)] group-hover:bg-[hsla(0,0%,100%,.2)] size-full"
                            data-large={mainTabWidth > 856}
                        >
                            <span className="flex-1">Liked Songs</span>
                            <span className="mr-2 h-full flex items-center">
                                <div
                                    className="group/playbtn hidden group-hover:flex hover:scale-[1.04] hover:bg-[#1fdf64] rounded-full data-[large=false]:size-8 data-[large=true]::size-12 bg-[#1ed760] items-center justify-center"
                                    data-large={mainTabWidth > 856}
                                >
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
