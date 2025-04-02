// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTrapezoid() {
  // input
  const baseA = parseFloat(document.getElementById("base-A").value)
  const baseB = parseFloat(document.getElementById("base-B").value)
  const height = parseFloat(document.getElementById("height").value)
  // process (corrected formula)
  const areaOfTrapezoid = (height * (baseA + baseB)) / 2

  // output
  document.getElementById("area").innerHTML =
    "Area is: " + areaOfTrapezoid + " cm²"
}
