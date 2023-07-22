// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge } from "electron";
import { execSync } from "child_process";

contextBridge.exposeInMainWorld('versions', {
	chrome: () => process.versions.chrome
})

contextBridge.exposeInMainWorld('ffmpeg', {
	encode: (filePath: string, frameRate: number, profile: number) => {
		execSync(`ffmpeg -i "${filePath}" -r ${frameRate} -c:v prores -profile:v ${profile} -c:a copy -map 0 output.mov`, {
			cwd: 'C:\\Users\\robby\\Videos\\loom'
		})
	} 
})