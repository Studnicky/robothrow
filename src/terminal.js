#!/usr/bin/env node
'use strict';

//  Always load first because of .dot-env even if we're not referecing it directly here
const config = require('../config');

const Dispatcher = require('./dispatcher');
const routines = require('./routines').terminal;

async function executeTerminal() {
	const jsonImportRoutine = new Dispatcher(routines.processJSON, {});
	const result = await jsonImportRoutine.execute(config);
}

executeTerminal();
