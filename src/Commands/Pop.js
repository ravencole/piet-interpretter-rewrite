import {
	isInteger
} from '../Utilities/ValidationUtility'

export default class Pop {
	constructor(stack) {
		this.stack = stack	
	}

	execute() {
		if (this.stack.getLength() >= 1)
			return this.stack.pop()
		else
			return null
	}
}
