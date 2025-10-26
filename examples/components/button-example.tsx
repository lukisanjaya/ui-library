import { Button } from "../../src"

export function ButtonExample() {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">Button Examples</h2>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="flex gap-2">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex gap-2 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🚀</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-2">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  )
}