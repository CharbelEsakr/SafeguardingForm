import React, { useState } from "react";

const MultipleInputs = () => {
  const [personsInvolved, setPersonsInvolved] = useState([]);

  // Define state variables for person inputs
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [org, setOrg] = useState("");
  const [location, setLocation] = useState("");

  // Function to handle adding a new person to the list
  const handleAddPerson = () => {
    // Create a new person object with the current state values
    const newPerson = {
      name: name,
      gender: gender,
      org: org,
      location: location,
    };

    // Add the new person to the personsInvolved array
    setPersonsInvolved([...personsInvolved, newPerson]);

    // Clear the person input state variables
    setName("");
    setGender("");
    setOrg("");
    setLocation("");
  };

  // Function to handle removing a person from the list
  const handleRemovePerson = (index) => {
    // Create a copy of the personsInvolved array
    const updatedPersons = [...personsInvolved];

    // Remove the person at the specified index
    updatedPersons.splice(index, 1);

    // Update the personsInvolved state with the updated array
    setPersonsInvolved(updatedPersons);
  };

  // Render the list of persons and person input fields
  return (
    <div className="personsInvolved">
      {personsInvolved.map((person, index) => (
        <div key={index} className="person">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={person.name} readOnly />
          <label htmlFor="gender">Gender:</label>
          <input type="text" name="gender" value={person.gender} readOnly />
          <label htmlFor="org">Organization:</label>
          <input type="text" name="org" value={person.org} readOnly />
          <label htmlFor="location">Location:</label>
          <input type="text" name="location" value={person.location} readOnly />
          <button onClick={() => handleRemovePerson(index)}>Remove</button>
        </div>
      ))}
      <div className="person-inputs">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="org">Organization:</label>
        <input
          type="text"
          name="org"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleAddPerson}>Add Person</button>
      </div>
    </div>
  );
};

export default MultipleInputs;
