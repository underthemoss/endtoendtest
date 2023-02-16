import React, { useState, useEffect } from "react";

const BusinessUnitForm = () => {
  const [businessUnit, setBusinessUnit] = useState({ name: "" });
  const [savedNames, setSavedNames] = useState([]);

  const handleChange = (event) => {
    setBusinessUnit({
      ...businessUnit,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://resilient-jalebi-64fd14.netlify.app/business_units", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: businessUnit.name,
        dataSource: "AtlasCluster",
        database: "mongowilly",
        collection: "mongowillycollection",
        document: { name: businessUnit.name },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSavedNames([...savedNames, data.insertedId]);
        setBusinessUnit({ name: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch(
      "https://resilient-jalebi-64fd14.netlify.app/business_units?dataSource=AtlasCluster&database=mongowilly&collection=mongowillycollection"
    )
      .then((res) => res.json())
      .then((data) => {
        const names = data.documents.map((item) => item.name);
        setSavedNames(names);
      })
      .catch((error) => {
        console.error("Error fetching saved names: ", error);
      });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={businessUnit.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
      <div>
        <h2>Saved names:</h2>
        <ul>
          {savedNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BusinessUnitForm;
