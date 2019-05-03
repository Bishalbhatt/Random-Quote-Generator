var obj=[
    "Faith is not belief without proof, but trust without reservation."+'<br>'+"~D. Elton Trueblood",
    "A man can fail many times, but he isn't a failure until he begins to blame somebody else."+'<br>'+"~John Burroughs",   
    "Progress always involves risks. You can't steal second base and keep your foot on first."+'<br>'+"~Frederick B Wilcox ",
    "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world."+'<br>'+"~J.R.R. Tolkien  ",
    "If someone you love hurts you, cry a river, build a bridge, and get over it."+'<br>'+"~Author Unknown",
    "I couldn't wait for success, so I went ahead without it."+'<br>'+"~Jonathan Winters "
]
function cli(){
var random=Math.floor(Math.random()*(obj.length));
document.getElementById("here").innerHTML=(obj[random]);
}