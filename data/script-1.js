(function(){
    
});


self.port.on('replacePage', function(arg0){
    document.body.innerHTML='<h1>'+ arg0 +'</h1>';
});
