#!/usr/bin/env node
'use strict';

//  Always load first because of .dot-env even if we're not referecing it directly here
const config = require('../config');

createDirectory().then(() => {
	//  Toasters toast toast
	const tosser = new Tosser(config.tosser);
	return tosser.toss();
});
