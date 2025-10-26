import { useState } from 'react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '../ui/dropdown-menu'
import { Badge } from '../ui/badge'
import { LogoutModal } from '../ui/logout-modal'
import { 
  Sun, 
  Moon, 
  User, 
  Settings, 
  LogOut,
  Bell,
  Check,
  Trash2,
  Menu
} from 'lucide-react'

interface AppNavbarProps {
  onToggleSidebar?: () => void
  user?: any
  onLogout?: () => void
  theme?: 'light' | 'dark'
  onThemeChange?: (theme: 'light' | 'dark') => void
  notifications?: any[]
}

const mockNotifications = [
  {
    id: '1',
    title: 'New user registered',
    message: 'John Doe has joined the platform',
    time: '2 min ago',
    unread: true
  },
  {
    id: '2',
    title: 'System update',
    message: 'Server maintenance completed successfully',
    time: '1 hour ago',
    unread: true
  },
  {
    id: '3',
    title: 'Payment received',
    message: 'Invoice #1234 has been paid',
    time: '3 hours ago',
    unread: false
  }
]

export function AppNavbar({ 
  onToggleSidebar, 
  user, 
  onLogout,
  theme = 'light',
  onThemeChange,
  notifications = mockNotifications
}: AppNavbarProps) {
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const toggleTheme = (): void => {
    onThemeChange?.(theme === 'dark' ? 'light' : 'dark')
  }

  const handleLogout = () => {
    onLogout?.()
    setShowLogoutModal(false)
  }

  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-background/80 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="h-10 w-10 md:hidden hover:bg-accent/50 transition-colors rounded-lg"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex flex-col">
          <h1 className="text-lg sm:text-xl font-bold truncate bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Welcome back, {user?.firstName || user?.username || 'User'}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="h-10 w-10 hover:bg-accent/50 transition-all duration-200 rounded-lg group"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 group-hover:rotate-12 transition-transform" />
          ) : (
            <Moon className="h-5 w-5 group-hover:-rotate-12 transition-transform" />
          )}
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 relative hover:bg-accent/50 transition-all duration-200 rounded-lg group"
            >
              <Bell className="h-5 w-5 group-hover:animate-pulse" />
              {unreadCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-pulse"
                >
                  {unreadCount}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 sm:w-72 md:w-80 max-w-[calc(100vw-2rem)] z-[9999]">
            <DropdownMenuLabel className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium">Notifications</span>
              <Button variant="ghost" size="sm" className="h-6 text-xs px-2">
                Mark all read
              </Button>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-2 sm:p-3 cursor-pointer">
                <div className="flex items-start justify-between w-full gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm truncate">{notification.title}</p>
                      {notification.unread && (
                        <div className="h-2 w-2 bg-blue-500 rounded-full flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.time}
                    </p>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Check className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center justify-center">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="h-10 w-10 p-0 rounded-full hover:bg-accent/50 transition-all duration-200 group"
            >
              <div className="h-9 w-9 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="bottom" className="w-64 p-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30">
              <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col space-y-1 leading-none min-w-0">
                <p className="font-semibold truncate">
                  {user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : user?.username || 'User'}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.email || 'user@example.com'}
                </p>
              </div>
            </div>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem className="rounded-md">
              <User className="mr-3 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-md">
              <Settings className="mr-3 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem 
              onClick={() => setShowLogoutModal(true)} 
              className="text-red-600 focus:text-red-600 rounded-md"
            >
              <LogOut className="mr-3 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <LogoutModal 
        open={showLogoutModal}
        onOpenChange={setShowLogoutModal}
        onConfirm={handleLogout}
      />
    </header>
  )
}