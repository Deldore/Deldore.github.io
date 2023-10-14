(async () => {
    var tg = window.Telegram.WebApp;

    tg.expand();
    tg.MainButton.textColor = "#FFF";
    tg.MainButton.show();
    tg.MainButton.setText('Добавить отзыв')

    let str = "";
    let response = await fetch('https://deldore.github.io/feedback.json');

    // let feedbacks = await response.json();
    // feedbacks = JSON.parse(feedbacks);
    let feedbacks = [
        ['Emil', 'text'],
    ];
    response = await fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(feedbacks)
    });

    let result = await response.json(); 
    alert(result.message);
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
    let data = JSON.stringify(feedbacks);
    console.log(data);

    Telegram.WebApp.onEvent('mainButtonClicked', function(){
        tg.MainButton.hide();
        document.getElementById('inner').style.display = 'none';
        document.getElementById('area').style.display = '';
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
            tg.MainButton.show();
            (async () => {
            let response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            });

            let result = await response.json();
            alert(result.message);
            })()
        }
    });
})()