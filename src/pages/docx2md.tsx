import { NextPage, PageConfig } from 'next';
import Head from 'next/head';
import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import { Dashboard, useUppy } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/progress-bar/dist/style.css';
import '@uppy/status-bar/dist/style.css';
import { Message as M1, Query as Q1, Result as R1 } from './api/docx2md/s001';
import { Col, Row } from '@geist-ui/react';
import { useState } from 'react';

const s001 = '/api/docx2md/s001';
interface IProps {
}

/**
 * Word 转 Markdown
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>Word 转 Markdown</title>
			</Head>
			<C001></C001>
		</>
	);
};

export const config: PageConfig = {
	amp: false
};

export default page;

function C001() {
	const [href, setHref] = useState('#');
	const [name, setname] = useState('');
	const uppy = useUppy(() => {
		const uppy = Uppy({
			allowMultipleUploads: true,
			autoProceed: true,
			debug: true,
			restrictions: {
				maxFileSize: 1000000,
				maxNumberOfFiles: 3,
				minNumberOfFiles: 1,
				allowedFileTypes: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document',
					'application/wps-office.docx']
				// },
				// onBeforeUpload(files) {
				// 	return files;
				// 	const fs = {} as typeof files;
				// 	Object.keys(files).forEach((name) => {
				// 		const file = files[name];
				// 		console.error('filetype', file.meta.type);
				// 		if (/(wps-office)|(vnd\.ms-excel)|(openxmlformats-officedocument\.spreadsheetml\.sheet)/.test(file.meta.type)) {
				// 		}
				// 		fs[name] = file;
				// 	});
				// 	return fs;
			}
		});
		uppy.use(XHRUpload, {
			fieldName: 'file',
			formData: true,
			method: 'PUT',
			endpoint: s001
		});
		uppy.on('complete', (result) => {
			const [success] = result.successful;
			if (success) {
				const content = success.response.body as { name: string; body: string; };
				const blob = new Blob([content.body]);
				setname(content.name);
				setHref(URL.createObjectURL(blob));
			}
		});
		return uppy;
	});
	return <>
		<Row>
			<Col>
				上传面板
			</Col>
		</Row>
		<Row>
			<Col>
				<Dashboard uppy={uppy} />
			</Col>
			<Col>
				<a href={href} download={name} >{`点击这里下载:${name}`}</a>
			</Col>
		</Row>
	</>;
}

