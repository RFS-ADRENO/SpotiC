import React from "react";
import ContextMenu from "../../components/ContextMenu";
import Seekbar from "../../components/Seekbar";
import * as Icons from "../../components/Icons";

import { SortBy, ViewAs } from "../../enum";

type TProps = {
    showFilterContextMenu: boolean;
    sortBy: SortBy;
    setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
    viewAs: ViewAs;
    setViewAs: React.Dispatch<React.SetStateAction<ViewAs>>;
};

export default function FilterContextMenu({
    showFilterContextMenu,
    sortBy,
    setSortBy,
    viewAs,
    setViewAs,
}: TProps) {
    return (
        <ContextMenu
            className="right-0 top-10 hidden data-[open=true]:block w-40"
            data-open={showFilterContextMenu}
        >
            <div className="p-1">
                <div className="font-bold text-[11px] text-secondary p-3 pr-2 h-10 flex items-center">
                    Sort by
                </div>
                <ul>
                    <li>
                        <button
                            className="cursor-default hover:bg-[hsla(0,0%,100%,.1)] flex items-center justify-between w-full p-3 pr-2 data-[selected=true]:text-[#1ed760] h-10"
                            onClick={() => setSortBy(SortBy.Recents)}
                            data-selected={sortBy == SortBy.Recents}
                        >
                            <span className="text-sm">Recents</span>
                            {sortBy == SortBy.Recents && (
                                <Icons.Tick size={16} className="fill-[#1ed760]" />
                            )}
                        </button>
                    </li>
                    <li>
                        <button
                            className="cursor-default hover:bg-[hsla(0,0%,100%,.1)] flex items-center justify-between w-full p-3 pr-2 data-[selected=true]:text-[#1ed760] h-10"
                            onClick={() => setSortBy(SortBy.RecentlyAdded)}
                            data-selected={sortBy == SortBy.RecentlyAdded}
                        >
                            <span className="text-sm">Recently Added</span>
                            {sortBy == SortBy.RecentlyAdded && (
                                <Icons.Tick size={16} className="fill-[#1ed760]" />
                            )}
                        </button>
                    </li>
                    <li>
                        <button
                            className="cursor-default hover:bg-[hsla(0,0%,100%,.1)] flex items-center justify-between w-full p-3 pr-2 data-[selected=true]:text-[#1ed760] h-10"
                            onClick={() => setSortBy(SortBy.Alphabetical)}
                            data-selected={sortBy == SortBy.Alphabetical}
                        >
                            <span className="text-sm">Alphabetical</span>
                            {sortBy == SortBy.Alphabetical && (
                                <Icons.Tick size={16} className="fill-[#1ed760]" />
                            )}
                        </button>
                    </li>
                    <li>
                        <button
                            className="cursor-default hover:bg-[hsla(0,0%,100%,.1)] flex items-center justify-between w-full p-3 pr-2 data-[selected=true]:text-[#1ed760] h-10"
                            onClick={() => setSortBy(SortBy.Creator)}
                            data-selected={sortBy == SortBy.Creator}
                        >
                            <span className="text-sm">Creator</span>
                            {sortBy == SortBy.Creator && (
                                <Icons.Tick size={16} className="fill-[#1ed760]" />
                            )}
                        </button>
                    </li>
                </ul>
            </div>
            <div className="p-1">
                <div className="font-bold text-[11px] text-secondary p-3 pr-2 h-10 flex items-center">
                    View as
                </div>
                <ul>
                    <li>
                        <button
                            className="cursor-default hover:bg-[hsla(0,0%,100%,.1)] flex items-center justify-between gap-3 w-full p-3 pr-2 data-[selected=true]:text-[#1ed760] h-10"
                            onClick={() => setViewAs(ViewAs.Compact)}
                            data-selected={viewAs == ViewAs.Compact}
                        >
                            <Icons.Compact
                                size={16}
                                className={`${
                                    viewAs == ViewAs.Compact ? "fill-[#1ed760]" : "fill-white"
                                } transition-none`}
                            />
                            <span className="text-sm flex-1 text-start">Compact</span>
                            {viewAs == ViewAs.Compact && (
                                <Icons.Tick size={16} className="fill-[#1ed760]" />
                            )}
                        </button>
                    </li>
                    <li>
                        <button
                            className="cursor-default hover:bg-[hsla(0,0%,100%,.1)] flex items-center justify-between gap-3 w-full p-3 pr-2 data-[selected=true]:text-[#1ed760] h-10"
                            onClick={() => setViewAs(ViewAs.List)}
                            data-selected={viewAs == ViewAs.List}
                        >
                            <Icons.List
                                size={16}
                                className={`${
                                    viewAs == ViewAs.List ? "fill-[#1ed760]" : "fill-white"
                                } transition-none`}
                            />
                            <span className="text-sm flex-1 text-start">List</span>
                            {viewAs == ViewAs.List && (
                                <Icons.Tick size={16} className="fill-[#1ed760]" />
                            )}
                        </button>
                    </li>
                    <li>
                        <button
                            className="cursor-default hover:bg-[hsla(0,0%,100%,.1)] flex items-center justify-between gap-3 w-full p-3 pr-2 data-[selected=true]:text-[#1ed760] h-10"
                            onClick={() => setViewAs(ViewAs.Grid)}
                            data-selected={viewAs == ViewAs.Grid}
                        >
                            <Icons.Grid
                                size={16}
                                className={`${
                                    viewAs == ViewAs.Grid ? "fill-[#1ed760]" : "fill-white"
                                } transition-none`}
                            />
                            <span className="text-sm flex-1 text-start">Grid</span>
                            {viewAs == ViewAs.Grid && (
                                <Icons.Tick size={16} className="fill-[#1ed760]" />
                            )}
                        </button>
                    </li>
                    {viewAs == ViewAs.Grid && (
                        <li>
                            <div className="p-3 pt-1">
                                <Seekbar position={50} />
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </ContextMenu>
    );
}
