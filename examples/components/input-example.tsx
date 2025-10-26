import { Input, Label } from "../../src"

export function InputExample() {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">Input Examples</h2>
      
      <div className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter password" />
        </div>

        <div>
          <Label htmlFor="search">Search</Label>
          <Input id="search" placeholder="Search..." />
        </div>

        <div>
          <Label htmlFor="disabled">Disabled Input</Label>
          <Input id="disabled" placeholder="Disabled" disabled />
        </div>

        <div>
          <Label htmlFor="number">Number</Label>
          <Input id="number" type="number" placeholder="Enter number" />
        </div>
      </div>
    </div>
  )
}