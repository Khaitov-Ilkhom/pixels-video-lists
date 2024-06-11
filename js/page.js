import axios from "./axios.js";
import {renderPreviewImage} from "./render.js";

const URL = location.search
const imageID = new URLSearchParams(URL).get("image-id")

const loadPhoto = async (id) => {
    try {
        const response = await axios(`v1/videos/videos/${id}`)
        renderPreviewImage(response.data)
    } catch (error) {
    }
}

loadPhoto(imageID)