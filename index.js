exports.spongeBobCase = function(a) {
    let m = ''

    for (let i = 0; i < a.length; i++) m += (i % 2 === 0) ? a[i].toUpperCase() : a[i].toLowerCase()
    
    return m
}