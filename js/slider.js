$(".slider")
    .slider({
        max: 12,
        range: true,
        values: [5, 15]
    })
    .slider("pips", {
        rest: false
    });