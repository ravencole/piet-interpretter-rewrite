import {
	isInteger
} from '../Utilities/ValidationUtility'

export default class Switch {
	constructor(stack, codalChooser) {
		this.stack = stack	
		this.cc = codalChooser 
	}

	execute() {
		if (this.stack.getLength() >= 1) {
			const TOGGLE_AMOUNT = this.stack.pop()[0]
		
			this.cc.toggle(TOGGLE_AMOUNT)

			return TOGGLE_AMOUNT
		} else {

			return null
		}
	}
}
