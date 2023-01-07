
function notify(url){
        const audio = new Audio(url)
        audio.play();
        console.log("jj")
    }

const socket = io()
socket.on('connect', ()=>{
    console.log("server connected...")
})

const tweetStream = document.getElementById('tweetStream')
socket.on('tweet', (tweet)=>{
    console.log(tweet)
    let tweetData = {
        id: tweet.data.id,
        text: tweet.data.text,
        username: tweet.includes.users[0].username,
        time: tweet.data.created_at
    }
    
    const tweetEl = document.createElement('div')
    tweetEl.className = 'card my-4'
    tweetEl.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">${tweetData.text}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${tweetData.username}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${tweetData.time}</h6>
        <a href="https://twitter.com/${tweetData.username}/status/${tweetData.id}" class="btn btn-primary mt-3">
        <i class="fab fa-twitter">Go To Twitter</i>
        </a>
    </div>
    `
    tweetStream.appendChild(tweetEl)
})
socket.on('fameTweet',(tweet)=>{
    console.log(tweet)
    let tweetData = {
        id: tweet.id,
        text: tweet.text,
        // username: tweet.includes.users[0].username,
        time: tweet.created_at
    }
    
    const tweetEl = document.createElement('div')
    tweetEl.className = 'card my-4'
    tweetEl.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">${tweetData.text}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${tweetData.username}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${tweetData.time}</h6>
        <a href="https://twitter.com/${tweetData.username}/status/${tweetData.id}" class="btn btn-primary mt-3">
        <i class="fab fa-twitter">Go To Twitter</i>
        <a href="https://wa.me/+254714475702?text=hello" class="btn btn-primary mt-3">
        <i class="fab fa-twitter">Whatsapp</i>
        </a>
    </div>
    `
    
    tweetStream.appendChild(tweetEl)
    
    
})
