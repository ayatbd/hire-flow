import { AccountSettings } from "@/components/dashboard/settings/account-settings";
import { NotificationSettings } from "@/components/dashboard/settings/notification-settings";
import { ProfessionalSettings } from "@/components/dashboard/settings/professional-settings";
import { ProfileSettings } from "@/components/dashboard/settings/profile-settings";
import { Container } from "@/components/shared/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Briefcase, Lock, User } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-muted/20 py-10">
      <Container className="max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>

        <Tabs
          defaultValue="profile"
          className="flex flex-col md:flex-row gap-8"
        >
          {/* --- Navigation Sidebar --- */}
          <TabsList className="flex md:flex-col h-auto bg-transparent gap-2 md:w-64 justify-start overflow-x-auto">
            <TabsTrigger
              value="profile"
              className="w-full justify-start gap-2 px-4 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <User className="h-4 w-4" /> Profile
            </TabsTrigger>
            <TabsTrigger
              value="professional"
              className="w-full justify-start gap-2 px-4 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <Briefcase className="h-4 w-4" /> Professional
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="w-full justify-start gap-2 px-4 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <Lock className="h-4 w-4" /> Account
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="w-full justify-start gap-2 px-4 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <Bell className="h-4 w-4" /> Notifications
            </TabsTrigger>
          </TabsList>

          {/* --- Content Area --- */}
          <div className="flex-1">
            <TabsContent value="profile" className="m-0">
              <ProfileSettings />
            </TabsContent>
            <TabsContent value="professional" className="m-0">
              <ProfessionalSettings />
            </TabsContent>
            <TabsContent value="account" className="m-0">
              <AccountSettings />
            </TabsContent>
            <TabsContent value="notifications" className="m-0">
              <NotificationSettings />
            </TabsContent>
          </div>
        </Tabs>
      </Container>
    </main>
  );
}
