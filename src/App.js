import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const TaxId = () => {
  const [taxId, setTaxId] = useState();
  const [countryCode, setCountryCode] = useState();
  const [cname, setCName] = useState();
  const [valid, setValid] = useState();
  const [address, setAddress] = useState();

  const validateTaxID = () => {
    taxId.length > 0 &&
      countryCode.length > 0 &&
      axios
        .get(
          `https://api.taxid.pro/lookup?country=${countryCode}&tin=${taxId}&key=P4gi4PEaJ3CoYVkCeKCr8RKn1XEJqxEU`
        )
        .then((res) => {
          setCName(res.data.name);
          setAddress(res.data.address);
          (res.data.valid==true) ? setValid('Valid') : setValid('Not Valid')
        })
        .catch((err) => console.log(err));
  };
  //console.log("SK2023172459");

  return (
    <div className="box">
      <div className="form-group row">
        <select id="lang" onChange={(e) => setCountryCode(e.target.value)}>
          <option value="de">de</option>
          <option value="sk">sk</option>
          <option value="se">se</option>
        </select>
      </div>
      <div className="form-group row">
        <input
          className="input"
          type="text"
          placeholder="Vat ID"
          onChange={(e) => setTaxId(e.target.value)}
        />
      </div>
      <div className="form-group row mt-5">
        <button className="btn" onClick={() => validateTaxID()}>
          Validate
        </button>

        <p>
          Valid : {valid} <br/>
          Company Name : {cname} <br/>
          Address : {address}
          
        </p>
        <p> Example - Countrycode = SE &nbsp; VAT No = SE556656688001</p>
      </div>
    </div>
  );
};

export default TaxId;
