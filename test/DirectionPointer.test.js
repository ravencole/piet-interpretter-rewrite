import { assert } from 'chai'

import DirectionPointer from '../src/DirectionPointer'

describe('DirectionPointer', () => {
	it('exists and initializes', () => {
		const DP = new DirectionPointer()

		assert.isOk(DP)
	})
	it('initializes the value to 0', () => {
		const DP = new DirectionPointer()
		
		assert.equal(0, DP.value)
	})
	it('Accepts an options object that can iniitialize the value', () => {
		const DP = new DirectionPointer({value: 2})
		
		assert.equal(2, DP.value)
	})
	it('Throws an error if passed a non object is passed to the constructor', () => {
		assert.throws(() => new DirectionPointer([]), TypeError)	
		assert.throws(() => new DirectionPointer(0), TypeError)	
		assert.throws(() => new DirectionPointer('asdlkfjfjdka'), TypeError)	
	})
	it('Throws an error if the value property of the options object is set to a non-integer outside the range of 0 - 3', () => {
		assert.throws(() => new DirectionPointer({value: 5}), TypeError)	
		assert.throws(() => new DirectionPointer({value: '5'}), TypeError)	
		assert.throws(() => new DirectionPointer({value: null}), TypeError)	

		assert.equal(0, (new DirectionPointer({value: 0})).value)
		assert.equal(1, (new DirectionPointer({value: 1})).value)
		assert.equal(2, (new DirectionPointer({value: 2})).value)
		assert.equal(3, (new DirectionPointer({value: 3})).value)
	})
	describe('Rotate', () => {
		it('rotates by one when passed no arguments', () => {
			const DP = new DirectionPointer()

			assert.equal(1, DP.rotate().value)
		})
		it('rotates to 0 when coming from 3', () => {
			const DP = new DirectionPointer({value: 3})
			
			assert.equal(0, DP.rotate().value)
		})	
		it('rotates a certain amount of times when passed an integer', () => {
			const DP = new DirectionPointer({value: 3})
			
			assert.equal(3, DP.rotate(4).value)
		})
		it('Throws a TypeError when passed a non-integer', () => {
			assert.throws(() => (new DirectionPointer()).rotate('one'), TypeError)	
		})
		it('correctly rotates the pointer the opposite direction', () => {
			const DP = new DirectionPointer({value: 3})
			
			assert.equal(2, DP.rotate(-1).value)
			assert.equal(1, DP.rotate(-1).value)
			assert.equal(0, DP.rotate(-1).value)
			assert.equal(3, DP.rotate(-1).value)
		})
	})
})


