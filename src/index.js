import { DEFAULTS } from './Constants.js'

export default class Interpreter {
	constructor(options = {}) {
		this.options = Object.assign({}, DEFAULTS, options)
	}

	getOptions() {
		return this.options
	}
}
