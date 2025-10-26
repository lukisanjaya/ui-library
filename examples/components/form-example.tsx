import { useState } from "react"
import { 
  Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage,
  Input, Button, Textarea, Select, Checkbox, RadioGroup, RadioGroupItem,
  Switch, Slider
} from "../../src"

export function FormExample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    country: "",
    newsletter: false,
    gender: "",
    notifications: false,
    volume: 50
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">Form Examples</h2>
      
      <Form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <FormItem>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <FormControl>
            <Input 
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter your name"
            />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormControl>
            <Input 
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Enter your email"
            />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="country">Country</FormLabel>
          <FormControl>
            <Select 
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
            >
              <option value="">Select country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
            </Select>
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormControl>
            <Textarea 
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Enter your message"
            />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>Gender</FormLabel>
          <FormControl>
            <RadioGroup 
              value={formData.gender}
              onValueChange={(value) => setFormData({...formData, gender: value})}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <FormLabel htmlFor="male">Male</FormLabel>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <FormLabel htmlFor="female">Female</FormLabel>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>

        <FormItem>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="newsletter"
              checked={formData.newsletter}
              onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
            />
            <FormLabel htmlFor="newsletter">Subscribe to newsletter</FormLabel>
          </div>
        </FormItem>

        <FormItem>
          <div className="flex items-center space-x-2">
            <FormLabel htmlFor="notifications">Enable notifications</FormLabel>
            <Switch 
              checked={formData.notifications}
              onChange={(e) => setFormData({...formData, notifications: e.target.checked})}
            />
          </div>
        </FormItem>

        <FormItem>
          <FormLabel>Volume: {formData.volume}%</FormLabel>
          <FormControl>
            <Slider 
              value={formData.volume}
              onChange={(e) => setFormData({...formData, volume: parseInt(e.target.value)})}
              min={0}
              max={100}
            />
          </FormControl>
        </FormItem>

        <Button type="submit" className="w-full">Submit</Button>
      </Form>
    </div>
  )
}