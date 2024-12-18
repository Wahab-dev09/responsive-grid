import "./Grid.css"
import { useEffect, useState } from "react";
import { useResponsiveJSX } from './ResponsiveJSX';
const Grid = () => {
    const breakpoint = useResponsiveJSX([500, 800, 1000]);
    const [height, setHeight] = useState(window.innerHeight);

    // Track height dynamically
    useEffect(() => {
      const updateHeight = () => setHeight(window.innerHeight);
  
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, []);
    const screenType =    breakpoint === 0 ? "Mobile" : breakpoint === 1 ? "Tablet" : breakpoint === 2 ? "Laptop" : "Desktop";
    const gridDescription =
    breakpoint === 0
    ? height >= 800
      ? "1 column, 6 rows "
      : height >= 700
      ? "1 column, 5 rows"
      : "1 column, 4 rows"
      : breakpoint === 1
      ? "2 columns, 3 rows"
      : breakpoint === 2
      ? "3 columns, 2 rows"
      : "4 columns, 2 row";
    return (
        <>
            <h1>Responsive Grid</h1>
            <div className="grid-details">
            <p><span>Grid :</span><span>{gridDescription}</span></p>
            <p><span>Screen :</span><span>{screenType}</span></p>
            </div>
            <div className="grid">
                <div>Box 1</div>
                <div>Box 2</div>
                <div>Box 3</div>
                <div>Box 4</div>
                <div>Box 5</div>
                <div>Box 6</div>
                <div>Box 7</div>
                <div>Box 8</div>
            </div>
            </>
    )
}

export default Grid
