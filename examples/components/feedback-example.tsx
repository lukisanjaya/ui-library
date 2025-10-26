import { useState } from "react"
import { 
  Alert, AlertTitle, AlertDescription,
  Badge, Spinner, Loader, Toast, Progress,
  Skeleton, Separator, Empty,
  Button
} from "../../src"

export function FeedbackExample() {
  const [showToast, setShowToast] = useState(false)
  const [progress, setProgress] = useState(60)

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Feedback Examples</h2>
      
      {/* Alerts */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Alerts</h3>
        <Alert>
          <AlertTitle>Info Alert</AlertTitle>
          <AlertDescription>This is an informational alert message.</AlertDescription>
        </Alert>
        
        <Alert variant="destructive">
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>Something went wrong. Please try again.</AlertDescription>
        </Alert>

        <Alert variant="success">
          <AlertTitle>Success Alert</AlertTitle>
          <AlertDescription>Your action was completed successfully!</AlertDescription>
        </Alert>
      </div>

      {/* Badges */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Badges</h3>
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      {/* Loading States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loading States</h3>
        
        <div className="space-y-2">
          <h4 className="font-medium">Spinners</h4>
          <div className="flex gap-4 items-center">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Loader with Text</h4>
          <Loader text="Loading data..." />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Progress Bar</h4>
          <div className="space-y-2">
            <Progress value={progress} max={100} />
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10</Button>
              <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton Loading */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Skeleton Loading</h3>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>

      {/* Separator */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Separator</h3>
        <div>
          <p>Content above</p>
          <Separator className="my-4" />
          <p>Content below</p>
        </div>
      </div>

      {/* Empty State */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Empty State</h3>
        <Empty 
          title="No data found"
          description="There are no items to display at the moment."
          action={<Button>Add Item</Button>}
        />
      </div>

      {/* Toast */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Toast</h3>
        <Button onClick={() => setShowToast(true)}>Show Toast</Button>
        {showToast && (
          <Toast 
            title="Success!"
            description="Your action was completed."
            variant="success"
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    </div>
  )
}