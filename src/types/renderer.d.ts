export interface IFfmpeg {
	encode: (fileName:string) => Promise<void>,
}

export interface IVersions {
	chrome: () => Promise<void>
}


declare global {
	interface Window {
		ffmpeg: IFfmpeg
		versions: IVersions
	}
}