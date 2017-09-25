import { 
	isInteger
} from '../Utilities/ValidationUtility'

export default class InNumber {
	constructor(stack) {
		this.stack = stack	
	}

	execute(value) {
		this.value = value

		this.validate()

		this.stack.push(this.value)

		return null
	}

	validate() {
		if (this.value === undefined)
			throw new TypeError(`InNumber requires that an Integer be passed, but was passed nothing`)
		if (!isInteger(this.value))
			throw new TypeError(`InNumber requires that it be passed an Integer: ${typeof this.value} passed`)
	}
}
