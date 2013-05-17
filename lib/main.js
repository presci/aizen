var pageMod=require('sdk/page-mod');
var self= require('sdk/self');


pageMod.pageMod({
    include:'https://apps.facebook.com/avengersalliance/*',
    contentScriptFile: [self.data.url('jquery-1.8.3.min.js'), self.data.url('script-1.js')],
    onAttach:function(worker){
	worker.port.emit('replacePage', 'Page matches resultset');
	}
});


