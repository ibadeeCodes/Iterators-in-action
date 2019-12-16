const data = [
    {
        name: "Ali Shaikh",
        gender: "Male",
        field: "development",
        img: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: "Ahmed Zia",
        gender: "Male",
        field: "civil",
        img: "https://randomuser.me/api/portraits/men/70.jpg"
    },
    {
        name: "Zoha Ali",
        gender: "Female",
        field: "Electrical",
        img: "https://randomuser.me/api/portraits/women/75.jpg"
    }
]


var it = iterator(data)


nextIterator()

document.getElementById('submit').addEventListener('click', nextIterator)

function nextIterator() {

    var currentProfile = it.next().value
    if(currentProfile != undefined) {
        document.getElementById('img').innerHTML = `
        <img src="${currentProfile.img}">
    `;  

        document.getElementById('profile').innerHTML = `
            <p>${currentProfile.name}</p>
            <p>${currentProfile.gender}</p>
            <p>${currentProfile.field}</p>
        `
    } else {
        window.location.reload()
    }
}

function iterator(profiles){
    var init = 0
    return {
        next: function() {
            return init < profiles.length 
            ? {value : profiles[init++], done: false} : {done: true} 
        }
    }
}




