export default class Duplicate {
	constructor(stack) {
		this.stack = stack	
	}

	execute() {
		if (this.validate()) {
			const VAL = this.stack.pop()[0],
			      RES = [VAL,VAL]

			this.stack.push(RES)

			return VAL
		}

		return null
	}

	validate() {
		return this.stack.getLength() >= 1 
	}
}
