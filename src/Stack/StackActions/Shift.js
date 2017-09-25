import {
	isInteger
} from '../../Utilities/ValidationUtility'

export default class Shift {
	constructor(stack, value = 1) {
		this.stack = stack	
		this.value = value 
	}
	validate() {
		if (!isInteger(this.value))
			throw new TypeError(`Shift expects to be called without parameters, or to be passed an Integer: ${typeof this.value} passed`)

		return this
	}
	performAction() {
		return this.stack.getLength() >= this.value ?
				this.stack.stack.splice(0, this.value) : 
				false
	}
}
