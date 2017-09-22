(function() {
	
	// Fix console.log
	if(typeof console.log   == 'undefined') console.log   = function () {};
	if(typeof console.debug == 'undefined') console.debug = console.log;
	if(typeof console.info  == 'undefined') console.info  = console.log;
	if(typeof console.warn  == 'undefined') console.warn  = console.log;
	if(typeof console.error == 'undefined') console.error = console.log;
	
	let _log  : any = console.log  ;
	let _debug: any = console.debug;
	let _info : any = console.info ;
	let _warn : any = console.warn ;
	let _error: any = console.error;
	
	delete(console.log  );
	delete(console.debug);
	delete(console.info );
	delete(console.warn );
	delete(console.error);
	
	let getContext = function(mode) {
		let date = new Date();
		let time =
				date.getFullYear()                        + '/' +
				("0" + (date.getMonth() + 1)).slice(-2)   + '/' +
				("0" + date.getDate()).slice(-2)    + ' ' +
				("0" + date.getHours()).slice(-2)   + ':' +
				("0" + date.getMinutes()).slice(-2) + ':' +
				("0" + date.getSeconds()).slice(-2)
			;
		return '['+time+']['+mode+']';
	};
	
	Object.defineProperty(console, 'debug', {
		get: function() {
			return Function.prototype.bind.call(_debug, console, getContext('DEBUG'));
		}
	});
	Object.defineProperty(console, 'info', {
		get: function() {
			return Function.prototype.bind.call(_info, console, getContext('INFO'));
		}
	});
	Object.defineProperty(console, 'log', {
		get: function() {
			return Function.prototype.bind.call(_log, console, getContext('MESSAGE'));
		}
	});
	Object.defineProperty(console, 'warn', {
		get: function() {
			return Function.prototype.bind.call(_warn, console, getContext('WARNING'));
		}
	});
	Object.defineProperty(console, 'error', {
		get: function() {
			return Function.prototype.bind.call(_error, console, getContext('ERROR'));
		}
	});
	
})();