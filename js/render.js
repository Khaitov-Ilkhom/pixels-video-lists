
export const renderPhotosInGrid = (data) => {
    const videoGrids = $videoGrid.children
    const videoGridsArray = Array.from(videoGrids)
    let index = 0
    let changeLimit = Math.floor(data.length / 3)
    videoGridsArray.forEach((videoGridItemContainer) => {
        const videoDataGroups = data.slice(index, index + changeLimit)
        const $videoFragment = document.createDocumentFragment()
        videoDataGroups.forEach(video => {
            const $a = document.createElement("a")
            $a.href = `./page.html?image-id=${video.id}`
            $a.target = "_blank"
            $a.className = "image-item"
            $a.innerHTML = `
                <video controls autoplay>
                    <source src="${video.video_files[2].link}" type="">
                </video>
                <div class="video-cover">
                    <div class="video-btn-group"></div>
                    <div class="video-account">
                        <p>${video.user.name}</p>
                        <a  href="${video.video_files[2].link}"><i class="bi bi-download"></i> Download</a>
                    </div>
                </div>
            `
            $videoFragment.appendChild($a)
        })
        index += changeLimit

        videoGridItemContainer.appendChild($videoFragment)
    })
}

export const renderPreviewImage = (data) => {
    $previewVideo.src = data.video_files[2].link
}