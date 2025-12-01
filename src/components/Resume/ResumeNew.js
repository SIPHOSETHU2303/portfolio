import React from "react";

function ResumeNew() {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px"
      }}
    >
      <h2>My Resume</h2>
      <img 
        src="resume.png" 
        alt="Resume" 
        style={{ 
          maxWidth: "250px", 
          width: "100%", 
          height: "auto", 
          border: "1px solid #ccc", 
          borderRadius: "8px",
          padding: "5px"
        }} 
      />
    </div>
  );
}

export default ResumeNew;
