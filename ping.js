/* global CloudWatch:false - from dispatch:cloudwatch-metrics */

var pingInterval = Meteor.settings.pingInterval;

if (pingInterval) {
  Meteor.setInterval(function () {
    CloudWatch.track('ping', 1);
  }, pingInterval);
}
