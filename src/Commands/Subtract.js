export default class Subtract {
	constructor(stack) {
		this.stack = stack	
	}

	execute() {
		if (this.stack.getLength() >= 2) {
			const [ FIRST, SECOND ] = this.stack.pop(2)

			this.stack.push(FIRST - SECOND)

			return [FIRST, SECOND]
		}

		return null
	}
}
