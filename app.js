let type = "sfw" //nsfw
let category = "waifu"
const categories = [
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "cry",
    "kiss",
    "lick",
    "hug",
    "awoo",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "nom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe",
]
let api
let imageSection = document.getElementById('imageSection')
let generateWaifuBtn = document.getElementById('generateWaifu')
let loading = document.getElementById('loading')
let downloadLink = document.getElementById('downloadLink')
let select = document.getElementById('select')
let options = ""

for (c of categories) {
    options += `<option value="${c}">${c}</option>`
}

select.innerHTML = `
<select id="selectInput" class="form-select form-select-sm" aria-label=".form-select-sm example">
<option value="waifu" selected>Escolha uma categoria</option>
${options}
</select>
`

generateWaifuBtn.addEventListener("click", () => {
    let selected = document.getElementById('selectInput')

    category = selected.value
    api = `https://api.waifu.pics/${type}/${category}`
    generateWaifuBtn.innerHTML = `
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Carregando...</span>
    </div>
`
imageSection.innerHTML = ""
imageSection.innerHTML = imageSkeleton

generateWaifu()
})

const imageSkeleton = `
<div class="card">
    <div class="card-body">
        <div class="card-title placeholder-glow">
            <span class="col-12 placeholder" id="span"></span>
        </div>
    </div>
</div>
`

function generateWaifu() {
    fetch(api).then(response => {
        return response.json()
    }).then(data => {
        imageSection.innerHTML = `
        <img src="${data.url}" class="img-thumbnail d-block my-3" id="waifuImage" alt="waifu image" style="max-height:430px">
        `
        downloadLink.href = data.url
        generateWaifuBtn.innerHTML = '<b>Gerar mais...</b>'
    }).catch(error => {
        generateWaifuBtn.innerHTML = 'Erro ao gerar...'
    })
}
