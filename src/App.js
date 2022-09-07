import React, { useState } from "react";
import axios from "axios";

const TaxId = () => {
  const [taxId, setTaxId] = useState();
  const [coundtycode, setcountrycode] = useState();
  const [cname,setCName] = useState()
  
  const validateTaxID = () => {
	  
    taxId.length > 0 &&
	coundtycode.length > 0 &&
      axios
        .get(
          `https://api.taxid.pro/lookup?country=${coundtycode}&tin=${taxId}&key=P4gi4PEaJ3CoYVkCeKCr8RKn1XEJqxEU`,
          
        )
        .then((res) => setCName(res.data.name))
        .catch((err) => console.log(err));
		//console.log(res);
  };
   //console.log("SK2023172459");
   console.log();
  return (
    <div>
      <div className="form-group row">
          <input
            className="input"
            type="text"
            placeholder="Country"
            onChange={(e) => setcountrycode(e.target.value)}
          />
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
		  
		  Company Name : {cname}
        </div>
    </div>
  );
};

export default TaxId;