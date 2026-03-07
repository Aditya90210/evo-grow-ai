import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Settings, Save, Bell, Globe, Brain, HardDrive, Shield, Wrench } from "lucide-react";

const PlatformSettings = () => {
  const [settings, setSettings] = useState({
    defaultAiLimit: 100,
    defaultStorageGB: 5,
    maintenanceMode: false,
    emailNotifications: true,
    apiRateLimit: 1000,
    enableNewSignups: true,
    enableAI: true,
    enableIntegrations: true,
    forceSSL: true,
    force2FA: false,
  });

  const updateSetting = (key: string, value: unknown) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div id="settings" className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Global Platform Settings</h2>
        <p className="text-muted-foreground">Configure platform-wide settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader><CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5 text-primary" /> AI Configuration</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Enable AI System</Label>
              <Switch checked={settings.enableAI} onCheckedChange={(v) => updateSetting("enableAI", v)} />
            </div>
            <div>
              <Label>Default AI Limit (per user/day)</Label>
              <Input type="number" value={settings.defaultAiLimit} onChange={(e) => updateSetting("defaultAiLimit", parseInt(e.target.value))} className="mt-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader><CardTitle className="flex items-center gap-2"><HardDrive className="h-5 w-5 text-primary" /> Storage & Limits</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Default Storage (GB)</Label>
              <Input type="number" value={settings.defaultStorageGB} onChange={(e) => updateSetting("defaultStorageGB", parseInt(e.target.value))} className="mt-1" />
            </div>
            <div>
              <Label>API Rate Limit (req/hour)</Label>
              <Input type="number" value={settings.apiRateLimit} onChange={(e) => updateSetting("apiRateLimit", parseInt(e.target.value))} className="mt-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader><CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5 text-primary" /> Feature Toggles</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              { key: "enableNewSignups", label: "Allow New Signups" },
              { key: "enableIntegrations", label: "Enable Integrations" },
              { key: "emailNotifications", label: "Email Notifications" },
            ].map((f) => (
              <div key={f.key} className="flex items-center justify-between">
                <Label>{f.label}</Label>
                <Switch checked={settings[f.key as keyof typeof settings] as boolean} onCheckedChange={(v) => updateSetting(f.key, v)} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> Security Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Force SSL</Label>
              <Switch checked={settings.forceSSL} onCheckedChange={(v) => updateSetting("forceSSL", v)} />
            </div>
            <div className="flex items-center justify-between">
              <Label>Enforce 2FA</Label>
              <Switch checked={settings.force2FA} onCheckedChange={(v) => updateSetting("force2FA", v)} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Wrench className="h-5 w-5 text-destructive" /> Maintenance Mode</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Enable Maintenance Mode</Label>
                <p className="text-xs text-muted-foreground">Temporarily disable platform access for all non-admin users</p>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={settings.maintenanceMode} onCheckedChange={(v) => updateSetting("maintenanceMode", v)} />
                <Badge variant={settings.maintenanceMode ? "destructive" : "default"}>
                  {settings.maintenanceMode ? "Maintenance Active" : "Normal Operation"}
                </Badge>
              </div>
            </div>
            <Button className="w-full"><Save className="h-4 w-4 mr-2" /> Save All Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlatformSettings;
