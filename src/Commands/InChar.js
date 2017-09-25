export default class InChar {
	constructor(stack) {
		this.stack = stack	
	}

	execute(value) {
		this.value = value

		this.validate()

		this.stack.push(this.value.charCodeAt(0))

		return null
	}

	validate() {
		if(this.value === undefined && typeof this.value === 'string')
			throw new TypeError(`InChar requires that valid ASCII character be passed`)
		if (this.value.length !== 1)
			throw new TypeError(`InChar requires it's input to be a length of 1: ${this.value.length} passed`)
	}
}
