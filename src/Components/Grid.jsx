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
      ? "Grid: 1 column, 6 rows "
      : height >= 700
      ? "Grid: 1 column, 5 rows"
      : "Grid: 1 column, 4 rows"
      : breakpoint === 1
      ? "Grid: 2 columns, 3 rows"
      : breakpoint === 2
      ? "Grid: 3 columns, 2 rows"
      : "Grid: 4 columns, 2 row";
    return (
        <>
            <h1>Responsive Grid</h1>
            <div className="grid-details">
            <p>{gridDescription}</p>
                <p>Screen: {screenType}</p>
            </div>
            <div className="grid">
                <div><img src="https://placehold.co/600x400" alt="" /></div>
                <div><img src="https://placehold.co/600x400" alt="" /></div>
                <div><img src="https://placehold.co/600x400" alt="" /></div>
                <div><img src="https://placehold.co/600x400" alt="" /></div>
                <div><img src="https://placehold.co/600x400" alt="" /></div>
                <div><img src="https://placehold.co/600x400" alt="" /></div>
                <div><img src="https://placehold.co/600x400" alt="" /></div>
                <div><img src="https://placehold.co/600x400" alt="" /></div>
            </div>
            </>
    )
}

export default Grid
