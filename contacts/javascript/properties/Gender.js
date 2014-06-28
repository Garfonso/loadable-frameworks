// LICENSE@@@
//
//      Copyright (c) 2009-2013 LG Electronics, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// @@@LICENSE

/*jslint white: true, onevar: true, undef: true, eqeqeq: true, plusplus: true, bitwise: true,
regexp: true, newcap: true, immed: true, nomen: false, maxerr: 500 */
/*global PropertyBase*/

/**
 * @class
 * @augments PropertyBase
 * @param {string} obj the raw database object
 * @example
 * var gender = new Gender("male");
 *
 * var genderString = gender.getValue();
 * var genderStringAgain = gender.x_value; // This is for use in widgets. Code should always call the getter rather than accessing the property.
 */
var Gender = PropertyBase.create({
	/**
	* @lends Gender#
	* @property {string} x_value
	*/
	data: [
		{
			dbFieldName: "",
			defaultValue: "",
			/**
			* @name Gender#setValue
			* @function
			* @param {string} value
			*/
			setterName: "setValue",
			/**
			* @name Gender#getValue
			* @function
			* @returns {string}
			*/
			getterName: "getValue"
		}
	]
});