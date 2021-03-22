const tagManager = "https://res.cloudinary.com/lorenzoscebba/image/upload/e_make_transparent/workshops/chelsea/google-tag-manager-1024x577_ftnc2m.png";
const adSense = "https://res.cloudinary.com/lorenzoscebba/image/upload/e_make_transparent,c_lpad,h_1200/workshops/chelsea/Google-adsense_2x_jdxom9.png";

export const getAdvertisementImage = (publisher) => {
    switch (publisher) {
        case "google_ad_sense":
            return adSense;
        case "google_tag_manager":
            return tagManager
        default:
            return adSense;
    }
}