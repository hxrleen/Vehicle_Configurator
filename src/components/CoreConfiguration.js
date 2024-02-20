// CoreConfiguration.js
import React from "react";

function CoreConfiguration() {
  return (
    <div>
      <h2>Core Configuration</h2>
      <p>
        This is the core configuration section. Here you can select options
        related to the core features of the car.
      </p>
      <div>
        <label htmlFor="engine">Engine:</label>
        <select id="engine">
          <option value="v4">V4</option>
          <option value="v6">V6</option>
          <option value="v8">V8</option>
        </select>
      </div>
      <div>
        <label htmlFor="transmission">Transmission:</label>
        <select id="transmission">
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
        </select>
      </div>
    </div>
  );
}

export default CoreConfiguration;
