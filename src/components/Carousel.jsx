import { useState, useEffect, Children } from "react";

function Carousel({ sectionName, children }){
  const items = Children.toArray(children);

  const prev = () => {
    let carouselContainer = document.getElementById(sectionName + "_carousel");
    const decrementVal = carouselContainer.scrollWidth/items.length
    let newScrollPos = carouselContainer.scrollLeft - decrementVal;
    // if(newScrollPos <= 0) newScrollPos = carouselContainer.scrollWidth; // Loop around; needs fixing
    carouselContainer.scrollTo({left: newScrollPos, behavior: "smooth"});
  }

  const next = () => {
    let carouselContainer = document.getElementById(sectionName + "_carousel");
    const incrementVal = carouselContainer.scrollWidth/items.length
    let newScrollPos = carouselContainer.scrollLeft + incrementVal;
    // if(newScrollPos >= carouselContainer.scrollWidth) newScrollPos = 0; // Loop around; needs fixing
    carouselContainer.scrollTo({left: newScrollPos, behavior: "smooth"});
  }

  return (
    <div className="w-full flex flex-row">
        <button type="button" onClick={prev} className="top-1/2 left-4 text-gray-500 hover:bg-gray-200/50 p-2 rounded-full z-10">
          &#10094;
        </button>
      <div id={sectionName + "_carousel"} className="snap-x snap-mandatory scrollbar-minimal flex w-full max-w overflow-x-auto overflow-y-hidden relative">
        {items.map((child, i) => (
          <div key={i} id={sectionName + i} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      <button onClick={next} className="top-1/2 right-4 text-gray-500 hover:bg-gray-200/50 p-2 rounded-full z-10">
          &#10095;
        </button>
    </div>
  );
};

export default Carousel;
