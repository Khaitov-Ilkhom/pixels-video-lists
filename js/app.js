import axios from "./axios.js"
import {renderPhotosInGrid} from "./render.js";

const API_KEY = "DH7XoD7YCYVQ5YLLsWbkpMgBsOspzACzXjeGyupYtW0MVeUT3k7yxA7Y"
localStorage.setItem("key", API_KEY)

const loadPhoto = async () => {
    try {
        const response = await axios ("/v1/videos/search?query=nature&per_page=80")
        if (!response.status || response.status !== 200) {
            throw new Error(response)
        }
        const data = response.data
        renderPhotosInGrid(data.videos)
    } catch (error) {
        console.log(error.message, "hello")
    }
}

loadPhoto()