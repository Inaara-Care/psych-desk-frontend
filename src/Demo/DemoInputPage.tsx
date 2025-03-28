// Demo page
"use client";
import React, { useState } from "react";
import { InputField } from "../components/core/input_field_v2";

const DemoInputPage = () => {
  const [age, setAge] = useState("");
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[450px] p-6 space-y-10">
        <InputField
          type="Age"
          label="Age"
          placeholder="Enter your age"
          state="placeholder"
          value={age}
          destructive={false}
          onChange={(e) => setAge(e.target.value)}
          hintText="Enter your age in years"
          width="100%"
        />
        <span>Entered Age: {age}</span>
      </div>
    </div>
  );
};

export default DemoInputPage;