import { useState } from "react";
import { LayoutGrid, List } from 'lucide-react';

function FilterBar({ totalResults = 0 , sort, onSortChange, filterText, onFilterTextChange, onFilter}) {
    //const [isSortOpen, setIsSortOpen] = useState(false);
    //const [selectedSort, setSelectedSort] = useState("Popularity");
    const sortOptions = [
        {label: "Popularity", value: ""},
        {label: "Price: Low to High", value: "price:asc"},
        {label: "Price: High to Low", value: "price:desc"},
        {label: "Rating: Low to High", value: "rating:asc"},
        {label: "Rating: High to Low", value: "rating:desc"},
    ];

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
                
                <div className='flex flex-row gap-[8px] items-center flex-wrap justify-center'>

                    <input
                        type="text"
                        value={filterText}
                        onChange={(e) => onFilterTextChange(e.target.value)}
                        placeholder="Search products..."
                        className='h-[50px] px-[12px] rounded-[5px] border-[1px] border-[#DDDDDD]
                        bg-[#F9F9F9] text-[14px] text-[#737373] outline-none
                        [@media(min-width:1024px)]:w-[180px]'
                    />

                    <select
                        value={sort}
                        onChange={(e) => onSortChange(e.target.value)}
                        className='h-[50px] px-[12px] rounded-[5px] border-[1px] border-[#DDDDDD]
                        bg-[#F9F9F9] text-[14px] text-[#737373] outline-none cursor-pointer
                        [@media(min-width:1024px)]:w-[180px]'
                    >
                        {sortOptions.map((option) => (
                            <option key={option.label} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={onFilter}
                        className='h-[50px] px-[24px] rounded-[5px] bg-[#23A6F0] text-[#FFFFFF]
                        font-[700] text-[14px] cursor-pointer hover:bg-[#1a8fd1] transition-colors'
                    >
                        Filter
                    </button>
                </div>
                
            </div>
        </main>
    )
}

export default FilterBar;   