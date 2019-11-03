// NO TRANSFORM

class Loading {
    static showLoadingGraphicsForImage(imageId, imageSrc, loadingElementId) {
        jQuery(`#${loadingElementId}`).show();
        jQuery(`#_${imageId}`).attr('src', imageSrc).load(imageSrc, (response, status, xhr) => {
            if (status === "success") {
                jQuery(`#${loadingElementId}`).fadeOut();
                jQuery(`#_${imageId}`).fadeIn();
            } else {
                console.warn(`Failed to load image #_${imageId}: ${response}`);
            }
        });
    }
};

export { Loading };
