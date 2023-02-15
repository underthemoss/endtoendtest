import React, { useState } from "react";
import Account from "./components/Account";
import Catalog from "./components/Catalog";
import Orders from "./components/Orders";
import Quotes from "./components/Quotes";
import Resources from "./components/Resources";

const menuItems = [
  { id: 1, name: "Catalog", component: Catalog },
  { id: 2, name: "Orders", component: Orders },
  { id: 3, name: "Quotes", component: Quotes },
  { id: 4, name: "Resources", component: Resources },
  { id: 5, name: "Account", component: Account },
];

const App = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0]);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          height: "100vh",
          width: "200px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.id}
              style={{
                marginTop: "10px",
                padding: "10px",
                fontWeight:
                  selectedMenuItem.id === menuItem.id ? "bold" : "normal",
                cursor: "pointer",
              }}
              onClick={() => setSelectedMenuItem(menuItem)}
            >
              {menuItem.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, marginLeft: "20px" }}>
        {React.createElement(selectedMenuItem.component)}
      </div>
    </div>
  );
};

export default App;
