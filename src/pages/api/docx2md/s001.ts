import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import anylogger from 'anylogger';
import '@mmstudio/an000042';
import { promises as fs } from 'fs';
import { join, basename, extname } from 'path';
import an41 from '@mmstudio/an000041';

const mammoth = require('mammoth');	// without dts
const html2md = require('html-to-md');

const logger = anylogger('pages/api/docx2md/s001');

export type Result = string | {
	name: string;
	body: string;
};

export type Message = {

}

export type Query = {

}

/**
 * docx2md
 */
const handler = nextConnect<NextApiRequest, NextApiResponse<Result>>();

handler.put(async (req, res) => {
	logger.debug('msg body:', req.body);
	// 解析文件
	const all = await an41(req);
	const files = all.filter((f) => {
		return /\.docx$/.test(f.name) || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' === f.type || 'application/wps-office.docx' === f.type;
	});
	if (files.length !== 1) {
		res.status(500).send('1 file allowed');
		return;
	}
	const [file] = files;
	logger.debug('file', file);
	const path = file.path;
	const ext = extname(path);
	const name = basename(file.name || path, ext);
	const d = await mammoth.convertToMarkdown({ path });
	const m = html2md(d.value);
	const mdname = `${name}.md`;
	// const download = encodeURIComponent(mdname);
	// res.setHeader('Content-Disposition', `attachment; filename=${download}`);
	res.status(200).json({
		name: mdname,
		body: m
	});
});

export const config = {
	api: {
		bodyParser: false
	}
} as PageConfig;

export default handler;
