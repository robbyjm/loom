// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";
import { execSync } from "child_process";

contextBridge.exposeInMainWorld('versions', {
	chrome: () => process.versions.chrome
})

contextBridge.exposeInMainWorld('ffmpeg', {
	encode: (filePath: string) => {
		execSync(`ffmpeg -i ${filePath} output.avi`, {
			cwd: 'C:\\Users\\robby\\Desktop'
		})
	} 
})