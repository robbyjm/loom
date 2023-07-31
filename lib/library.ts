const section = document.createElement('section')
section.classList.add('container')
const table = document.createElement('table')
table.classList.add('table','table-borderless', 'table-striped','table-hover')
table.id = 'fileTable'

/**
 * Helper function to create a table if none exists, if a table exists then 
 * a new row will be created.
 * @param parent the element to place the table after
 * @param filePath the path of file that was dropped into loom
 */
export function createTable(parent: HTMLElement, filePath: string) {
	if (!document.getElementById('fileSection')) {
		section.id = 'fileSection'
		parent.after(section)
		section.appendChild(table)
		document.getElementById('makeproxy').removeAttribute('disabled')
	}
	const newRow = table.insertRow(-1)
	const newCell = newRow.insertCell(0)
	const newText = document.createTextNode(filePath)
	newCell.appendChild(newText)
}

/**
 * 
 * @param table table control to check for rows
 * @returns list of file paths
 */
export function getFiles(table: HTMLTableElement): string[] {
	let i = 0
	let fileList = []
	const rowCollection: HTMLCollection = table.rows
	while (i < rowCollection.length) {
		const currentRow = rowCollection[i] as HTMLTableRowElement
		fileList.push(currentRow.innerText)
		i++
	}
	return fileList
}