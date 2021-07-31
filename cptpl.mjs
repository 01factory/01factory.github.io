#!/usr/bin/env node

import fs from 'fs/promises';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

function cptpl() {
	const args = yargs(hideBin(process.argv))
		// .command('type <type>', 'qa doc codes', {
		// }, (argv) => {
		// 	console.info(argv)
		// })
		.command('qa', 'create qa')
		.command('doc', 'create document')
		.command('code', 'create code sample')
		// .option('type', {
		// 	type: 'string',
		// 	choices: ['qa', 'docs', 'codes']
		// })
		.demandCommand(1, 2, '最少一个参数', '最大也一个参数');
	const argv = args.argv;
	const d = Array.from(argv);
	console.log('d', d);
	console.log('000000', typeof argv._);
	if (argv._.length !== 1) {
		console.log('aaaaaaaa', argv);

	} else {
		args.help();
	}
}

cptpl();
