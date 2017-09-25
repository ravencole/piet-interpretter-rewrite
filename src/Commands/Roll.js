export default class Roll{
	constructor(stack) {
		this.stack = stack	
	}

	execute() {
		if (this.validate()) {
			const [ DEPTH, ROLLS ] = this.stack.pop(2),
			      WORK_AREA = this.stack.pop(DEPTH)

			const RES = ROLLS >= 0 ? 
				this.rollForwards(ROLLS, WORK_AREA) : 
				this.rollBackwards(ROLLS, WORK_AREA)

			this.stack.push(RES)
		}

		return null
	}

	rollBackwards(rolls, workArea) {
		for (let i = 0; i < rolls; i++) {
			const r = workArea.shift()

			workArea.push(r)
		}

		return workArea
	}

	rollForwards(rolls, workArea) {
		for (let i = 0; i < rolls; i++) {
			const r = workArea.pop()

			workArea.unshift(r)
		}

		return workArea
	}

	validate() {
		const STACK  = this.stack.getStack(),
		      LENGTH = this.stack.getLength(),
		      [ DEPTH, ROLLS ] = STACK.slice(-2),
		      LEFTOVERS = STACK.slice(0, LENGTH - 2)

		return LENGTH >= 2 &&
		       LEFTOVERS.length >= DEPTH  
	}
}
