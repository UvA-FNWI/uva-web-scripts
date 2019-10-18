// NO TRANSFORM

class Editor {
    static forceMCEReInit: boolean = false

    static InitMCE() {
        tinymce.EditorManager.editors = [];
        tinymce.init({
            selector: 'div[addtinyMCE="true"]',
            inline: true,
            plugins: [
                'autolink lists link',
                'table',
                'paste',
                'wordcount'
            ],
            menubar: false,
            relative_urls: false,
            document_base_url: "http://invalid.invalid",
            paste_auto_cleanup_on_paste: true,
            paste_retain_style_properties: "font-weight, font-style",
            paste_webkit_styles: "font-weight, font-style",
            paste_strip_class_attributes: true,
            paste_preprocess: function (plugin, args) {
                var node = $$('<div></div>').html(args.content);
                Editor.pasteRemoveStyles(node[0]);

                var allowedTags = ['A', 'P', 'TABLE', 'TH', 'TR', 'TD', 'THEAD', 'TBODY', 'TFOOT', 'CAPTION', 'COL', 'COLGROUP',
                    'UL', 'OL', 'LI', 'STRONG', 'BR', 'EM', 'PRE', 'I', 'B'];
                args.content = Editor.pasteFiltered(node[0], allowedTags);
            },
            browser_spellcheck: true,
            default_link_target: "_blank",
            toolbar: 'bold italic underline striketrough | bullist numlist | table | link',
            setup: function (ed) {
                var element = $$('#' + ed.id);
                ed.on('change', function (e) {
                    element.attr('log', ed.getContent());
                });
                element.on('change keyup', function (e) {
                    element.attr('log', ed.getContent());
                });
                ed.settings.toolbar = element.attr('tinyMCEtoolbar');
                if (element.attr('tinyMCEautoresize')) { ed.settings.plugins.push('autoresize'); }
                if (element.attr('maketinyMCEreadonly') == 'true') { ed.settings.readonly = true; }

            }
        });
    }

    // Remove all style from a node and its children except font-weight and font-style.
    static pasteRemoveStyles(node) {
        if (node.style !== undefined) {
            var fontWeight = node.style.fontWeight;
            var fontStyle = node.style.fontStyle;

            node.setAttribute('style', '');

            node.style.fontWeight = fontWeight;
            node.style.fontStyle = fontStyle;
        }

        for (var i = 0; i < node.childNodes.length; ++i) {
            Editor.pasteRemoveStyles(node.childNodes[i]);
        }
    }

    static pasteFiltered(node, allowedTags) {
        if (node.childNodes.length === 0) {
            if (allowedTags.indexOf(node.tagName) >= 0) {
                return ('outerHTML' in node) ? node.outerHTML : node.textContent;
            } else {
                return ('innerHTML' in node) ? node.innerHTML : node.textContent;
            }
        }
        var result = '';
        for (var i = 0; i < node.childNodes.length; ++i) {
            result = result + Editor.pasteFiltered(node.childNodes[i], allowedTags);
        }
        node.innerHTML = result;

        if (allowedTags.indexOf(node.tagName) >= 0) {
            return ('outerHTML' in node) ? node.outerHTML : node.textContent;
        } else {
            return ('innerHTML' in node) ? node.innerHTML : node.textContent;
        }
    }
}

export { Editor };