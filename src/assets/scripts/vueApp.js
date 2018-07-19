console.log('Hellooo vue')


Vue.component('the-cau-thu', {
    props: ['playerinfo'],
    template: `
        <article class="col-md-3 things-to-do-wrapper">
            <div class="card things-to-do-card">
                <img v-bind:src="playerinfo.photoUrl" class="things-to-do" alt="">
                <div class="things-to-do-overlay"></div>
                <div class="things-to-do-heading">
                    <h4>{{playerinfo.playerName}}</h4>
                </div>
            </div>
	    </article>
    `
})

Vue.component('the-bai-bao', {
    props: ['imagininfo'],
    template: `
        <article class="col-md-3 things-to-do-wrapper">
            <div class="card things-to-do-card">
                <img v-bind:src="imagininfo.photoUrl" class="things-to-do" alt="">
                <div class="things-to-do-overlay"></div>
                <div class="things-to-do-heading">
                    <h4>{{imagininfo.author}}</h4>
                </div>
            </div>
	    </article>
    `
})


var app = new Vue({
    el: '#vue-app',
    data: {
        message: 'Hello Vue 12345',
        // photoUrl: 'src/assets/images/MUPlayer/AS7.jpg',
        // playerName: 'Van Persieeee',
        players: [
            {
                id: 1,
                photoUrl: 'src/assets/images/MUPlayer/128863.jpg',
                playerName: 'Anthoni Martial',
            },
            {
                id: 2,
                photoUrl: 'src/assets/images/MUPlayer/Pogba.jpg',
                playerName: 'Paul Pogba',
            },
            {
                id: 3,
                photoUrl: 'src/assets/images/MUPlayer/Debay.jpg',
                playerName: 'Memphics Debay',
            },
            {
                id: 4,
                photoUrl: 'src/assets/images/MUPlayer/Matic.jpeg',
                playerName: 'Najima Matic',
            },
        ],
        NYTimesData: []
    },
    created(){
        console.log('Vue is created')
        console.log(this.message)

        axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=f95fd2cf96a441989dcfe7e7eb629158')
        .then(function(response){            
            // Lay' gia tri bai bao nhan ve (response.data.results) gan' vao 1 array nao do
            var arrayResults = response.data.results;

            // Lay 1 tam' hinh tu multimedia ma tam hinh do co' width >1000
            var resultObjects = [];
            for(i = 0; i < arrayResults.length; i++){
                //console.log(arrayResults[i]);
                var arrayMultimedia = arrayResults[i].multimedia;//goi ra nhung cai multimedia nam trong array results
                //console.log(arrayMultimedia)
                for(j = 0; j < arrayMultimedia.length; j++){
                    var photoObject = arrayMultimedia[j]
                    if(photoObject.width >1000){
                        var resultObject = {
                            id: i,
                            author: arrayResults[i].byline,
                            photoUrl: photoObject.url
                        }
                        resultObjects.push(resultObject);

                    }
                }
            }
            
            console.log(resultObjects);
            // Lay "byline" tuong ung' cua tam' hinh vua nhan duoc

            // Lam 8 lan nhu vay
            var result8Objects = resultObjects.slice(0,8);
            console.log(result8Objects);
            // Gan' 8 objects do' vao 1 array(moi object co' 2 properties la: "byline" va "imageUrl")

            // Gan' array co' 8 objects do' vao array NYTimesData
            this.NYTimesData = result8Objects;


        }.bind(this))
        .catch(function(error){

        })
    }
})

//---------------------------------------------------------

Vue.component('the-hinh-anh',{
    props:['viewinfo'],
    template:`
    <article class="col-md-4 col-lg-3">
    <div class="event-wrapper">
        <img v-bind:src="viewinfo.photoUrl" class="event-thumbnail thumbnail"  alt="">
        <div class="event-tag"><span>2<sup>nd</sup> Feb</span></div>
    </div>
    <p class="event-intro"> {{viewinfo.viewName}}</p>
</article>
`

})

var app1 = new Vue({
    el: '#vue-app2',
    data: {
        message: '',
        // photoUrl: 'src/assets/images/MUPlayer/AS7.jpg',
        // playerName: 'Van Persieeee',
        viewers:[
            {
                id: 1,
                photoUrl: "src/assets/images/View/000044.jpg",
                viewName: 'Chùa Bửu Đóa1',
            },
            {
                id: 2,
                photoUrl: "src/assets/images/View/000044.jpg",
                viewName: 'Chùa Bửu Đóa2',
            },
            {
                id: 3,
                photoUrl: "src/assets/images/View/000044.jpg",
                viewName: 'Chùa Bửu Đóa3',
            },
            {
                id: 4,
                photoUrl: "src/assets/images/View/000044.jpg",
                viewName: 'Chùa Bửu Đóa4',
            }
        ]
    }
})
