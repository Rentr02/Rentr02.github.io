const ap = new APlayer({
    container: document.getElementById('player'),
    autoplay: false,
    fixed: true,
    audio: [{
        name: '以父之名',
        artist: 'jay',
        url: 'http://www.ytmp3.cn/down/49201.mp3',
        cover: 'cover.jpg',
    }]
});