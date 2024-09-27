import {
  TabMenu,
  Tabs as TabsComponent,
  TabsContent,
} from "@/components/ui/tabs";
import { useState } from "react";

function Tabs() {
  const [tabMenus] = useState<TabMenu[]>([
    { name: "Account", value: "account" },
    { name: "Password", value: "password" },
    { name: "Email", value: "email", disabled: true },
  ]);

  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Tabs</h3>
      <div className="lui-flex lui-items-center lui-gap-2">
        <TabsComponent
          defaultValue="account"
          className="lui-max-w-[400px]"
          tabMenus={tabMenus}
        >
          <TabsContent value="account">
            Change your account settings here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="email">Change your email here.</TabsContent>
        </TabsComponent>
      </div>
      <div className="lui-flex lui-items-center lui-gap-2">
        <TabsComponent
          defaultValue="account"
          className="lui-w-[400px]"
          tabMenus={tabMenus}
          size="large"
        >
          <TabsContent value="account">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="email">Change your email here.</TabsContent>
        </TabsComponent>
      </div>
      <div className="lui-flex lui-items-center lui-gap-2">
        <TabsComponent
          defaultValue="account"
          className="lui-w-[400px]"
          tabMenus={tabMenus}
          tabsStyle="filled"
        >
          <TabsContent value="account">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="email">Change your email here.</TabsContent>
        </TabsComponent>
      </div>
      <div className="lui-flex lui-items-center lui-gap-2">
        <TabsComponent
          defaultValue="account"
          className="lui-w-[400px]"
          tabMenus={tabMenus}
          tabsStyle="filled"
          size="large"
        >
          <TabsContent value="account">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="email">Change your email here.</TabsContent>
        </TabsComponent>
      </div>
    </div>
  );
}

export default Tabs;
