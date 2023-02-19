var player = videojs("luxmtyplayer", {
  preload: "metadata",
  autoplay: "",
  controls: true,  
  fill: true,
  liveui: true,
  language: "",     
  techOrder: ["html5", "youtube"],
  html5: {
  },
  plugins: {}
});

/*Playlist Plugin*/
player.playlist([{
    name: "Big Buck Bunny",
    description: "Big Buck Bunny is about a kind-hearted, fat, white bunny who is abused by three cute but nasty stone throwing rodents",
    poster: "https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
    duration: 634, //Seconds
    sources: [{
      src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      type: "",
    }],
    thumbnail: [{
      src: "https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
    }]
  },
  {
    name: "Tears of Steel",
    description: "Scientists attempt to change the past in order to prevent a robot apocalypse in this sci-fi adventure created with open source effects and technology.",
    poster: "https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",
    duration: 000,
    sources: [{
      src: "https://cdn.bitmovin.com/content/demos/4k/38e843e0-1998-11e9-8a92-c734cd79b4dc/manifest.m3u8",
      type: "",
    }],
    thumbnail: [{
      src: "https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",
    }]
  },
  {
    name: "Elephants Dream",
    description: "Elephants Dream tells the story of Emo and Proog, two people with different visions of the surreal world in which they live.",
    poster: "https://ddz4ak4pa3d19.cloudfront.net/cache/fc/c3/fcc3447811b3ac16a940d690c881a9aa.jpg",
    duration: 000,
    sources: [{
      src: "https://dash.akamaized.net/akamai/test/caption_test/ElephantsDream/elephants_dream_480p_heaac5_1.mpd",
      type: "",
    }],
    thumbnail: [{
      src: "https://ddz4ak4pa3d19.cloudfront.net/cache/fc/c3/fcc3447811b3ac16a940d690c881a9aa.jpg",
    }]
  },

]); //Add more videos after },


/*Playlist UI Plugin*/
// Horizontal mode just add/change this .playlistUI({horizontal:true}) 
videojs(document.querySelector('video')).playlistUi({})

/*---Logo Plugin---*/
player.logo({
  image: "", //Your Logo Image
  url: "", //URL Redirect when click logo
  fadeDelay: null, //Null (always visible) or Milliseconds (1000 = 1 second)
  hideOnReady: false, //True or false
  position: "top-right", //top-left or right, bottom-left or right).
  width: 100,
  height: 0,
  padding: 5,
  opacity: 1,
  offsetH: 0,
  offsetV: 0
});
player.on("useractive", () => {
  player.logo().show();
}); //Show or hide
player.on("playing", () => {
  player.logo().show();
}); //Show or hide
