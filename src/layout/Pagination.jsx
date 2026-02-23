import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  
  function getPageNumbers() {
    const maxVisible = 5; 
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage <= half) {
      end = Math.min(totalPages, maxVisible);
    } else if (currentPage + half >= totalPages) {
      start = Math.max(1, totalPages - maxVisible + 1);
    }

    const pageNumbers = [];
    for(let i =  start; i <= end; i++) {
        pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div class="flex items-center justify-center w-[313px] h-[74px] rounded-[6.73px]  
    flex-row gap-[2px] mx-auto">
      
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        class="w-[84px] h-[74px] border-[1px] px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 
        transition text-[#BDBDBD] border-[#BDBDBD] bg-[#FFFFFF]"
      >
        Prev
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          class={`w-[46px] h-[74px] border-[1px] px-3 py-1 border rounded text-sm transition border-[#BDBDBD] text-[#BDBDBD] ${
            currentPage === page
              ? 'bg-blue-500 text-white border-blue-500'
              : 'hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        class="w-[84px] h-[74px] border-[1px] px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 
        transition text-[#BDBDBD] border-[#BDBDBD] bg-[#FFFFFF]"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;