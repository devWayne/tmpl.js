

var Tmpl=function(){

}

var p=Tmpl.prototype;


p.render=function(template, data) {
  return template.replace(/\{([\w\.]*)\}/g,baseReplace);
}

function baseReplace(str,key) {
    var keys = key.split("."), v = data[keys.shift()];
    for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
    return (typeof v !== "undefined" && v !== null) ? v : "";
}
