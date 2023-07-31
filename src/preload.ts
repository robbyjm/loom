// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge } from "electron";
import { execSync } from "child_process";

contextBridge.exposeInMainWorld('versions', {
	chrome: () => process.versions.chrome
})

contextBridge.exposeInMainWorld('ffmpeg', {
	/**
	 * takes a file path, frame rate, and prores quality to make a proxy. 
	 * @param filePath file path that will be used to create a proxy
	 * @param frameRate the desired framerate of the proxy
	 * @param profile the desired prores proxy to be used
	 */
	encode: (filePath: string, frameRate: number, profile: number) => {
		console.log(`ffmpeg -i "${filePath}" -r ${frameRate} -c:v prores -profile:v ${profile} -c:a copy -map 0 output.mov`)
		execSync(`ffmpeg -i "${filePath}" -r ${frameRate} -c:v prores -profile:v ${profile} -c:a copy -map 0 output.mov`, {
			cwd: '/Users/robby/desktop',
			shell: '/bin/zsh'
		})
	} 
})