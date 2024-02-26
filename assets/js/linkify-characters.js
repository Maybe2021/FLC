document.addEventListener('DOMContentLoaded', (event) => {
    const characterLinks = {
           "勒": "?file=02-Maze People/01-勒",
           "夏特莉": "?file=02-Maze People/02-夏特莉",
           "乙炔": "?file=02-Maze People/03-乙炔",
           "SAI": "?file=02-Maze People/04-佐井信",
           "十一十": "?file=02-Maze People/05-张开",
           "诺特尔": "?file=02-Maze People/06-诺特尔",
           "XX二院眼科": "?file=02-Maze People/08-XX二院眼科",
           "XX二院精神科": "?file=02-Maze People/07-XX二院精神科"，
           "光头强": "?file=02-Maze People/09-光头强"
    };

    const bodyText = document.body.innerHTML;

    for (const [character, link] of Object.entries(characterLinks)) {
        const regex = new RegExp(`\\b${character}\\b`, 'g');
        document.body.innerHTML = document.body.innerHTML.replace(regex, `<a href="${link}">${character}</a>`);
    }
});
