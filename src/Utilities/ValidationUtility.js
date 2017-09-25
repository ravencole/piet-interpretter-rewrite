export const isArray = 
	elm => Array.isArray(elm)

export const isArrayOfIntegers = 
	arr => arr.reduce((a,b) => Number.isInteger(b) ? a : false, true)

export const isInteger = 
	n => Number.isInteger(n)

export const isArrayOfNonZeroNumbers = 
	arr => arr.reduce((a,b) => b !== 0 ? a : false, true)

export const isObject = 
	obj => obj === Object(obj)

export const isInRange =
	(val, low, high) => val >= low && val <= high

export default {
	isArray,
	isArrayOfIntegers,
	isInRange,
	isInteger
}
