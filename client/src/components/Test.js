import React from "react";
import FilteredProps from "./FilteredProps";

function Test() {
  return (
    <div>
      <FilteredProps
        type="house"
        transactionType="rent"
        maxPrice={20000000}
        minPrice={1200}
        maxArea={500}
        minArea={160}
        location="AlBireh"
      />
    </div>
  );
}

export default Test;
