/* global CloudWatch:false - from dispatch:cloudwatch-metrics */

var DEFAULT_PING_INTERVAL = 60000; // 1m

var settings = Meteor && Meteor.settings && Meteor.settings.public || {};
var pingInterval = settings.pingInterval || DEFAULT_PING_INTERVAL;

Meteor.setInterval(function () {
    CloudWatch.track('ping', 1);
}, pingInterval);
