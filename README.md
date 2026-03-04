# Tic Tac Toe Game

## Overview
This is a comprehensive, state-driven Tic Tac Toe application featuring both local multiplayer and an intelligent CPU opponent. The project focuses on complex game state management, including turn-based logic, score tracking, and persistent sessions. While the visual design system and assets were provided by Frontend Mentor, I engineered the entire game engine and AI logic from scratch.

## Functionality
The application delivers a professional gaming experience with the following features:

Dual Play Modes:

Solo vs CPU: Includes a custom AI that is proactive in blocking player moves and attempting to win.

Multiplayer: Local "pass-and-play" functionality for two players.

Dynamic Setup: A "New Game" menu allowing players to choose their mark (X or O), which automatically assigns the remaining mark to the opponent.

Advanced Game Logic:

X always starts the first round; subsequent rounds alternate starting players.

A robust "Restart" modal to reset the board or cancel the action.

A "Quit" function that resets the game state and returns the user to the main menu.

State Persistence: The game state is saved in the browser, ensuring progress and scores are preserved even after a page refresh.

Responsive Layout: A mobile-first design that ensures the game board and modals are perfectly scaled for any device.

Interactive Polish: Includes custom hover states for every cell based on the current player's turn and full keyboard accessibility.

## Acknowledgement of Contribution
Design & Assets: All design specifications (Figma/Sketch files), color palettes, and optimized SVG assets are credited to Frontend Mentor.

Development: I am the sole author of the codebase. I implemented the win-checking algorithms, the CPU logic, the local storage persistence, and the entire UI structure and styling.

## live Sites link
https://toetiegame.netlify.app/
