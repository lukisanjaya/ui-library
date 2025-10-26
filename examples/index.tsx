import { useState } from "react"
import { Button, Tabs, TabsList, TabsTrigger, TabsContent } from "../src"

// Import all examples
import { ButtonExample } from "./components/button-example"
import { CardExample } from "./components/card-example"
import { InputExample } from "./components/input-example"
import { TableExample } from "./components/table-example"
import { FormExample } from "./components/form-example"
import { ModalDialogExample } from "./components/modal-dialog-example"
import { NavigationExample } from "./components/navigation-example"
import { FeedbackExample } from "./components/feedback-example"
import { AdvancedExample } from "./components/advanced-example"

const examples = [
  { id: "button", label: "Button", component: ButtonExample },
  { id: "card", label: "Card", component: CardExample },
  { id: "input", label: "Input", component: InputExample },
  { id: "table", label: "Table", component: TableExample },
  { id: "form", label: "Form", component: FormExample },
  { id: "modal", label: "Modal/Dialog", component: ModalDialogExample },
  { id: "navigation", label: "Navigation", component: NavigationExample },
  { id: "feedback", label: "Feedback", component: FeedbackExample },
  { id: "advanced", label: "Advanced", component: AdvancedExample },
]

export function ComponentExamples() {
  const [activeExample, setActiveExample] = useState("button")

  const ActiveComponent = examples.find(ex => ex.id === activeExample)?.component || ButtonExample

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">UI Library Component Examples</h1>
          <p className="text-muted-foreground">
            Interactive examples of all components in the UI library
          </p>
        </div>

        <Tabs value={activeExample} onValueChange={setActiveExample}>
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9">
            {examples.map((example) => (
              <TabsTrigger key={example.id} value={example.id} className="text-xs">
                {example.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {examples.map((example) => (
            <TabsContent key={example.id} value={example.id} className="mt-6">
              <div className="border rounded-lg">
                <example.component />
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Usage</h3>
          <p className="text-sm text-muted-foreground">
            Import components from the UI library: <code>import {`{ Button, Card }`} from "@company/ui-library"</code>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComponentExamples