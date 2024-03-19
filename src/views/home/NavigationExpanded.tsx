import { Link } from "react-router-dom";
import * as Icons from "../../components/Icons";
import Tooltip from "../../components/Tooltip";
import { useLayoutStore } from "../../stores/layout";
import { useEffect, useState } from "react";
import { SortBy, ViewAs } from "../../enum";
import FilterContextMenu from "./FilterContextMenu";

export default function Navigation(props: React.ComponentProps<"div">) {
    const setPlaylistTabWidth = useLayoutStore((s) => s.setPlaylistTabWidth);
    const playlistTabWidth = useLayoutStore((s) => s.playlistTabWidth);
    const [searchOpen, setSearchOpen] = useState(false);
    const [showFilterContextMenu, setShowFilterContextMenu] = useState(false);
    const [sortBy, setSortBy] = useState<SortBy>(SortBy.Recents);
    const [viewAs, setViewAs] = useState<ViewAs>(ViewAs.List);

    useEffect(() => {
        if (searchOpen) document.getElementById("searchLibrary")!.focus();
    }, [searchOpen]);

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
                                <Icons.HomeSelected size={24} />
                            ) : (
                                <Icons.Home size={24} className="group-hover/nav-home:fill-white" />
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
                                <Icons.SearchSelected size={24} />
                            ) : (
                                <Icons.Search
                                    size={24}
                                    className="group-hover/nav-search:fill-white"
                                />
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
                    <div>
                        <div className="h-14 w-full flex items-center gap-2 px-4 py-2">
                            <div className="size-full flex items-center justify-start">
                                <button
                                    className="group/btn-library relative h-full px-2 py-1 flex items-center"
                                    onClick={() => setPlaylistTabWidth(72)}
                                >
                                    <Icons.LibrarySelected
                                        className="group-hover/btn-library:fill-white"
                                        size={24}
                                    />
                                    <span className="text-secondary group-hover/btn-library:text-white duration-300 ml-3 font-bold">
                                        Your Library
                                    </span>
                                    <Tooltip className="-left-1 bottom-12 hidden group-hover/btn-library:block">
                                        Collapse Your Library
                                    </Tooltip>
                                </button>
                            </div>
                            <span className="h-8">
                                <button className="group/btn-library relative size-8 px-2 py-1 flex items-center rounded-full hover:bg-[#1a1a1a]">
                                    <Icons.Plus
                                        className="group-hover/btn-library:fill-white size-4"
                                        size={16}
                                    />
                                    <Tooltip className="-left-16 bottom-11 hidden group-hover/btn-library:block">
                                        Create playlist or folder
                                    </Tooltip>
                                </button>
                            </span>
                            <span
                                className="h-8 hidden lg:block data-[hidden=true]:hidden"
                                data-hidden={playlistTabWidth > 420}
                            >
                                <button
                                    className="group/btn-library relative size-8 px-2 py-1 flex items-center rounded-full hover:bg-[#1a1a1a]"
                                    onClick={() => setPlaylistTabWidth(584)}
                                >
                                    <Icons.RightArrow
                                        className="fill-subdued group-hover/btn-library:fill-white size-4"
                                        size={16}
                                    />
                                    <Tooltip className="-left-16 bottom-11 hidden group-hover/btn-library:block">
                                        Show more
                                    </Tooltip>
                                </button>
                            </span>
                            <span
                                className="h-8 hidden lg:block data-[hidden=true]:hidden"
                                data-hidden={playlistTabWidth <= 420}
                            >
                                <button
                                    className="group/btn-library relative size-8 px-2 py-1 flex items-center rounded-full hover:bg-[#1a1a1a]"
                                    onClick={() => setPlaylistTabWidth(420)}
                                >
                                    <Icons.LeftArrow
                                        className="fill-subdued group-hover/btn-library:fill-white size-4"
                                        size={16}
                                    />
                                    <Tooltip className="-left-16 bottom-11 hidden group-hover/btn-library:block">
                                        Show more
                                    </Tooltip>
                                </button>
                            </span>
                        </div>
                        <div className="h-12 w-full flex items-center pl-4">
                            <div className="">
                                <button className="mr-2 px-3 py-1 bg-[#232323] text-[14px] rounded-full">
                                    Playlists
                                </button>
                                <button className="mr-2 px-3 py-1 bg-[#232323] text-[14px] rounded-full">
                                    Artists
                                </button>
                                <button className=" px-3 py-1 bg-[#232323] text-[14px] rounded-full">
                                    Albums
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="h-[34px] pt-0.5 pr-1 pl-2 flex">
                            <div
                                className="relative h-8 mr-auto data-[open=true]:min-w-47"
                                data-open={searchOpen}
                            >
                                <button
                                    className="group/lib-search size-8 flex justify-center items-center rounded-full transition-none hover:bg-[#232323] relative"
                                    onClick={() => setSearchOpen(true)}
                                >
                                    <Icons.Search
                                        size={16}
                                        className="group-hover/lib-search:fill-white transition-none"
                                    />
                                    <Tooltip className="-left-3 bottom-10 hidden group-hover/lib-search:block">
                                        Search in Your Library
                                    </Tooltip>
                                </button>
                                <div
                                    className="data-[open=false]:w-0 transition-all flex absolute w-47 inset-0 bg-[#2A2929] overflow-hidden rounded-[4px] items-center"
                                    data-open={searchOpen}
                                >
                                    <div className="min-w-8 min-h-8 flex justify-center items-center">
                                        <Icons.Search size={16} />
                                    </div>
                                    <input
                                        id="searchLibrary"
                                        type="text"
                                        maxLength={80}
                                        placeholder="Search in Your Library"
                                        className="placeholder:text-secondary bg-transparent pr-2 py-2 text-sm w-[calc(100%-2rem)] focus:outline-none"
                                        onBlur={() => setSearchOpen(false)}
                                        autoCapitalize="false"
                                        autoCorrect="false"
                                    />
                                </div>
                            </div>
                            <span className="py-1 pl-4 pr-3 flex-shrink min-w-0 flex items-center justify-center relative">
                                <button
                                    className="flex items-center justify-center w-full overflow-hidden group/list-filter hover:scale-[1.04] active:scale-100"
                                    onClick={() => setShowFilterContextMenu(!showFilterContextMenu)}
                                >
                                    <span className="text-secondary text-sm text-ellipsis whitespace-nowrap overflow-hidden flex-shrink min-w-0 group-hover/list-filter:text-white group-active/list-filter:text-secondary">
                                        {sortBy == SortBy.Recents
                                            ? "Recents"
                                            : sortBy == SortBy.RecentlyAdded
                                            ? "Recently Added"
                                            : sortBy == SortBy.Alphabetical
                                            ? "Alphabetical"
                                            : "Creator"}
                                    </span>
                                    <span className="ml-[5px] flex-shrink-0 fill-subdued group-hover/list-filter:fill-white group-active/list-filter:fill-subdued">
                                        {viewAs == ViewAs.Compact ? (
                                            <Icons.Compact size={16} className="transition-none" />
                                        ) : viewAs == ViewAs.List ? (
                                            <Icons.List size={16} className="transition-none" />
                                        ) : (
                                            <Icons.Grid size={16} className="transition-none" />
                                        )}
                                    </span>
                                </button>
                                <FilterContextMenu
                                    setSortBy={setSortBy}
                                    sortBy={sortBy}
                                    setViewAs={setViewAs}
                                    viewAs={viewAs}
                                    showFilterContextMenu={showFilterContextMenu}
                                />
                            </span>
                        </div>
                        <div className="mt-2">
                            <ul>
                                <li>
                                    <Link
                                        to={"/collection/tracks"}
                                        className="size-16 p-2 flex items-center"
                                    >
                                        <img
                                            src="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                                            alt="liked"
                                            height={48}
                                            width={48}
                                            className="rounded-[4px]"
                                        />
                                        <div className="ml-3">
                                            <div className="text-base text-nowrap">Liked Songs</div>
                                            <div className="text-secondary text-sm">
                                                <div className="text-nowrap">
                                                    Playlist • 0 songs
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
