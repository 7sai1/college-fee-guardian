
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const financeReports = [
  { id: 1, type: "Quarterly Revenue", amount: "$950,000", period: "Q1 2025", status: "Finalized" },
  { id: 2, type: "Outstanding Fees", amount: "$125,500", period: "Q1 2025", status: "Draft" },
  { id: 3, type: "Scholarship Disbursements", amount: "$320,000", period: "Q1 2025", status: "Finalized" },
  { id: 4, type: "Refunds Issued", amount: "$18,200", period: "Q1 2025", status: "Finalized" },
];

const FinanceReports = () => (
  <Layout>
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Finance Reports</CardTitle>
          <CardDescription>Preview of key finance-related reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {financeReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>{report.type}</TableCell>
                    <TableCell>{report.amount}</TableCell>
                    <TableCell>{report.period}</TableCell>
                    <TableCell>
                      <span className={report.status === "Finalized" 
                        ? "text-green-600" 
                        : "text-yellow-700"
                      }>
                        {report.status}
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

export default FinanceReports;
