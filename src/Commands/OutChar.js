export default class OutChar {
	constructor(stack) {
		this.stack = stack	
	}

	execute() {
		if (this.validate()) {
			return String.fromCharCode(this.stack.pop())
		}

		return null
	}

	validate() {
		return this.stack.getLength() >= 1
	}
}
