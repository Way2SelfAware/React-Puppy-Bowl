import React, { useState, useEffect } from "react";
import { Playercard } from "./playercard";
import { Searchbar } from "./searchbar";

export const AllPlayers = () => {
  //Write functionality for Search Bar

  //Write GET fucntion to grad and display player information
  //useEffect(()=>{

  // })

  return (
    <>
      <div>
        <Searchbar />
      </div>
      <div>
        <Playercard />
      </div>
    </>
  );
};
