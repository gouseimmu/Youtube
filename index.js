const api_key ="AIzaSyDXiyrbmu8BhwA__sQXC_88QK2DPEnbf-k";

 
let search= async () => {
    try{
    let query = document.getElementById("query").value;
    let url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;

    let res = await fetch(url);

    let data = await res.json();
    append(data.items)

    // console.log(data.items)
    }catch(err){
        console.log(err);
    }
};

let append=(data)=>{
    let container = document.getElementById("results")
    data.forEach(function({id:{videoId},snippet:{title,thumbnails}}){
        // console.log(videoId)
        // console.log(title)
        let div = document.createElement("div");
        let image = document.createElement("img")
        image.src=thumbnails.default.url
        let iframe = document.createElement("iframe");
        iframe.src= `https://www.youtube.com/embed/${videoId}`;
        iframe.allow="fullscreen"
        let h3=document.createElement("h3");
        h3.innerText=title;
         let video1 ={
             title,
            videoId,
         };

        image.addEventListener("click",()=>{
            window.localStorage.setItem("video",JSON.stringify(video1))
            window.location.href="video.html"
        })

         div.append(image,h3);
       
      
        container.append(div);
    })
}

 


 