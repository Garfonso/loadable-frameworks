// @@@LICENSE
//
//      Copyright (c) 2010-2013 LG Electronics, Inc.
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
// LICENSE@@@

/*global MojoLoader */

var IMPORTS = MojoLoader.require(
	{name: "foundations", version: "1.0"},
	{ name: "foundations.io", version: "1.0" },
	{name: "underscore", version: "1.0"}
);

var Foundations = IMPORTS.foundations;
var	Assert = Foundations.Assert;
var Class = Foundations.Class;
var DB = Foundations.Data.DB;
var FSM = Foundations.Control.FSM;
var Future = Foundations.Control.Future;
var ObjectUtils = Foundations.ObjectUtils;
var PalmCall = Foundations.Comms.PalmCall;
var StringUtils = Foundations.StringUtils;
var _ = IMPORTS.underscore._;
var Config = {
	//logs: "debug"		// used by utils.js to control logging
};


var IO = {};
