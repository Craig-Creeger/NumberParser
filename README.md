# Description

NumberParser is a small Javascript class that allows you to check to see if a string can be evaluated as a number. Unlike most routines, this one will consider the percent sign a valid character. So, "0.32" and "32%" both evaluate to the same number.

# Installation

Add the file 'NumberParser.v.1.0.js' to your web page.

# API

## Methods

### .isNumeric(possibleNumber)

Returns true or false. 

*Example usage:*
```
if (PixelPro.NumberParser.isNumeric('32%')) {
	//In this example, yes it evaluates to a number
} else {
	//Display error
}
```

## Instance Methods

### .isNumeric()

Returns true or false. 

*Example usage:*
```
var myNbr = new PixelPro.NumberParser("3.14159");
if (myNbr.isNumeric()) {
	//In this example, yes it evaluates to a number
} else {
	//Display error
}
```

### .isStrictNumber()

Returns true or false. To be considered a “strict” number, its data type must be a Number and it must be finite.

*Example usage:*
```
var myNbr = new PixelPro.NumberParser(3.14159);
if (myNbr.isStrictNumber()) {
	// Yes, it is a strict number
} else {
	//
}
```

### .toNumber(decimalPlaces)

Returns the number as data type Number. Optionally, you may pass in the number of decimal places that you want the number rounded to. Leave blank to perform no rounding.

*Example usage:*
```
var myNbr = new PixelPro.NumberParser(3.14159);
var doubled = myNbr.toNumber() * 2;
	//doubled = 6.28318
```

### .toString(decimalPlaces)

Returns the number as data type String. Optionally, you may pass in the number of decimal places that you want the number rounded to. Leave blank to perform no rounding.

*Example usage:*
```
var myNbr = new PixelPro.NumberParser(3.14159);
var piMessage = "Pi is roughly " + myNbr.toString();
	//Pi is roughly 3.14159
```

### .toPercent(decimalPlaces)

Returns the number as data type String. Optionally, you may pass in the number of decimal places that you want the number rounded to. Leave blank to perform no rounding.

*Example usage:*
```
var myNbr = new PixelPro.NumberParser(0.25);
var quarter = "A quarter is " + myNbr.toPercent();
	//A quarter is 25%
```

### .isPercent()

Returns true or false. This routine checks to see if the last character is a percent symbol.

*Example usage:*
```
var myNbr = new PixelPro.NumberParser('25%');
if (myNbr.isPercent()) {
	//In this example, yes, it is a percent
} else {
	//The entered string is not a percent.
}
```

