const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');

const imageUpdates = {
    'gondola': { light: 'assets/gondola_img.jpg', dark: 'assets/gondola_dark.jpg' },
    'palazzo_ducale': { light: 'assets/palazzo_duc_img.jpg', dark: 'assets/ducale_dark.jpg' },
    'basilica': { light: 'assets/basilica_img.jpg', dark: 'assets/basilica_dark.jpg' },
    'rialto': { light: 'assets/correr_light.jpg', dark: 'assets/correr.jpg' },
    'campanile': { light: 'assets/campanile.jpg', dark: 'assets/campanile_dark.jpeg' },
    'Murano': { light: 'assets/murano.jpg', dark: 'assets/murano_dark.jpeg' },
    'Burano': { light: 'assets/burano.jpg', dark: 'assets/burano_dark.jpg' }
};

for (const [key, paths] of Object.entries(imageUpdates)) {
    // We want to replace "image": "...", with "image_light": "...", "image_dark": "...",
    // But since "image" might be formatted differently, let's just find the exact block.
    // Actually, looking at the data, the 'image' property is always there.
    // Example: "image": "assets/gondola_img.jpg"
    
    // We can use a regex to replace the image line inside the specific attraction block.
    // However, it's safer to just replace all instances of the old image strings with both new lines, 
    // but wait, some attractions share the same image string? No, they don't.
    
    // Let's parse it as JS.
    let codeToExport = content.replace('const translations =', 'module.exports =');
    fs.writeFileSync('temp_data.js', codeToExport);
}
