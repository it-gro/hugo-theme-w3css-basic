/* -------------------------------------------------- */
/* custom included at to top */
function getCookie (e) {
  var t = "; " + document.cookie,
    i = t.split("; " + e + "=");
  return 2 != i.length ? void 0 : i.pop().split(";").shift();
}
