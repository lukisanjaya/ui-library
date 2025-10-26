import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../../utils/cn"
import { buttonVariants } from "./button"

interface CalendarProps {
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  showOutsideDays?: boolean
  className?: string
}

function Calendar({
  className,
  selected,
  onSelect,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i)

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const isSelected = (day: number) => {
    if (!selected) return false
    return selected.getDate() === day && 
           selected.getMonth() === currentMonth.getMonth() && 
           selected.getFullYear() === currentMonth.getFullYear()
  }

  const handleDayClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    onSelect?.(newDate)
  }

  return (
    <div className={cn("p-3", className)} {...props}>
      <div className="flex justify-center pt-1 relative items-center mb-4">
        <button
          onClick={goToPreviousMonth}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="text-sm font-medium">
          {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </div>
        <button
          onClick={goToNextMonth}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="flex">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <th key={day} className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="flex w-full mt-2">
            {emptyDays.map((_, index) => (
              <td key={`empty-${index}`} className="h-9 w-9 p-0" />
            ))}
            {days.map((day) => (
              <td key={day} className="h-9 w-9 text-center text-sm p-0 relative">
                <button
                  onClick={() => handleDayClick(day)}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-9 w-9 p-0 font-normal",
                    isSelected(day) && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  {day}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }