import { TabMenu, Tabs as TabsComponent } from "@/components/ui/tabs";
import { useState } from "react";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState<string>("account");
  const tabMenus: TabMenu[] = [
    { name: "Lihat Transaksi", value: "account" },
    { name: "Download Laporan", value: "password" },
    // { name: "Email", value: "email", disabled: true },
  ];

  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Tabs</h3>
      <div className="lui-flex lui-flex-col lui-gap-2">
        <TabsComponent
          defaultValue="account"
          className="lui-w-full lui-max-w-[288px]"
          listProps={{ className: "lui-w-full" }}
          tabMenus={tabMenus}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "account" && <p>Change your account settings here.</p>}
        {selectedTab === "password" && <p>Change your password here.</p>}
        {selectedTab === "email" && <p>Change your email here.</p>}
      </div>
      <div className="lui-flex lui-flex-col lui-gap-2">
        <TabsComponent
          defaultValue="account"
          className="lui-w-[400px]"
          tabMenus={tabMenus}
          size="large"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "account" && <p>Change your account settings here.</p>}
        {selectedTab === "password" && <p>Change your password here.</p>}
        {selectedTab === "email" && <p>Change your email here.</p>}
      </div>
      <div className="lui-flex lui-flex-col lui-gap-2">
        <TabsComponent
          defaultValue="account"
          className="lui-w-[400px]"
          tabMenus={tabMenus}
          tabsStyle="filled"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "account" && <p>Change your account settings here.</p>}
        {selectedTab === "password" && <p>Change your password here.</p>}
        {selectedTab === "email" && <p>Change your email here.</p>}
      </div>
      <div className="lui-flex lui-flex-col lui-gap-2">
        <TabsComponent
          defaultValue="account"
          className="lui-w-[400px]"
          tabMenus={tabMenus}
          tabsStyle="filled"
          size="large"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "account" && <p>Change your account settings here.</p>}
        {selectedTab === "password" && <p>Change your password here.</p>}
        {selectedTab === "email" && <p>Change your email here.</p>}
      </div>
    </div>
  );
}

export default Tabs;
