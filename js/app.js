let streamersArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

for (let i = 0; i < streamersArr.length; i++){
    let streamURL = 'https://wind-bow.gomix.me/twitch-api/streams/' + streamersArr[i] + '?callback=?';
    let channelURL = "https://wind-bow.gomix.me/twitch-api/channels/" + streamersArr[i] + '?callback=?';
    $.getJSON(streamURL, function(streamers){
        if (streamers.stream !== null){
            $('#online').append('<div class="card card-body my-4">' + 
                '<div class="row">' + 
                    '<div class="col-md-4">' + 
                        '<img src="' + streamers.stream.channel.logo + '">' + 
                    '</div>' +
                    '<div class="col-md-8">' + 
                        '<a href="' + streamers.stream.channel.url + '" target="_blank">' + 
                            '<h2>'+ streamers.stream.channel.display_name +'</h2>' + 
                            '<p>Followers: ' + streamers.stream.channel.followers + '</p>' +
                            '<p>Streaming: ' + streamers.stream.channel.game + '</p>' + 
                        '</a>' +
                    '</div>' + 
                '</div>' + 
            '</div>');
        } else {
            $.getJSON(channelURL, function(streamers2){
                console.log(streamers2);
                if (streamers2.status === null) {
                    $('#closed').append('<div class="card card-body my-4">' + 
                        '<div class="row">' + 
                            '<div class="col-md-4">' + 
                                '<img src="' + streamers.logo + '">' + 
                            '</div>' +
                            '<div class="col-md-8">' + 
                                '<a href="' + streamers.url + '" target="_blank">' + 
                                    '<h2>'+ streamers.display_name +'</h2>' + 
                                '</a>' +
                            '</div>' + 
                        '</div>' + 
                    '</div>');
                } else {
                    $('#online').append('<div class="card card-body my-4">' + 
                        '<div class="row">' + 
                            '<div class="col-md-4">' + 
                                '<img src="' + streamers.logo + '">' + 
                            '</div>' +
                            '<div class="col-md-8">' + 
                                '<a href="' + streamers.url + '" target="_blank">' + 
                                    '<h2>'+ streamers.display_name +'</h2>' + 
                                '</a>' + 
                                '<p>Followers: ' + streamers.followers + '</p>' +
                                    '<p>status: ' + streamers.status + '</p>' + 
                            '</div>' + 
                        '</div>' + 
                    '</div>');
                }
            });
        }
        
    });
}
