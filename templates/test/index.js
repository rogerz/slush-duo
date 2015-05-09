'use strict';

var chai = require('chaijs/chai');
var expect = chai.expect;

var lib = require('..');

describe('lib', function () {
	it('should exist', function () {
		expect(lib).to.exist;
	});
});