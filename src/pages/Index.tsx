
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { CreditCard, DollarSign, CalendarDays, AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Sample data for demonstration
const paymentHistory = [
  { id: 1, date: "04/10/2025", amount: 2500, status: "Paid", type: "Tuition" },
  { id: 2, date: "03/15/2025", amount: 800, status: "Paid", type: "Housing" },
  { id: 3, date: "02/28/2025", amount: 350, status: "Paid", type: "Books" },
  { id: 4, date: "01/20/2025", amount: 150, status: "Paid", type: "Activity Fee" },
];

const upcomingPayments = [
  { id: 1, dueDate: "05/15/2025", amount: 2500, type: "Tuition" },
  { id: 2, dueDate: "05/30/2025", amount: 800, type: "Housing" },
];

const feeBreakdown = [
  { name: "Tuition", value: 7500, color: "#0284c7" },
  { name: "Housing", value: 2400, color: "#7dd3fc" },
  { name: "Books", value: 800, color: "#0369a1" },
  { name: "Activity Fee", value: 300, color: "#38bdf8" },
];

const semesterExpenses = [
  { name: "Fall", tuition: 7500, housing: 2400, books: 800, fees: 300 },
  { name: "Spring", tuition: 7500, housing: 2400, books: 650, fees: 300 },
  { name: "Summer", tuition: 3500, housing: 1200, books: 400, fees: 150 },
];

const Index = () => {
  const totalOwed = 11000;
  const totalPaid = 3800;
  const remainingBalance = totalOwed - totalPaid;
  const paymentProgress = (totalPaid / totalOwed) * 100;

  return (
    <Layout>
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Fees</CardTitle>
              <DollarSign className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalOwed.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Academic Year 2025</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Paid to Date</CardTitle>
              <CreditCard className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalPaid.toLocaleString()}</div>
              <Progress value={paymentProgress} className="h-2 mt-2" />
              <p className="text-xs text-muted-foreground mt-1">{paymentProgress.toFixed(0)}% of total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Balance Due</CardTitle>
              <AlertCircle className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${remainingBalance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Next payment: May 15, 2025</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Next Due Date</CardTitle>
              <CalendarDays className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">May 15, 2025</div>
              <p className="text-xs text-muted-foreground">Tuition Installment</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Fee Breakdown by Category</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={semesterExpenses}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tuition" fill="#0284c7" name="Tuition" />
                  <Bar dataKey="housing" fill="#7dd3fc" name="Housing" />
                  <Bar dataKey="books" fill="#0369a1" name="Books" />
                  <Bar dataKey="fees" fill="#38bdf8" name="Fees" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Current Semester Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={feeBreakdown}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({name, value}) => `${name}: $${value}`}
                    labelLine={false}
                  >
                    {feeBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value}`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="history">
              <TabsList className="mb-4">
                <TabsTrigger value="history">Payment History</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
              </TabsList>
              
              <TabsContent value="history">
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 p-4 font-medium border-b text-sm">
                    <div>Date</div>
                    <div>Type</div>
                    <div>Amount</div>
                    <div>Status</div>
                  </div>
                  {paymentHistory.map((payment) => (
                    <div key={payment.id} className="grid grid-cols-4 p-4 border-b text-sm last:border-0">
                      <div>{payment.date}</div>
                      <div>{payment.type}</div>
                      <div>${payment.amount.toLocaleString()}</div>
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="upcoming">
                <div className="rounded-md border">
                  <div className="grid grid-cols-3 p-4 font-medium border-b text-sm">
                    <div>Due Date</div>
                    <div>Type</div>
                    <div>Amount</div>
                  </div>
                  {upcomingPayments.map((payment) => (
                    <div key={payment.id} className="grid grid-cols-3 p-4 border-b text-sm last:border-0">
                      <div>{payment.dueDate}</div>
                      <div>{payment.type}</div>
                      <div>${payment.amount.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end mt-6">
              <Button className="bg-college-700 hover:bg-college-800">
                Make a Payment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
