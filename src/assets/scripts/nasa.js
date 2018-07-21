// nhan vao: string ngay thang va so ngay thay doi || tra ve: object ngay thang time
function addDays(dateString, days) {
    var dateObject123 = new Date(dateString)
    dateObject123.setDate(dateObject123.getDate() + days)
    return dateObject123
}

// nhan vao: object ngay thang time || tra ve string ngay thang ko co' time
function dateWithoutTime(dateObject) {
    var newDateWithoutTime = dateObject.toISOString().split('T')[0]
    return newDateWithoutTime //string
}

// nhan vao string ngay thang va so ngay thay doi || tra ve: string duong link + ngay thang da +/- khong co' time
function tinhNgay(dateStr, soNgayThayDoi) {
    //tinh ngay can hien thi
    var newdateObject = addDays(dateStr, soNgayThayDoi)
    // console.log('newdateObject:',newdateObject)
    //cat thoi gian
    var dateWithoutTimeStr = dateWithoutTime(newdateObject)

    // console.log('dateWithoutTimeStr',dateWithoutTimeStr)

    //tra ve 1 chuoi moi gom link + ngay can hien thi da cat thoi gian
    var chuoiTam = 'https://api.nasa.gov/planetary/apod?api_key=nAWtjI3JNh998ZEzaXj1jLJbeO8AGxBOSoXGlNYx&date=' + dateWithoutTimeStr
    // return chuoiTam
    return chuoiTam
}

// var chuoiMoi = tinhNgay('2018-03-12', -2) // Tao muon chuoiMoi === https://api.nasa.gov/planetary/apod?api_key=nAWtjI3JNh998ZEzaXj1jLJbeO8AGxBOSoXGlNYx&date=2018-03-13
// var chuoiMoi = tinhNgay('2018-03-12', 1)

function next_nasa() {
    console.log('next')
}

function pre_nasa() {
    console.log('pre')
}

// Vue.component('the-bai-bao-nasa', {
//     props: ['viewinfo'],
//     template: `
//     <div>
//         <div id="titlenasa">
//             <h1>{{viewinfo.title}}</h1>
//         </div>
//         <div id="headernasa">
//             <img v-bind:src="viewinfo.url">
//             <div class="copyright">
//                 <h2>{{viewinfo.copyright}}</h2>
//             </div>
//         </div>

//         <div id="contentnasa">
//             <h3>{{viewinfo.explanation}}</h3>
//             <div id="datetime">
//                 <h3>{{viewinfo.date}}</h3>
//             </div>
//         </div>
//     </div>
// `
// })


var app_nasa = new Vue({
    el: '#vue_app',
    data: {
        message: '',
        NasaData: '',
        tempDate: '',
        disableNextBtn: false
    },
    methods: {
        load: function () {
        
            var baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=nAWtjI3JNh998ZEzaXj1jLJbeO8AGxBOSoXGlNYx&date='

            var today = new Date()
            var todayIso = today.toISOString()
            var todayIsoNoTime = todayIso.split('T')[0]

            var fullUrl = baseUrl + todayIsoNoTime

            axios.get(fullUrl)
                .then(function (res) {
                    this.NasaData = res.data
                }.bind(this))
                .catch(function(err){
                    console.log(err)
                })

            this.tempDate = todayIsoNoTime
            this.checkNextBtn()            
        },
        nextNasa: function () {
            var baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=nAWtjI3JNh998ZEzaXj1jLJbeO8AGxBOSoXGlNYx&date='

            var addDay = addDays(this.tempDate, 1)
            var outTime = dateWithoutTime(addDay)

            var fullUrl = baseUrl + outTime
            console.log(fullUrl)

            axios.get(fullUrl)
                .then(function (res) {
                    this.NasaData = res.data
                }.bind(this))
                .catch(function(err){
                    console.log(err)
                })

            this.tempDate = outTime
            this.checkNextBtn()
        },
        preNasa: function () {
            var baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=nAWtjI3JNh998ZEzaXj1jLJbeO8AGxBOSoXGlNYx&date='

            var minusDay = addDays(this.tempDate, -1)
            var outTime = dateWithoutTime(minusDay)

            var fullUrl = baseUrl + outTime
            console.log(fullUrl)

            axios.get(fullUrl)
                .then(function (res) {
                    this.NasaData = res.data
                }.bind(this))
                .catch(function(err){
                    console.log(err)
                })
            
            this.tempDate= outTime
            this.checkNextBtn()
        },
        checkNextBtn: function () {
            var dateObj = new Date (this.tempDate)

            var toDay = new Date()
            toDay.setHours(0,0,0,0)//set toDay ve 0h,0m,0s,0ms

            if(dateObj<toDay){
                this.disableNextBtn = false
            } else {
                this.disableNextBtn = true
            }
        }
    },
    created()//noi goi function luc no moi load
     {
        this.load()
    }
})














// var dateStr = '2013-03-16' // Tao ra object date
// var dateObj = addDays(dateStr, -1)
// var dayStr = dateWithoutTime(dateObj)
// console.log(dayStr)
// var chuoiMoi = 'https://api.nasa.gov/planetary/apod?api_key=nAWtjI3JNh998ZEzaXj1jLJbeO8AGxBOSoXGlNYx&date=' + dayStr
// console.log(chuoiMoi)

// var newDay = dateWithoutTime(now) // Cat thoi gian ra roi hien thi duoi dang YYYY-MM-DD
// console.log(newDay)

// var app_nasa = new Vue({
//     el: '#container-nasa',
//     data: {
//         message: '', 
//         NasaData: []
//     },
//     created(){
//         axios.get('https://api.nasa.gov/planetary/apod?api_key=nAWtjI3JNh998ZEzaXj1jLJbeO8AGxBOSoXGlNYx')
//         .then(function(response){
//             //lay gia tri api cua nasa gan vao 1 bien bat ky
//             var arrayData = response.data;

//             var datetime = new Date();

//             var dateNext = datetime++;
//             var datePreverious = datetime--;
//             var datetoday = datetime;

//             for(i=0;i<arrayData.length;i++){

//             }
//         })
//     }
// })

{ /*  */ }