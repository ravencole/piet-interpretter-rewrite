import { 
	isArrayOfNonZeroNumbers
} from '../Utilities/ValidationUtility'

export default class Multiply {
	constructor(stack) {
		this.stack = stack	
	}

	execute() {
		if (this.validate()) {
			const [ FIRST, SECOND ] = this.stack.pop(2)

			this.stack.push(Math.floor(FIRST / SECOND))

			return [FIRST, SECOND]
		}

		return null
	}

	validate() {
		return this.stack.getLength() >= 2 && 
		       isArrayOfNonZeroNumbers(this.stack.getStack().slice(0,2))
	}
}
