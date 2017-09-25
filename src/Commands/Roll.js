export default class Roll{
	constructor(stack) {
		this.stack = stack	
	}

	execute() {
		if (this.validate()) {
			const [ DEPTH, ROLLS ] = this.stack.pop(2),
			      WORK_AREA = this.stack.pop(DEPTH)

			if (ROLLS >= 0) {
				for (let i = 0; i < ROLLS; i++) {
					const r = WORK_AREA.pop()

					WORK_AREA.unshift(r)
				}
			} else {
				for (let i = 0; i < ROLLS; i++) {
					const r = WORK_AREA.shift()

					WORK_AREA.push(r)
				}
			}


			this.stack.push(WORK_AREA)
		}

		return null
	}

	rollForwards(rolls, workArea) {

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
