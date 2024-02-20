import React from "react";

function StandardConfiguration() {
  return (
    <div>
      <h2>Standard Configuration</h2>
      <p>
        This is the standard configuration section. Here you can select options
        related to the standard features of the car.
      </p>
      <div>
        <label htmlFor="seats">Seats:</label>
        <select id="seats">
          <option value="leather">Leather</option>
          <option value="cloth">Cloth</option>
        </select>
      </div>
      <div>
        <label htmlFor="navigation">Navigation:</label>
        <select id="navigation">
          <option value="gps">GPS</option>
          <option value="maps">Maps</option>
        </select>
      </div>
    </div>
  );
}

export default StandardConfiguration;
