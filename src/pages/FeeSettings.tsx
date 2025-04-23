
import { Layout } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const FeeSettings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Fee Settings saved (not yet connected to backend)",
      description: "Once Supabase is connected, your data will persist.",
      duration: 3000,
    });
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Fee Settings</CardTitle>
            <CardDescription>Manage fee categories and rates</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSave();
              }}
              className="space-y-4"
            >
              <div>
                <Label htmlFor="tuition">Tuition Per Credit</Label>
                <Input id="tuition" type="number" defaultValue={625} />
              </div>
              <div>
                <Label htmlFor="housing">Housing Fee</Label>
                <Input id="housing" type="number" defaultValue={2400} />
              </div>
              <div>
                <Label htmlFor="books">Books & Materials</Label>
                <Input id="books" type="number" defaultValue={800} />
              </div>
              <Button type="submit">Save Settings</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
export default FeeSettings;
