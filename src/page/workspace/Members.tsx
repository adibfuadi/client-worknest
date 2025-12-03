import { Separator } from "@/components/ui/separator";
import InviteMember from "@/components/workspace/member/invite-member";
import AllMembers from "@/components/workspace/member/all-members";
import WorkspaceHeader from "@/components/workspace/common/workspace-header";
import { Card, CardContent } from "@/components/ui/card";

export default function Members() {
  return (
    <div className="w-full h-auto pt-2">
      <main>
        <Card className="shadow-none w-full">
          <CardContent className="w-full pt-6">
            <WorkspaceHeader />
            <Separator className="my-4 " />
            <div className="w-full pt-3">
              <div>
                <h2 className="text-lg leading-[30px] font-semibold mb-1">
                  Workspace members
                </h2>
                <p className="text-sm text-muted-foreground">
                  Workspace members can view and join all Workspace project,
                  tasks and create new task in the Workspace.
                </p>
              </div>
              <Separator className="my-4" />

              <InviteMember />
              <Separator className="my-4 !h-[0.5px]" />

              <AllMembers />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
