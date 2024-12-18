<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Introducción la electrotecnia
    
    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
        p.mb-0 En este capítulo inicial, se introduce el concepto fundamental de electrotecnia, el cual estudia los fundamentos teóricos de los tipos de corriente y sus aplicaciones prácticas (la transmisión de energía, la electrónica de potencia, el control de motores y sistemas de automatización). Así mismo, se darán a conocer las propiedades, ventajas y limitaciones de DC y AC, lo que resulta  clave para seleccionar y diseñar soluciones energéticas eficientes, seguras y adecuadas a cada tipo de aplicación. 
      .col-lg-3.d-none.d-lg-block(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema1/1.png")
      .col-lg-4(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#D7E1EB;border-radius:20px;")
          p.mb-0 La electrotecnia es la disciplina que estudia el comportamiento de la electricidad y sus aplicaciones prácticas. La electricidad se presenta principalmente en dos formas: corriente continua (DC) y corriente alterna (AC). En los sistemas DC, la corriente fluye en una sola dirección, mientras que en los sistemas AC, la corriente cambia de dirección en ciclos regulares.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1	Electrotecnia DC
    
    p(data-aos="fade-right") La electrotecnia es la rama de la ingeniería que se ocupa del estudio de los principios de la electricidad, su generación, transmisión y distribución, y sus aplicaciones en dispositivos y sistemas. Dentro de la electrotecnia, encontramos la corriente continua (DC) y la corriente alterna (AC) como los dos tipos principales de corriente eléctrica utilizados en distintos contextos.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Corriente continua (DC)")
            p Flujo de electrones que se desplaza en una sola dirección a través de un circuito. En la corriente continua el flujo es constante y unidireccional, por tanto, el voltaje (potencial eléctrico) también es constante y no cambia de polaridad.
          .row.col-xl-11.m-auto(titulo="Voltaje (V)")
            p Diferencia de potencial, es la fuerza que impulsa el flujo de electrones en un circuito. En un sistema de corriente continua, el voltaje es constante. El voltaje se mide en voltios (V) y puede entenderse como la “presión” que empuja a los electrones a través de un conductor.
          .row.col-xl-11.m-auto(titulo="Corriente (I)")
            p Flujo de electrones que circula por un circuito. En sistemas de corriente continua, esta corriente se mantiene en una sola dirección, y su magnitud depende del voltaje aplicado y la resistencia del circuito. La corriente se mide en amperios (A).
          .row.col-xl-11.m-auto(titulo="Resistencia (R)")
            p Es la oposición al flujo de corriente dentro de un conductor y se mide en ohmios (Ω). En electrotecnia DC, la Ley de Ohm (V = I × R) es fundamental para calcular la relación entre voltaje, corriente y resistencia en un circuito.
          .row.col-xl-11.m-auto(titulo="Potencia Eléctrica (P)")
            p Cantidad de energía consumida o generada en un sistema por unidad de tiempo. En sistemas DC, la potencia se calcula como P = V × I y se mide en vatios (W). La potencia en corriente continua es constante, ya que tanto el voltaje como la corriente son constantes.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/2.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Leyes fundamentales en electrotecnia DC 
    
    p(data-aos="fade-right") Se consideran así porque describen los principios básicos y las relaciones matemáticas necesarias para comprender y analizar cualquier circuito eléctrico que funcione con corriente continua. Estas leyes establecen las bases para el estudio de los circuitos y permiten predecir el comportamiento de la corriente y el voltaje en sistemas eléctricos simples y complejos. Estas leyes permiten analizar circuitos complejos, facilitando el cálculo de voltajes y corrientes en distintos puntos de un circuito.

    .cont_1_1.mt-5.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        CarouselRED(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p.fw-bold Ley de Ohm
              p La Ley de Ohm describe la relación entre el voltaje (V), la corriente (I) y la resistencia (R) en un circuito:
              p.mt-4.fw-bold #[em V=I×R]
              p Esta ley es esencial para el análisis de circuitos DC, ya que permite calcular cualquiera de estas tres variables cuando se conocen las otras dos.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/5.svg')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p.fw-bold Leyes de Kirchhoff 
              p Las Leyes de Kirchhoff son dos principios fundamentales para el análisis de circuitos eléctricos:
              ul.lista-ul.ps-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#78B62E;")
                  span #[strong Ley de Kirchhoff de Corrientes (LKC):] La suma de las corrientes que entran en un nodo es igual a la suma de las corrientes que salen de él.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#78B62E;")
                  span #[strong Ley de Kirchhoff de Voltajes (LKV):] La suma de las diferencias de potencial alrededor de un lazo cerrado es igual a cero.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/6.png')

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Aportes de la electrotecnia DC
    
    p(data-aos="fade-right") La electrotecnia DC ha sido esencial para el desarrollo de la electrónica y la ingeniería eléctrica. A continuación, algunos de sus principales aportes:

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/7.png")
      .col-lg(data-aos="fade-left")
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Desarrollo de sistemas de alimentación de bajo voltaje")
            p La corriente continua es esencial para dispositivos electrónicos como computadoras, teléfonos móviles y sistemas de comunicación, que operan a bajo voltaje.
          .row.col-xl-11.m-auto(titulo="Avances en almacenamiento de energía")
            p Las baterías, bancos de capacitores y otros dispositivos de almacenamiento de energía funcionan con corriente continua, lo que permite la portabilidad y autonomía de muchos dispositivos.
          .row.col-xl-11.m-auto(titulo="Creación de fuentes de energía sostenibles")
            p Paneles solares y otros dispositivos de generación de energía sostenible producen corriente continua, contribuyendo a la transición hacia fuentes de energía limpias.
          .row.col-xl-11.m-auto(titulo="Fundamentos para el diseño de circuitos electrónicos")
            p La teoría de la electrotecnia DC es la base para el diseño de circuitos digitales y de sistemas electrónicos complejos.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Aplicaciones de la electrotecnia DC
    
    p(data-aos="fade-right") La corriente continua tiene múltiples aplicaciones en distintos sectores debido a su estabilidad y facilidad de control. Algunas de las aplicaciones más comunes son:

    .row.mt-4
      .col-lg(data-aos="fade-right")
        .h-100.p-3.p-lg-4(style="background-color:#B0C4D7;border-radius:10px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Dispositivos electrónicos:] casi todos los dispositivos electrónicos de consumo, como teléfonos, laptops, cámaras, y relojes, funcionan con DC debido a la estabilidad y eficiencia de este tipo de corriente en sistemas de bajo voltaje.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Vehículos eléctricos:] los vehículos eléctricos (EVs) utilizan corriente continua para alimentar sus motores y otros sistemas electrónicos. Las baterías de estos vehículos almacenan y suministran energía en forma de DC, lo cual es esencial para su funcionamiento.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Energía solar fotovoltaica:] los paneles solares generan energía en forma de corriente continua, que luego puede convertirse en AC mediante un inversor para su uso en sistemas domésticos o industriales.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/8.png")
    
    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/9.png")
      .col-lg(data-aos="fade-left")
        .h-100.p-3.p-lg-4(style="background-color:#98E2EC;border-radius:10px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Almacenamiento de energía:] las baterías recargables y otros dispositivos de almacenamiento de energía, como bancos de energía (power banks), usan corriente continua tanto para su carga como para suministrar energía a dispositivos portátiles.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Sistemas de alimentación ininterrumpida (UPS):] los UPS almacenan energía en baterías (DC) para suministrar energía a equipos críticos, como servidores y sistemas médicos, en caso de un corte de electricidad.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Electrónica automotriz:] los automóviles utilizan baterías de 12V DC para alimentar sistemas de iluminación, arranque, entretenimiento y otros componentes electrónicos en el vehículo.
    
    .row.mt-5
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span  Ejemplos de circuitos electrotecnia DC
        .p-3(style="background-color:#78B62E;")
          p.mb-0.fw-bold Ejemplos de circuitos básicos en electrotecnia DC
          p.mb-0 Se recomienda a los estudiantes trabajar con circuitos básicos en simuladores como #[em Tinkercad Circuits] o #[em Falstad Circuit Simulator], donde podrán explorar los siguientes ejemplos:
        .tabla-a.color-acento-botones
          table
            caption.fw-normal Fuente: OIT, 2024.
            tbody
              tr(style="background-color:#F6F6F6;")
                td.text-center.fw-bold(style="width:30%;border-right:1px #AFAFAF solid;") Circuito serie
                td(style="border:0;") Conecta varios resistores en serie y observa cómo la corriente es la misma en cada punto del circuito, mientras que el voltaje se reparte entre los resistores
              tr(style="background-color:#fff;")
                td.text-center.fw-bold(style="border-right:1px #AFAFAF solid;") Circuito paralelo
                td(style="border:0;") Conecta varios resistores en paralelo para observar cómo el voltaje es el mismo en cada rama, pero la corriente se distribuye en función de la resistencia de cada rama.
              tr(style="background-color:#F6F6F6;")
                td.text-center.fw-bold(style="border-right:1px #AFAFAF solid;") Circuito mixto
                td(style="border:0;") Conecta resistores en una combinación de serie y paralelo para experimentar con circuitos más complejos y aplicar la Ley de #[em Kirchhoff].
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/10.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2	Electrotecnia AC
    
    p(data-aos="fade-right") La corriente alterna, o AC (#[em #[strong Alternating Current]]), es un tipo de corriente en la que el flujo de electrones cambia de dirección de manera periódica. A diferencia de la corriente continua, en la cual los electrones se mueven en una sola dirección, la corriente alterna invierte su dirección varias veces por segundo (frecuencia), creando una forma de onda sinusoidal

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Principales conceptos de electrotecnia AC
    
    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Voltaje Alterno (V)")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.d-none.d-lg-block(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/11.svg')
          .col-md(style="place-self:center;")
            p.fw-bold Voltaje Alterno (V)
            p El voltaje en un sistema AC varía con el tiempo y cambia de polaridad a una frecuencia determinada. Este cambio continuo en la dirección del voltaje permite la transmisión de energía a largas distancias. El voltaje se mide en voltios (V) y, en sistemas AC, suele expresarse en términos de #[strong valor eficaz (RMS)], que equivale al valor de corriente continua que produciría la misma potencia en una resistencia.
      .py-3.py-md-4(titulo="Frecuencia (f)")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.d-none.d-lg-block(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/11.svg')
          .col-md(style="place-self:center;")
            p.fw-bold Frecuencia (f)
            p La frecuencia es el número de ciclos completos que la corriente alterna realiza en un segundo y se mide en #[strong hercios (Hz)]. La frecuencia estándar en la mayoría de los sistemas de distribución eléctrica es de 50 Hz (en Europa) o 60 Hz (en América).
      .py-3.py-md-4(titulo="Corriente Alterna (I)")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.d-none.d-lg-block(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/11.svg')
          .col-md(style="place-self:center;")
            p.fw-bold Corriente Alterna (I)
            p La corriente en sistemas AC varía de acuerdo con el voltaje y sigue la misma forma de onda sinusoidal. La magnitud de la corriente alterna cambia constantemente, por lo que también suele expresarse en su valor eficaz (RMS) al realizar cálculos.
      .py-3.py-md-4(titulo="Impedancia (Z)")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.d-none.d-lg-block(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/11.svg')
          .col-md(style="place-self:center;")
            p.fw-bold Impedancia (Z)
            p La impedancia es la oposición total al flujo de corriente en un circuito AC y depende de la resistencia (R), la inductancia (L) y la capacitancia (C) del circuito. Se mide en #[strong ohmios (Ω)] y afecta la magnitud y la fase de la corriente en relación con el voltaje.
      .py-3.py-md-4(titulo="Potencia en AC")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.d-none.d-lg-block(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/11.svg')
          .col-md(style="place-self:center;")
            p.fw-bold Potencia en AC
            p La potencia en corriente alterna tiene tres componentes:
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span #[strong Potencia Activa (P):] es la energía útil que se convierte en trabajo. Se mide en vatios (W).
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span #[strong Potencia Reactiva (Q):] es la energía que se almacena temporalmente en elementos inductivos o capacitivos y se mide en voltamperios reactivos (VAR).
              li.d-flex
                i.fas.fa-check-circle(style="color:#78B62E;")
                span #[strong Potencia Aparente (S):] es la combinación de la potencia activa y reactiva y se mide en voltamperios (VA).
    
    .cont_1_2
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Leyes fundamentales en electrotecnia AC
      
      .row
        .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
          .bg-white.p-4.h-100(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img(src="@/assets/curso/tema1/12.svg" style="max-width:76px;")
            h5 Ley de Ohm en AC
            p Se aplica en circuitos AC, aunque con algunas diferencias debido a la presencia de reactancia inductiva y capacitiva. En un circuito AC:
            p.fw-bold V = I × Z
            p.mb-0.fw-bold Donde:
            p.mb-0 #[strong V] es el voltaje
            p.mb-0 #[strong I] es la corriente
            p.mb-0 #[strong Z] es la impedancia
        .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
          .bg-white.p-4.h-100(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img(src="@/assets/curso/tema1/13.svg" style="max-width:76px;")
            h5 Leyes de Kirchhoff
            p Para corriente y voltaje se aplican también en circuitos AC, teniendo en cuenta las magnitudes y fases de las ondas sinusoidales. Estas leyes son esenciales para el análisis de circuitos complejos en sistemas de corriente alterna.
    
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Aportes de la electrotecnia AC
      
      p(data-aos="fade-right") La electrotecnia AC ha sido fundamental para el desarrollo y expansión de la infraestructura eléctrica mundial. Algunos de sus principales aportes son:

      .row.mt-4
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/14.png")
        .col-lg(data-aos="fade-left")
          AccordionRED(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="Transmisión de energía a largas distancias")
              p La capacidad de cambiar la magnitud del voltaje mediante transformadores facilita la transmisión eficiente de energía en redes eléctricas de larga distancia.
            .row.col-xl-11.m-auto(titulo="Estandarización de sistemas de energía")
              p La generación y distribución de energía AC permite estandarizar los sistemas eléctricos domésticos e industriales.
            .row.col-xl-11.m-auto(titulo="Eficiencia en grandes sistemas eléctricos")
              p Los sistemas AC son altamente eficientes para suministrar energía a dispositivos de gran potencia en entornos industriales, como motores y sistemas de calefacción.
            .row.col-xl-11.m-auto(titulo="Versatilidad en el uso de transformadores")
              p La corriente alterna permite el uso de transformadores para ajustar los niveles de voltaje según las necesidades específicas, reduciendo pérdidas de energía.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Usos de la electrotcnia AC
    
    p(data-aos="fade-right") La corriente alterna se utiliza en una amplia variedad de aplicaciones gracias a su capacidad de transmisión eficiente y su adaptabilidad. Algunas de las aplicaciones más importantes son:

    .row.mt-4
      .col-lg(data-aos="fade-right")
        .h-100.p-3.p-lg-4(style="background-color:#01B9D1;border-radius:10px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Redes de suministro eléctrico:] la mayoría de los sistemas de generación y distribución de energía en todo el mundo funcionan con corriente alterna, debido a la facilidad para aumentar o disminuir el voltaje con transformadores.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Motores eléctricos de inducción:] los motores de inducción, que son esenciales en la industria, funcionan con corriente alterna y se utilizan en máquinas, herramientas, sistemas de ventilación y refrigeración, y otros equipos industriales.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Electrodomésticos:] la mayoría de los electrodomésticos, como refrigeradores, lavadoras, hornos y aires acondicionados, funcionan con corriente alterna debido a su conexión directa con la red de suministro eléctrico.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Transformadores de potencia:] los transformadores permiten ajustar el voltaje de la corriente alterna para facilitar su transmisión y distribución. Esta tecnología es esencial para minimizar las pérdidas de energía en largas distancias.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/15.png")
    
    .row.mt-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/16.png")
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Ejemplos de circuitos electrotecnia AC.
        .p-3(style="background-color:#78B62E;")
          p.mb-0.fw-bold Ejemplos de Circuitos Básicos en Electrotecnia AC
          p.mb-0 se recomienda utilizar simuladores en línea, como #[em #[strong Tinkercad Circuits]] o #[em #[strong Falstad Circuit Simulator]], y experimentar con los siguientes circuitos:
        .tabla-a.color-acento-botones
          table
            caption.fw-normal Fuente: OIT, 2024.
            tbody
              tr(style="background-color:#F6F6F6;")
                td.text-center.fw-bold(style="width:30%;border-right:1px #AFAFAF solid;") Circuito RC (Resistor-Capacitor)
                td(style="border:0;") Conecta una resistencia y un capacitor en serie en un circuito AC para observar cómo afecta la capacitancia a la fase y magnitud de la corriente.
              tr(style="background-color:#fff;")
                td.text-center.fw-bold(style="border-right:1px #AFAFAF solid;") Circuito RL (Resistor-Inductor)
                td(style="border:0;") Conecta una resistencia y una bobina en serie en un circuito AC para explorar el efecto de la inductancia en el retraso de fase entre voltaje y corriente.
              tr(style="background-color:#F6F6F6;")
                td.text-center.fw-bold(style="border-right:1px #AFAFAF solid;") Circuito RLC (Resistor-Inductor-Capacitor)
                td(style="border:0;") Combina un resistor, un inductor y un capacitor para crear un circuito resonante. Observa la resonancia cuando la frecuencia de la fuente AC coincide con la frecuencia natural del circuito.
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 1.
      span Electrotecnia
    .p-3.p-lg-4(style="background-color:#E8E8E8;")
      figure(data-aos="fade-up")
        img(src="@/assets/curso/tema1/17.svg" alt="La Figura 1. se denomina «Electrotecnia DC». Muestra un mapa conceptual sobre “Electrotecnia DC” que se ramifica en cinco secciones principales: introducción, fundamentos, componentes, aplicaciones, y ventajas y desventajas. Cada rama incluye subtemas específicos relacionados con conceptos y elementos de la corriente continua. Se adjunta link, para su mejor observación: https://www.mindomo.com/mindmap/6a5386c826f24eea8b5e3201b017587f")

                                                                                                                                      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
