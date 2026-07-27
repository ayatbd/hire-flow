import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function NotificationSettings() {
  return (
    <Card className="rounded-3xl shadow-sm border-none">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what updates you want to receive.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between space-x-2">
          <div className="space-y-0.5">
            <Label className="text-base">Job Alerts</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails when new jobs matching your skills are posted.
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="space-y-0.5">
            <Label className="text-base">Application Status</Label>
            <p className="text-sm text-muted-foreground">
              Get notified when a recruiter views or updates your application.
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="space-y-0.5">
            <Label className="text-base">Marketing</Label>
            <p className="text-sm text-muted-foreground">
              Receive weekly newsletters about tech career trends.
            </p>
          </div>
          <Switch />
        </div>
      </CardContent>
    </Card>
  );
}
