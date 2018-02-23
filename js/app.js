$(document).ready(function{
    let streamersArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    for (let i = 0; i < streamersArr.length; i++){
        let streamURL = 'https://wind-bow.gomix.me/twitch-api/streams/' + streamersArr[i] + '?callback=?';
        let channelURL = "https://wind-bow.gomix.me/twitch-api/channels/" + streamersArr[i] + '?callback=?';
        $.getJSON(streamURL, function(streamers){
            if (streamers.stream !== null){
                $('#online').append('<div class="card card-body bg-success text-white my-4">' + 
                    '<div class="row">' + 
                        '<div class="col-md-4">' + 
                            '<img src="' + streamers.stream.channel.logo + '">' + 
                        '</div>' +
                        '<div class="col-md-8 py-3">' + 
                            '<a href="' + streamers.stream.channel.url + '" target="_blank">' + 
                                '<h2 class="display-4">'+ streamers.stream.channel.display_name +'</h2>' + 
                            '</a>' +
                            '<hr>' + 
                            '<p>Followers: ' + streamers.stream.channel.followers + '</p>' +
                            '<p>Streaming: ' + streamers.stream.channel.game + '</p>' + 
                        '</div>' + 
                    '</div>' + 
                '</div>');
            } else {
                $.getJSON(channelURL, function(streamers2){
                    if (streamers2.status === null) {
                        $('#closed').append('<div class="card card-body bg-secondary my-4">' + 
                            '<div class="row">' + 
                                '<div class="col-md-4">' + 
                                    '<img src="img/nolongeractive.png">' + 
                                '</div>' +
                                '<div class="col-md-8 py-3">' + 
                                    '<h2 class="display-4">'+ streamers2.display_name +'</h2>' +
                                    '<hr>' + 
                                        '<p>This account is no longer Active.</p>' +
                                '</div>' + 
                            '</div>' + 
                        '</div>');
                    } else {
                        $('#offline').append('<div class="card card-body bg-danger text-white my-4">' + 
                            '<div class="row">' + 
                                '<div class="col-md-4">' + 
                                    '<img src="' + streamers2.logo + '">' + 
                                '</div>' +
                                '<div class="col-md-8 py-3">' + 
                                    '<a href="' + streamers2.url + '" target="_blank">' + 
                                        '<h2 class="display-4">'+ streamers2.display_name +'</h2>' + 
                                    '</a>' + 
                                    '<hr>' +
                                    '<p>This Streamer is currently offline.</p>' + 
                                    '<p>Followers: ' + streamers2.followers + '</p>' +
                                    '<p>status: ' + streamers2.status + '</p>' + 
                                '</div>' + 
                            '</div>' + 
                        '</div>');
                    }
                });
            }
        });
    }

    $('#allBTN').on('click', function(){
        $('#onlineBTN').removeClass('active');
        $('#offlineBTN').removeClass('active');
        $('#allBTN').addClass('active');
        $('#online').css('display', 'block');
        $('#offline').css('display', 'block');
        $('#closed').css('display', 'block');
    });

    $('#onlineBTN').on('click', function(){
        $('#onlineBTN').addClass('active');
        $('#offlineBTN').removeClass('active');
        $('#allBTN').removeClass('active');
        $('#online').css('display', 'block');
        $('#offline').css('display', 'none');
        $('#closed').css('display', 'none');
    });

    $('#offlineBTN').on('click', function(){
        $('#onlineBTN').removeClass('active');
        $('#offlineBTN').addClass('active');
        $('#allBTN').removeClass('active');
        $('#online').css('display', 'none');
        $('#offline').css('display', 'block');
        $('#closed').css('display', 'none');
    });
});


