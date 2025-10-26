import { useState } from "react"
import { 
  Tabs, TabsList, TabsTrigger, TabsContent,
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator,
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  Button
} from "../../src"

export function NavigationExample() {
  const [activeTab, setActiveTab] = useState("tab1")
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Navigation Examples</h2>
      
      {/* Tabs Example */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Tabs</h3>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div className="p-4 border rounded">Account settings content</div>
          </TabsContent>
          <TabsContent value="tab2">
            <div className="p-4 border rounded">Password settings content</div>
          </TabsContent>
          <TabsContent value="tab3">
            <div className="p-4 border rounded">General settings content</div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Breadcrumb Example */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Breadcrumb</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span>Current Page</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Pagination Example */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Pagination</h3>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              />
            </PaginationItem>
            {[1, 2, 3, 4, 5].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink 
                  href="#"
                  isActive={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#"
                onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Dropdown Menu Example */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Dropdown Menu</h3>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}