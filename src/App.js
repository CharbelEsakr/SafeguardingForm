import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [FullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [evidence, setEvidence] = useState("");
  const [witnesses, setWitnesses] = useState("");
  const [ifyes, setIfyes] = useState("");
  const [additionalinfo, setAdditionalinfo] = useState("");
  const [incidentType, setIncidentType] = useState([]);
  const [incidentDetails, setIncidentDetails] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [inputs, setInputs] = useState([]);

  const handleAddInput = () => {
    setInputs([...inputs, { name: "", gender: "", org: "", location: "" }]);
  };

  function handleRemove(i) {
    const values = [...inputs];
    values.splice(i, 1);
    setInputs(values);
  }
  const inputsJson = JSON.stringify(inputs);
  const submitReport = () => {
    Axios.post("http://localhost:3001/api/insert", {
      FullName: FullName,
      phone: phone,
      email: email,
      address: address,
      organization: organization,
      position: position,
      description: description,
      evidence: evidence,
      witnesses: witnesses,
      ifyes: ifyes,
      additionalinfo: additionalinfo,
      incidentDetails: incidentDetails,
      attachments: attachments,
      incidentType: incidentType.join(","),
      inputs: inputsJson,
    }).then(() => {
      alert("successful insert");
    });
  };
  return (
    <div className="App">
      <head>
        <title>MENA THRC Safeguarding Complaint Form</title>
      </head>
      <div className="intro">
        <h1>Safeguarding Complaint Form</h1>
        <p>
          The Middle East and North Africa Trauma Healing Resource Center (THRC)
          is committed to ensuring the safety and well-being of everyone who
          interacts with our organization. To support this commitment, we have
          established the Children and Vulnerable Adults Safeguarding Policy and
          procedure for protecting children and vulnerable adults from abuse,
          neglect, and exploitation.{" "}
        </p>
        <p>
          This form is intended to collect information about any potential or
          actual incidents of abuse, neglect, or exploitation and to ensure that
          appropriate measures are taken to protect the rights and well-being of
          all individuals involved.
        </p>
      </div>
      <div className="form">
        <div class="form-section section1">
          <h2>Section 1</h2>
        </div>
        <div className="input-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="FullName"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <p>You entered: {}</p>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="organization">Organization:</label>
          <input
            type="text"
            name="organization"
            onChange={(e) => {
              setOrganization(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            name="position"
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          />
        </div>
        <div>
          <h1 className="person">Person(s) Involved Information:</h1>
          <div className="input-group">
            {inputs.map((input, index) => (
              <div key={index}>
                <input
                  className="input-group"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={input.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setInputs((prev) => {
                      const newInputs = [...prev];
                      newInputs[index].name = value;
                      return newInputs;
                    });
                  }}
                />
                <input
                  className="input-group"
                  type="text"
                  placeholder="Gender"
                  name="gender"
                  value={input.gender}
                  onChange={(e) => {
                    const value = e.target.value;
                    setInputs((prev) => {
                      const newInputs = [...prev];
                      newInputs[index].gender = value;
                      return newInputs;
                    });
                  }}
                />
                <input
                  className="input-group"
                  type="text"
                  placeholder="Organization"
                  name="org"
                  value={input.org}
                  onChange={(e) => {
                    const value = e.target.value;
                    setInputs((prev) => {
                      const newInputs = [...prev];
                      newInputs[index].org = value;
                      return newInputs;
                    });
                  }}
                />
                <input
                  className="input-group"
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={input.location}
                  onChange={(e) => {
                    const value = e.target.value;
                    setInputs((prev) => {
                      const newInputs = [...prev];
                      newInputs[index].location = value;
                      return newInputs;
                    });
                  }}
                />
              </div>
            ))}
          </div>
          <button className="add-btn" onClick={handleAddInput}>
            Add Input
          </button>
          <button className="add-btn" onClick={handleRemove}>
            Remove
          </button>
        </div>
        <div className="input-group">
          <div class="form-section section2">
            <h2>Section 2</h2>
          </div>
          <p>Please select the type of incident from the options below.</p>
          <div>
            <label htmlFor="incident-type">Type of Incident:</label>
            <div id="incident-type">
              <label>
                <input
                  type="checkbox"
                  id="physical-abuse"
                  name="incident-type[]"
                  value="Physical abuse"
                  onChange={(e) => {
                    const value = e.target.value;
                    const checked = e.target.checked;
                    setIncidentType((prev) => {
                      if (checked) {
                        return [...prev, value];
                      } else {
                        return prev.filter((v) => v !== value);
                      }
                    });
                  }}
                />
                Physical abuse
              </label>
              <label>
                <input
                  type="checkbox"
                  id="sexual-abuse"
                  name="incident-type[]"
                  value="Sexual abuse"
                  onChange={(e) => {
                    const value = e.target.value;
                    const checked = e.target.checked;
                    setIncidentType((prev) => {
                      if (checked) {
                        return [...prev, value];
                      } else {
                        return prev.filter((v) => v !== value);
                      }
                    });
                  }}
                />
                Sexual abuse
              </label>
              <label>
                <input
                  type="checkbox"
                  id="emotional-abuse"
                  name="incident-type[]"
                  value="Emotional abuse"
                  onChange={(e) => {
                    const value = e.target.value;
                    const checked = e.target.checked;
                    setIncidentType((prev) => {
                      if (checked) {
                        return [...prev, value];
                      } else {
                        return prev.filter((v) => v !== value);
                      }
                    });
                  }}
                />
                Emotional abuse
              </label>
              <label>
                <input
                  type="checkbox"
                  id="neglect"
                  name="incident-type[]"
                  value="Neglect"
                  onChange={(e) => {
                    const value = e.target.value;
                    const checked = e.target.checked;
                    setIncidentType((prev) => {
                      if (checked) {
                        return [...prev, value];
                      } else {
                        return prev.filter((v) => v !== value);
                      }
                    });
                  }}
                />
                Neglect
              </label>
              <label>
                <input
                  type="checkbox"
                  id="exploitation"
                  name="incident-type[]"
                  value="Exploitation"
                  onChange={(e) => {
                    const value = e.target.value;
                    const checked = e.target.checked;
                    setIncidentType((prev) => {
                      if (checked) {
                        return [...prev, value];
                      } else {
                        return prev.filter((v) => v !== value);
                      }
                    });
                  }}
                />
                Exploitation
              </label>
              <div className="input-group">
                <label htmlFor="incident">Details of incidents:</label>
                <textarea
                  id="incident"
                  name="incident"
                  rows="5"
                  onChange={(e) => {
                    setIncidentDetails(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                <label htmlFor="incident">
                  Please provide a detailed description of any physical
                  injuries, harm, or marks on the individual's body, if
                  applicable:
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                <label htmlFor="evidence">
                  Do you have any evidence of the incident (e.g. photos, audio
                  recordings, etc.)?
                </label>
                <select
                  id="evidence"
                  type="text"
                  name="evidence"
                  onChange={(e) => {
                    setEvidence(e.target.value);
                  }}
                >
                  <option value="">Yes/No</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="attachments">
                  If yes, please attach the evidence in an electronic format:
                </label>
                <input
                  type="file"
                  id="attachments"
                  onChange={(e) => {
                    setAttachments(e.target.value);
                  }}
                  multiple
                />
                {attachments.length > 0 && (
                  <ul>
                    {Array.from(attachments).map((attachment, index) => (
                      <li key={index}>{attachment.name}</li>
                    ))}
                  </ul>
                )}
                {attachments.length === 0 ? (
                  <p>No files</p>
                ) : (
                  <ul>
                    {Array.from(attachments).map((attachment, index) => (
                      <li key={index}>{attachment.name}</li>
                    ))}
                  </ul>
                )}

                <a href="https://menathrc.sharepoint.com/:f:/s/MenaDrive/EvdGKHCJY4RJiUyd_HtVgvwBnbB8m8XVLgkJsbbYqK-PnA?e=elZyJZ">
                  upload files here{" "}
                </a>
              </div>
            </div>
          </div>
          <div class="form-section section2">
            <h2>Section 3</h2>
          </div>
          <div className="input-group">
            <label htmlFor="witnesses">
              <p>Witnesses:</p>
              Are there any witnesses to the incident?
            </label>
            <select
              name="witnesses"
              id="witnesses"
              type="text"
              onChange={(e) => {
                setWitnesses(e.target.value);
              }}
            >
              <option value="">Yes/No</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="ifyes">
              If yes, please provide their full names, contact information, and
              relationship to the individual(s) involved:
            </label>
            <textarea
              id="ifyes"
              name="ifyes"
              rows="5"
              onChange={(e) => {
                setIfyes(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="additionalinfo">
              <p>Additional Information:</p>
              Are there any additional details that you believe may be relevant
              to the investigation?
            </label>
            <textarea
              id="additionalinfo"
              name="additionalinfo"
              rows="5"
              onChange={(e) => {
                setAdditionalinfo(e.target.value);
              }}
            />
          </div>
          <div class="form-section section2">
            <h2>Section 4</h2>
          </div>
          <div>
            <div className="declaration1">
              <label htmlFor="declaration">Declaration:</label>
              <div id="declaration">
                <label>
                  <input
                    type="checkbox"
                    id="declaration1"
                    name="declaration1"
                    value="I declare that the information provided in this form is true, accurate, and complete to the best of my knowledge."
                    required
                  />
                  I declare that the information provided in this form is true,
                  accurate, and complete to the best of my knowledge.
                </label>
              </div>
              <div className="declaration2">
                <label>
                  <input
                    type="checkbox"
                    id="declaration2"
                    name="declaration2"
                    value="I understand that this form may be used as part of the investigation process and that knowingly providing false or misleading information may result in disciplinary action."
                    required
                  />
                  I understand that this form may be used as part of the
                  investigation process and that knowingly providing false or
                  misleading information may result in disciplinary action.
                </label>
              </div>
            </div>
          </div>
        </div>
        <button onClick={submitReport}>Submit</button>
      </div>
    </div>
  );
}

export default App;
