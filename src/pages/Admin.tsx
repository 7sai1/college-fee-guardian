import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter, PlusCircle, Download, MoveDown, Eye, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const students = [
  { id: "ST10045", name: "Emma Johnson", email: "emma.j@carrier.edu", program: "Computer Science", year: "Junior", balance: 2500, status: "Good Standing" },
  { id: "ST10078", name: "Jason Miller", email: "j.miller@carrier.edu", program: "Business Administration", year: "Sophomore", balance: 4800, status: "Payment Due" },
  { id: "ST10056", name: "Sophie Clarke", email: "sophie.c@carrier.edu", program: "Nursing", year: "Senior", balance: 0, status: "Paid" },
  { id: "ST10092", name: "Raj Patel", email: "r.patel@carrier.edu", program: "Mechanical Engineering", year: "Freshman", balance: 7500, status: "Financial Hold" },
  { id: "ST10067", name: "Marcus Wilson", email: "m.wilson@carrier.edu", program: "Psychology", year: "Junior", balance: 1200, status: "Good Standing" },
  { id: "ST10034", name: "Hannah Martinez", email: "h.martinez@carrier.edu", program: "Education", year: "Senior", balance: 800, status: "Good Standing" },
  { id: "ST10089", name: "Daniel Lee", email: "d.lee@carrier.edu", program: "Electrical Engineering", year: "Sophomore", balance: 3650, status: "Payment Due" },
  { id: "ST10023", name: "Olivia Thompson", email: "o.thompson@carrier.edu", program: "Communications", year: "Junior", balance: 0, status: "Paid" },
];

const Admin = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const { toast } = useToast();

  const handleViewStudent = (student: any) => {
    setSelectedStudent(student);
    setDialogOpen(true);
  };

  const handleExport = () =>
    toast({ title: "Export", description: "Export functionality coming soon!", duration: 2200 });
  const handleAddStudent = () =>
    toast({ title: "Add Student", description: "Feature coming soon!", duration: 2200 });
  const handleFilter = () =>
    toast({ title: "Filter", description: "Filtering coming soon!", duration: 2200 });
  const handleStudentAction = (action: string) =>
    toast({ title: action, description: "This action will work after connecting with Supabase.", duration: 2500 });

  return (
    <Layout>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Student Accounts</CardTitle>
                <CardDescription>Manage student financial records</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="gap-2" onClick={handleExport}>
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
                <Button className="gap-2" onClick={handleAddStudent}>
                  <PlusCircle className="h-4 w-4" />
                  <span>Add Student</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <TabsList>
                  <TabsTrigger value="all">All Students</TabsTrigger>
                  <TabsTrigger value="hold">Financial Hold</TabsTrigger>
                  <TabsTrigger value="due">Payment Due</TabsTrigger>
                  <TabsTrigger value="paid">Paid</TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search students..."
                      className="pl-8 w-[200px] sm:w-[300px]"
                    />
                  </div>
                  <Button variant="outline" size="icon" onClick={handleFilter}>
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <TabsContent value="all" className="m-0">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Program</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">{student.id}</TableCell>
                          <TableCell>
                            <div>{student.name}</div>
                            <div className="text-xs text-muted-foreground">{student.email}</div>
                          </TableCell>
                          <TableCell>{student.program}</TableCell>
                          <TableCell>{student.year}</TableCell>
                          <TableCell>${student.balance.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge 
                              variant="outline" 
                              className={
                                student.status === "Paid" ? "text-green-600 bg-green-50 border-green-200" :
                                student.status === "Financial Hold" ? "text-red-600 bg-red-50 border-red-200" :
                                student.status === "Payment Due" ? "text-yellow-600 bg-yellow-50 border-yellow-200" :
                                "text-blue-600 bg-blue-50 border-blue-200"
                              }
                            >
                              {student.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" onClick={() => handleViewStudent(student)}>
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleStudentAction("Edit")}>
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleStudentAction("Payments")}>
                                <MoveDown className="h-4 w-4" />
                                <span className="sr-only">Payments</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-muted-foreground">
                    Showing <strong>8</strong> of <strong>100</strong> students
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="hold" className="m-0">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Program</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.filter(s => s.status === "Financial Hold").map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">{student.id}</TableCell>
                          <TableCell>
                            <div>{student.name}</div>
                            <div className="text-xs text-muted-foreground">{student.email}</div>
                          </TableCell>
                          <TableCell>{student.program}</TableCell>
                          <TableCell>{student.year}</TableCell>
                          <TableCell>${student.balance.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge 
                              variant="outline" 
                              className="text-red-600 bg-red-50 border-red-200"
                            >
                              {student.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" onClick={() => handleViewStudent(student)}>
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleStudentAction("Edit")}>
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleStudentAction("Payments")}>
                                <MoveDown className="h-4 w-4" />
                                <span className="sr-only">Payments</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="due" className="m-0">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Program</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.filter(s => s.status === "Payment Due").map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">{student.id}</TableCell>
                          <TableCell>
                            <div>{student.name}</div>
                            <div className="text-xs text-muted-foreground">{student.email}</div>
                          </TableCell>
                          <TableCell>{student.program}</TableCell>
                          <TableCell>{student.year}</TableCell>
                          <TableCell>${student.balance.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge 
                              variant="outline" 
                              className="text-yellow-600 bg-yellow-50 border-yellow-200"
                            >
                              {student.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" onClick={() => handleViewStudent(student)}>
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleStudentAction("Edit")}>
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleStudentAction("Payments")}>
                                <MoveDown className="h-4 w-4" />
                                <span className="sr-only">Payments</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="paid" className="m-0">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Program</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.filter(s => s.status === "Paid").map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">{student.id}</TableCell>
                          <TableCell>
                            <div>{student.name}</div>
                            <div className="text-xs text-muted-foreground">{student.email}</div>
                          </TableCell>
                          <TableCell>{student.program}</TableCell>
                          <TableCell>{student.year}</TableCell>
                          <TableCell>${student.balance.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge 
                              variant="outline" 
                              className="text-green-600 bg-green-50 border-green-200"
                            >
                              {student.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" onClick={() => handleViewStudent(student)}>
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleStudentAction("Edit")}>
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleStudentAction("Payments")}>
                                <MoveDown className="h-4 w-4" />
                                <span className="sr-only">Payments</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Student Financial Details</DialogTitle>
            <DialogDescription>
              View and manage financial information for this student
            </DialogDescription>
          </DialogHeader>
          
          {selectedStudent && (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Student ID</Label>
                  <div>{selectedStudent.id}</div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Name</Label>
                  <div>{selectedStudent.name}</div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Email</Label>
                  <div>{selectedStudent.email}</div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Program</Label>
                  <div>{selectedStudent.program}</div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Year</Label>
                  <div>{selectedStudent.year}</div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Account Status</Label>
                  <div>
                    <Badge 
                      variant="outline" 
                      className={
                        selectedStudent.status === "Paid" ? "text-green-600 bg-green-50 border-green-200" :
                        selectedStudent.status === "Financial Hold" ? "text-red-600 bg-red-50 border-red-200" :
                        selectedStudent.status === "Payment Due" ? "text-yellow-600 bg-yellow-50 border-yellow-200" :
                        "text-blue-600 bg-blue-50 border-blue-200"
                      }
                    >
                      {selectedStudent.status}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md">
                <div className="p-4 border-b bg-muted/50">
                  <h3 className="font-medium">Current Balance: ${selectedStudent.balance.toLocaleString()}</h3>
                </div>
                <div className="p-4 grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="payment-amount">Apply Payment</Label>
                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <Input
                          id="payment-amount"
                          type="text"
                          placeholder="0.00"
                          className="pl-8"
                        />
                      </div>
                      <Select defaultValue="payment">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Transaction type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="payment">Payment</SelectItem>
                          <SelectItem value="charge">Charge</SelectItem>
                          <SelectItem value="refund">Refund</SelectItem>
                          <SelectItem value="adjustment">Adjustment</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button onClick={() => handleStudentAction("Apply Payment")}>Apply</Button>
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="payment-note">Note</Label>
                    <Input id="payment-note" placeholder="Payment note or description" />
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md">
                <div className="p-4 border-b bg-muted/50">
                  <h3 className="font-medium">Account Actions</h3>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => handleStudentAction("Email Statement")}>Email Statement</Button>
                  <Button variant="outline" onClick={() => handleStudentAction("Payment Plan")}>Payment Plan</Button>
                  <Button variant="outline" onClick={() => handleStudentAction("View History")}>View History</Button>
                  {selectedStudent.status === "Financial Hold" ? (
                    <Button variant="outline" onClick={() => handleStudentAction("Remove Hold")}>Remove Hold</Button>
                  ) : (
                    <Button variant="outline" onClick={() => handleStudentAction("Apply Hold")}>Apply Hold</Button>
                  )}
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => handleStudentAction("Save Changes")}>Save Changes</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Admin;
