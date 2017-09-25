import {
	isArrayOfIntegers,
	isInteger
} from '../../Utilities/ValidationUtility'

export default class Pop {
	constructor(stack, value = undefined) {
		this.stack = stack	
		this.value = value
	}
	validate() {
		const VAL_IS_ARRAY = Array.isArray(this.value)

		if ((!isInteger(this.value) && !VAL_IS_ARRAY) || (VAL_IS_ARRAY && !isArrayOfIntegers(this.value))) 
			throw new TypeError(`Push accepts either an Integer or an Array of Integers: ${typeof this.value} passed`)

		return this
	}
	performAction() {
		if (Array.isArray(this.value))
			this.stack.stack = this.stack.stack.concat(this.value)
		else
			this.stack.stack.push(this.value)

		return true
	}
}
