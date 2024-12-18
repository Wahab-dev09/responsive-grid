# Responsive Grid Project

<p align="left">
 <img src="https://github.com/user-attachments/assets/abd86a86-3122-4d94-8563-1028d4f5dd34" alt="Grid Image" width="50%" />
</p>

## Overview

A project showcasing a responsive grid system built with React and CSS. The layout adapts dynamically to different screen sizes and heights, featuring animations for smoother transitions and effects.

## File Descriptions

### `Grid.css`
- **Purpose:** Manages styles for the responsive grid and animations.
- **Details:**
  - Includes media queries for grid configurations at breakpoints (500px, 800px, 1000px).
  - Implements animations (`fadeIn`, `fadeLeft`, `fadeRight`) for grid and header transitions.
  - Defines grid item styling, heights, and visibility logic based on screen dimensions.

---

### `Grid.js`
- **Purpose:** Main React component rendering the grid and details.
- **Details:**
  - Uses the `useResponsiveJSX` hook to determine screen type (Mobile, Tablet, Laptop, Desktop) and the grid layout accordingly.
  - Dynamically adjusts grid rows/columns based on height and width.
  - Displays the grid and details (`Grid:` and `Screen:`) with proper alignment and styles.

---

### `useResponsiveJSX.js`
- **Purpose:** Custom hook for determining screen type via breakpoints.
- **Details:**
  - Accepts an array of breakpoints (e.g., `[500, 800, 1000]`).
  - Tracks window width and dynamically returns a screen type index.
  - Listens for `resize` events and updates the index in real time for consistent behavior.
