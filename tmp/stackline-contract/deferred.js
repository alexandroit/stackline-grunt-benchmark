module.exports={name:'packed-deferred',defer:true,maxTime:0.01,minSamples:1,initCount:1,fn:function(d){setTimeout(function(){d.resolve();},1);}};
