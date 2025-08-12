# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 personal portfolio website with a terminal-themed interface built with React, TypeScript, and Tailwind CSS.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run lint` - Run Next.js linting

### Testing
No test suite is currently configured. Consider adding tests if the codebase grows.

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with custom animations and JetBrains Mono font
- **UI Components**: Custom components with shadcn/ui utilities (class-variance-authority, clsx, tailwind-merge)

### File Structure
- `/src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main terminal-themed portfolio interface
  - `layout.tsx` - Root layout with metadata and font configuration
- `/src/components/ui/` - Reusable UI components
- `/src/lib/` - Utility functions (utils.ts for cn() class merging)

### Key Implementation Details
- Terminal interface is implemented as a single-page React component with command parsing
- Uses React hooks (useState, useEffect, useRef) for state management and DOM interactions
- Path aliases configured: `@/*` maps to `./src/*`
- Client-side only interactions (marked with "use client" directive)

### Terminal Commands
The portfolio implements these interactive commands:
- `help` - Show available commands
- `about` - Personal information
- `work` - Current position and experience
- `skills` - Technical skills
- `interests` - Personal interests
- `contact` - Contact information
- `clear` - Clear terminal
- `home` - Return to home