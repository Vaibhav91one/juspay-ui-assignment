import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { RightSidebar } from '@/components/right-sidebar'
import { AppHeader } from '@/components/layout/app-header'
import { Skeleton } from '@/components/ui/skeleton'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const Orders = lazy(() => import('./pages/Orders'))

function App() {
  // Initialize to false (closed) - safe default for mobile
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false)

  // Set to true (open) on desktop after initial render
  useEffect(() => {
    const checkScreenSize = () => {
      const isDesktop = window.innerWidth >= 1224
      setIsRightSidebarOpen(isDesktop)
    }
    
    // Set initial state
    checkScreenSize()
    
    // Update on resize
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div className="app-container w-full mx-auto h-screen flex flex-col overflow-hidden">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-1 min-h-0 overflow-hidden">
          <SidebarInset className="flex-1 flex flex-col min-h-0 overflow-hidden">
            <AppHeader onRightSidebarToggle={() => setIsRightSidebarOpen(!isRightSidebarOpen)} />
            <div className="flex-1 overflow-auto p-4 hide-scrollbar">
              <Suspense fallback={<Skeleton className="h-screen" />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/orders" element={<Orders />} />
                  {/* Catch-all route - redirect everything else to home */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </div>
          </SidebarInset>
          <RightSidebar 
            isOpen={isRightSidebarOpen} 
            onOpenChange={setIsRightSidebarOpen}
          />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default App
