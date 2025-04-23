
import { Layout } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const payments = [
  { id: 1, student: "Jane Doe", amount: "$2500", date: "2025-04-10", method: "Credit Card", status: "Successful" },
  { id: 2, student: "Sam Patel", amount: "$1250", date: "2025-04-08", method: "Bank Transfer", status: "Successful" },
  { id: 3, student: "Lily Wang", amount: "$2100", date: "2025-03-23", method: "Payment Plan", status: "Successful" },
  { id: 4, student: "Chris Evans", amount: "$900", date: "2025-03-21", method: "Credit Card", status: "Successful" },
];

export default function StudentPaymentsReport() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Student Payments Report</CardTitle>
            <CardDescription>All recent successful student payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.student}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.method}</TableCell>
                      <TableCell>
                        <span className="text-green-600">{row.status}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
