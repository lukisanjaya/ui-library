import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "../../utils/cn"
import { Button } from "./button"

interface CarouselContextType {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  itemsLength: number
  orientation: "horizontal" | "vertical"
}

const CarouselContext = React.createContext<CarouselContextType>({
  currentIndex: 0,
  setCurrentIndex: () => {},
  itemsLength: 0,
  orientation: "horizontal"
})

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ orientation = "horizontal", className, children, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [itemsLength, setItemsLength] = React.useState(0)

    React.useEffect(() => {
      const items = React.Children.count(children)
      setItemsLength(items)
    }, [children])

    // Carousel navigation functions are handled in individual components

    return (
      <CarouselContext.Provider value={{ currentIndex, setCurrentIndex, itemsLength, orientation }}>
        <div
          ref={ref}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { orientation, currentIndex } = useCarousel()

  return (
    <div className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex transition-transform duration-300",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        style={{
          transform: orientation === "horizontal" 
            ? `translateX(-${currentIndex * 100}%)` 
            : `translateY(-${currentIndex * 100}%)`
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, currentIndex, setCurrentIndex, itemsLength } = useCarousel()
  
  const scrollPrev = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : itemsLength - 1)
  }

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, currentIndex, setCurrentIndex, itemsLength } = useCarousel()
  
  const scrollNext = () => {
    setCurrentIndex(currentIndex < itemsLength - 1 ? currentIndex + 1 : 0)
  }

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}