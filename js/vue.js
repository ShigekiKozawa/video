// video-end
var v1 = new Vue({
    el: "#end",
    data: {
        items: [{"url": "./img/01.mp4"}],
        num: 0,
        video: "",
        count: 0
    },
    created: function(){
        this.getItems();
    },
    methods: {
        getItems: function(){
            var url = this.items[this.num].url;
            this.video = url;
        },
        vPlay: function(){   	
		    var v1 = document.getElementById("video-end");
		    this.count++;
		    v1.play();
            if (this.count % 2 == 0) {
                v1.pause();
            }
        },
        vEnd: function(){
        	var end = document.querySelector('#end .end__cont');
        	end.classList.add('active');
        }
    }
});
// control
var v2 = new Vue({
    el: "#control",
    data: {
        items: [{"url": "./img/01.mp4"}, {"url": "./img/02.mp4"}, {"url": "./img/03.mp4"}],
        num: 0,
        video: "",
        count: 0
    },
    created: function(){
        this.getItems();
    },
    methods: {
        onNext: function(){
            this.getItems();
            this.count = 0;
        },
        getItems: function(){
            var url = this.items[this.num].url;
            this.video = url;
            this.num++;
            if (this.items.length <= this.num) {
                this.num = 0;
            }
        },
        vPlay: function(){   	
		    var v2 = document.getElementById("video-control");
		    this.count++;
		    v2.play();
            if (this.count % 2 == 0) {
                v2.pause();
            }
        }
    }
});
// interactive
var v3 = new Vue({
    el: "#interactive",
    data: {
        items: [{"url": "./img/01.mp4"}, {"url": "./img/02.mp4"}],
        num: 0,
        video: "",
        count: 0,
        once: 0
    },
    created: function(){
        this.getItems();
    },
    methods: {
        getItems: function(){
            var url = this.items[this.num].url;
            this.video = url;
        },
        vPlay: function(){   	
            var videoElem = document.getElementById('video-interactive');
        	var fulltime = videoElem.duration;
        	var time = videoElem.currentTime;
		    this.count++;
		    videoElem.play();
            if (this.count % 2 == 0) {
                videoElem.pause();
            }
        	if( time > fulltime / 2 && this.once == 0){
        		this.once++;
	        	var end = document.querySelector('#interactive .end__cont');
	        	end.classList.add('active');
        	}
        },
        vContinue: function(){
            var videoElem = document.getElementById('video-interactive');
        	var end = document.querySelector('#interactive .end__cont');
        	end.classList.remove('active');
        	videoElem.play();
        }
    }
});