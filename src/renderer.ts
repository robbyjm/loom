/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTable, getFiles } from "../lib/library";

console.log('👋 This message is being logged by "renderer.js", included via webpack');


const footerInformation = document.getElementById('info')
footerInformation.innerText = `Running Chrome (v${window.versions.chrome()})`
const dropandcontrols = document.getElementById('dropandcontrols')
const dropZone = document.getElementById('dropzone')
dropZone.addEventListener('drop',(e) => {
	e.preventDefault();
	for (const f of e.dataTransfer.files) {
		createTable(dropandcontrols, f.path)
		//window.ffmpeg.encode(f.path, 60,0)
	}
})

const proxyButton: HTMLButtonElement = document.getElementById('makeproxy') as HTMLButtonElement
proxyButton.addEventListener('click',() => {
	const theTable: HTMLTableElement = document.getElementById('fileTable') as HTMLTableElement
	const list: string[] = getFiles(theTable)
	const profile = document.getElementById('proxy') 
	const fps = document.getElementById('fps')
	list.forEach((e)=>window.ffmpeg.encode(e,fps.value,profile.value))
})

document.addEventListener('drop',(e) => {
	e.preventDefault()
	e.stopPropagation()
})
document.addEventListener('dragover',(e) => {
	e.preventDefault()
	e.stopPropagation()
})	