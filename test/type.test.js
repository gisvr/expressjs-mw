// 域名白名单
const ALLOW_ORIGIN = [
    '*.233.666.com',
    'hello.world.com',
    /hello..*.com/
];


console.log(ALLOW_ORIGIN instanceof Array)

ALLOW_ORIGIN.map(val => {
    console.log(val)
    console.log(typeof val)

    console.log(val instanceof String)
    console.log(val instanceof RegExp)

})

function isOriginAllowed(origin, allowedOrigin) {
    if (allowedOrigin instanceof Array) {
        for (let i = 0; i < allowedOrigin.length; i++) {
            if (isOriginAllowed(origin, allowedOrigin[i])) {
                return true;
            }
        }
        return false;
    } else if (typeof allowedOrigin == "string") {
        return origin === allowedOrigin;
    } else if (allowedOrigin instanceof RegExp) {
        return allowedOrigin.test(origin);
    } else {
        return !!allowedOrigin;
    }
}

let foo = isOriginAllowed("www", ALLOW_ORIGIN)
console.log(foo)
