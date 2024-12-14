<template lang="pug">
.curso-main-container.complementario
  BannerInterno(icono="far fa-folder-open" titulo="Material complementario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .table-responsive
      table
        thead
          tr
            th(colspan='3' scope="col") Tema
            th(colspan='5' scope="col") Referencia APA del material
            th(colspan='2' scope="col") Tipo 
            th(colspan='2' scope="col") Enlace
        tbody
          tr(v-for="(item, index) in computedData" :key="'complementario-'+index")
            td.text-start(colspan='3' scope="row" v-html="item.tema")
            td.text-start(colspan='5' scope="row" v-html="item.referencia")
            td(colspan='2' v-html="item.tipo")
            td(colspan='2')
              .complementario__enlaces
                a.complementario__btn(v-for="link of item.link" :href="link" target="_blank")
                  i.fas.fa-external-link-alt

</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Arduino',
          referencia:
            'Maristas Huelva. (n.d.). <em>Arduino: Libro kit básico</em>. [Documento PDF].',
          tipo: 'Documento',
          link:
            'https://www.maristashuelva.es/webinfo/tecnologia/arduino/Libro_kit_Basico.pdf',
        },
        {
          tema: 'Circuitos DC y AC',
          referencia:
            'Tinkercad. (n.d.). <em>Circuitos DC y AC: Simulador en línea</em>. [Simulador en línea].',
          tipo: 'Simulador en línea',
          link: 'https://www.tinkercad.com/embed/g1Pvn5fI1mE',
        },
        {
          tema: '“Máquinas Agrícolas: diseño industria',
          referencia:
            'YouTube. (n.d.). <em>Máquinas Agrícolas: diseño industrial</em>. [Video]. YouTube. ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=mxsKI3NCQlY',
        },
        {
          tema: 'Electrónica digital',
          referencia:
            'YouTube. (n.d.). <em>Electrónica digital</em>. [Video]. YouTube',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=MPEHYhKQztQ',
        },
        {
          tema: 'TRANSISTORIZED! La historia de: El Transistor',
          referencia:
            'YouTube. (n.d.). TRANSISTORIZED! <em>La historia de: El Transistor</em>. [Video]. YouTube',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=f3IUVvJ2XgI&t=1899s',
        },
        {
          tema: 'Diferencias entre corriente alterna y corriente directa',
          referencia:
            'YouTube. (n.d.). <em>Diferencias entre corriente alterna y corriente directa</em>. [Video]. YouTube',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=BPaIiaoYkNY',
        },
        {
          tema: '¿Cómo funciona el transistor?',
          referencia:
            'YouTube. (n.d.). <em>¿Cómo funciona el transistor?</em> [Video]. YouTube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=ljSdrYmdF44',
        },
        {
          tema: 'Qué es un semiconductor',
          referencia:
            'YouTube. (n.d.). <em>¿Qué es un semiconductor</em>. [Video]. YouTube',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=fFVU7-kfPe8',
        },
        {
          tema: 'Electrotecnia (AC, DC)',
          referencia: 'Nunez, F. (2022). "Fundamentos de Electrotecnia".',
          tipo: 'Video',
          link: 'https://www.youtube.com/fundamentos_electrotecnia',
        },
        {
          tema: 'Electrónica Digital',
          referencia:
            'Jiménez, M. (2023). Introducción a la Electrónica Digital. Biblioteca SENA',
          tipo: 'Capítulo de libro',
          link: 'https://biblioteca.sena.edu.co/',
        },
        {
          tema: 'Sistemas de Control',
          referencia: 'OpenAI. (2024). "Simulador de Circuitos". OpenAI.',
          tipo: 'Simulador',
          link: 'https://www.circuitlab.com/',
        },
        {
          tema: 'Dibujo Técnico',
          referencia:
            'Rodríguez, A. (2022). "Introducción al Dibujo Técnico". Universidad Abierta.',
          tipo: 'Artículo',
          link: 'Universidad Abierta',
        },
        {
          tema: 'Procesos Industriales',
          referencia:
            'García, R. (2023). "Mecanizado CNC y su Aplicación en la Industria". Biblioteca SENA.',
          tipo: 'Capítulo de libro',
          link: 'https://biblioteca.sena.edu.co/',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
