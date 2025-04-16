"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronRight, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface SidebarContextProps {
  expanded: boolean
  toggleExpanded: () => void
}

const SidebarContext = React.createContext<SidebarContextProps>({
  expanded: true,
  toggleExpanded: () => {},
})

export function useSidebar() {
  return React.useContext(SidebarContext)
}

export interface SidebarProviderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
}

export function SidebarProvider({
  expanded = true,
  onExpandedChange,
  children,
  ...props
}: SidebarProviderProps) {
  const [_expanded, setExpanded] = React.useState<boolean>(expanded)

  const toggleExpanded = React.useCallback(() => {
    setExpanded((expanded) => !expanded)
  }, [])

  React.useEffect(() => {
    onExpandedChange?.(_expanded)
  }, [_expanded, onExpandedChange])

  return (
    <SidebarContext.Provider
      value={{ expanded: _expanded, toggleExpanded }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { expanded } = useSidebar()

  return (
    <div
      data-expanded={expanded}
      className={cn(
        "sidebar-container bg-sidebar flex flex-col gap-4 transition-all duration-300 data-[expanded=true]:w-64 data-[expanded=false]:w-[70px] border-r border-sidebar-border h-screen min-h-screen sticky top-0 overflow-hidden",
        className
      )}
      {...props}
      ref={ref}
    />
  )
})
Sidebar.displayName = "Sidebar"

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {}

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  SidebarTriggerProps
>(({ className, children, ...props }, ref) => {
  const { expanded, toggleExpanded } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleExpanded}
      className={cn("h-9 w-9", className)}
      {...props}
      ref={ref}
    >
      <Menu />
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar()

  return (
    <div
      className={cn(
        "sidebar-header min-h-[56px] flex items-center justify-between gap-1 border-b border-sidebar-border p-4",
        expanded ? "flex-row" : "flex-col justify-start pt-4",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarHeaderTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar()

  return (
    <div
      data-expanded={expanded}
      className={cn(
        "flex items-center gap-1 data-[expanded=false]:hidden",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
})
SidebarHeaderTitle.displayName = "SidebarHeaderTitle"

const SidebarHeaderIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("flex items-center", className)}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
})
SidebarHeaderIcon.displayName = "SidebarHeaderIcon"

const sidebarContentVariants = cva(
  "sidebar-content flex flex-col gap-4 overflow-y-auto overflow-x-hidden px-2 transition-all duration-300",
  {
    variants: {
      expanded: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      expanded: true,
    },
  }
)

interface SidebarContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarContentVariants> {}

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, children, ...props }, ref) => {
    const { expanded } = useSidebar()

    return (
      <div
        className={cn(
          sidebarContentVariants({ expanded }),
          "grow",
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar()

  return (
    <div
      data-expanded={expanded}
      className={cn(
        "sidebar-footer w-full border-t border-sidebar-border p-4",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("space-y-2 mb-6", className)}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar()

  return (
    <div
      data-expanded={expanded}
      className={cn(
        "px-2 text-xs uppercase font-medium text-sidebar-foreground/60 transition-colors duration-300 data-[expanded=false]:justify-center data-[expanded=false]:py-2",
        expanded
          ? "justify-start data-[expanded=false]:opacity-0 data-[expanded=false]:overflow-hidden"
          : "justify-center text-center data-[expanded=false]:opacity-100 px-2",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("", className)} {...props} ref={ref}>
      {children}
    </div>
  )
})
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("space-y-1", className)} {...props} ref={ref}>
      {children}
    </div>
  )
})
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("", className)} {...props} ref={ref}>
      {children}
    </div>
  )
})
SidebarMenuItem.displayName = "SidebarMenuItem"

const SidebarMenuHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar()

  return (
    <div
      data-expanded={expanded}
      className={cn(
        "text-sm font-medium text-sidebar-foreground/60 transition-colors duration-300",
        "data-[expanded=false]:overflow-hidden data-[expanded=false]:opacity-0 data-[expanded=false]:w-0 data-[expanded=false]:h-0",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
})
SidebarMenuHeader.displayName = "SidebarMenuHeader"

const SidebarSubmenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar()

  return (
    <div
      data-expanded={expanded}
      className={cn(
        "pl-6 space-y-1 transition-all duration-300",
        expanded ? "animate-accordion-down" : "animate-accordion-up",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
})
SidebarSubmenu.displayName = "SidebarSubmenu"

const SidebarSubmenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: React.ReactNode }
>(({ className, icon, children, ...props }, ref) => {
  const { expanded } = useSidebar()
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <>
      <button
        data-expanded={expanded}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex justify-between items-center w-full rounded-lg p-2 text-sm font-medium text-sidebar-foreground transition-colors duration-300 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          expanded ? "px-4" : "justify-center",
          className
        )}
        {...props}
        ref={ref}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="w-5 h-5">{icon}</div>}
          <span
            data-expanded={expanded}
            className={cn(
              "flex items-center gap-2 transition-all duration-300",
              "data-[expanded=false]:overflow-hidden data-[expanded=false]:opacity-0 data-[expanded=false]:w-0",
              className
            )}
          >
            {children}
          </span>
        </div>
        <ChevronRight
          className="w-4 h-4 text-muted-foreground transition-transform duration-300 data-[expanded=false]:opacity-0"
          data-expanded={expanded}
          style={{ transform: open ? "rotate(90deg)" : undefined }}
        />
      </button>
      {open && expanded && <SidebarSubmenu>{children}</SidebarSubmenu>}
    </>
  )
})
SidebarSubmenuTrigger.displayName = "SidebarSubmenuTrigger"

const sidebarMenuButtonVariants = cva(
  "flex items-center gap-3 w-full rounded-lg p-2 text-sm font-medium text-sidebar-foreground transition-colors duration-300 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
  {
    variants: {
      expanded: {
        true: "px-4 justify-start",
        false: "px-2 py-3 justify-center",
      },
      active: {
        true: "bg-sidebar-accent text-sidebar-accent-foreground",
        false: "",
      },
    },
    defaultVariants: {
      expanded: true,
      active: false,
    },
  }
)

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
  active?: boolean
}

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    { className, asChild = false, active = false, children, ...props },
    ref
  ) => {
    const { expanded } = useSidebar()

    const Comp = asChild ? React.Fragment : "button"

    if (asChild) {
      return (
        <div
          data-expanded={expanded}
          className={cn(
            sidebarMenuButtonVariants({ expanded, active }),
            className
          )}
        >
          {children}
        </div>
      )
    }

    return (
      <Comp
        data-expanded={expanded}
        data-active={active}
        className={cn(
          sidebarMenuButtonVariants({ expanded, active }),
          className
        )}
        {...props}
        ref={ref}
      >
        <div
          data-expanded={expanded}
          className={cn(
            "flex items-center gap-2 transition-all duration-300"
          )}
        >
          {children}
        </div>
      </Comp>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

export {
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarHeaderTitle,
  SidebarHeaderIcon,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuHeader,
  SidebarMenuButton,
  SidebarSubmenu,
  SidebarSubmenuTrigger,
}
