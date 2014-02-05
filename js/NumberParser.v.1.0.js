/** @preserve NumberParser - version 1.0 - February 2014
  * Any copyright is dedicated to the Public Domain. http://creativecommons.org/publicdomain/zero/1.0/
  * Written by Craig Creeger
  * Pixel Pro, Inc.
  */

(function() { 
	//Create PixelPro namespace
	if (typeof PixelPro=='undefined') window.PixelPro = {};
	//******************************************************************
	PixelPro.NumberParser = function(possibleNbr) {
		this.possibleNbr = possibleNbr;
		if (this.isNumeric()) {
			if (this.isPercent()) {
				this.actualNbr = parseFloat(this.possibleNbr) / 100;
			} else {
				this.actualNbr = parseFloat(this.possibleNbr);
			}
		} else {
			this.actualNbr = Number.NaN;
		}
	}
	PixelPro.NumberParser.prototype.isStrictNumber = function() {
		//Return true or false; the data type of possibleNbr must be 'Number' for it to be true
		return ( (typeof this.possibleNbr === typeof 1) && (null !== this.possibleNbr) && isFinite(this.possibleNbr) );
	}
	PixelPro.NumberParser.prototype.isNumeric = function() {
		//return isFinite(parseFloat(this.possibleNbr));
		return PixelPro.NumberParser.isNumeric(this.possibleNbr);
	}
	PixelPro.NumberParser.isNumeric = function(possibleNbr) {
		return isFinite(parseFloat(possibleNbr));
	}
	PixelPro.NumberParser.prototype.toNumber = function(decimals) {
		if (this.isNumeric()) {
			if (typeof decimals === 'undefined') {
				return Number(this.actualNbr);
			} else {
				return Number(Math.round10(this.actualNbr, decimals));
			}
		} else {
			return '';
		}
	}
	PixelPro.NumberParser.prototype.toString = function(decimals) {
		if (this.isNumeric()) {
			if (typeof decimals === 'undefined') {
				return Number(this.actualNbr).toString();
			} else {
				return Math.round10(Number(this.actualNbr), decimals).toString();
			}
		} else {
			return '';
		}
	}
	PixelPro.NumberParser.prototype.toPercent = function(decimals) {
		if (this.isNumeric()) {
			var newPercent = Number(this.actualNbr) * 100;
			if (typeof decimals === 'undefined') {
				return newPercent.toString() + '%';
			} else {
				return Math.round10(newPercent, decimals) + '%';
			}
		} else {
			return '';
		}
	}
	PixelPro.NumberParser.prototype.isPercent = function() {
		if (this.isNumeric()) {
			var reg = /\%$/; //last char is %
			if (reg.test(this.possibleNbr)) {
				return true;
			}
		}
		return false;
	}
})();
(function(){
	// This code is from the Mozilla Developer documentation. It adds rounding functionality to
	// the standard Math class.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
	/**
	 * Decimal adjustment of a number.
	 *
	 * @param	{String}	type	The type of adjustment.
	 * @param	{Number}	value	The number.
	 * @param	{Integer}	exp		The exponent (the 10 logarithm of the adjustment base).
	 * @returns	{Number}			The adjusted value.
	 */
	function decimalAdjust(type, value, exp) {
		// If the exp is undefined or zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// If the value is not a number or the exp is not an integer...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// Shift
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Shift back
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Decimal round
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}
	// Decimal floor
	if (!Math.floor10) {
		Math.floor10 = function(value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}
	// Decimal ceil
	if (!Math.ceil10) {
		Math.ceil10 = function(value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}
})();
