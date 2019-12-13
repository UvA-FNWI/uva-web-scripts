declare class Upload {
    static uploadDialog: any;
    static uploadDialogBody: any;
    static openUploadDialog(): void;
    static closeUploadDialog(): void;
    static initializeDirectUpload(uploadId: any, allowEmpty: any, allowMultiple: any, maxFileSize: any, allowedExtensions: any): void;
    static submitUploadForm(id: any, allowEmpty: any, maxFileSize: any): boolean;
    static showExtensionDialog(extensions: any): void;
    static validateFileSizes(maxFileSize: any, files: any): boolean;
    static showInvalidFileSizesDialog(maxFileSize: any, fileCount: any, tooBig: any): void;
    static fileInputChange(input: any, id: any): void;
    static fileInputBrowse(id: any): void;
    static fileInputClear(id: any): void;
    static finishedUpload(id: any): void;
    static showMessageModal(title: any, message: any): void;
}
export { Upload };
