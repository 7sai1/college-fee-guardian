
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfoIcon } from "lucide-react";

// Sample data for demonstration
const currentFees = [
  { id: 1, category: "Tuition", description: "Full-time enrollment (12-18 credits)", amount: 7500, deadline: "May 15, 2025", status: "Pending" },
  { id: 2, category: "Housing", description: "Standard double room - Residence Hall B", amount: 2400, deadline: "May 30, 2025", status: "Pending" },
  { id: 3, category: "Books", description: "Estimated course materials", amount: 800, deadline: "May 15, 2025", status: "Pending" },
  { id: 4, category: "Activity Fee", description: "Campus activities and facilities", amount: 300, deadline: "May 15, 2025", status: "Pending" },
];

const tuitionRates = [
  { credits: "1-11 credits", rate: "$625 per credit hour" },
  { credits: "12-18 credits (full-time)", rate: "$7,500 flat rate" },
  { credits: "19+ credits", rate: "$7,500 + $625 per additional credit" },
];

const housingOptions = [
  { type: "Single Room", location: "Residence Hall A", semesterRate: "$3,200" },
  { type: "Double Room", location: "Residence Hall A", semesterRate: "$2,600" },
  { type: "Single Room", location: "Residence Hall B", semesterRate: "$3,000" },
  { type: "Double Room", location: "Residence Hall B", semesterRate: "$2,400" },
  { type: "Single Room", location: "Residence Hall C", semesterRate: "$2,800" },
  { type: "Double Room", location: "Residence Hall C", semesterRate: "$2,200" },
];

const financialAid = [
  { type: "Merit Scholarship", amount: "$5,000", status: "Approved" },
  { type: "Federal Grant", amount: "$3,750", status: "Pending Disbursement" },
];

const Fees = () => {
  const totalCurrentFees = currentFees.reduce((total, fee) => total + fee.amount, 0);
  const totalFinancialAid = financialAid.reduce((total, aid) => total + parseInt(aid.amount.replace(/[^0-9]/g, '')), 0);
  const netBalance = totalCurrentFees - totalFinancialAid;

  return (
    <Layout>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Fee Summary</CardTitle>
                <CardDescription>Spring Semester 2025</CardDescription>
              </div>
              <Button>Download Statement</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 p-4 font-medium border-b text-sm">
                <div>Category</div>
                <div className="col-span-2">Description</div>
                <div>Amount</div>
                <div>Status</div>
              </div>
              {currentFees.map((fee) => (
                <div key={fee.id} className="grid grid-cols-5 p-4 border-b text-sm last:border-0">
                  <div>{fee.category}</div>
                  <div className="col-span-2">{fee.description}</div>
                  <div>${fee.amount.toLocaleString()}</div>
                  <div>
                    <Badge variant="outline" className="text-yellow-600 bg-yellow-50 border-yellow-200">
                      {fee.status}
                    </Badge>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-5 p-4 font-medium bg-muted/50 text-sm">
                <div className="col-span-3 text-right pr-4">Total Charges:</div>
                <div>${totalCurrentFees.toLocaleString()}</div>
                <div></div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Important Notice</AlertTitle>
                <AlertDescription>
                  All fees must be paid by the deadline to avoid late payment penalties and registration holds.
                </AlertDescription>
              </Alert>

              <div className="bg-blue-50 text-blue-800 p-4 rounded-md">
                <h3 className="text-md font-medium mb-2">Account Summary</h3>
                <div className="grid grid-cols-2 text-sm gap-1">
                  <div>Total Charges:</div>
                  <div>${totalCurrentFees.toLocaleString()}</div>
                  <div>Financial Aid:</div>
                  <div>-${totalFinancialAid.toLocaleString()}</div>
                  <div className="font-bold">Net Balance:</div>
                  <div className="font-bold">${netBalance.toLocaleString()}</div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <Button variant="outline">Payment Plan Options</Button>
                <Button>Make a Payment</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fee Schedule & Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tuition">
              <TabsList className="mb-4">
                <TabsTrigger value="tuition">Tuition Rates</TabsTrigger>
                <TabsTrigger value="housing">Housing Options</TabsTrigger>
                <TabsTrigger value="aid">Financial Aid</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tuition">
                <div className="rounded-md border">
                  <div className="grid grid-cols-2 p-4 font-medium border-b text-sm">
                    <div>Credit Hours</div>
                    <div>Rate</div>
                  </div>
                  {tuitionRates.map((rate, index) => (
                    <div key={index} className="grid grid-cols-2 p-4 border-b text-sm last:border-0">
                      <div>{rate.credits}</div>
                      <div>{rate.rate}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Tuition rates are approved by the Board of Trustees and subject to change each academic year.
                </p>
              </TabsContent>
              
              <TabsContent value="housing">
                <div className="rounded-md border">
                  <div className="grid grid-cols-3 p-4 font-medium border-b text-sm">
                    <div>Room Type</div>
                    <div>Location</div>
                    <div>Semester Rate</div>
                  </div>
                  {housingOptions.map((option, index) => (
                    <div key={index} className="grid grid-cols-3 p-4 border-b text-sm last:border-0">
                      <div>{option.type}</div>
                      <div>{option.location}</div>
                      <div>{option.semesterRate}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Housing assignments are subject to availability. A $200 housing deposit is required to secure your room.
                </p>
              </TabsContent>
              
              <TabsContent value="aid">
                <div className="rounded-md border">
                  <div className="grid grid-cols-3 p-4 font-medium border-b text-sm">
                    <div>Aid Type</div>
                    <div>Amount</div>
                    <div>Status</div>
                  </div>
                  {financialAid.map((aid, index) => (
                    <div key={index} className="grid grid-cols-3 p-4 border-b text-sm last:border-0">
                      <div>{aid.type}</div>
                      <div>{aid.amount}</div>
                      <div>
                        <Badge 
                          variant="outline" 
                          className={aid.status === "Approved" ? 
                            "text-green-600 bg-green-50 border-green-200" : 
                            "text-blue-600 bg-blue-50 border-blue-200"
                          }
                        >
                          {aid.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Financial aid is typically applied to your account 10 days before the start of the semester.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Fees;
