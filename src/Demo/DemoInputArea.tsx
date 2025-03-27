"use client";
import React, { useState } from "react";
import InputTextArea from "../components/core/input_text_area";

const DemoInputArea = () => {
  const [text, setText] = useState("");

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[450px] p-6 space-y-10">
        <InputTextArea
          label="Description"
          destructive={false}
          placeholder="Enter your text here..."
          state="disabled"
          value={text}
          onChange={(e) => setText(e.target.value)}
          hintText="This is a hint text"
        />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default DemoInputArea;
