<template lang="pug">
.curso-main-container.referencias
  BannerInterno(icono="fas fa-book" titulo="Referencias bibliográficas")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .referencias__item(v-for="ref in orderedData" :key="ref.link")
      span(v-html="ref.referencia")
      a.ms-1(v-if="ref.link" :href="ref.link" target="_blank")
        span(v-html="ref.link")
        i.ms-1.fas.fa-external-link-alt
      hr.my-3
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Fernández, R., & García, M. (2021). Mecánica y mantenimiento en maquinaria agrícola: Guía práctica para técnicos y agricultores. Editorial Agrícola.',
        link: '',
      },
      {
        referencia:
          'García, R. (2023). Mecanizado CNC y su Aplicación en la Industria. Biblioteca SENA. ',
        link: 'https://biblioteca.sena.edu.co/',
      },
      {
        referencia:
          'García, T., & Rivas, L. (2016). Mantenimiento preventivo y correctivo en equipos agrícolas. Editorial de Tecnología Agrícola.',
        link: '',
      },
      {
        referencia:
          'González, M. (2015). Lubricación y reducción de fricción en maquinaria de campo. Editorial Ingeniería Sostenible.',
        link: '',
      },
      {
        referencia:
          'López, P., & Torres, F. (2020). Conceptos avanzados de mecánica aplicada en el sector agrícola. Ingeniería y Tecnología Agrícola.',
        link: '',
      },
      {
        referencia:
          'Maristas Huelva. (n.d.). Arduino: Libro kit básico. [Documento PDF]. ',
        link:
          'https://www.maristashuelva.es/webinfo/tecnologia/arduino/Libro_kit_Basico.pdf',
      },
      {
        referencia:
          'Martínez, J., & Díaz, C. (2019). Ajustes y tolerancias en maquinaria agrícola pesada. Ediciones Técnicas.',
        link: '',
      },
      {
        referencia:
          'Núñez, F. (2022). Fundamentos de Electrotecnia. [Video]. YouTube. ',
        link: 'https://www.youtube.com/c/AprenderElectricidad ',
      },
      {
        referencia:
          'Organización Internacional del Trabajo. (2024). Big Data: conceptos y herramientas. [Artículo]. OIT. ',
        link: 'https://www.oit.org/big_data_conceptos',
      },
      {
        referencia:
          'Ramírez, S. (2017). Transferencia de energía y sistemas de transmisión en maquinaria agrícola. Editorial Innovación en Agricultura.',
        link: '',
      },
      {
        referencia:
          'Rodríguez, A. (2022). Introducción al Dibujo Técnico. Universidad Abierta. ',
        link: 'https://www.universidadabierta.edu/dibujo_tecnico',
      },
      {
        referencia:
          'Salazar, J., & Pérez, M. (2014). Métodos de unión y ensamblaje en equipos agrícolas. Ediciones del Agro.',
        link: '',
      },
      {
        referencia:
          'Servicio Nacional de Aprendizaje – SENA. (2024). Mecánica y Ajuste en Maquinaria Agrícola. [Manual]. Repositorio SENA.',
        link: 'https://repositorio.sena.edu.co/handle/11404/4761',
      },
      {
        referencia:
          'Sistema de Bibliotecas SENA. (2024). Metrología - Módulo Básico. ',
        link: 'https://biblioteca.sena.edu.co/',
      },
      {
        referencia:
          'Smith, A., & Johnson, R. (2018). Dinámica y estática para maquinaria industrial y agrícola. Prensa de Ingeniería Aplicada.',
        link: '',
      },
      {
        referencia:
          'Tinkercad. (n.d.). Circuitos DC y AC: Simulador en línea. [Simulador en línea]. ',
        link: 'https://www.tinkercad.com/embed/g1Pvn5fI1mE',
      },
      {
        referencia: 'YouTube. (n.d.). ¿Cómo funciona el transistor? [Video].',
        link: 'https://www.youtube.com/watch?v=ljSdrYmdF44',
      },
      {
        referencia: 'YouTube. (n.d.). ¿Qué es un semiconductor? [Video]. ',
        link: 'https://www.youtube.com/watch?v=fFVU7-kfPe8',
      },
      {
        referencia:
          'YouTube. (n.d.). Diferencias entre corriente alterna y corriente directa. [Video]. ',
        link: 'https://www.youtube.com/watch?v=BPaIiaoYkNY',
      },
      {
        referencia: 'YouTube. (n.d.). Electrónica digital. [Video]. ',
        link: ' https://www.youtube.com/watch?v=MPEHYhKQztQ',
      },
      {
        referencia:
          'YouTube. (n.d.). TRANSISTORIZED! La Historia De: El Transistor. [Video]. ',
        link: 'https://www.youtube.com/watch?v=f3IUVvJ2XgI&t=1899s',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
