var pageMod=require("sdk/page-mod");
var data= require("sdk/self").data;


pageMod.PageMod({
    include:'https://apps.facebook.com/avengersalliance/*',
    contentScriptFile: [data.url('jquery-1.8.3.min.js'), data.url('script-1.js')],
    onAttach:function(worker){
	worker.port.emit('replacePage', 'Page matches resultset');
	}
});


