// NO TRANSFORM

class Search {
    static selectTarget = null

    static selectedIndex: number = -1

    static AutoCompleteEvent(event) {
        if (!event) event = window.event;
        if (!Search.selectTarget) return;
        const rows = Search.selectTarget.getElementsByTagName('tr');
        let current = Search.selectedIndex != -1 ? rows[Search.selectedIndex] : null;
        if (current) current.style.backgroundColor = '';
        if (event.keyCode == 40 && Search.selectedIndex + 1 < rows.length) Search.selectedIndex++;
        else if (event.keyCode == 38 && Search.selectedIndex > 0) Search.selectedIndex--;
        else if (event.keyCode == 27) Search.selectTarget.offsetParent.style.display = 'none';
        else if (event.keyCode == 13) {
            if (!current && rows.length > 0) current = rows[0];
            if (current) current.onmousedown();
            Search.selectTarget.offsetParent.style.display = 'none';
        }
        const newsel = rows[Search.selectedIndex];
        if (newsel) newsel.style.backgroundColor = 'rgb(225, 237, 255)';
    }
};

export { Search };
