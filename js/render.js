
export const renderPhotosInGrid = (data) => {
    const imageGrids = $imageGrid.children
    const imageGridsArray = Array.from(imageGrids)
    let index = 0
    let changeLimit = Math.floor(data.length / 3)
    imageGridsArray.forEach((imageGridItemContainer) => {
        const imageDataGroups = data.slice(index, index + changeLimit)
        const $imagesFragment = document.createDocumentFragment()
        imageDataGroups.forEach(image => {
            const $a = document.createElement("a")
            $a.href = `./page.html?image-id=${image.id}`
            $a.target = "_blank"
            $a.className = "image-item"
            $a.innerHTML = `
                <video id="video" controls autoplay>
                    <source id="source" src="${image.video_files[2].link}" type="">
                </video>
                <div class="img-cover">
                    <div class="img-btn-group"></div>
                    <div class="img-account">
                        <p>${image.user.name}</p>
                        <a  href="${image.video_files[2].link}"><i class="bi bi-download"></i> Download</a>
                    </div>
                </div>
            `
            $imagesFragment.appendChild($a)
        })
        index += changeLimit

        imageGridItemContainer.appendChild($imagesFragment)
    })
}

export const renderPreviewImage = (data) => {
    $previewImage.src = data.video_files[2].link
}