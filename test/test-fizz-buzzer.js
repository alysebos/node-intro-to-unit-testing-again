const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer',function() {
	it('should give appropriate responses based on the input', function() {
		const expectedArray = [
			[45, "fizz-buzz"],
			[3, "fizz"],
			[5, "buzz"],
			[20, "buzz"],
			[21, "fizz"],
			[30, "fizz-buzz"],
			[4, 4],
			[11, 11]
		];
		expectedArray.forEach(function (entry) {
			const answer = fizzBuzzer(entry[0]);
			expect(answer).to.be.a.string;
			expect(answer).to.equal(entry[1]);
		})
	})
	it('should throw an error if a numer is not provided', function() {
		const inputsToTest = ["hello", true, null, undefined, "13"];
		inputsToTest.forEach(function (entry) {
			function testMe () {
				fizzBuzzer(entry);
			}
			expect(testMe).to.throw(Error);
		})
	})
})