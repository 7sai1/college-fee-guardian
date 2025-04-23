
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Fees from "./pages/Fees";
import Payment from "./pages/Payment";
import PaymentHistory from "./pages/PaymentHistory";
import Admin from "./pages/Admin";
import AdminReports from "./pages/AdminReports";
import NotFound from "./pages/NotFound";
import FinanceReports from "./pages/FinanceReports";
import FeeSettings from "./pages/FeeSettings";
import StudentPaymentsReport from "./pages/StudentPaymentsReport";
import OverdueReport from "./pages/OverdueReport";
import FinancialAidReport from "./pages/FinancialAidReport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/history" element={<PaymentHistory />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/finance-reports" element={<FinanceReports />} />
          <Route path="/admin/finance-reports/student-payments" element={<StudentPaymentsReport />} />
          <Route path="/admin/finance-reports/overdue" element={<OverdueReport />} />
          <Route path="/admin/finance-reports/aid" element={<FinancialAidReport />} />
          <Route path="/admin/settings" element={<FeeSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
