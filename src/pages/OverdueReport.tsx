
import { Layout } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const overdue = [
  { id: 1, student: "John Doe", amount: "$1200", dueDate: "2025-03-10", daysOverdue: 14, status: "Overdue" },
  { id: 2, student: "Maria Rosas", amount: "$900", dueDate: "2025-02-28", daysOverdue: 25, status: "Overdue" },
  { id: 3, student: "Isaac Lin", amount: "$1700", dueDate: "2025-04-01", daysOverdue: 3, status: "Overdue" },
];

export default function OverdueReport() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Overdue Payments Report</CardTitle>
            <CardDescription>Students with overdue fee payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Amount Overdue</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Days Overdue</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overdue.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.student}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.dueDate}</TableCell>
                      <TableCell>{row.daysOverdue}</TableCell>
                      <TableCell>
                        <span className="text-red-600">{row.status}</span>
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
