
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <AppSidebar />
        <div className="flex-1 p-4 md:p-6">
          <div className="flex items-center mb-6">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-2xl font-bold text-college-800">
              Student Fee Management
            </h1>
          </div>
          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
