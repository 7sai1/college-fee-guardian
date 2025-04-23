
import { Layout } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const aid = [
  { id: 1, student: "Jane Doe", type: "Scholarship", amount: "$2000", awarded: "2025-01-20", status: "Disbursed" },
  { id: 2, student: "Isaac Lin", type: "Grant", amount: "$1750", awarded: "2025-01-15", status: "Disbursed" },
  { id: 3, student: "Lily Wang", type: "Work Study", amount: "$1200", awarded: "2025-02-10", status: "Pending" },
];

export default function FinancialAidReport() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Financial Aid Report</CardTitle>
            <CardDescription>Overview of financial aid awarded to students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date Awarded</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {aid.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.student}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.awarded}</TableCell>
                      <TableCell>
                        <span className={row.status === "Disbursed" ? "text-green-700" : "text-yellow-600"}>
                          {row.status}
                        </span>
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
