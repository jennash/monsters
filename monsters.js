//set main namespace
goog.provide('monsters');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');



// entrypoint
monsters.start = function(){


	monsters.director = new lime.Director(document.body,1024,768);
	    
    mathattck.director.makeMobileWebAppCapable();
    mathattck.newGame();

}


monsters.newGame  = function(mode) { 
	var scene = new lime.Scene(),
	layer = new lime.Layer();
	

    var game = new monsters.Game(mode);
    layer.appendChild(game);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('monsters.start', monsters.start);
