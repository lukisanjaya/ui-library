import { useState, useRef, useEffect } from 'react'
import { X, Plus } from 'lucide-react'
import { Badge } from './badge'
import { Input } from './input'
import { cn } from '../../utils/cn'

interface TagsSelectProps {
  value: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
  className?: string
}

const commonTags = ['love', 'life', 'happiness', 'technology', 'travel', 'food', 'music', 'art', 'nature', 'friendship']

export function TagsSelect({ value, onChange, placeholder = "Type to search or create tags...", className }: TagsSelectProps) {
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredTags = commonTags.filter(tag => 
    !value.includes(tag) && 
    tag.toLowerCase().includes(inputValue.toLowerCase())
  )

  const addTag = (tag: string) => {
    if (tag && !value.includes(tag)) {
      onChange([...value, tag])
    }
    setInputValue('')
    setIsOpen(false)
  }

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter(tag => tag !== tagToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault()
      addTag(inputValue.trim())
    }
    if (e.key === 'Backspace' && !inputValue && value.length > 0) {
      removeTag(value[value.length - 1])
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.parentElement?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={cn("relative", className)}>
      <div className="flex flex-wrap gap-2 p-2 border rounded-md min-h-[40px] focus-within:ring-2 focus-within:ring-ring">
        {value.map((tag) => (
          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
            {tag}
            <X 
              className="h-3 w-3 cursor-pointer hover:text-destructive" 
              onClick={() => removeTag(tag)}
            />
          </Badge>
        ))}
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ""}
          className="border-0 shadow-none focus-visible:ring-0 flex-1 min-w-[120px] p-0"
        />
      </div>
      
      {isOpen && (inputValue || filteredTags.length > 0) && (
        <div className="absolute top-full z-50 mt-1 w-full bg-background border rounded-md shadow-md max-h-60 overflow-auto">
          {inputValue && !value.includes(inputValue.trim()) && inputValue.trim() && (
            <div 
              className="flex items-center gap-2 p-2 hover:bg-accent cursor-pointer"
              onMouseDown={(e) => {
                e.preventDefault()
                addTag(inputValue.trim())
              }}
            >
              <Plus className="h-4 w-4" />
              Create "{inputValue.trim()}"
            </div>
          )}
          {filteredTags.map((tag) => (
            <div
              key={tag}
              className="p-2 hover:bg-accent cursor-pointer"
              onMouseDown={(e) => {
                e.preventDefault()
                addTag(tag)
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}