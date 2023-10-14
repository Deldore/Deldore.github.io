var tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = "#FFF";
tg.MainButton.show();
tg.MainButton.setText('Добавить отзыв')

let str = "";

let feedbacks = [
    ['Иван Ожиганов', 'Очпочмаки простой кайф, каждый день бы их ел...'],
    ['Эмиль Айдарович', 'Спасибо, тем, кто придумал этого бота, теперь не надо бежать каждую перемену в столовку'],
    ['Амир Бакиров', '10/10. А что еще сказать?'],
]

for(let i = 0; i < feedbacks.length; i++)
{
    str += "<div class=\"item\">\n" +
        "                <span class='name'>"+feedbacks[i][0]+"</span>\n" +
        "                <br />\n" +
        "                <div style=\"\" class=\"value\">"+feedbacks[i][1]+"</div>\n" +
        "            </div>"
}
document.getElementById('inner').innerHTML = str;
console.log(str);

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.MainButton.hide();
    document.getElementById('inner').style.display = 'none';
    document.getElementById('area').style.display = 'none';
    document.getElementById('send').onclick = function () {
        feedbacks[feedbacks.length] = [
            `${tg.initDataUnsafe.user.first_name}`+ " " +`${tg.initDataUnsafe.user.last_name}`,
            document.getElementById('text-area').value,
        ];
        str = "";
        for(let i = 0; i < feedbacks.length; i++)
        {
            str += "<div class=\"item\">\n" +
                "                <span class='name'>"+feedbacks[i][0]+"</span>\n" +
                "                <br />\n" +
                "                <div style=\"\" class=\"value\">"+feedbacks[i][1]+"</div>\n" +
                "            </div>"
        }
        document.getElementById('inner').innerHTML = str;
        document.getElementById('inner').style.display = '';
        document.getElementById('area').style.display = 'none';
    }
});