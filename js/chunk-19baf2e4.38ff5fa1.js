(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19baf2e4"],{"13d5":function(e,i,t){"use strict";var a=t("23e7"),r=t("d58f").left,n=t("a640"),o=t("1212"),s=t("9adc"),c=!s&&o>79&&o<83,d=c||!n("reduce");a({target:"Array",proto:!0,forced:d},{reduce:function(e){var i=arguments.length;return r(this,e,i,i>1?arguments[1]:void 0)}})},"4a6f":function(e,i,t){"use strict";t("692b")},"4e3e":function(e,i,t){"use strict";t("7d54")},"692b":function(e,i,t){},"7d54":function(e,i,t){"use strict";var a=t("23e7"),r=t("2266"),n=t("59ed"),o=t("825a"),s=t("46c4");a({target:"Iterator",proto:!0,real:!0},{forEach:function(e){o(this),n(e);var i=s(this),t=0;r(i,(function(i){e(i,t++)}),{IS_RECORD:!0})}})},8558:function(e,i,t){"use strict";var a=t("cfe9"),r=t("b5db"),n=t("c6b6"),o=function(e){return r.slice(0,e.length)===e};e.exports=function(){return o("Bun/")?"BUN":o("Cloudflare-Workers")?"CLOUDFLARE":o("Deno/")?"DENO":o("Node.js/")?"NODE":a.Bun&&"string"==typeof Bun.version?"BUN":a.Deno&&"object"==typeof Deno.version?"DENO":"process"===n(a.process)?"NODE":a.window&&a.document?"BROWSER":"REST"}()},9485:function(e,i,t){"use strict";var a=t("23e7"),r=t("2266"),n=t("59ed"),o=t("825a"),s=t("46c4"),c=TypeError;a({target:"Iterator",proto:!0,real:!0},{reduce:function(e){o(this),n(e);var i=s(this),t=arguments.length<2,a=t?void 0:arguments[1],d=0;if(r(i,(function(i){t?(t=!1,a=i):a=e(a,i,d),d++}),{IS_RECORD:!0}),t)throw new c("Reduce of empty iterator with no initial value");return a}})},"9adc":function(e,i,t){"use strict";var a=t("8558");e.exports="NODE"===a},"9d4a":function(e,i,t){"use strict";t("9485")},a640:function(e,i,t){"use strict";var a=t("d039");e.exports=function(e,i){var t=[][e];return!!t&&a((function(){t.call(null,i||function(){return 1},1)}))}},c92c:function(e,i,t){"use strict";t.r(i);var a=function(){var e=this,i=e._self._c;return i("div",{staticClass:"curso-main-container glosario"},[i("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),i("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},e._l(e.orderedData,(function(t){return i("div",{key:"letra-"+t.letra,staticClass:"glosario__letra-item mb-2"},[i("div",{staticClass:"glosario__letra-item__letra me-4"},[i("div",{staticClass:"glosario__letra-item__letra__icono"},[i("span",[e._v(e._s(t.letra))])])]),i("div",{staticClass:"glosario__letra-item__texto"},e._l(t.terminos,(function(t){return i("p",{staticClass:"mb-3"},[e._m(0,!0),i("strong",{domProps:{innerHTML:e._s(t.terminoHtml||t.termino)}}),i("strong",[e._v(": ")]),i("span",{domProps:{innerHTML:e._s(t.significado)}})])})),0)])})),0)],1)},r=[function(){var e=this,i=e._self._c;return i("strong",[i("i",{staticClass:"lista-ul__vineta"})])}],n=(t("14d9"),t("13d5"),t("0643"),t("fffc"),t("4e3e"),t("a573"),t("9d4a"),{computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const e=this.menuData.find(e=>"introduccion"===e.nombreRuta),i=this.menuData.find(e=>"tema1"===e.nombreRuta);return e||i}},methods:{quitarAcentos(e){const i=e.replace(/<\/?[^>]+(>|$)/g,""),t={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return i.split("").map(e=>t[e]||e).join("").toString()}}}),o={name:"Glosario",mixins:[n],data(){return{glosarioData:[{termino:"Arduino",significado:"Plataforma de hardware libre que facilita el desarrollo de proyectos de electrónica mediante el uso de microcontroladores y un entorno de programación accesible."},{termino:"Arranque de viruta",significado:"Proceso de fabricación en el que se elimina material de una pieza en bruto mediante corte para obtener la forma y dimensiones deseadas."},{termino:"Circuito digital",significado:"Sistema electrónico donde las señales representan datos en forma de 0 y 1 (binario), utilizado en computadoras y dispositivos digitales."},{termino:"Corriente alterna (AC)",significado:"Tipo de corriente eléctrica que cambia de dirección de forma periódica, comúnmente usada en sistemas de distribución de electricidad doméstica e industrial."},{termino:"Corriente directa (DC)",significado:"Corriente eléctrica que fluye en una sola dirección, generalmente utilizada en dispositivos electrónicos y sistemas de baterías."},{termino:"Dibujo técnico",significado:"Representación gráfica de objetos y estructuras utilizando normas específicas para transmitir información clara y precisa en ingeniería y arquitectura."},{termino:"Electrotecnia",significado:"Rama de la ingeniería que estudia la producción, distribución y uso de la electricidad y los dispositivos eléctricos."},{termino:"Mecánica y ajuste",significado:"Conjunto de operaciones y procedimientos para ensamblar, reparar y calibrar piezas mecánicas en sistemas industriales o automotrices."},{termino:"Procesos industriales",significado:"Métodos y técnicas empleados en la transformación de materias primas en productos finales mediante el uso de maquinaria y tecnología."},{termino:"Semiconductor",significado:"Material que tiene propiedades de conductividad intermedia entre conductores y aislantes, fundamental en la fabricación de dispositivos electrónicos como transistores y diodos."},{termino:"Simulación de circuitos",significado:"Herramienta que permite crear y probar circuitos electrónicos virtualmente para analizar su comportamiento antes de construirlos físicamente."},{termino:"Tolerancia",significado:"Rango permisible de variación en las dimensiones de una pieza para asegurar el funcionamiento adecuado en el ensamblaje de componentes mecánicos."},{termino:"Transistor",significado:"Componente electrónico que amplifica o conmutan señales electrónicas, siendo clave en circuitos digitales y analógicos."}]}},computed:{orderedData(){const e=[...this.glosarioData];e.forEach(e=>{e.significado=e.significado.charAt(0).toLowerCase()+e.significado.slice(1)});const i=[...e].reduce((e,i)=>{const t=this.quitarAcentos(i.termino.toLowerCase())[0];return e[t]?e[t].terminos.push(i):e[t]={letra:t,terminos:[i]},e},{}),t=Object.keys(i).sort(),a=[];return t.forEach(e=>{const t=i[e];let r=t.terminos;if(r.length>1){const e=[],i=t.terminos.map(e=>e.termino).sort((e,i)=>{const t=this.quitarAcentos(e).toLowerCase(),a=this.quitarAcentos(i).toLowerCase();return t<a?-1:a<t?1:0});i.forEach(i=>{e.push(r.find(e=>e.termino===i))}),r=e}a.push({letra:t.letra.toUpperCase(),terminos:r})}),a}}},s=o,c=(t("4a6f"),t("2877")),d=Object(c["a"])(s,a,r,!1,null,null,null);i["default"]=d.exports},d58f:function(e,i,t){"use strict";var a=t("59ed"),r=t("7b0b"),n=t("44ad"),o=t("07fa"),s=TypeError,c="Reduce of empty array with no initial value",d=function(e){return function(i,t,d,u){var l=r(i),m=n(l),f=o(l);if(a(t),0===f&&d<2)throw new s(c);var p=e?f-1:0,g=e?-1:1;if(d<2)while(1){if(p in m){u=m[p],p+=g;break}if(p+=g,e?p<0:f<=p)throw new s(c)}for(;e?p>=0:f>p;p+=g)p in m&&(u=t(u,m[p],p,l));return u}};e.exports={left:d(!1),right:d(!0)}}}]);
//# sourceMappingURL=chunk-19baf2e4.38ff5fa1.js.map