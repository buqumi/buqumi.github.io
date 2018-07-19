
// Lam ra 1 array co 8 items, moi item co' cau' truc: {name: '', photo_url: ''}
    var players = [];// Tao 1 mang trong

// Tao 8 objects
    var cauthu1 = {name:'Paul Scholes',photo_url:'src/assets/images/MUPlayer/p18.jpg'}
    var cauthu2 = {name:'Ashley Young',photo_url:'src/assets/images/MUPlayer/Ashley-Young-Wallpaper-2.png'}
    var cauthu3 = {name:'Alex',photo_url:'src/assets/images/MUPlayer/AS7.jpg'}
    var cauthu4 = {name:'Chris',photo_url:'src/assets/images/MUPlayer/Chris.jpeg'}
    var cauthu5 = {name:'De gea',photo_url:'src/assets/images/MUPlayer/degea.jpg'}
    var cauthu6 = {name:'Ibrahimovic',photo_url:'src/assets/images/MUPlayer/ibr10.jpg'}
    var cauthu7 = {name:'Rooney',photo_url:'src/assets/images/MUPlayer/r10.jpg'}
    var cauthu8 = {name:'Mourinho',photo_url:'src/assets/images/MUPlayer/mou.jpg'}

    players.push(cauthu1,cauthu2,cauthu3,cauthu4,cauthu5,cauthu6,cauthu7,cauthu8);
    console.log('Players chua thay doi: ', players);


    // var debugText = document.getElementById('debug'); // Lay div co id = 'debug'

    // for (i = 0; i < players.length; i++){
    //     var elementP = document.createElement('p'); // Tao 1 the <p>
    //     var text = document.createTextNode(players[i].name); // Tao content
    //     elementP.appendChild(text); // Gan' content vao the <p>
    //     debugText.appendChild(elementP); // Gan' the <p> vao div 'debug'
    // }
    function taoTheHtml(divId,tagName,contentString){
        //lay the bang id roi gan vao bien
        var divObject = document.getElementById(divId);
        // tao the html trong
        var tagHtml = document.createElement(tagName);
        //tao noi dung text
        var contentText = document.createTextNode(contentString);
        //gan noi dung text vao the html
        tagHtml.appendChild(contentText);
        //gan the html vao lai div
        divObject.appendChild(tagHtml);
    }

    for(i=0;i<players.length;i++){
        // var tagp = document.createElement('p');
        // var contents = document.createTextNode(players[i].name);
        // tagp.appendChild(contents);
        // lamlaibai.appendChild(tagp);
        taoTheHtml('debug','p',players[i].photo_url);//phan tu thu i cua mang players
    }

    var splicedPlayers = players.splice(3,1); //xoa player t4
    // console.log(playerpop2);
    for(i=0;i<players.length;i++){
        // var playeri = document.createTextNode(players[i]) ;//tao playeri de hien thi ds cau thu trong players
        // var playerspop = playeri.splice(3,1);   //tao playerspop de dung function xoa cau thu cuoi
        // var plp = document.createElement('p');  //tao the p trong
        // var plcontents = document.createTextNode(players[i].name ); // tao content
        // plp.appendChild(plcontents); //gan conten vao the p
        // playerpop.appendChild(plp); //gan the p vao div
        taoTheHtml('player_pop','h1',players[i].name);
    }
    var cauthu9 = {name:'Quang Minh',photo_url:''};
    var cauthu10 = {name:'Than Thang',photo_url:''};
    // var playersLength = players.push(cauthu9,cauthu10);
    
    //muc dich: them cau thu vao mang players SAO CHO  do dai cua mang players khong vuot qua 10.
    //dua vao: 1 player object va 1 mang can them.
    /*xu ly: {
        1: ktra do dai cua mang players.
            1.1 neu do dai <10 thi cho function chay tiep.
            1.2 neu do dai >=10 thi dung function.
        2: neu function chay tiep, push player vao mang players
    }*/
    //dua ra: neu la 1.1 thi tra ve TRUE; neu la 1.2 thi tra ve FALSE;
    // function addPlayer(inputPlayer,inputPlayers){
    //     if(inputPlayers.length < 10){
    //         inputPlayers.push(inputPlayer);
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    function addPlayer(inputPlayer, inputPlayers){
        if (inputPlayers.length >= 10){
            return false
        }

        inputPlayers.push(inputPlayer);
        return true
    }

    /////////////////////////////////////////
    function printPlayerInfo(inputObj){
        console.log('Name: ' + inputObj.name + ' ' + 'Photo: ' + inputObj.photo_url);
    }
    function printPlayerInfo2(inputObj2){
        console.log(inputObj2);
    }
    function printPlayerInfotoChrom(abcd){
        taoTheHtml('debug','h4',abcd.photo_url + abcd.name);
    }

    function addPlayer2(inputPlayer, inputPlayers, functionKhiThanhCong){
        if (inputPlayers.length >= 10){
            return false
        }

        inputPlayers.push(inputPlayer);
        functionKhiThanhCong({name:'abcdef',photo_url:'eyjghjhg', age: 26, height: 67.6});
        return true;
    }

    addPlayer2(cauthu10, players, printPlayerInfo2)
    addPlayer2(cauthu10,players,printPlayerInfotoChrom)

    var isAdded = addPlayer(cauthu9,players);
    console.log(isAdded);

    players.push(cauthu10,cauthu10);

    var isAdded = addPlayer(cauthu10,players);
    console.log(isAdded);

// Them tung objec vao mang trong players
    function themobject()
    {
        players.push(cauthu1,cauthu2,cauthu3,cauthu4,cauthu5,cauthu6,cauthu7,cauthu8);
        console.log('players moi duoc push het la:',players);
    }
    // themobject();

    // Bot' ra 1 item o cuoi'
    function botitem(){
        players.pop();
        document.write('player2 la:', players);
    }
    // botitem();

    // Bot' ra 1 item o vi tri thu 4
    function botitem4(){
        players.splice(3,1)
        console.log('player3 la:',players);
    }
    // botitem4();


// // Them vo 2 item o vi tri cuoi
//     players.push({name:'quang minh',photo_url:''});
//     players.push({name:'thanthang',photo_url:''});
//     console.log('player 5 :',players);

//     var cauthu11 = {name:'thaouyen',photo_url:''};
//     var cauthu12 = {name:'thuydung',photo_url:''};
//     players=$.extend({cauthu11,cauthu12});
//     console.log(players);


setInterval(function(){
    console.log('Minh minh minh')
}, 2000)
