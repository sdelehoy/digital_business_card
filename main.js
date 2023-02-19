let m=document.getElementById("modal"),c=document.getElementById("close"),ki=document.getElementById("keyView"),cv=document.getElementById("copyView"),curl=document.getElementById("copyURL"),qrv=document.getElementById("qrView"),qr=document.getElementById("qr"),s=document.getElementById("share"),sqr=document.getElementById("showQR"),sk=document.getElementById("showKey");function tC(e){"2rem"==e.style.top?(e.style.visibility="visible",e.style.top="0px",e.style.opacity=1):(e.style.top="2rem",e.style.opacity=0,setTimeout(()=>{e.style.visibility="hidden"},200))}function dN(e){e.style.display="none"}window.addEventListener("load",()=>{document.querySelector("#topActions").style.display="flex",qr.innerHTML=new QRCode({content:window.location.href,container:"svg-viewbox",join:!0,ecl:"L",padding:0}).svg()}),navigator.canShare?s.addEventListener("click",()=>{navigator.share({title:document.title,text:"You can view my Digital Business Card here:",url:window.location.href})}):s.addEventListener("click",()=>{tC(m),cv.style.display="flex",dN(qrv),ki&&dN(ki)}),sqr.addEventListener("click",()=>{tC(m),qrv.style.display="block",dN(cv),ki&&dN(ki)}),sk&&sk.addEventListener("click",()=>{tC(m),ki&&(ki.style.display="flex"),dN(cv),dN(qrv)}),c.addEventListener("click",()=>tC(m)),curl.addEventListener("click",async()=>{let e=curl.querySelectorAll(".iconColor")[1];await navigator.clipboard.writeText(window.location.href).then(t=>{e.innerText="Copied",setTimeout(()=>{e.innerText="Copy URL"},1e3)})});

// (C) 2010 Andreas  Spindler. Permission to use, copy,  modify, and distribute
// this software and  its documentation for any purpose with  or without fee is
// hereby  granted.   Redistributions of  source  code  must  retain the  above
// copyright notice and the following disclaimer.
//
// THE SOFTWARE  IS PROVIDED  "AS IS" AND  THE AUTHOR DISCLAIMS  ALL WARRANTIES
// WITH  REGARD   TO  THIS  SOFTWARE   INCLUDING  ALL  IMPLIED   WARRANTIES  OF
// MERCHANTABILITY AND FITNESS.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
// SPECIAL,  DIRECT,   INDIRECT,  OR  CONSEQUENTIAL  DAMAGES   OR  ANY  DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
// OF  CONTRACT, NEGLIGENCE  OR OTHER  TORTIOUS ACTION,  ARISING OUT  OF  OR IN
// CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
// 
// $Writestamp: 2010-06-09 13:07:07$
// $Maintained at: www.visualco.de$

function ROTn(text, map) {
  // Generic ROT-n algorithm for keycodes in MAP.
  var R = new String()
  var i, j, c, len = map.length
  for(i = 0; i < text.length; i++) {
    c = text.charAt(i)
    j = map.indexOf(c)
    if (j >= 0) {
      c = map.charAt((j + len / 2) % len)
    }
    R = R + c
  }
  return R;
}

function ROT47(text) {
  // Hides all ASCII-characters from 33 ("!") to 126 ("~").  Hence can be used
  // to obfuscate virtually any text, including URLs and emails.
  var R = new String()
  R = ROTn(text,
  "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~")
  return R;
}

function change(id, href) {
  let a = document.getElementById(id);
  let link = ROT47(href);
  a.setAttribute("href", link);
}

// End (C) 2010 Andreas Spindler
