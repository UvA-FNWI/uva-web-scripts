// NO TRANSFORM

class TableView {
    static UpdateColumn(tableid, col, content) {
        const table = document.getElementById(`_${tableid}`);
        const rows = table.getElementsByTagName('tr');
        for (let i = 0; i < content.length; i++) {
            rows[i + 1].getElementsByTagName('td')[col].innerHTML = content[i];
        }
    }
};

export { TableView };
