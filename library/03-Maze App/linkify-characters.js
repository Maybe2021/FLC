document.addEventListener('DOMContentLoaded', (event) => {
    const characterLinks = {
           "勒": "02-Maze People/01-勒.md",
           "夏特莉": "02-Maze People/02-夏特莉.md",
           "乙炔": "02-Maze People/03-乙炔.md",
           "SAI": "02-Maze People/04-佐井信.md",
           "十一十": "02-Maze People/05-张开.md",
           "诺特尔": "02-Maze People/06-诺特尔.md",
           "XX二院眼科": "02-Maze People/08-XX二院眼科.md",
           "XX二院精神科": "02-Maze People/07-XX二院精神科.md"，
           "光头强": "02-Maze People/09-光头强.md"
    };

    const bodyText = document.body.innerHTML;

    for (const [character, link] of Object.entries(characterLinks)) {
        const regex = new RegExp(`\\b${character}\\b`, 'g');
        document.body.innerHTML = document.body.innerHTML.replace(regex, `<a href="${link}">${character}</a>`);
    }
});
