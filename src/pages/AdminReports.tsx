
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Printer, BarChart3, PieChart } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

// Sample data for demonstration
const revenueData = [
  { month: "Jan", tuition: 425000, housing: 180000, fees: 45000, books: 28000 },
  { month: "Feb", tuition: 15000, housing: 5000, fees: 2000, books: 18000 },
  { month: "Mar", tuition: 18000, housing: 6000, fees: 3000, books: 12000 },
  { month: "Apr", tuition: 12000, housing: 4000, fees: 2500, books: 8000 },
  { month: "May", tuition: 380000, housing: 150000, fees: 38000, books: 22000 },
  { month: "Jun", tuition: 22000, housing: 8000, fees: 4000, books: 10000 },
  { month: "Jul", tuition: 18000, housing: 7000, fees: 3500, books: 5000 },
  { month: "Aug", tuition: 420000, housing: 175000, fees: 42000, books: 95000 },
  { month: "Sep", tuition: 25000, housing: 9000, fees: 4500, books: 15000 },
  { month: "Oct", tuition: 20000, housing: 7500, fees: 3800, books: 12000 },
  { month: "Nov", tuition: 15000, housing: 5500, fees: 2800, books: 8000 },
  { month: "Dec", tuition: 10000, housing: 4000, fees: 2000, books: 5000 },
];

const paymentMethodData = [
  { name: "Credit Card", value: 58 },
  { name: "Bank Transfer", value: 27 },
  { name: "Payment Plan", value: 12 },
  { name: "Other", value: 3 },
];

const paymentStatusData = [
  { name: "Paid", value: 72 },
  { name: "Pending", value: 15 },
  { name: "Overdue", value: 8 },
  { name: "Financial Hold", value: 5 },
];

const programRevenueData = [
  { name: "Business", tuition: 380000, students: 120 },
  { name: "Engineering", tuition: 420000, students: 95 },
  { name: "Nursing", tuition: 310000, students: 85 },
  { name: "Computer Science", tuition: 350000, students: 110 },
  { name: "Education", tuition: 290000, students: 75 },
  { name: "Arts & Sciences", tuition: 270000, students: 140 },
];

const COLORS = ["#0284c7", "#7dd3fc", "#0369a1", "#38bdf8", "#0ea5e9", "#bae6fd"];

const AdminReports = () => {
  return (
    <Layout>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Financial Reports</CardTitle>
                <CardDescription>Revenue and payment analytics</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Select defaultValue="2025">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="gap-2">
                  <Printer className="h-4 w-4" />
                  <span>Print</span>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="revenue">
              <TabsList className="mb-4">
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="revenue" className="space-y-6">
                <div className="rounded-md border p-4">
                  <h3 className="font-medium mb-4">Annual Revenue by Category</h3>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={revenueData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                        <Legend />
                        <Bar dataKey="tuition" fill="#0284c7" name="Tuition" />
                        <Bar dataKey="housing" fill="#7dd3fc" name="Housing" />
                        <Bar dataKey="fees" fill="#0369a1" name="Fees" />
                        <Bar dataKey="books" fill="#38bdf8" name="Books" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Total Annual Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$2,458,000</div>
                      <p className="text-xs text-muted-foreground">+12% from previous year</p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Tuition</span>
                          <span className="font-medium">$1,380,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Housing</span>
                          <span className="font-medium">$561,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Fees</span>
                          <span className="font-medium">$153,100</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Books</span>
                          <span className="font-medium">$238,000</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Outstanding Balances</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$342,500</div>
                      <p className="text-xs text-muted-foreground">13.9% of annual revenue</p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Pending Payments</span>
                          <span className="font-medium">$187,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Overdue (30+ days)</span>
                          <span className="font-medium">$98,500</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Financial Hold Accounts</span>
                          <span className="font-medium">$57,000</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Financial Aid Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$865,000</div>
                      <p className="text-xs text-muted-foreground">35.2% of tuition covered</p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Scholarships</span>
                          <span className="font-medium">$420,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Grants</span>
                          <span className="font-medium">$285,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Work Study</span>
                          <span className="font-medium">$160,000</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="payments" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium mb-4">Payment Methods</h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={paymentMethodData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {paymentMethodData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium mb-4">Payment Status</h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={paymentStatusData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {paymentStatusData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border p-4">
                  <h3 className="font-medium mb-4">Payment Trends (Monthly Collections)</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={revenueData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                        <Legend />
                        <Line type="monotone" dataKey="tuition" stroke="#0284c7" name="Tuition" />
                        <Line type="monotone" dataKey="housing" stroke="#7dd3fc" name="Housing" />
                        <Line type="monotone" dataKey="fees" stroke="#0369a1" name="Fees" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="programs" className="space-y-6">
                <div className="rounded-md border p-4">
                  <h3 className="font-medium mb-4">Revenue by Program</h3>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={programRevenueData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" orientation="left" stroke="#0284c7" />
                        <YAxis yAxisId="right" orientation="right" stroke="#0369a1" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="tuition" fill="#0284c7" name="Tuition Revenue ($)" />
                        <Bar yAxisId="right" dataKey="students" fill="#0369a1" name="Number of Students" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Highest Revenue Program</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-bold">Engineering</div>
                      <div className="text-2xl font-bold mt-1">$420,000</div>
                      <p className="text-xs text-muted-foreground">95 students enrolled</p>
                      <p className="text-xs text-muted-foreground mt-1">$4,421 average per student</p>
                      
                      <div className="mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BarChart3 className="h-4 w-4" />
                          <span>20.8% of total tuition revenue</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Largest Program</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-bold">Arts & Sciences</div>
                      <div className="text-2xl font-bold mt-1">140 students</div>
                      <p className="text-xs text-muted-foreground">$270,000 total revenue</p>
                      <p className="text-xs text-muted-foreground mt-1">$1,929 average per student</p>
                      
                      <div className="mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <PieChart className="h-4 w-4" />
                          <span>22.4% of total enrollment</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Highest Per-Student Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-bold">Nursing</div>
                      <div className="text-2xl font-bold mt-1">$3,647</div>
                      <p className="text-xs text-muted-foreground">Per student average</p>
                      <p className="text-xs text-muted-foreground mt-1">85 students enrolled</p>
                      
                      <div className="mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BarChart3 className="h-4 w-4" />
                          <span>36% higher than university average</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminReports;
