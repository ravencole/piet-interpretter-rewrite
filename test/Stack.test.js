import { assert } from 'chai'

import Stack from '../src/Stack/Stack.js'

describe('Stack', () => {
	it('initializes', () => {
		assert.isOk(new Stack())
	})
	it('Initalizes the stack to an empty array', () => {
		assert.isArray((new Stack()).getStack())
	})
	describe('Build starting stack using options', () => {
		it('Populates stack with user defined array', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK})

			assert.deepEqual(STACK.getStack(), USER_DEFINED_STACK)
		})
		it('Throws an error when a non-array data type is passed for stack initialization', () => {
			const USER_DEFINED_STACK = {},
			      errorFunc          = () => new Stack({stack: USER_DEFINED_STACK})

			assert.throws(errorFunc, TypeError)	
		})
		it('Throws an error when a non-integer datatype is included in the user defined stack', () => {
			const errorFunc = opts => () => new Stack(opts)

			assert.throws(errorFunc({stack: [1,2,3,'']}), TypeError)	
			assert.throws(errorFunc({stack: [{},2,3]}), TypeError)	
			assert.throws(errorFunc({stack: [1.12343223,2,3,]}), TypeError)	
			assert.throws(errorFunc({stack: [1,2,3,null]}), TypeError)	
		})
	})
	describe('getLength', () => {
		it('returns length of stack', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK})

			assert.equal(USER_DEFINED_STACK.length, STACK.getLength())
		})
	})
	describe('pop', () => {
		it('pops the last item from the stack', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK})

			assert.equal(USER_DEFINED_STACK.pop(), STACK.pop())
		})
		it('pop returns false if there is nothing to pop from the arrray', () => {
			const USER_DEFINED_STACK = [],
			      STACK              = new Stack({stack: USER_DEFINED_STACK})

			assert.isFalse(STACK.pop())
		})
		it('accepts an integer as an amount of elements to pop from array', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK})

			assert.deepEqual(USER_DEFINED_STACK.slice(-2), STACK.pop(2))
			assert.deepEqual([1,2,3], STACK.getStack())
		})
		it('returns false if the pop amount is greater than the stack length', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK})

			assert.isFalse(STACK.pop(USER_DEFINED_STACK.length + 5))
		})
		it('throws a TypeError if passed a non integer value', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK}),
			      errorFunc          = () => STACK.pop('12')

			assert.throws(errorFunc, TypeError)	
		})
	})
	describe('push', () => {
		it('Adds an integer to the end of the stack', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK}),
			      EXPECTED           = [1,2,3,4,5,6]

			assert.isTrue(STACK.push(6))
			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Adds an array of Integers to the end of the stack', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK}),
			      EXPECTED           = [1,2,3,4,5,6,7,8,9,10]

			assert.isTrue(STACK.push([6,7,8,9,10]))
			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('throws a TypeError if it is not passed an Integer or an Array of Integers', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK}),
			      passString         = () => STACK.push('what are ya doin'),
			      passNothing        = () => STACK.push(),
			      passArrayOfNonInts = () => STACK.push(['123321', undefined, null, 86753.09, 11, {}, []])

			assert.throws(passString, TypeError)
			assert.throws(passNothing, TypeError)
			assert.throws(passArrayOfNonInts, TypeError)
		})
	})
	describe('unshift', () => {
		it('Adds an integer to the beginning of the stack', () => {
			const USER_DEFINED_STACK = [2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK}),
			      EXPECTED           = [1,2,3,4,5]

			assert.isTrue(STACK.unshift(1))
			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Adds an array of Integers to the beginning of the stack', () => {
			const USER_DEFINED_STACK = [6,7,8,9,10],
			      STACK              = new Stack({stack: USER_DEFINED_STACK}),
			      EXPECTED           = [1,2,3,4,5,6,7,8,9,10]

			assert.isTrue(STACK.unshift([1,2,3,4,5]))
			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('throws a TypeError if it is not passed an Integer or an Array of Integers', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK}),
			      passString         = () => STACK.unshift('what are ya doin'),
			      passNothing        = () => STACK.unshift(),
			      passArrayOfNonInts = () => STACK.unshift(['123321', undefined, null, 86753.09, 11, {}, []])

			assert.throws(passString, TypeError)
			assert.throws(passNothing, TypeError)
			assert.throws(passArrayOfNonInts, TypeError)
		})
	})
	describe('shift', () => {
		it('Shifts the first item from the stack', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK})

			assert.equal(USER_DEFINED_STACK.shift(), STACK.shift())
		})
		it('shift returns false if there is nothing to shift from the arrray', () => {
			const USER_DEFINED_STACK = [],
			      STACK              = new Stack({stack: USER_DEFINED_STACK})

			assert.isFalse(STACK.shift())
		})
		it('accepts an integer as an amount of elements to shift from array', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK})

			assert.deepEqual(USER_DEFINED_STACK.slice(0,2), STACK.shift(2))
			assert.deepEqual([3,4,5], STACK.getStack())
		})
		it('returns false if the shift amount is greater than the stack length', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK})

			assert.isFalse(STACK.shift(USER_DEFINED_STACK.length + 5))
		})
		it('throws a TypeError if passed a non integer value', () => {
			const USER_DEFINED_STACK = [1,2,3,4,5],
			      STACK              = new Stack({stack: USER_DEFINED_STACK}),
			      errorFunc          = () => STACK.shift('12')

			assert.throws(errorFunc, TypeError)	
		})
	})
	describe('Test Stack Method Integrations', () => {
		it('can push, pop, shift, and unshift', () => {
			const USER_DEFINED_STACK = [...Array(30)].map((n,i) => i),
			      STACK              = new Stack({stack: USER_DEFINED_STACK}),
			      EXPECTED           = [11,1,2,3,4,5,20,21,22,23,24,13,8,6,7,5,3,0,9]

			STACK.pop(5)
			STACK.push(13)
			STACK.push([8,6,7,5,3,0,9])
			STACK.shift(20)
			STACK.unshift([1,2,3,4,5])
			STACK.unshift(11)

			assert.deepEqual(EXPECTED, STACK.getStack())
		})
	})
})
