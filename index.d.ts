export = chaiWrapper;
/**
 * This wrapper take methods from default assert library to give access to use it from I object.
 * This wrapper allow us to print asserts as steps in output. Also we can expand this lib with different methods and
 * other assertion libraries.
 */
declare class chaiWrapper {
  /**
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertEqual(actualValue: any, expectedValue: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertNotEqual(actualValue: any, expectedValue: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_deep
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertDeepEqual(actualValue: any, expectedValue: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.chaijs.com/api/bdd/#method_deep
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertNotDeepEqual(actualValue: any, expectedValue: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_include
   * @param {*} actualValue
   * @param {*} expectedValueToContain
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertContain(actualValue: any, expectedValueToContain: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.chaijs.com/api/bdd/#method_include
   * @param {*} actualValue
   * @param {*} expectedValueToNotContain
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertNotContain(actualValue: any, expectedValueToNotContain: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.npmjs.com/package/chai-string#startswithstartwith
   * @param {*} actualValue
   * @param {*} expectedValueToStartWith
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertStartsWith(actualValue: any, expectedValueToStartWith: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.npmjs.com/package/chai-string#startswithstartwith
   * @param {*} actualValue
   * @param {*} expectedValueToNotStartWith
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertNotStartsWith(actualValue: any, expectedValueToNotStartWith: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.npmjs.com/package/chai-string#endswithendwith
   * @param {*} actualValue
   * @param {*} expectedValueToEndWith
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertEndsWith(actualValue: any, expectedValueToEndWith: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.npmjs.com/package/chai-string#endswithendwith
   * @param {*} actualValue
   * @param {*} expectedValueToNotEndWith
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertNotEndsWith(actualValue: any, expectedValueToNotEndWith: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.npmjs.com/package/chai-json-schema#jsonschemavalue-schema
   * @param {*} targetData
   * @param {*} jsonSchema
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertJsonSchema(targetData: any, jsonSchema: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/plugins/chai-json-schema-ajv/
   * @param {*} targetData
   * @param {*} jsonSchema
   * @param {*} customErrorMsg
   * @param {*} ajvOptions Pass AJV options
   * @returns {*}
   */
  assertJsonSchemaUsingAJV(targetData: any, jsonSchema: any, customErrorMsg?: String, ajvOptions?: any): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_property
   * @param {*} targetData
   * @param {*} propertyName
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertHasProperty(targetData: any, propertyName: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_a
   * @param {*} targetData
   * @param {*} propertyName
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertHasAProperty(targetData: any, propertyName: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_a
   * @param {*} targetData
   * @param {*} type
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertToBeA(targetData: any, type: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_a
   * @param {*} targetData
   * @param {*} type
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertToBeAn(targetData: any, type: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_match
   * @param {*} targetData
   * @param {*} regex
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertMatchRegex(targetData: any, regex: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_lengthof
   * @param {*} targetData
   * @param {*} length
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertLengthOf(targetData: any, length: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_empty
   * @param {*} targetData
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertEmpty(targetData: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_true
   * @param {*} targetData
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertTrue(targetData: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_false
   * @param {*} targetData
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertFalse(targetData: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_above
   * @param {*} targetData
   * @param {*} aboveThan number | Date
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertAbove(targetData: any, aboveThan: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_below
   * @param {*} targetData
   * @param {*} belowThan number | Date
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertBelow(targetData: any, belowThan: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_lengthof
   * https://www.chaijs.com/api/bdd/#method_above
   * @param {*} targetData
   * @param {*} lengthAboveThan
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertLengthAboveThan(targetData: any, lengthAboveThan: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.chaijs.com/api/bdd/#method_lengthof
   * https://www.chaijs.com/api/bdd/#method_below
   * @param {*} targetData
   * @param {*} lengthBelowThan
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertLengthBelowThan(targetData: any, lengthBelowThan: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * https://www.npmjs.com/package/chai-string#equalignorecase
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns
   */
  assertEqualIgnoreCase(actualValue: any, expectedValue: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * Asserts members of two arrays are deeply equal
   * https://www.chaijs.com/api/bdd/#method_deep
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns
   */
  assertDeepMembers(actualValue: any, expectedValue: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * Asserts members of two arrays are deeply equal excluding some properties
   * Order of members is unimportant
   * https://www.chaijs.com/api/bdd/#method_deep
   * https://www.chaijs.com/plugins/chai-exclude/
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} fieldsToExclude
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertDeepMembersExcluding(actualValue: any, expectedValue: any, fieldsToExclude: any, customErrorMsg?: String);
  /**
   * Asserts an array deep includes members from another array
   * https://www.chaijs.com/api/bdd/#method_deep
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns
   */
  assertDeepIncludeMembers(actualValue: any, expectedValue: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * Asserts a JSON deep compare excluding some properties of the JSON object
   * https://www.npmjs.com/package/chai-exclude
   * https://github.com/mesaugat/chai-exclude/blob/add7356daec42291c91e4b2f1598ed1b3782e5a6/index.d.ts#L32     *
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} fieldsToExclude
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertDeepEqualExcluding(actualValue: any, expectedValue: any, fieldsToExclude: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * Asserts a JSON object matches a provided pattern
   * https://www.chaijs.com/plugins/chai-match-pattern/
   * @param {*} actualValue
   * @param {*} expectedPattern
   * @param {*} customErrorMsg
   */
  assertMatchesPattern(actualValue: any, expectedPattern: any, customErrorMsg?: String): Chai.Assertion;
  /**
   * Asserts an array is sorted in ascending order
   * https://www.chaijs.com/plugins/chai-sorted/
   * @param {*} targetData
   * @param {*} customErrMsg
   * @returns
   */
  assertArrayIsSortedAscending(targetData: Array<String> | Array<Number>, customErrMsg?: String): Chai.Assertion
  /**
   * Asserts an array is sorted in descending order
   * https://www.chaijs.com/plugins/chai-sorted/
   * @param {*} targetData
   * @param {*} customErrMsg
   * @returns
   */
  assertArrayIsSortedDescending(targetData: Array<String> | Array<Number>, customErrMsg?: String): Chai.Assertion
  /**
   * Asserts an array of objects is sorted in ascending order by the provided key 
   * https://www.chaijs.com/plugins/chai-sorted/
   * @param {*} targetData
   * @param {*} key
   * @param {*} customErrMsg
   * @returns
   */
  assertArrayIsSortedAscendingBy(targetData: Array<Object>, key: String, customErrMsg?: String): Chai.Assertion
  /**
   * Asserts an array of objects is sorted in descending order by the provided key 
   * https://www.chaijs.com/plugins/chai-sorted/
   * @param {*} targetData
   * @param {*} key
   * @param {*} customErrMsg
   * @returns
   */
  assertArrayIsSortedDescendingBy(targetData: Array<Object>, key: String, customErrMsg?: String): Chai.Assertion
}
