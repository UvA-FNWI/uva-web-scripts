// NO TRANSFORM

import { DN } from './DataNose';

class Location {
    // /this function is called from TilePage.cs
    static GetName() {
        if (window.location.hash.indexOf('?q=') != -1)
            window.location.replace(window.location.href.replace('?q=', '['));

        if ((window.location.hash.lastIndexOf('[') != -1 && window.location.hash.lastIndexOf(']') == -1)
            || window.location.hash.lastIndexOf('[') != -1 && window.location.hash.lastIndexOf(']') != -1
            && window.location.hash.lastIndexOf('[') > window.location.hash.lastIndexOf(']'))
            window.location.replace(`${window.location}]`);

        if (window.location.href.indexOf('datanose.science.uva.nl') != -1)
            window.location.replace(window.location.href.replace('datanose.science.uva.nl', 'datanose.nl'));
        let name = window.location.hash;
        if (name == '') name = '#';
        const brIndex = name.indexOf('(');
        if (brIndex != -1) name = name.substring(0, brIndex);
        return name;
    }

    static decodedLocationHash() {
        let hash = window.location.hash;
        if (window.location.href.indexOf('/%23') > 0)// Safari
        {
            const url = decodeURI(window.location.href).replace('/%23', '/#');
            const a = document.createElement('a');
            a.href = url;
            hash = a.hash;
        }
        return decodeURI(hash);
    }

    static lastHash = ''

    static pageName = ''
};

// redirect if URL is not decoded
// if (window.location.hash != decodeURI(window.location.hash)) {
// window.location.hash = decodeURI(window.location.hash); }
if (window.location.hash != decodeURI(Location.decodedLocationHash())) {
    window.location.hash = decodeURI(Location.decodedLocationHash());
}

Location.lastHash = decodeURI(window.location.hash);
Location.pageName = Location.GetName();

setInterval(() => {
    if (decodeURI(window.location.hash) != Location.lastHash
        && (`#${window.location.hash}`) != Location.lastHash) {
        Location.lastHash = decodeURI(window.location.hash);
        Location.pageName = Location.GetName();
        DN.Event(0, 'Initialize', { h: window.location.hash });
    }
}, 100);

export { Location };
