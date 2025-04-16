
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, CreditCard, CheckCircle2 } from "lucide-react";

const Payment = () => {
  const [paymentAmount, setPaymentAmount] = useState<string>("2500");
  const [paymentType, setPaymentType] = useState<string>("full");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  return (
    <Layout>
      {showConfirmation ? (
        <Card className="max-w-xl mx-auto">
          <CardHeader className="text-center">
            <CheckCircle2 className="w-16 h-16 mx-auto text-green-500 mb-4" />
            <CardTitle>Payment Successful</CardTitle>
            <CardDescription>
              Your payment of ${parseInt(paymentAmount).toLocaleString()} has been processed successfully.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="bg-muted p-4 rounded-md text-sm">
              <div><strong>Transaction ID:</strong> TX-238475698</div>
              <div><strong>Date:</strong> {new Date().toLocaleDateString()}</div>
              <div><strong>Payment Method:</strong> Credit Card (ending in 4242)</div>
            </div>
            <p className="text-sm text-muted-foreground">
              A receipt has been sent to your student email address.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => setShowConfirmation(false)}>Return to Dashboard</Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Make a Payment</CardTitle>
                <CardDescription>
                  Securely pay your student fees and tuition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="card" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                    <TabsTrigger value="bank">Bank Account</TabsTrigger>
                    <TabsTrigger value="plan">Payment Plan</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="card">
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="payment-amount">Payment Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            id="payment-amount"
                            type="text"
                            value={paymentAmount}
                            onChange={(e) => setPaymentAmount(e.target.value)}
                            className="pl-8"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>What are you paying for?</Label>
                        <Select defaultValue="tuition">
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tuition">Tuition</SelectItem>
                            <SelectItem value="housing">Housing</SelectItem>
                            <SelectItem value="books">Books</SelectItem>
                            <SelectItem value="fees">Activity Fees</SelectItem>
                            <SelectItem value="other">Other Charges</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Name on Card</Label>
                          <Input id="card-name" placeholder="John Doe" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <div className="relative">
                            <Input id="card-number" placeholder="4242 4242 4242 4242" />
                            <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiration Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="save-card" />
                        <label htmlFor="save-card" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Save card for future payments
                        </label>
                      </div>
                      
                      <Button type="submit" className="w-full">Process Payment</Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="bank">
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="bank-payment-amount">Payment Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            id="bank-payment-amount"
                            type="text"
                            value={paymentAmount}
                            onChange={(e) => setPaymentAmount(e.target.value)}
                            className="pl-8"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Account Type</Label>
                        <RadioGroup defaultValue="checking" className="flex space-x-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="checking" id="checking" />
                            <Label htmlFor="checking">Checking</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="savings" id="savings" />
                            <Label htmlFor="savings">Savings</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="routing-number">Routing Number</Label>
                        <Input id="routing-number" placeholder="123456789" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="account-number">Account Number</Label>
                        <Input id="account-number" placeholder="9876543210" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="account-name">Name on Account</Label>
                        <Input id="account-name" placeholder="John Doe" />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="save-bank" />
                        <label htmlFor="save-bank" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Save bank information for future payments
                        </label>
                      </div>
                      
                      <Button type="submit" className="w-full">Process Payment</Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="plan">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Available Payment Plans</h3>
                        <RadioGroup value={paymentType} onValueChange={setPaymentType} className="space-y-4">
                          <div className="flex items-top space-x-3 border p-4 rounded-md">
                            <RadioGroupItem value="full" id="full" className="mt-1" />
                            <div>
                              <Label htmlFor="full" className="text-base">Full Payment</Label>
                              <p className="text-sm text-muted-foreground">Pay your entire balance of $11,000 in one payment.</p>
                              <p className="text-sm font-medium mt-1">No additional fees</p>
                            </div>
                          </div>
                          <div className="flex items-top space-x-3 border p-4 rounded-md">
                            <RadioGroupItem value="semester" id="semester" className="mt-1" />
                            <div>
                              <Label htmlFor="semester" className="text-base">Semester Plan</Label>
                              <p className="text-sm text-muted-foreground">Split your balance into 2 payments of $5,500 each.</p>
                              <p className="text-sm font-medium mt-1">$50 enrollment fee</p>
                            </div>
                          </div>
                          <div className="flex items-top space-x-3 border p-4 rounded-md">
                            <RadioGroupItem value="monthly" id="monthly" className="mt-1" />
                            <div>
                              <Label htmlFor="monthly" className="text-base">Monthly Plan</Label>
                              <p className="text-sm text-muted-foreground">Split your balance into 5 monthly payments of $2,200 each.</p>
                              <p className="text-sm font-medium mt-1">$100 enrollment fee</p>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="pt-4">
                        <Button onClick={handlePaymentSubmit} className="w-full">Enroll in Selected Plan</Button>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded text-sm space-y-2">
                        <h4 className="font-medium">Payment Plan Terms:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Enrollment in a payment plan requires a valid payment method on file</li>
                          <li>Payments will be automatically processed on the due dates</li>
                          <li>A $30 fee will be assessed for any failed payments</li>
                          <li>You can change your plan before the start of the semester</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tuition:</span>
                    <span className="text-sm">$7,500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Housing:</span>
                    <span className="text-sm">$2,400.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Books:</span>
                    <span className="text-sm">$800.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Activity Fee:</span>
                    <span className="text-sm">$300.00</span>
                  </div>
                </div>
                
                <div className="border-t pt-2">
                  <div className="flex justify-between font-medium">
                    <span>Total Balance:</span>
                    <span>$11,000.00</span>
                  </div>
                </div>
                
                <div className="border-t pt-2">
                  <div className="flex justify-between font-medium">
                    <span>Your Payment:</span>
                    <span>${parseInt(paymentAmount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-muted-foreground">Remaining Balance:</span>
                    <span>${(11000 - parseInt(paymentAmount || "0")).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 text-blue-800 p-3 rounded-md text-sm flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Payment processing notice</p>
                    <p className="mt-1">Electronic payments may take 1-2 business days to be reflected in your account.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Payment;
