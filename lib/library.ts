const section = document.createElement('section')
const table = document.createElement('table')
table.classList.add('table','table-borderless', 'table-striped','table-hover')

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
	}
	const newRow = table.insertRow(-1)
	const newCell = newRow.insertCell(0)
	const newText = document.createTextNode(filePath)
	newCell.appendChild(newText)
}