const message1 = `\nWhere Your Eyes Never Landed

I don't know how to say this right,
but I notice you more than you know,
the way you carry yourself through life,
quietly stealing every show.

I see you when you think no one does,
the tired eyes you try to hide,
and something in me just wants to say,
I'm here, I'm steady, let me inside.`;

const message2 = `\nI'm not the one you always notice,
I'm just the face within the crowd,
but God, I've wanted to reach for you,
to say the things I'm saying now.

I would show up on your hardest days,
not with words but with my presence,
just to remind you that you matter,
and that you are someone's reason.`;

const message3 = `\nSo here it is, honest and bare,
I like you more than I have said,
from the distance I have watched you bloom,
and it's you who lives inside my head.

-Izu`;

function typeEffect(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; 
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function showLetter() {
    document.getElementById("introText").style.opacity = 0;
    document.getElementById("startBtn").style.display = "none";
    setTimeout(() => {
        document.getElementById("letterBox").style.display = "block";
        typeEffect("typedText", message1, 35, () => {
            document.getElementById("nextBtn").style.display = "block";
        });
    }, 600);
}

function showSecondPage() {
    document.getElementById("letterBox").style.display = "none";
    document.getElementById("secondLetterBox").style.display = "block";
    typeEffect("typedText2", message2, 35, () => {
        document.getElementById("nextBtn2").style.display = "block";
    });
}

function showThirdPage() {
    document.getElementById("secondLetterBox").style.display = "none";
    document.getElementById("thirdLetterBox").style.display = "block";
    typeEffect("typedText3", message3, 35, () => {
        document.getElementById("finalSignature").style.opacity = "0.9";
    });
}