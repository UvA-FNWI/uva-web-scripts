// NO TRANSFORM

console.log('The DataNose team are looking for students who are interested in helping'
+ ' develop and configure features in DataNose, depending on your skills and experience.'
+ ' Hours and schedule to be determined, usually one or two days per week. If you'
+ ' are interested please send me an email outlining your motivation and with CV'
+ ' attached to g.oomens@uva.nl - Gerrit Oomens');

class Util {

    // Return a jQuery element by given UvA.Web ID.
    static j(dnId: number) {
        return jQuery(`#_${dnId}`);
    }

    static GetDate(id) {
        return `${$(`${id}_month`).value},${$(`${id}_day`).value},${$(`${id}_year`).value}`;
    }

    static GetSelectedItems(id) {
        const el = $(id);
        let res = '';
        for (let i = 0; i < el.options.length; i++)
            res += el.options[i].selected ? (`${i},`) : '';
        if (res.length > 0) res = res.substr(0, res.length - 1);
        return res;
    }

    static addClass(el, className) {
        if (!className || className === '') { return el; }
        const parts = className.split(' ');
        for (let i = 0; i < parts.length; ++i) {
            if (el.classList)
                el.classList.add(parts[i]);
            else if (!hasClass(el, parts[i]))
                el.className += ` ${parts[i]}`;
        }
        return el;
    }

    static alphaOnly(event) {
        const key = event.which;
        const c = String.fromCharCode(event.which);
        const isWordcharacter = c.match(/\w/);
        return isWordcharacter || key == 8;
    }

    static arraysEqual(a, b) {
        if (a.length !== b.length) { return false; }

        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) { return false; }
        }

        return true;
    }
};

jQuery.fn.equals = function (compareTo) {
    if (!compareTo || this.length != compareTo.length) {
        return false;
    }
    for (let i = 0; i < this.length; ++i) {
        if (this[i] !== compareTo[i]) {
            return false;
        }
    }
    return true;
};

export { Util };
