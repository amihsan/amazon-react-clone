import React, { useState } from "react";
import Rating from "@mui/material/Rating";

function ProductRating() {
  const [value, setValue] = useState(5);

  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}

export default ProductRating;
