import React, { useState } from 'react'
import { cn } from '../../utils/cn'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { LogoutModal } from '../ui/logout-modal'
import { 
  Home, 
  Users, 
  Settings, 
  ChevronDown, 
  ChevronRight, 
  Menu,
  X,
  Package,
  Tag,
  ShoppingCart,
  ChefHat,
  MessageCircle,
  CheckSquare,
  Quote,
  User,
  LogOut,
  UserCircle,
  Zap
} from 'lucide-react'

interface MenuItem {
  label: string
  href: string
  icon: string
  badge?: string
  children?: MenuItem[]
}

interface AppSidebarProps {
  isCollapsed: boolean
  onToggle: () => void
  menuItems?: MenuItem[]
  user?: any
  onLogout?: () => void
  currentPath?: string
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Home,
  Users,
  Package,
  Tag,
  ShoppingCart,
  ChefHat,
  MessageCircle,
  CheckSquare,
  Quote,
  Settings
}

export function AppSidebar({ 
  isCollapsed, 
  onToggle, 
  menuItems = [], 
  user, 
  onLogout,
  currentPath = '/'
}: AppSidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const isActive = (href: string) => {
    return currentPath === href
  }

  const handleLogout = () => {
    onLogout?.()
    setShowLogoutModal(false)
  }

  return (
    <div className={cn(
      "flex flex-col h-full bg-gradient-to-b from-card to-card/95 border-r border-border/50 transition-all duration-300 shadow-sm",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Dashboard
            </h2>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8 hover:bg-accent/50 transition-colors"
        >
          {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = iconMap[item.icon] || Home
            return (
              <li key={item.label}>
                <div className="relative">
                  {item.children ? (
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start h-11 rounded-lg transition-all duration-200 group",
                        isCollapsed ? "px-3" : "px-3",
                        "hover:bg-accent/50 hover:shadow-sm"
                      )}
                      onClick={() => toggleExpanded(item.label)}
                    >
                      <div className={cn(
                        "flex items-center justify-center rounded-md transition-colors",
                        isCollapsed ? "h-6 w-6" : "h-5 w-5 mr-3",
                        "group-hover:text-primary"
                      )}>
                        <IconComponent className="h-4 w-4 shrink-0" />
                      </div>
                      {!isCollapsed && (
                        <>
                          <span className="truncate font-medium">{item.label}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto mr-2 h-5 text-xs">
                              {item.badge}
                            </Badge>
                          )}
                          <div className="ml-auto">
                            {expandedItems.includes(item.label) ? (
                              <ChevronDown className="h-4 w-4 transition-transform" />
                            ) : (
                              <ChevronRight className="h-4 w-4 transition-transform" />
                            )}
                          </div>
                        </>
                      )}
                    </Button>
                  ) : (
                    <a href={item.href}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start h-11 rounded-lg transition-all duration-200 group",
                          isCollapsed ? "px-3" : "px-3",
                          isActive(item.href) 
                            ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                            : "hover:bg-accent/50 hover:shadow-sm"
                        )}
                      >
                        <div className={cn(
                          "flex items-center justify-center rounded-md transition-colors",
                          isCollapsed ? "h-6 w-6" : "h-5 w-5 mr-3",
                          isActive(item.href) ? "text-primary" : "group-hover:text-primary"
                        )}>
                          <IconComponent className="h-4 w-4 shrink-0" />
                        </div>
                        {!isCollapsed && (
                          <>
                            <span className="truncate font-medium">{item.label}</span>
                            {item.badge && (
                              <Badge 
                                variant={isActive(item.href) ? "default" : "secondary"} 
                                className="ml-auto h-5 text-xs"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </>
                        )}
                      </Button>
                    </a>
                  )}
                </div>

                {/* Submenu */}
                {item.children && !isCollapsed && expandedItems.includes(item.label) && (
                  <ul className="ml-8 mt-2 space-y-1 border-l border-border/30 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href}>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start h-9 text-sm rounded-md transition-all duration-200",
                              isActive(child.href)
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                            )}
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-current mr-3 opacity-60" />
                            <span className="truncate">{child.label}</span>
                          </Button>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Profile Footer */}
      {!isCollapsed && user && (
        <div className="p-4 border-t border-border/50 relative sidebar-profile-container">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full justify-start h-12 p-3 hover:bg-accent/50 transition-colors"
              >
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <UserCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-sm font-medium truncate">
                    {user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : user?.username || 'User'}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {user?.email || 'user@example.com'}
                  </p>
                </div>
                <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              side="top" 
              className="w-56 absolute bottom-full left-0 mb-2"
            >
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={() => setShowLogoutModal(true)} 
                className="text-red-600 focus:text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      
      <LogoutModal 
        open={showLogoutModal}
        onOpenChange={setShowLogoutModal}
        onConfirm={handleLogout}
      />
    </div>
  )
}