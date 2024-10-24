import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

import { TestStyles } from "@/components/test-styles"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold">Welcome to TMV</h1>
        <ModeToggle />
      </div>
      <TestStyles />
      <Button>Click me</Button>
    </div>
  )
}