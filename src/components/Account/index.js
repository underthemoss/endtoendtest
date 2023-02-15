import React, { useState } from "react";
import BusinessUnitForm from "./forms/business_unit";

const Account = (props) => {
  const [selectedForm, setSelectedForm] = useState("Locations");

  return (
    <div style={{ display: "flex", marginLeft: "40px", padding: "20px" }}>
      <ul style={{ marginLeft: 0, padding: 0 }}>
        {[
          "Locations",
          "Contacts",
          "Inventory",
          "Products",
          "People",
          "Product Categories",
          "Contact",
          "Business Unit",
        ].map((form) => (
          <li
            key={form}
            style={{
              listStyle: "none",
              marginTop: "10px",
              fontWeight: selectedForm === form ? "bold" : "normal",
              cursor: "pointer",
            }}
            onClick={() => setSelectedForm(form)}
          >
            {form}
          </li>
        ))}
      </ul>
      {selectedForm === "Locations" && (
        <div>
          <h2>Locations Form</h2>
          <p>This is the Locations form section.</p>
        </div>
      )}
      {selectedForm === "Contacts" && (
        <div>
          <h2>Contacts Form</h2>
          <p>This is the Contacts form section.</p>
        </div>
      )}
      {selectedForm === "Inventory" && (
        <div>
          <h2>Inventory Form</h2>
          <p>This is the Inventory form section.</p>
        </div>
      )}
      {selectedForm === "Products" && (
        <div>
          <h2>Products Form</h2>
          <p>This is the Products form section.</p>
        </div>
      )}
      {selectedForm === "People" && (
        <div>
          <h2>People Form</h2>
          <p>This is the People form section.</p>
        </div>
      )}
      {selectedForm === "Product Categories" && (
        <div>
          <h2>Product Categories Form</h2>
          <p>This is the Product Categories form section.</p>
        </div>
      )}
      {selectedForm === "Contact" && (
        <div>
          <h2>Contact</h2>
          <p>This is the Contact section of the Profile.</p>
        </div>
      )}
      {selectedForm === "Business Unit" && <BusinessUnitForm />}
    </div>
  );
};

export default Account;
