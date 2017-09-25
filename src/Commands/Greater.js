export default class Greater {
	constructor(stack) {
		this.stack = stack	
	}

	execute() {
		if (this.validate()) {
			const [FIRST,SECOND]= this.stack.pop(2),
			      RES = SECOND > FIRST ? 1 : 0

			this.stack.push(RES)

			return [[FIRST, SECOND],RES]
		}

		return null
	}

	validate() {
		return this.stack.getLength() >= 2 
	}
}
