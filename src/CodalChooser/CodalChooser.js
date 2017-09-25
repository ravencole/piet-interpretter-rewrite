import {
	isArray,
	isInteger,
	isInRange,
	isObject
} from '../Utilities/ValidationUtility'


export default class CodalChooser {
	constructor(opts = {}) {
		this.DEFAULT_OPTIONS = {
			value: 0
		}

		this.init(opts)
	}

	init(opts) {
		this.setOptions(opts)

		this.setInitialValue()
	}

	setInitialValue() {
		if (!isInteger(this.options.value) || !isInRange(this.options.value,0,1))
			throw new TypeError(`Value must be set to an Integer of 0 - 1: ${this.options.value} passed`)
			

		this.value = this.options.value
	}

	setOptions(opts) {
		if (!isObject(opts) || isArray(opts))
			throw new TypeError(`CodalChooser constructor expects to be called without parameters or with an Object: ${isArray(opts) ? 'Array' : typeof opts} passed`)

		this.options = Object.assign({}, this.DEFAULT_OPTIONS, opts)
	}

	toggle(val = 1) {
		if (!isInteger(val))
			throw new TypeError(`Toggle expects to be called without arguments or passed an Integer: ${typeof val} passed`)

		this.value = (this.value + val) & 1

		return this
	}
}
