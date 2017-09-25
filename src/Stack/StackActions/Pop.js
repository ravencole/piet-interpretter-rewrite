import {
	isInteger,
} from '../../Utilities/ValidationUtility'

export default class Pop {
	constructor(stack, value = 1) {
		this.stack = stack	
		this.value =  value 
	}
	validate() {
		if (!isInteger(this.value))
			throw new TypeError(`Pop expects to be called without parameters, or to be passed an Integer: ${typeof this.value} passed`)

		return this
	}
	performAction() {
		return this.stack.getLength() >= this.value ?
				this.stack.getStack().splice(this.value * -1, this.stack.getLength()) : 
				false
	}
}
