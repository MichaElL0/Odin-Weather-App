const context = require.context("./icons", false, /\.svg$/);

const iconsObject = {};

context.keys().forEach((key) => {
    const name = key.replace("./", "").replace(".svg", "");
    iconsObject[name] = context(key);
});

export function weatherIcon(weatherName) {
    return iconsObject[weatherName] || iconsObject["cloudy"];
}
