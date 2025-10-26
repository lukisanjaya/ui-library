# UI Library Component Examples

This directory contains comprehensive examples for all components in the UI library.

## 📁 Structure

```
examples/
├── components/           # Individual component examples
│   ├── button-example.tsx
│   ├── card-example.tsx
│   ├── input-example.tsx
│   ├── table-example.tsx
│   ├── form-example.tsx
│   ├── modal-dialog-example.tsx
│   ├── navigation-example.tsx
│   ├── feedback-example.tsx
│   └── advanced-example.tsx
├── index.tsx            # Main examples app
└── README.md           # This file
```

## 🚀 Components Covered

### Basic Components
- **Button** - All variants, sizes, and states
- **Card** - Simple cards, with actions, statistics
- **Input** - Text, email, password, number, disabled states
- **Label** - Form labels with proper associations

### Data Display
- **Table** - Basic table structure
- **DataTable** - Advanced table with search, pagination, actions
- **Avatar** - Profile images with fallbacks
- **Badge** - Status indicators in different variants
- **Separator** - Visual content dividers

### Form Components
- **Form** - Complete form with validation
- **Input** - Various input types
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection
- **Checkbox** - Boolean selections
- **RadioGroup** - Single choice from options
- **Switch** - Toggle switches
- **Slider** - Range input controls

### Navigation
- **Tabs** - Tabbed content navigation
- **Breadcrumb** - Hierarchical navigation
- **Pagination** - Page navigation controls
- **DropdownMenu** - Contextual menus

### Feedback & Status
- **Alert** - Info, success, error messages
- **Toast** - Temporary notifications
- **Progress** - Progress indicators
- **Spinner** - Loading spinners
- **Loader** - Loading with text
- **Skeleton** - Content placeholders
- **Empty** - Empty state displays

### Overlays
- **Modal** - Simple modal dialogs
- **Dialog** - Structured dialogs
- **AlertDialog** - Confirmation dialogs
- **Tooltip** - Hover information
- **HoverCard** - Rich hover content
- **Popover** - Positioned overlays

### Advanced Components
- **Accordion** - Collapsible content sections
- **Calendar** - Date selection calendar
- **DatePicker** - Date input with calendar
- **Combobox** - Searchable select
- **TagsSelect** - Multi-tag selection
- **Carousel** - Image/content carousel
- **InputOTP** - One-time password input
- **Toggle** - Toggle buttons
- **ToggleGroup** - Grouped toggles
- **Kbd** - Keyboard shortcut display

## 💡 Usage Examples

### Basic Import
```tsx
import { Button, Card, Input } from "@company/ui-library"
```

### Component Usage
```tsx
// Button with variants
<Button variant="default">Primary</Button>
<Button variant="outline">Secondary</Button>

// Card with content
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>

// DataTable with data
<DataTable 
  columns={columns}
  data={data}
  searchKey="name"
  searchPlaceholder="Search..."
/>
```

### Form Example
```tsx
<Form onSubmit={handleSubmit}>
  <FormItem>
    <FormLabel>Name</FormLabel>
    <FormControl>
      <Input placeholder="Enter name" />
    </FormControl>
    <FormMessage />
  </FormItem>
</Form>
```

## 🎨 Styling

All components use:
- **Tailwind CSS** for styling
- **CSS Variables** for theming
- **Dark/Light mode** support
- **Responsive design** patterns

## 🔧 Development

To run examples locally:
1. Build the UI library: `bun run build`
2. Create a demo app that imports from the built library
3. Use the examples as reference for implementation

## 📚 Documentation

Each example demonstrates:
- ✅ Basic usage patterns
- ✅ Props and configuration options
- ✅ Common use cases
- ✅ Integration with other components
- ✅ Accessibility considerations
- ✅ Responsive behavior