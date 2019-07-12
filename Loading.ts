// NO TRANSFORM

class Loading {
    static showLoadingGraphicsForImage(imageId, imageSrc, loadingElementId) {
        jQuery(`#${loadingElementId}`).show();
        jQuery(`#_${imageId}`).attr('src', imageSrc).load(() => {
            jQuery(`#${loadingElementId}`).fadeOut();
            jQuery(`#_${imageId}`).fadeIn();
        });
    }
};

export { Loading };
