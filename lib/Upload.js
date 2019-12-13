"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var DataNose_1 = require("./DataNose");
var Language_1 = require("./Language");
var Upload = /** @class */ (function () {
    function Upload() {
    }
    Upload.openUploadDialog = function () {
        if (!Upload.uploadDialog) {
            Upload.uploadDialog = $$('<div>').addClass('overlay').css('z-index', '99').appendTo('body');
            Upload.uploadDialogBody = $$('<div>').css({
                'font-family': 'Segoe UI, Tahoma, sans-serif',
                'font-size': '16px',
                'text-align': 'center'
            }).appendTo($$('<div>').addClass('dialog').width('250px').appendTo(Upload.uploadDialog));
        }
        Upload.uploadDialogBody.html((Language_1.Language.isEnglish() ? 'Uploading... please wait' : 'Bezig met uploaden...'));
        Upload.uploadDialogBody.append($$('<div><img src="https://content.datanose.nl/graphics/loading2.gif" /></div>')
            .css('margin-top', '10px'));
        Upload.uploadDialog.show();
    };
    Upload.closeUploadDialog = function () {
        if (Upload.uploadDialog) {
            Upload.uploadDialog.hide();
        }
    };
    Upload.initializeDirectUpload = function (uploadId, allowEmpty, allowMultiple, maxFileSize, allowedExtensions) {
        var body = $$('body');
        $$('#upload-form-0').remove();
        $$('iframe[name="hidden-target-0"]').remove();
        var form = $$('<form>').attr({
            'id': 'upload-form-0',
            'action': '/Upload',
            'method': 'post',
            'enctype': 'multipart/form-data',
            'target': 'hidden-target-0'
        }).appendTo(body);
        var loadCount = 0;
        var iframe = $$('<iframe>').attr('name', 'hidden-target-0').on('load', function () {
            if (++loadCount > 1) {
                Upload.finishedUpload(0);
                $$(this).remove();
                form.remove();
            }
        }).css('display', 'none').appendTo(body);
        var fileInput = $$('<input>').attr({
            'type': 'file',
            'name': 'files'
        }).appendTo(form);
        fileInput.on('change', function () {
            Upload.submitUploadForm('upload-form-0', allowEmpty, maxFileSize);
        });
        if (allowedExtensions.length) {
            fileInput.attr('accept', allowedExtensions.join(','));
        }
        if (allowMultiple) {
            fileInput.attr('multiple', '');
        }
        var idInput = $$('<input>').attr({
            'type': 'hidden',
            'name': 'id',
            'value': uploadId
        }).appendTo(form);
    };
    Upload.submitUploadForm = function (id, allowEmpty, maxFileSize) {
        var form = $$('#' + id);
        var input = form.children('input:file');
        if (input[0].files && (allowEmpty || input[0].files.length)) {
            var accept = input.attr('accept');
            if (accept) {
                var extensions = accept.toUpperCase().split(",");
                for (var i = 0; i < input[0].files.length; ++i) {
                    var filename = input[0].files[i].name;
                    var index = filename.lastIndexOf('.');
                    if (index < 0) {
                        Upload.showExtensionDialog(extensions);
                        return;
                    }
                    var extension = filename.substring(index).toUpperCase();
                    var extensionFound = false;
                    for (var k = 0; k < extensions.length; ++k) {
                        if (extension === extensions[k]) {
                            extensionFound = true;
                            break;
                        }
                    }
                    if (!extensionFound) {
                        Upload.showExtensionDialog(extensions);
                        return false;
                    }
                }
            }
            if (!Upload.validateFileSizes(maxFileSize, input[0].files)) {
                return;
            }
        }
        if (input[0].files && (allowEmpty || input[0].files.length) || input.val() !== '') {
            Upload.openUploadDialog();
            form[0].submit();
        }
    };
    Upload.showExtensionDialog = function (extensions) {
        if (Language_1.Language.isEnglish()) {
            Upload.showMessageModal('Invalid extension(s)', 'Only the following extensions are allowed: ' + extensions.join(', '));
        }
        else {
            Upload.showMessageModal('Ongeldige bestandsextensie(s)', 'Alleen de volgende bestandsextensies zijn toegestaan: ' + extensions.join(', '));
        }
    };
    Upload.validateFileSizes = function (maxFileSize, files) {
        if (!files) {
            return true;
        }
        var tooBig = [];
        if (maxFileSize && files[0]) {
            for (var i = 0; i < files.length; ++i) {
                if (files[i].size > maxFileSize) {
                    tooBig.push(files[i].name);
                }
            }
        }
        if (tooBig.length) {
            Upload.showInvalidFileSizesDialog(maxFileSize, files.length, tooBig);
            return false;
        }
        return true;
    };
    Upload.showInvalidFileSizesDialog = function (maxFileSize, fileCount, tooBig) {
        var msg;
        var title;
        var size = (maxFileSize / 1024) + 'KB';
        if (fileCount > 1) {
            title = ['The following files are too large', 'De volgende bestanden zijn te groot'];
            msg = ['<ul>', '<ul>'];
            for (var i = 0; i < tooBig.length; ++i) {
                var str = '<li>' + tooBig[i] + '</li>';
                for (var m = 0; m < msg.length; ++m) {
                    msg[m] += str;
                }
            }
            msg[0] += '</ul>Please reduce the file size of each file to be smaller than ' + size;
            msg[1] += '</ul>Gelieve de bestanden te verkleinen zodat elk bestand kleiner is dan ' + size;
        }
        else {
            title = ['The selected file is too large', 'Het geselecteerde bestand is te groot'];
            msg = [
                'Please reduce the file size to be smaller than ' + size,
                'Gelieve het bestand kleiner dan ' + size + ' maken'
            ];
        }
        Upload.showMessageModal(title[Language_1.Language.index], msg[Language_1.Language.index]);
    };
    Upload.fileInputChange = function (input, id) {
        var $input = $$(input);
        var $form = $input.parent();
        if ($form.hasClass('file-input-control')) {
            var fileNames = [];
            if (input.files) {
                if (input.files.length == 0) {
                    $form.children('a').css('display', 'inline');
                    $form.children('img').css('display', 'none');
                    $form.children('div').css('display', 'none');
                }
                else {
                    $form.children('a').css('display', 'none');
                    $form.children('img').css('display', 'inline');
                    for (var i = 0; i < input.files.length; ++i) {
                        fileNames[i] = input.files[i].name;
                    }
                    $form.children('div').text(fileNames.join(', ')).css('display', 'inline');
                }
            }
            else {
                if (input.value == '') {
                    $form.children('a').css('display', 'inline');
                    $form.children('img').css('display', 'none');
                    $form.children('div').css('display', 'none');
                }
                else {
                    $form.children('a').css('display', 'none');
                    $form.children('img').css('display', 'inline');
                    $form.children('div').text(input.value).css('display', 'inline');
                    fileNames[0] = input.value;
                }
            }
            // Unfortunately we have to serialize the array AND place it inside an object to play well with the current event system :<
            DataNose_1.DN.Event(id, "InputChange", { fileNames: fileNames.join(';') }, false);
        }
    };
    Upload.fileInputBrowse = function (id) {
        $$('#' + id + ' input:file').click();
    };
    Upload.fileInputClear = function (id) {
        var $input = $$('#' + id + ' input:file');
        $input.val('');
        Upload.fileInputChange($input[0], id);
    };
    Upload.finishedUpload = function (id) {
        Upload.closeUploadDialog();
        var iframe = document.getElementsByName('hidden-target-' + id)[0];
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDocument.body.innerText) {
            var result = JSON.parse(iframeDocument.body.innerText);
            if (result.error) {
                if (result.error < 3) {
                    if (Language_1.Language.isEnglish()) {
                        Upload.showMessageModal('Error', 'An error occured, please try again.');
                    }
                    else {
                        Upload.showMessageModal('Error', 'Er is een fout opgetreden, probeer het opnieuw.');
                    }
                }
                else if (result.error === 3) {
                    Upload.showInvalidFileSizesDialog(result.maxfileSize, result.fileCount, result.tooBig);
                }
                else if (result.error === 4) {
                    Upload.showExtensionDialog(result.allowedExtensions);
                }
                else if (result.error === 5) {
                    if (Language_1.Language.isEnglish()) {
                        Upload.showMessageModal('Error', 'No files were uploaded.');
                    }
                    else {
                        Upload.showMessageModal('Error', 'Er zijn geen bestanden geüpload.');
                    }
                }
                else if (result.error === 6) {
                    if (Language_1.Language.isEnglish()) {
                        Upload.showMessageModal('Error', 'Multiple files were uploaded, only a single file upload is allowed.');
                    }
                    else {
                        Upload.showMessageModal('Error', 'Er zijn meerdere bestanden geüpload waar een enkel is toegestaan.');
                    }
                }
            }
        }
        DataNose_1.DN.Execute('update');
    };
    Upload.showMessageModal = function (title, message) {
        $$('<div></div>').appendTo('body').html('<div>' + message + '</div>').dialog({
            modal: true,
            title: title,
            zIndex: 10000,
            autoOpen: true,
            width: 'auto',
            resizable: false,
            draggable: false,
            buttons: {
                OK: function () {
                    $$(this).dialog("close");
                },
            }
        });
    };
    return Upload;
}());
exports.Upload = Upload;
;
$$(document).on('click', 'a[start-upload]', function () {
    $$('#upload-form-0 input[type="file"]').click();
});
