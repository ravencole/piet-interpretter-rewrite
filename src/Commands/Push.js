import {
	isInteger
} from '../Utilities/ValidationUtility'

export default class Push {
	constructor(stack) {
		this.stack = stack	
	}

	execute(value) {
		this.value = value

		this.validate()

		this.stack.push(this.value)

		return this.value
	}

	validate() {
		if (!this.value || !isInteger(this.value))	
			throw new TypeError(`Push.execute expects an integer: ${typeof this.value} passed`)
	}
}
