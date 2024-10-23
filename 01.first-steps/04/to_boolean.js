console.table({
    "null": Boolean(null),
    "undefined": Boolean(undefined),
    "NaN": Boolean(NaN),
    "0": Boolean(0),
    "1": Boolean(1),
    "빈 문자열": Boolean(''),
    "문자열": Boolean('0'),
});