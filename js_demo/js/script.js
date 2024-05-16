function askQuestion() {
    var q = prompt('How much a wood would a wood chuck chuck if a wood chuck could chuck wood');
if (q != null) {
    document.getElementById
    ('question').innerHTML= 'Yikes! ' + q + ' is a lot of wood!';
    }
}

function showImage(){
    var image=document.getElementById('chicken'); 
    image.src = "images/roblox_nugget_roblox_man_face.gif";
}