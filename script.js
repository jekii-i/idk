const message = `Happy Birthday Cantikkuu! 

Ga kerasa yaa udah ganti chapter lagi hari ini.
Di momen spesial ini, aku cuma mau bilang kalau I'm genuinely wishing you all the best. Semoga di umur yang baru ini, kamu dapet lebih banyak momen yang bikin kamu ketawa lepas, ndaa banyak bikin kamu overthinking, ndaa banyak bikin kamu sedih, dan dideketin sama hal-hal baik yang emang pantes kamu dapetin!

Aku harap kita selalu punya cara buat ketawa bareng, happy bareng, sedih bareng juga, dan aku harap kamu bisa lebih terbuka ke aku, lebih bisa mengekspresikan diri kamu di depan aku. Jangan malu buat jadi diri sendiri di depan aku yaa sayanggg! aku senang saat kamu bisa clingy ke aku. Terakhir, semoga sparks di hubungan kita ndaa bakal pernah pudar.

Hari ini harinya kamu. Jadi, treat yourself! Makan makanan favorit kamu, dan nikmatin hari ini seharian penuh, nikmati momen bareng temen temen, nikmati juga momen bareng keluarga kamuuu. Enjoy your day!!

I Love Youuu Moreee Sayanggg!!`;

const closingMessage = "Best wishes.";
const signatureMessage = "Your biggest fans, D.";

let i = 0;
let j = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("text").textContent += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    } else {
        setTimeout(typeClosing, 400);
    }
}

function typeClosing() {
    if (j < closingMessage.length) {
        document.getElementById("closingText").innerHTML += closingMessage.charAt(j);
        j++;
        setTimeout(typeClosing, 70);
    } else {
        setTimeout(showSignature, 500);
    }
}

function showSignature() {
    const sig = document.getElementById("signatureText");
    sig.innerHTML = signatureMessage;
    sig.classList.add("show");
    document.querySelector(".signature-line").classList.add("show");
}

function openLetter() {
    const envelope = document.getElementById("envelope");
    envelope.classList.add("open");
    setTimeout(() => {
        envelope.classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("wrapper").style.display = "none";
            document.getElementById("letter").style.display = "flex";
            const music = document.getElementById("music");
            music.play().catch(() => {});
            typeWriter();
        }, 800);
    }, 1000);
}