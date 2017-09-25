import {
	isInteger
} from '../Utilities/ValidationUtility'

export default class Pointer {
	constructor(stack, directionPointer) {
		this.stack = stack	
		this.dp = directionPointer
	}

	execute() {
		if (this.stack.getLength() >= 1) {
			const ROTATION_AMOUNT = this.stack.pop()[0]
		
			this.dp.rotate(ROTATION_AMOUNT)

			return ROTATION_AMOUNT
		} else {

			return null
		}
	}
}
