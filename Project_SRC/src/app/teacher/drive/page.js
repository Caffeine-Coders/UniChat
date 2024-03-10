"use client"
import React from 'react';
import Drivecomponent from './drivecomponent'
import {createFolderOptions} from "../dbconnections/addFolder"
export default function Drive() {
async function handleDrive(){
  await createFolderOptions()
}
    return (
      <div>
        <button onClick={handleDrive}>
          Click
        </button>
        hi
      </div>
    );
  }