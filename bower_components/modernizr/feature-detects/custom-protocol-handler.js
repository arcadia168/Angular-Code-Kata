/*
	Custom protocol handler support
	http://developers.whatwg.org/timers.html#custom-handlers
	
	Added by @***REMOVED***schwarz
*/

Modernizr.addTest('customprotocolhandler', function () {
    return !!navigator.registerProtocolHandler;
});
