export default class OutNumber {
	constructor(stack) {
		this.stack = stack	
	}

	execute() {
		if (this.validate()) {
			return this.stack.pop()
		}

		return null
	}

	validate() {
		return this.stack.getLength() >= 1
	}
}
