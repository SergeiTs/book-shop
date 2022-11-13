const model = [
    {type: 'title', value: 'Welcome to book shop!'},
    {type: 'header', value: 'Book catalog'},
    {type: 'book', value: ''},
    {type: 'book1', value: ''},
    {type: 'book2', value: ''},
    {type: 'book3', value: ''},
    {type: 'book4', value: ''},
    {type: 'book5', value: ''},
    {type: 'king', value: './assets/images/king.jpg'},
    {type: 'starts', value: './assets/images/starts.jpg'},
    {type: 'going', value: './assets/images/going.jpg'},
    {type: 'ends', value: './assets/images/ends.jpg'},
    {type: 'triple', value: './assets/images/triple.jpg'},
    {type: 'boys', value: './assets/images/boys.jpg'}
]

const site = document.querySelector('#site')

let html = ''

model.forEach(block => {
    if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'header') {
        html = header(block)
    } else if (block.type === 'king') {
        html = king(block)
    } else if (block.type === 'book') {
        html = book(block)
    } else if (block.type === 'starts') {
        html = starts(block)
    } else if (block.type === 'book1') {
        html = book1(block)
    } else if (block.type === 'going') {
        html = going(block)
    } else if (block.type === 'book2') {
        html = book2(block)
    } else if (block.type === 'ends') {
        html = ends(block)
    } else if (block.type === 'book3') {
        html = book3(block)
    } else if (block.type === 'triple') {
        html = triple(block)
    } else if (block.type === 'book4') {
        html = book4(block)
    } else if (block.type === 'boys') {
        html = boys(block)
    } else if (block.type === 'book5') {
        html = book5(block)
    }

    site.insertAdjacentHTML('beforeend', html)
})

function title(block) {
    return `
        <div class="title">
        <img src="" alt="">
        <h1>${block.value}</h1>
        </div>
    `
}

function header(block) {
    return `
        <div class="header">
        <h2>${block.value}</h2>
        </div>
    `
}

function king(block) {
    return `
    <div class="pic">
    <img src="${block.value}" width="100" height="165">
    </div>
    `
}

function book(block) {
    return `
    <div class="book">
        <p>Nora Barrett</p>
        <p><strong>THE KING OF DRUGS</strong></p>
        <p>Price: 125$</p>
        <a href="">Show more</a>
        <a href=""><button class="btn">Add to bag</button></a>
        </div>
    `
}

function starts(block) {
    return `
    <div class="pic">
    <img src="${block.value}" width="100" height="165">
    </div>
    `
}

function book1(block) {
    return `
    <div class="book1">
        <p>Colleen Hoover</p>
        <p><strong>IT STARTS WITH US</strong></p>
        <p>Price: 100$</p>
        <a href="">Show more</a>
        <a href=""><button class="btn">Add to bag</button></a>
        </div>
    `
}

function going(block) {
    return `
    <div class="pic">
    <img src="${block.value}" width="100" height="165">
    </div>
    `
}

function book2(block) {
    return `
    <div class="book2">
        <p>Janet Evanovich</p>
        <p><strong>GOING ROGUE</strong></p>
        <p>Price: 90$</p>
        <a href="">Show more</a>
        <a href=""><button class="btn">Add to bag</button></a>
        </div>
    `
}

function ends(block) {
    return `
    <div class="pic">
    <img src="${block.value}" width="100" height="165">
    </div>
    `
}

function book3(block) {
    return `
    <div class="book3">
        <p>Colleen Hoover</p>
        <p><strong>IT ENDS WITH US</strong></p>
        <p>Price: 110$</p>
        <a href="">Show more</a>
        <a href=""><button class="btn">Add to bag</button></a>
        </div>
    `
}

function triple(block) {
    return `
    <div class="pic">
    <img src="${block.value}" width="100" height="165">
    </div>
    `
}

function book4(block) {
    return `
    <div class="book4">
        <p>James Patterson</p>
        <p><strong>TRIPLE CROSS</strong></p>
        <p>Price: 130$</p>
        <a href="">Show more</a>
        <a href=""><button class="btn">Add to bag</button></a>
        </div>
    `
}

function boys(block) {
    return `
    <div class="pic">
    <img src="${block.value}" width="100" height="165">
    </div>
    `
}

function book5(block) {
    return `
    <div class="book5">
        <p>John Grisham</p>
        <p><strong>THE BOYS FROM BILOXI</strong></p>
        <p>Price: 120$</p>
        <a href="">Show more</a>
        <a href=""><button class="btn">Add to bag</button></a>
        </div>
    `
}