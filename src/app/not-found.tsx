"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

export default function NotFound() {
  const [matrixColumns, setMatrixColumns] = useState<JSX.Element[]>([])

  useEffect(() => {
    const createMatrixRain = () => {
      const columns = []
      const columnCount = Math.floor(window.innerWidth / 20)

      for (let i = 0; i < columnCount; i++) {
        const characters =
          "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
        const columnText = Array.from(
          { length: 1 },
          () => characters[Math.floor(Math.random() * characters.length)],
        ).join("")

        columns.push(
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${i * 20}px`,
              // Slow down: duration between 4s and 8s (visible and smooth)
              animationDuration: `${Math.random() * 4 + 4}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          >
            {columnText}
          </div>,
        )
      }

      setMatrixColumns(columns)
    }

    createMatrixRain()

    const handleResize = () => createMatrixRain()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Matrix Rain Background */}
      <div className="matrix-rain">{matrixColumns}</div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* 404 Error Code */}
        <h1 className="text-8xl md:text-9xl font-mono font-bold text-primary glitch-text mb-4">404</h1>

        {/* Error Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">Page Not Found</h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
          The page you are looking for has been disconnected from the matrix. It may have been moved, deleted, or never
          existed in this reality.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
          >
            <Link href="/home">Return to Home</Link>
          </Button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-sm text-muted-foreground">
          <p>Error Code: 404</p>
        </div>
      </div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
