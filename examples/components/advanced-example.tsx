import { useState } from "react"
import { 
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  Calendar, DatePicker, Combobox, TagsSelect,
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
  Avatar, AvatarImage, AvatarFallback,
  Tooltip, TooltipTrigger, TooltipContent,
  HoverCard, HoverCardTrigger, HoverCardContent,
  InputOTP, Kbd, Toggle, ToggleGroup, ToggleGroupItem,
  Button, Card, CardContent
} from "../../src"

export function AdvancedExample() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [comboValue, setComboValue] = useState("")
  const [tags, setTags] = useState<string[]>(["react", "typescript"])
  const [otpValue, setOtpValue] = useState("")
  const [toggleValue, setToggleValue] = useState("")

  const comboOptions = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
  ]

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Advanced Components</h2>
      
      {/* Accordion */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Accordion</h3>
        <Accordion type="single" value="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Date Components */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Date Components</h3>
        
        <div className="space-y-2">
          <h4 className="font-medium">Calendar</h4>
          <Calendar 
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Date Picker</h4>
          <DatePicker 
            date={selectedDate}
            onDateChange={setSelectedDate}
          />
        </div>
      </div>

      {/* Selection Components */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Selection Components</h3>
        
        <div className="space-y-2">
          <h4 className="font-medium">Combobox</h4>
          <Combobox 
            options={comboOptions}
            value={comboValue}
            onValueChange={setComboValue}
            placeholder="Select framework..."
          />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Tags Select</h4>
          <TagsSelect 
            value={tags}
            onChange={setTags}
            placeholder="Add tags..."
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Carousel</h3>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Avatar */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Avatar</h3>
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Tooltip & Hover Card */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Tooltip & Hover Card</h3>
        
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline">Hover for tooltip</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>

          <HoverCard>
            <HoverCardTrigger>
              <Button variant="outline">Hover for card</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-2">
                <h4 className="font-semibold">Hover Card</h4>
                <p className="text-sm">More detailed information in a card.</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      {/* Input OTP */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Input OTP</h3>
        <InputOTP 
          value={otpValue}
          onChange={setOtpValue}
          maxLength={6}
        />
      </div>

      {/* Keyboard & Toggle */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Keyboard & Toggle</h3>
        
        <div className="space-y-2">
          <h4 className="font-medium">Keyboard Shortcut</h4>
          <div className="flex gap-2">
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>C</Kbd>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Toggle Group</h4>
          <ToggleGroup 
            type="single" 
            value={toggleValue}
            onValueChange={setToggleValue}
          >
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  )
}