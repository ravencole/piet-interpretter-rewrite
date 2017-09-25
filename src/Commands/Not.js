export default class Not {
	constructor(stack) {
		this.stack = stack	
	}

	execute() {
		if (this.validate()) {
			const VAL = this.stack.pop()[0],
			      RES = VAL === 0 ? 1 : 0

			this.stack.push(RES)

			return [VAL,RES]
		}

		return null
	}

	validate() {
		return this.stack.getLength() >= 1 
	}
}
