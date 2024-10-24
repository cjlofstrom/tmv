"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function TestStyles() {
  return (
    <Card className="p-6 m-4">
      <h2 className="text-2xl font-bold mb-4">Style Test</h2>
      <div className="space-x-2">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </Card>
  )}