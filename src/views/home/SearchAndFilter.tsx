import React, { useEffect, useState } from "react";
import { useLayoutStore } from "../../stores/layout";
import * as Icons from "../../components/Icons";
import Tooltip from "../../components/Tooltip";

import { SortBy, ViewAs } from "../../enum";
import FilterContextMenu from "./FilterContextMenu";

type TProps = {
    sortBy: SortBy;
    setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
    viewAs: ViewAs;
    setViewAs: React.Dispatch<React.SetStateAction<ViewAs>>;
};

export default function SearchAndFilter({ sortBy, setSortBy, viewAs, setViewAs }: TProps) {
    const playlistTabWidth = useLayoutStore((s) => s.playlistTabWidth);
    const [searchOpen, setSearchOpen] = useState(false);
    const [showFilterContextMenu, setShowFilterContextMenu] = useState(false);

    useEffect(() => {
        if (searchOpen) document.getElementById("searchLibrary")!.focus();
    }, [searchOpen]);

    return (
        <div className="h-[34px] pt-0.5 pr-1 pl-2 flex">
            <div className="relative h-8 mr-auto data-[open=true]:min-w-47" data-open={searchOpen}>
                <button
                    className="group/lib-search size-8 hidden data-[open=true]:flex justify-center items-center rounded-full transition-transform hover:bg-[#232323] relative"
                    onClick={() => setSearchOpen(true)}
                    data-open={searchOpen == false}
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
                    className="data-[open=false]:w-0 transition-all flex absolute w-47 top-0 data-[large-screen=true]:right-0 data-[large-screen=false]:left-0 bg-[#2A2929] overflow-hidden rounded-[4px] items-center"
                    data-open={searchOpen}
                    data-large-screen={playlistTabWidth >= 584}
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
    );
}
