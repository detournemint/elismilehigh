$(document).ready( function() {
  $.get( "http://localhost:8080/data/basic.ics", function( iCalendarData ) {
    var jcalData = ICAL.parse(iCalendarData);
    var vcalendar = new ICAL.Component(jcalData);
    debugger
    $('#mycalendar').monthly({
      mode: 'event',
      xmlUrl: 'events.xml'
    });
  });
});
