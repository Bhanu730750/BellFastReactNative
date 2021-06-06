import { PermissionsAndroid, Platform } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const requestExternalStoreageRead = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: 'Emcast',
                message: 'App needs access to external storage',
            },
        );
        return granted == PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        return false;
    }
};

const getMediaGalleryData = async () => {
    let videos = [];
    let images = [];
    const mediaData = {images,videos};
    if (Platform.OS === 'ios' || await requestExternalStoreageRead()) {
        return CameraRoll.getPhotos({
            first: 100,
            assetType: 'All',
        }).then(r => {
            if (r.edges.length > 0) {
                r.edges.map((item, key) => {
                    if (item.node.type === "video/mp4") {
                        videos.push({ timestamp: item.node.timestamp, ...item.node.image });
                    } else {
                        images.push({ timestamp: item.node.timestamp, ...item.node.image });
                    }
                });
                mediaData.images = images;
                mediaData.videos = videos;                                
            }
            return mediaData;
        }).catch(error => {
            console.log('error', error);
        });
    }    
};

export default getMediaGalleryData;