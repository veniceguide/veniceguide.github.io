const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');

const replacements = [
    { old: '"image": "assets/gondola_img.jpg"', new: '"image_light": "assets/gondola_img.jpg",\n                "image_dark": "assets/gondola_dark.jpg"' },
    { old: '"image": "assets/palazzo_duc_img.jpg"', new: '"image_light": "assets/palazzo_duc_img.jpg",\n                "image_dark": "assets/ducale_dark.jpg"' },
    { old: '"image": "assets/basilica_img.jpg"', new: '"image_light": "assets/basilica_img.jpg",\n                "image_dark": "assets/basilica_dark.jpg"' },
    { old: '"image": "assets/correr.jpg"', new: '"image_light": "assets/correr_light.jpg",\n                "image_dark": "assets/correr.jpg"' },
    { old: '"image": "assets/campanile.jpg"', new: '"image_light": "assets/campanile.jpg",\n                "image_dark": "assets/campanile_dark.jpeg"' },
    { old: '"image": "assets/murano.jpg"', new: '"image_light": "assets/murano.jpg",\n                "image_dark": "assets/murano_dark.jpeg"' },
    { old: '"image": "assets/burano.jpg"', new: '"image_light": "assets/burano.jpg",\n                "image_dark": "assets/burano_dark.jpg"' }
];

replacements.forEach(r => {
    // Escape string for regex to do global replace
    const regex = new RegExp(r.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    content = content.replace(regex, r.new);
});

fs.writeFileSync('data.js', content, 'utf8');
console.log('Done replacing images in data.js');
