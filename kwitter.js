function addUser() { user_name = document.getElementById("user_name").value; localStorage.setItem("user_name", user_name); window.location = "kwitter_room.html"; }
console.log(message_Date);
name - message_Date["name"];
like - message_Date["like"];
name_with_tag - "<h4>" + name + "<img class-'user_tick' scr-'tick.png'></h4>";
message_with_tag - "<h4 class-'message_h4>"+message +"</h4>";
like_button = "<button class='btn.btn-marning' id='"+firebase_message_id+ "'value'"+like+"'onclike(this.id)'>";
span_with_tag = "<spane class='glyphicon-thumbs-up'>like:"+ like + "</span></button><hr>";
row =name_with_tag+ message_with_tag +like_button + span_with_tag 


