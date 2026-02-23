import { useState } from "react";
import { LayoutGrid, List } from 'lucide-react';

function FilterBar({ totalResults = 12 }) {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Popularity");
    const sortOptions = ['Popularity', 'Price: Low to High', 'Price: High to Low', 'Newest'];

    return (
        <main class='flex w-[400px] h-[216px] bg-[#FFFFFF] justify-center [@media(min-width:1024px)]:w-[1024px] 
        [@media(min-width:1024px)]:h-[128px]'>
            <div class='flex flex-col w-[252px] h-[168px] gap-[24px] items-center [@media(min-width:1024px)]:flex
            [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:h-[98px]
            [@media(min-width:1024px)]:justify-between'>
                <h6 class='w-[166px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] 
                [@media(min-width:1024px)]:ml-[20px]'>
                    Showing all {totalResults} results
                </h6>
                <div class='flex flex-row w-[177px] h-[46px] px-[1px] gap-[15px] justify-center items-center
                [@media(min-width:1024px)]:gap-[10px]'>
                    <h6>Views: </h6>
                    <div class='flex flex-row w-[107px] h-[46px] gap-[15px]'>
                        <div class='flex w-[46px] h-[46px] border-[1px] padding-[15px] border-[#ECECEC] justify-center
                        items-center'>
                            <LayoutGrid class='w-[16px] h-[16px]' />
                        </div>
                        <div class='flex w-[46px] h-[46px] border-[1px] padding-[15px] border-[#ECECEC] justify-center
                        items-center'>
                            <List class='w-[16px] h-[16px]' />
                        </div>
                    </div>
                </div>
                
                <div class='flex flex-row w-[252px] h-[50px] px-[1px] gap-[15px]'>
                    <button onClick={() => setIsSortOpen(!isSortOpen)}
                    class='flex flex-row w-[141px] h-[50px] rounded-[5px] border-[1px] border-[#DDDDDD] bg-[#F9F9F9]'>
                        <span class='flex flex-row w-[74px] h-[28px] mt-[11px] ml-[18px] font-[400] text-[14px] 
                        text-[#DDDDDD]'>
                            {selectedSort}
                        </span>
                        <svg class={`w-4 h-4 transition-transform text-[#DDDDDD] mt-[16px] ${isSortOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="5 5 20 20">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isSortOpen && (
                        <div>
                            {sortOptions.map((option) =>(
                                <button key={option} onclick={() => {setSelectedSort(option); setIsSortOpen(false)}}
                                class='text-[12px]'/*TO DO: correct the dropdown menu*/>
                                    {option} 
                                </button>
                            ))
                            }
                        </div>
                    )}
                    <button class='flex flex-row w-[94px] h-[50px] rounded-[5px] mx-[20px] gap-[10px] 
                    bg-[#23A6F0] items-center justify-center'>
                        <span class='w-[40px] h-[24px] font-[700] text-[14px] text-center text-[#FFFFFF]'>
                            Filter
                        </span>
                    </button>
                </div>
                
            </div>
        </main>
    )
}

export default FilterBar;   