import React, { useState, useEffect } from 'react'
import { cn } from '../../utils/cn'
import { AppSidebar } from './app-sidebar'
import { AppNavbar } from './app-navbar'
import { Spinner } from '../feedback/spinner'

interface LayoutProps {
  children: React.ReactNode
  isAuthenticated?: boolean
  isLoading?: boolean
  user?: any
  onLogout?: () => void
  menuItems?: any[]
}

export function Layout({ 
  children, 
  isAuthenticated = true, 
  isLoading = false, 
  user, 
  onLogout,
  menuItems = []
}: LayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sidebar-collapsed')
      return saved ? JSON.parse(saved) : window.innerWidth < 768
    }
    return false
  })

  const toggleSidebar = (): void => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar-collapsed', JSON.stringify(sidebarCollapsed))
    }
  }, [sidebarCollapsed])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner className="h-8 w-8" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen bg-background relative">
      {/* Mobile overlay */}
      {!sidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed md:relative z-50 md:z-10 h-full transition-transform duration-300",
        sidebarCollapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0"
      )}>
        <AppSidebar 
          isCollapsed={sidebarCollapsed} 
          onToggle={toggleSidebar}
          menuItems={menuItems}
          user={user}
          onLogout={onLogout}
        />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AppNavbar 
          onToggleSidebar={toggleSidebar}
          user={user}
          onLogout={onLogout}
        />
        
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}