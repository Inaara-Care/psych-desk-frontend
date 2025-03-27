"use client";
import React, { useState } from "react";
import { InputButton } from "../components/core/input_field";

const DemoInputPage = () => {
  const [name, setName] = useState("");
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-[450px] p-6 space-y-10">
        <InputButton
          type="Location"
          lead = {true}
          label='Name'
          destructive={true}
          placeholder="Enter your Number"
          state="focused"
          value={name}
          onChange={(e) => setName(e.target.value)}
          hintText="This is a hint text"
          destructiveText="This is an error text"
        /> 
        <span>{name}</span>
        </div> 
    </div>
  );
};

export default DemoInputPage;
