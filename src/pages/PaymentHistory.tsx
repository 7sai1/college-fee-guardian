
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Eye, Printer } from "lucide-react";

// Sample data for demonstration
const payments = [
  {
    id: "TX-678912",
    date: "04/10/2025",
    amount: 2500,
    method: "Credit Card (Visa ending in 4242)",
    type: "Tuition",
    status: "Completed",
    receipt: "#12345",
  },
  {
    id: "TX-678890",
    date: "03/15/2025",
    amount: 800,
    method: "Bank Account (Checking ending in 1234)",
    type: "Housing",
    status: "Completed",
    receipt: "#12325",
  },
  {
    id: "TX-678856",
    date: "02/28/2025",
    amount: 350,
    method: "Credit Card (Mastercard ending in 5678)",
    type: "Books",
    status: "Completed",
    receipt: "#12290",
  },
  {
    id: "TX-678809",
    date: "01/20/2025",
    amount: 150,
    method: "Credit Card (Visa ending in 4242)",
    type: "Activity Fee",
    status: "Completed",
    receipt: "#12254",
  },
  {
    id: "TX-678778",
    date: "12/15/2024",
    amount: 2500,
    method: "Credit Card (Visa ending in 4242)",
    type: "Tuition",
    status: "Completed",
    receipt: "#12230",
  },
  {
    id: "TX-678712",
    date: "11/01/2024",
    amount: 800,
    method: "Bank Account (Checking ending in 1234)",
    type: "Housing",
    status: "Completed",
    receipt: "#12198",
  },
];

const PaymentHistory = () => {
  return (
    <Layout>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View and manage your previous payments</CardDescription>
              </div>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                <span>Export History</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="grid gap-2">
                  <Label htmlFor="search">Search Transactions</Label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      type="search"
                      placeholder="Search by ID or type..."
                      className="pl-8"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date-range">Date Range</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="date-range">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="current">Current Semester</SelectItem>
                      <SelectItem value="previous">Previous Semester</SelectItem>
                      <SelectItem value="year">Last 12 Months</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="payment-type">Payment Type</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="payment-type">
                      <SelectValue placeholder="Select payment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="tuition">Tuition</SelectItem>
                      <SelectItem value="housing">Housing</SelectItem>
                      <SelectItem value="books">Books</SelectItem>
                      <SelectItem value="fees">Activity Fees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <div className="hidden sm:grid sm:grid-cols-6 p-4 text-sm font-medium border-b">
                  <div>Transaction ID</div>
                  <div>Date</div>
                  <div>Amount</div>
                  <div>Type</div>
                  <div>Status</div>
                  <div className="text-right">Actions</div>
                </div>
                <div className="divide-y">
                  {payments.map((payment) => (
                    <div key={payment.id} className="sm:grid sm:grid-cols-6 p-4 text-sm items-center">
                      <div className="font-medium sm:hidden">Transaction Details</div>
                      <div className="mt-1 sm:mt-0">
                        <div className="font-mono">{payment.id}</div>
                        <div className="text-xs text-muted-foreground sm:hidden mt-1">{payment.date}</div>
                      </div>
                      <div className="hidden sm:block">{payment.date}</div>
                      <div className="mt-2 sm:mt-0 font-medium">${payment.amount.toLocaleString()}</div>
                      <div className="mt-2 sm:mt-0">{payment.type}</div>
                      <div className="mt-2 sm:mt-0">
                        <Badge 
                          variant="outline" 
                          className="text-green-600 bg-green-50 border-green-200"
                        >
                          {payment.status}
                        </Badge>
                      </div>
                      <div className="mt-4 sm:mt-0 flex items-center space-x-2 sm:justify-end">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View Receipt</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Printer className="h-4 w-4" />
                          <span className="sr-only">Print Receipt</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download Receipt</span>
                        </Button>
                      </div>
                      <div className="mt-2 sm:hidden text-xs text-muted-foreground">
                        <div className="mt-1">Method: {payment.method}</div>
                        <div className="mt-1">Receipt: {payment.receipt}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>6</strong> of <strong>6</strong> transactions
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>
              Your saved payment methods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 border rounded-md">
                <div className="bg-card flex items-center justify-center p-2 rounded-md border h-12 w-12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Visa ending in 4242</div>
                  <div className="text-sm text-muted-foreground mt-1">Expires 12/2028</div>
                </div>
                <div>
                  <Badge>Default</Badge>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 border rounded-md">
                <div className="bg-card flex items-center justify-center p-2 rounded-md border h-12 w-12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <path d="M16 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
                    <path d="m8 10 4 4" />
                    <path d="m8 14 4-4" />
                    <path d="M16 4h6" />
                    <path d="M19 7V1" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Bank Account (Checking)</div>
                  <div className="text-sm text-muted-foreground mt-1">Account ending in 1234</div>
                </div>
                <div>
                  <Button variant="ghost" size="sm">Set Default</Button>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button variant="outline">Add Payment Method</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PaymentHistory;
