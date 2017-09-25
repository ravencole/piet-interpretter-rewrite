import {
	isArray,
	isArrayOfIntegers
} from '../Utilities/ValidationUtility'

import Pop     from './StackActions/Pop'
import Push    from './StackActions/Push'
import Shift   from './StackActions/Shift'
import Unshift from './StackActions/Unshift'

export default class Stack {
	constructor(opts = {}) {
		this.DEFAULT_OPTIONS = {
			stack: []
		}

		this.STACK_ACTIONS = {
			pop:     Pop,
			push:    Push,
			shift:   Shift,
			unshift: Unshift
		}

		this.init(opts)
	}

	action(action, ...args) {
		return (new action(this, ...args))
				.validate()
				.performAction()
	}

	initializeActions() {
		Object.keys(this.STACK_ACTIONS).map(m => {
			this[m] = function(...args) {
				return this.action(this.STACK_ACTIONS[m], ...args)
			}
		})
	}

	init(opts) {
		this.initializeOptions(opts)
		this.initializeStack()
		this.initializeActions()
	}

	initializeOptions(opts) {
		this.options = Object.assign({}, this.DEFAULT_OPTIONS, opts)
	}

	initializeStack() {
		this.validateStack()

		this.stack = this.options.stack.slice(0)
	}

	getLength() {
		return this.stack.length
	}

	getStack() {
		return this.stack
	}

	validateStack() {
		if(!isArray(this.options.stack))
			throw new TypeError(`Stack must be an array: ${typeof this.options.stack} passed`)

		if (!isArrayOfIntegers(this.options.stack))
			throw new TypeError(`Stack must be an empty Array or an Array of Integers`)
	}
}
