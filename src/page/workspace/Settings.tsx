import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import WorkspaceHeader from "@/components/workspace/common/workspace-header";
import EditWorkspaceForm from "@/components/workspace/edit-workspace-form";
import DeleteWorkspaceCard from "@/components/workspace/settings/delete-workspace-card";
import { Permissions } from "@/constant";
import withPermission from "@/hoc/with-permission";

const Settings = () => {
  return (
    <div className="w-full h-auto py-2">
      <main>
        <Card className="shadow-none w-full">
          {/* <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-1">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div className="mb-[0.2px]">{getArrowIcon()}</div>
        </div>
        <Activity
          strokeWidth={2.5}
          className="h-4 w-4  text-muted-foreground"
        />
      </CardHeader> */}
          <CardContent className="w-full pt-6">
            <WorkspaceHeader />
            <Separator className="my-4 " />
            <div className="w-full py-3">
              <h2 className="text-[20px] leading-[30px] font-semibold mb-3">
                Workspace settings
              </h2>

              <div className="flex flex-col pt-0.5 px-0 ">
                <div className="pt-2">
                  <EditWorkspaceForm />
                </div>
                <div className="pt-2">
                  <DeleteWorkspaceCard />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

const SettingsWithPermission = withPermission(
  Settings,
  Permissions.MANAGE_WORKSPACE_SETTINGS
);

export default SettingsWithPermission;
