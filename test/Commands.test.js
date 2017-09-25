import { assert } from 'chai'

import { 
	Add,
	Divide,
	Duplicate,
	Greater,
	InChar,
	InNumber,
	Mod,
	Multiply,
	Not,
	OutChar,
	OutNumber,
	Pointer,
	Pop,
	Push,
	Roll,
	Subtract,
	Switch
} from '../src/Commands'

import Stack from '../src/Stack'
import CodalChooser from '../src/CodalChooser'
import DirectionPointer from '../src/DirectionPointer'

function ccSetup() {
	return new CodalChooser()
}

function dpSetup() {
	return new DirectionPointer()
}

function stackSetup(stack) {
	return new Stack({stack})
}

describe('Commands', () => {
	describe('Push', () => {
		it('Pushes an integer to the stack', () => {
			const STACK    = stackSetup([]),
			      EXPECTED = [1];

			(new Push(STACK)).execute(1)

			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Throws a TypeError when passed no arguments', () => {
			const STACK = stackSetup([])

			assert.throws((new Push(STACK)).execute, TypeError)
		})
		it('Throws a TypeError when passed a non-integer', () => {
			const STACK = stackSetup([])

			assert.throws(() => (new Push(STACK)).execute('a'), TypeError)
		})
	})	
	describe('Pop', () => {
		it('Pops an integer from the stack', () => {
			const STACK    = stackSetup([1]),
			      EXPECTED = [];

			(new Pop(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Returns null when there is nothing in the stack to pop', () => {
			const STACK = stackSetup([])

			assert.isNull((new Pop(STACK)).execute())
		})
	})	
	describe('Add', () => {
		it('Pops the top two Integers from the stack, adds them, and pushes the results to the stack', () => {
			const STACK = stackSetup([1,2]),
			      EXPECTED = [3];

			(new Add(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})	
		it('Returns null if the stack is not large enough to add', () => {
			const STACK = stackSetup([1])

			assert.isNull((new Add(STACK).execute()))
		})
	})
	describe('Subtract', () => {
		it('Pops the top two Integers from the stack, subtracts the second value from the first, and pushes the results to the stack', () => {
			const STACK = stackSetup([1,2]),
			      EXPECTED = [-1];

			(new Subtract(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})	
		it('Returns null if the stack is not large enough to subtract', () => {
			const STACK = stackSetup([1])

			assert.isNull((new Subtract(STACK).execute()))
		})
	})
	describe('Multiply', () => {
		it('Pops the top two Integers from the stack, multiplies them, and pushes the results to the stack', () => {
			const STACK = stackSetup([5,2]),
			      EXPECTED = [10];

			(new Multiply(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})	
		it('Returns null if the stack is not large enough to multiply', () => {
			const STACK = stackSetup([1])

			assert.isNull((new Multiply(STACK).execute()))
		})
	})
	describe('Divide', () => {
		it('Pops the top two Integers from the stack, divides the second by the first, and pushes the results to the stack', () => {
			const STACK = stackSetup([10,2]),
			      EXPECTED = [5];

			(new Divide(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})	
		it('Implements Integer Division', () => {
			const STACK = stackSetup([10,3]),
			      EXPECTED = [3];

			(new Divide(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Ignores the command if either values are 0', () => {
			const STACK = stackSetup([10,0]),
			      EXPECTED = [10,0];

			(new Divide(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Returns null if the stack is not large enough to multiply', () => {
			const STACK = stackSetup([1])

			assert.isNull((new Divide(STACK).execute()))
		})
	})
	describe('Mod', () => {
		it('Pops the top two Integers from the stack, Modulos the second number by the first, and pushes the results to the stack', () => {
			const STACK = stackSetup([10,3]),
			      EXPECTED = [1];

			(new Mod(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})	
		it('Ignores the command if either values are 0', () => {
			const STACK = stackSetup([10,0]),
			      EXPECTED = [10,0];

			(new Mod(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Returns null if the stack is not large enough to multiply', () => {
			const STACK = stackSetup([1])

			assert.isNull((new Mod(STACK).execute()))
		})
	})
	describe('Not', () => {
		it('Pops the top two Integers from the stack, if the number is non-zero, push 0 to the stack, if it is 0, push 1', () => {
			const STACK = stackSetup([3,0]),
			      EXPECTED = [3,1];

			(new Not(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})	
		it('Returns null if the stack is not greater than 1', () => {
			const STACK = stackSetup([])

			assert.isNull((new Not(STACK).execute()))
		})
	})
	describe('Greater', () => {
		it('Pops the top two Integers from the stack, if the second number is greater than the first, push 1, else push 0', () => {
			const STACK = stackSetup([5,3,1]),
			      EXPECTED = [5,0];

			(new Greater(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})	
		it('Returns null if the stack length is not greater than 1', () => {
			const STACK = stackSetup([])

			assert.isNull((new Greater(STACK).execute()))
		})
	})
	describe('Duplicate', () => {
		it('Duplicates the top Integer and pushes it onto the stack', () => {
			const STACK = stackSetup([5,3,1]),
			      EXPECTED = [5,3,1,1];

			(new Duplicate(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})	
		it('Returns null if the stack length is not greater than 1', () => {
			const STACK = stackSetup([])

			assert.isNull((new Duplicate(STACK).execute()))
		})
	})
	describe('InChar', () => {
		it('Accepts a valid ASCII character of length 1 and pushes it onto the stack', () => {
			const STACK = stackSetup([5,3,1]),
			      EXPECTED = [5,3,1,97];

			(new InChar(STACK)).execute('a')

			assert.deepEqual(EXPECTED, STACK.getStack())
		})	
		it('Throws a TypeError when passed nothing, a non ascii character, or a string longer than 1', () => {
			const STACK = stackSetup([]),
			      throws = s => () => (new InChar(STACK)).execute(s)

			assert.throws(throws('asd'), TypeError)
			assert.throws(throws(6), TypeError)
			assert.throws(throws(), TypeError)
		})
	})
	describe('InNumber', () => {
		it('Accepts an integer and adds it to the stack', () => {
			const STACK = stackSetup([5,3,1]),
			      EXPECTED = [5,3,1,667];

			(new InNumber(STACK)).execute(667)

			assert.deepEqual(EXPECTED, STACK.getStack())
		})	
		it('Throws a TypeError when passed nothing or a non-integer', () => {
			const STACK = stackSetup([]),
			      throws = s => () => (new InNumber(STACK)).execute(s)

			assert.throws(throws('asd'), TypeError)
			assert.throws(throws(), TypeError)
		})
	})
	describe('OutChar', () => {
		it('Pops the top Integer from the stack and returns the corresponding ASCII character', () => {
			const STACK = stackSetup([5,3,97]),
			      EXPECTED = [5,3];

			assert.equal('a',(new OutChar(STACK)).execute())
			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('returns null when there is nothing to pop', () => {
			const STACK = stackSetup([])

			assert.isNull((new OutChar(STACK)).execute())
		})
		
	})
	describe('OutNumber', () => {
		it('Pops the top Integer from the stack and returns it', () => {
			const STACK = stackSetup([5,3,97]),
			      EXPECTED = [5,3];

			assert.equal(97,(new OutNumber(STACK)).execute())
			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('returns null when there is nothing to pop', () => {
			const STACK = stackSetup([])

			assert.isNull((new OutNumber(STACK)).execute())
		})
		
	})
	describe('Roll', () => {
		it('Rolls', () => {
			const STACK = stackSetup([6,7,8,9,10,3,1]),
			      EXPECTED = [6,7,10,8,9];

			(new Roll(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Rolls 2', () => {
			const STACK = stackSetup([6,5,4,3,2,1,4,2]),
			      EXPECTED = [6,5,2,1,4,3];

			(new Roll(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Rolls 3', () => {
			const STACK = stackSetup([6,5,1,2,4,3,5,2]),
			      EXPECTED = [6,4,3,5,1,2];

			(new Roll(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Rolls 4', () => {
			const STACK = stackSetup([12,65,22,34,676,88,5,-4]),
			      EXPECTED = [12,65,22,34,676,88];

			(new Roll(STACK)).execute()

			assert.deepEqual(EXPECTED, STACK.getStack())
		})
		it('Returns null and does not modify the stack when the depth of the roll is greater than the length of the stack once the pop 2 has occured', () => {
			const STACK = stackSetup([12,65,22,34,676,88,90,-4]),
			      EXPECTED = STACK.getStack()

			assert.isNull((new Roll(STACK)).execute())
			assert.deepEqual(EXPECTED, STACK.getStack())
		})
	})
	describe('Pointer', () => {
		it('Pops a value from the stack, and rotates the direction pointer that many times', () => {
			const STACK = stackSetup([1]),
			      DP = dpSetup();

			(new Pointer(STACK, DP)).execute()

			assert.deepEqual([], STACK.getStack())
			assert.equal(1, DP.value)
		})
		it('Rotates backwards when passed a negetive Integer', () => {
			const STACK = stackSetup([-1]),
			      DP = dpSetup();

			(new Pointer(STACK, DP)).execute()

			assert.deepEqual([], STACK.getStack())
			assert.equal(3, DP.value)
		})
		it('Returns null when there stack isn\'t large enough to execute pointer', () => {
			const STACK = stackSetup([]),
			      DP = dpSetup();

			assert.isNull((new Pointer(STACK, DP)).execute())

			assert.deepEqual([], STACK.getStack())
			assert.equal(0, DP.value)
		})
	})
	describe('Switch', () => {
		it('Pops a value from the stack, and toggles the Codal that many times', () => {
			const STACK = stackSetup([5]),
			      CC = ccSetup();

			(new Switch(STACK, CC)).execute()

			assert.deepEqual([], STACK.getStack())
			assert.equal(1, CC.value)
		})
		it('Rotates backwards when passed a negetive Integer', () => {
			const STACK = stackSetup([-1]),
			      CC = ccSetup();

			(new Switch(STACK, CC)).execute()

			assert.deepEqual([], STACK.getStack())
			assert.equal(1, CC.value)
		})
		it('Returns null when there stack isn\'t large enough to execute pointer', () => {
			const STACK = stackSetup([]),
			      CC = ccSetup();

			assert.isNull((new Switch(STACK, CC)).execute())

			assert.deepEqual([], STACK.getStack())
			assert.equal(0, CC.value)
		})
	})
})
