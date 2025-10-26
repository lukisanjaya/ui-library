import { Card, CardHeader, CardTitle, CardContent, Button } from "../../src"

export function CardExample() {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">Card Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Simple Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a simple card with header and content.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card with Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card content with action buttons.</p>
            <div className="flex gap-2 mt-4">
              <Button size="sm">Action</Button>
              <Button variant="outline" size="sm">Cancel</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Statistics Card</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}