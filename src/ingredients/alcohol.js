const parser = require('./parser');

var unknown = [
  "alcohol",
  "witch",
  "propanol"
];

var bad = [
  "denatured alcohol",
  "sd alcohol 40",
  "witch hazel",
  "isopropanol",
  "ethanol",
  "sd alcohol",
  "propanol",
  "propyl alcohol",
  "isopropyl alcohol",
  "alcohol denat.",
  "sd alcohol 40-b",
  "alcohol denat",
  "sd alcohol 40b",
  "alcohol",
  "hamamellis virginiana (witch hazel) extract",
  "ethyl alcohol",
  "denatured alcohol (sd alcohol 40)",
  "sd alcohol 40-b (alcohol denat)",
  "phenylpropanol"
];

var good = [
  "behenyl alcohol",
  "cetearyl alcohol",
  "ceteryl alcohol",
  "cetyl alcohol",
  "isocetyl alcohol",
  "isostearyl alcohol",
  "lauryl alcohol",
  "myristyl alcohol",
  "stearyl alcohol",
  "c30-50 alcohols",
  "lanolin alcohol",
  "benzyl alcohol",
  "stearyl alcohol",
  "aminomethyl propanol",
  "oleyl alcohol",
  "brassica alcohol",
  "cetyl alcohol2 polysorbate 60",
  "benzyl alcohol",
  "arachidyl alcohol",
  "phenethyl alcohol",
  "undecyl alcohol",
  "amyl cinnamyl alcohol",
  "amylcinnamyl alcohol",
  "amino-2-methyl-1-propanol",
  "aminomethyl propanol"
];

function alcohol(list) {
  return parser(list, unknown, good, bad);
}

module.exports = alcohol;