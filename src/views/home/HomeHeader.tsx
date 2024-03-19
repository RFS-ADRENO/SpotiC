import * as Icons from "../../components/Icons";
import Tooltip from "../../components/Tooltip";

export default function HomeHeader() {
    return (
        <header className="flex justify-between items-center px-6 py-4">
            <div className="flex gap-2">
                <button className="group relative size-8 flex justify-center items-center bg-[rgba(0,0,0,0.7)] rounded-full">
                    <Icons.Back size={16} className="fill-white" />
                    <Tooltip className="hidden group-hover:block top-10">Go back</Tooltip>
                </button>
                <button className="group relative size-8 flex justify-center items-center bg-[rgba(0,0,0,0.7)] rounded-full">
                    <Icons.Forward size={16} className="fill-white" />
                    <Tooltip className="hidden group-hover:block top-10">Go forward</Tooltip>
                </button>
            </div>
            <div className="flex items-center gap-2">
                <div className="group relative size-8">
                    <button className="size-8 bg-[rgba(0,0,0,.54)] hover:bg-[rgba(0,0,0,.72)] hover:scale-[1.1] rounded-full active:bg-[rgba(0,0,0,.54)] active:scale-100 active:opacity-70 flex justify-center items-center">
                        <Icons.Bell className="fill-subdued group-hover:fill-white transition-none" size={16} />
                    </button>
                    <Tooltip className="hidden group-hover:block top-10 -right-7">
                        What's New
                    </Tooltip>
                </div>
                <div className="group relative size-8">
                    <button className="size-8 bg-[rgba(0,0,0,.54)] hover:bg-[rgba(0,0,0,.72)] hover:scale-[1.04] rounded-full active:bg-[rgba(0,0,0,.54)] active:scale-100 active:opacity-70"></button>
                    <Tooltip className="hidden group-hover:block top-10 -right-[18px]">
                        Tri Dung
                    </Tooltip>
                </div>
            </div>
        </header>
    );
}
