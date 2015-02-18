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

/*jslint nomen: true, devel: true */

/*global stringify, Transform */

var attendeeTransform = {
	/* Handled generically */
	calendarUserType: "CUTYPE",
	delegatedFrom: "DELEGATED-FROM",
	delegatedTo: "DELEGATED-TO",
	dir: true,
	member: true,
	participationStatus: "PARTSTAT",
	role: true,
	sentBy: "SENT-BY",
	language: true,

	commonName: function (attendee) {
		"use strict";
		return "CN=\"" + attendee.commonName + "\"";
	},
	rsvp: function (attendee) {
		"use strict";
		// "type": "boolean"
		return "RSVP=" + (attendee.rsvp ? "TRUE" : "FALSE");
	},
	organizer: function (attendee) {
		"use strict";
		// Unused in transform
	},
	email: function (attendee) {
		"use strict";
		// Unused in transform
	},
	_id: function () {
		"use strict";
		// Unused in tranform
	}
};

Transform.transformAttendees = function (event, options) {
	"use strict";
	var out = [];
	event.attendees.forEach(function (attendee) {
		var params = Transform.transform(attendee, attendeeTransform, {
				separator: '=',
				joiner: ';',
				quotable: ':'
			}, options),
			result,
			type = attendee.organizer ? "ORGANIZER" : "ATTENDEE";

		result = type +
				(params ? ';' : '') + params +
				(attendee.email ? (':mailto:' + attendee.email) : '');

		out.push(result);
	});

	if (out.length) {
		if (options && options.logging) {
			console.log("transformAttendees(): returning: " + stringify(out));
		}
		return out;
	}

	return '';
};
