import React, {useState, useEffect} from "react";

export const NewPlayerForm = () => {

  // add a function to handle file upload

  // do something with file

  // write POST API function
    // useEffect(()=>{

    // });


  return (
    <div>
      {/* Page Title */}
      <h1>New Player Form</h1>
      {/* Page Description */}
      <p>Use this form to add your own All-Star to the game!</p>
      {/* New Player Form */}
      <div className="newplayerform">
        {/* Name Input */}
        <label htmlFor="Name">What is your All-Star's Name?</label>
        <input type="text"></input>
        {/* Breed Input */}
        <label htmlFor="Breed">What is the Breed?</label>
        <input type="text"></input>
        {/* Status */}
        <label htmlFor="Status">On the Field?</label>
        <input type="checkbox"></input>
        {/* Upload Picture */}
        <label htmlFor="Picture">Would you like to add a picture?</label>
        <input type="file" accept="image/*"></input>
      </div>
    </div>
  );
};
