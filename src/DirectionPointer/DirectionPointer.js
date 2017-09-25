import {
	isArray,
	isInteger,
	isInRange,
	isObject
} from '../Utilities/ValidationUtility'


export default class DirectionPointer {
	constructor(opts = {}) {
		this.DEFAULT_OPTIONS = {
			value: 0
		}

		this.init(opts)
	}

	rotate(val = 1) {
		if (!isInteger(val))
			throw new TypeError(`Rotate expects to be called without arguments or passed an Integer: ${typeof val} passed`)

		this.value = (this.value + val) % 4

		// Sloppy but allows the decrement to cyle correctly
		if (this.value < 0)
			this.value = 3

		return this
	}

	init(opts) {
		this.setOptions(opts)

		this.setInitialValue()
	}

	setInitialValue() {
		if (!isInteger(this.options.value) || !isInRange(this.options.value,0,3))
			throw new TypeError(`Value must be set to an Integer of 0 - 3: ${this.options.value} passed`)
			

		this.value = this.options.value
	}

	setOptions(opts) {
		if (!isObject(opts) || isArray(opts))
			throw new TypeError(`DirectionPointer constructor expects to be called without parameters or with an Object: ${isArray(opts) ? 'Array' : typeof opts} passed`)

		this.options = Object.assign({}, this.DEFAULT_OPTIONS, opts)
	}
}
