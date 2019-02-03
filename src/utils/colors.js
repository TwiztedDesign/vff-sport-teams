export function rgbToHex(str) {
    let rgb = str.split(" ");
    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);

    function componentToHex(c) {
        let hex = c.toString(16).toUpperCase();

        return hex.length == 1 ? "0" + hex : hex;
    }
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // returns space separated RGB values, i.e. "123 40 51"
    return result
        ? parseInt(result[1], 16) +
        " " +
        parseInt(result[2], 16) +
        " " +
        parseInt(result[3], 16)
        : null;
}