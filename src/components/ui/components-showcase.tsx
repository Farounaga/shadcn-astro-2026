import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const items = [
  "Accordion",
  "Alert",
  "Alert Dialog",
  "Aspect Ratio",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
  "Button Group",
  "Calendar",
  "Card",
  "Carousel",
  "Chart",
  "Checkbox",
  "Collapsible",
  "Combobox",
  "Command",
  "Context Menu",
  "Data Table",
  "Date Picker",
  "Dialog",
  "Direction",
  "Drawer",
  "Dropdown Menu",
  "Empty",
  "Field",
  "Hover Card",
  "Input",
  "Input Group",
  "Input OTP",
  "Item",
  "Kbd",
  "Label",
  "Menubar",
  "Native Select",
  "Navigation Menu",
  "Pagination",
  "Popover",
  "Progress",
  "Radio Group",
  "Resizable",
  "Scroll Area",
  "Select",
  "Separator",
  "Sheet",
  "Sidebar",
  "Skeleton",
  "Slider",
  "Sonner",
  "Spinner",
  "Switch",
  "Table",
  "Tabs",
  "Textarea",
  "Toast",
  "Toggle",
  "Toggle Group",
  "Tooltip",
  "Typography",
]

function preview(name: string) {
  switch (name) {
    case "Alert":
      return (
        <Alert>
          <AlertTitle>Alert</AlertTitle>
          <AlertDescription>Status message preview.</AlertDescription>
        </Alert>
      )
    case "Badge":
      return (
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
        </div>
      )
    case "Button":
      return (
        <div className="flex gap-2">
          <Button size="sm">Primary</Button>
          <Button size="sm" variant="outline">
            Outline
          </Button>
        </div>
      )
    case "Button Group":
      return (
        <div className="inline-flex rounded-md border p-1">
          <Button size="sm" variant="ghost">
            Left
          </Button>
          <Button size="sm" variant="ghost">
            Right
          </Button>
        </div>
      )
    case "Card":
      return (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Card Title</CardTitle>
          </CardHeader>
        </Card>
      )
    case "Input":
      return <Input placeholder="Type here" />
    case "Textarea":
      return <Textarea placeholder="Long text" className="min-h-16" />
    case "Checkbox":
      return (
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked /> Checked option
        </label>
      )
    case "Switch":
      return (
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" role="switch" defaultChecked /> Enabled
        </label>
      )
    case "Slider":
      return <input type="range" defaultValue={40} className="w-full" />
    case "Progress":
      return <progress value={65} max={100} className="w-full" />
    case "Select":
    case "Native Select":
      return (
        <select className="h-9 rounded-md border px-2 text-sm">
          <option>Option A</option>
          <option>Option B</option>
        </select>
      )
    case "Table":
    case "Data Table":
      return (
        <table className="w-full text-xs">
          <tbody>
            <tr>
              <td className="border p-1">Row</td>
              <td className="border p-1">Value</td>
            </tr>
          </tbody>
        </table>
      )
    case "Tabs":
      return (
        <div className="flex gap-2 text-xs">
          <Badge>Overview</Badge>
          <Badge variant="outline">Details</Badge>
        </div>
      )
    case "Accordion":
    case "Collapsible":
      return (
        <details className="text-sm">
          <summary>Open section</summary>
          <p className="mt-1 text-muted-foreground">Hidden content preview.</p>
        </details>
      )
    case "Tooltip":
    case "Hover Card":
      return (
        <span className="text-sm underline decoration-dotted">
          Hover target
        </span>
      )
    case "Avatar":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs">
          AV
        </div>
      )
    case "Breadcrumb":
      return (
        <nav className="text-xs text-muted-foreground">
          Home / Section / Page
        </nav>
      )
    case "Separator":
      return <hr className="border-border" />
    case "Skeleton":
      return <div className="h-4 w-full animate-pulse rounded bg-muted" />
    case "Kbd":
      return (
        <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs">⌘K</kbd>
      )
    case "Label":
      return <label className="text-sm font-medium">Label text</label>
    case "Typography":
      return <p className="text-sm">Typography sample paragraph.</p>
    case "Calendar":
    case "Date Picker":
      return (
        <input type="date" className="h-9 rounded-md border px-2 text-sm" />
      )
    case "Input OTP":
      return (
        <div className="flex gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              maxLength={1}
              className="h-8 w-8 rounded border text-center text-sm"
            />
          ))}
        </div>
      )
    case "Pagination":
      return (
        <div className="flex gap-1">
          <Button size="xs" variant="outline">
            1
          </Button>
          <Button size="xs">2</Button>
          <Button size="xs" variant="outline">
            3
          </Button>
        </div>
      )
    case "Toggle":
    case "Toggle Group":
      return (
        <div className="flex gap-1">
          <Button size="xs" variant="outline">
            B
          </Button>
          <Button size="xs" variant="outline">
            I
          </Button>
        </div>
      )
    case "Toast":
    case "Sonner":
      return (
        <div className="rounded border bg-muted px-2 py-1 text-xs">
          Saved successfully
        </div>
      )
    case "Spinner":
      return (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
      )
    case "Aspect Ratio":
      return (
        <div
          className="w-full max-w-[180px] rounded bg-muted"
          style={{ aspectRatio: "16 / 9" }}
        />
      )
    case "Chart":
      return (
        <div className="flex h-12 items-end gap-1">
          {[30, 50, 20, 70].map((h, i) => (
            <div
              key={i}
              className="w-4 rounded-t bg-primary/60"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      )
    case "Radio Group":
      return (
        <div className="flex gap-3 text-sm">
          <label>
            <input type="radio" name="r" defaultChecked /> A
          </label>
          <label>
            <input type="radio" name="r" /> B
          </label>
        </div>
      )
    case "Popover":
    case "Dialog":
    case "Alert Dialog":
    case "Drawer":
    case "Sheet":
    case "Dropdown Menu":
    case "Context Menu":
    case "Navigation Menu":
    case "Menubar":
    case "Sidebar":
    case "Command":
    case "Combobox":
    case "Carousel":
    case "Resizable":
    case "Scroll Area":
    case "Field":
    case "Input Group":
    case "Item":
    case "Direction":
    case "Empty":
    default:
      return (
        <div className="rounded border border-dashed p-2 text-xs text-muted-foreground">
          Preview block
        </div>
      )
  }
}

export function ComponentsShowcase() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((name) => (
        <Card key={name}>
          <CardHeader>
            <CardTitle className="text-base">{name}</CardTitle>
          </CardHeader>
          <CardContent>{preview(name)}</CardContent>
        </Card>
      ))}
    </div>
  )
}
