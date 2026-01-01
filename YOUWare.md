# Love Letter Website Guide

## Overview

- **Stack**: React 18 + TypeScript + Vite 7 + Tailwind CSS 3
- **Core Command**: `npm run build`
- **Entry**: `src/main.tsx` → `src/App.tsx`

## Architecture Snapshot

The application is a romantic interactive website with a 4-slide flow:

1.  **IntroCard**: A greeting card with "Hello My Love" text and animation.
2.  **MiniGame**: A simple "Catch the Heart" game where the user clicks moving hearts to score points within a time limit.
3.  **ReasonsList**: A list of reasons why the user loves their partner, displayed with animations.
4.  **ClosingCard**: A final message card with a New Year's greeting and background music player (starts at 48s).

`App.tsx` manages the state (`slide` index) and transitions between these components using `framer-motion`.

## Components

Located in `src/components/LoveLetter/`:
- `IntroCard.tsx`: Initial greeting.
- `MiniGame.tsx`: Interactive game logic.
- `ReasonsList.tsx`: Static list of reasons (editable array in code).
- `ClosingCard.tsx`: Final message with audio player.

## Styling

- Tailwind CSS is used for all styling.
- Theme: Pink/Red/White romantic palette consistent across all slides.
- Animations: `framer-motion` for page transitions and element animations.

## Audio

- The `ClosingCard` component contains an `<audio>` element.
- Default behavior: Starts playing at 48 seconds.
- **Note**: The audio file URL is currently a placeholder. Users must replace it with a direct link or local file import in `src/components/LoveLetter/ClosingCard.tsx`.

## Build Verification

Production bundle validated with `npm run build`; output confirmed in `dist/`.
