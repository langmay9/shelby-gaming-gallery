const media=[

{
type:"image",
url:"https://picsum.photos/800/600"
},

{
type:"image",
url:"https://picsum.photos/800/601"
},

{
type:"video",
url:"https://www.w3schools.com/html/mov_bbb.mp4"
}

]

const gallery=document.getElementById("gallery")

media.forEach(item=>{

if(item.type==="image"){

const img=document.createElement("img")
img.src=item.url
gallery.appendChild(img)

}

if(item.type==="video"){

const video=document.createElement("video")
video.src=item.url
video.controls=true
gallery.appendChild(video)

}

})
