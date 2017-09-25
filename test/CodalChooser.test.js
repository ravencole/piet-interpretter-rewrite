import { assert } from 'chai'

import CodalChooser from '../src/CodalChooser'

describe('CodalChooser', () => {
	it('exists and initializes', () => {
		const CC = new CodalChooser()

		assert.isOk(CC)
	})
	it('initializes the value to 0', () => {
		const CC = new CodalChooser()
		
		assert.equal(0, CC.value)
	})
	it('Accepts an options object that can iniitialize the value', () => {
		const CC = new CodalChooser({value: 1})
		
		assert.equal(1, CC.value)
	})
	it('Throws an error if passed a non object is passed to the constructor', () => {
		assert.throws(() => new CodalChooser([]), TypeError)	
		assert.throws(() => new CodalChooser(0), TypeError)	
		assert.throws(() => new CodalChooser('asdlkfjfjdka'), TypeError)	
	})
	it('Throws an error if the value property of the options object is set to a non-integer outside the range of 0 - 1', () => {
		assert.throws(() => new CodalChooser({value: 5}), TypeError)	
		assert.throws(() => new CodalChooser({value: '5'}), TypeError)	
		assert.throws(() => new CodalChooser({value: null}), TypeError)	

		assert.equal(0, (new CodalChooser({value: 0})).value)
		assert.equal(1, (new CodalChooser({value: 1})).value)
	})
	describe('Toggle', () => {
		it('toggles by one when passed no arguments', () => {
			const CC = new CodalChooser()

			assert.equal(1, CC.toggle().value)
		})
		it('toggles to 0 when coming from 1', () => {
			const CC = new CodalChooser({value: 1})
			
			assert.equal(0, CC.toggle().value)
		})	
		it('toggles a certain amount of times when passed an integer', () => {
			const CC = new CodalChooser()
			
			assert.equal(0, CC.toggle(4).value)
			assert.equal(1, CC.toggle(5).value)
		})
		it('Throws a TypeError when passed a non-integer', () => {
			assert.throws(() => (new CodalChooser()).toggle('one'), TypeError)	
		})
		it('correctly toggles the pointer the opposite direction', () => {
			const CC = new CodalChooser()
			
			assert.equal(1, CC.toggle(-1).value)
			assert.equal(0, CC.toggle(-3).value)
		})
	})
})


