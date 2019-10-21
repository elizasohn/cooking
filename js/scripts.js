//cups to ounces
var inputtedCups = prompt("How many cups?");
var cups = parseFloat(inputtedCups);
var cupsToOz = (cups * 8);
alert(cups + " cups is equivalent to " + cupsToOz + " ounces.");

//ounces to cups
var inputtedOunces = prompt("How many ounces?");
var ounces = parseFloat(inputtedOunces);
var ozToCups = (ounces / 8);
alert(ounces + " ounces is equivalent to " + ozToCups + " cups.");

//ounces to milliliters
var inputtedOunces = prompt("How many ounces?");
var ounces = parseFloat(inputtedOunces);
var ozToML = (ounces * 30);
alert(ounces + " ounces is equivalent to " + ozToML + " milliliters.");

//milliliters to ounces
var inputtedML = prompt("How many milliliters?");
var mL = parseFloat(inputtedML);
var mLToOz = (mL / 30);
alert(mL + " milliliters is equivalent to " + mLToOz + " ounces.");

//tablespoons to milliliters
var inputtedTBSP = prompt("How many tablespoons?");
var TBSP = parseFloat(inputtedTBSP);
var TBSPToML = (TBSP * 15);
alert(TBSP + " tablespoons is equivalent to " + TBSPToML + " milliliters.");

//milliliters to tablespoons
var inputtedML = prompt("How many milliliters?");
var mL = parseFloat(inputtedML);
var mLToTBSP = (mL / 15);
alert(mL + " milliliters is equivalent to " + mLToTBSP + " tablespoons.");
