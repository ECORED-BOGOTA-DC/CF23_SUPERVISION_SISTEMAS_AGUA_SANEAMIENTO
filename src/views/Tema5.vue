<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Documentación requerida
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img01.png' alt="Imagen decorativa")
      .col(data-aos="fade-left")
        p.mb-0 En el siguiente video, se abordará la importancia de cumplir con la normatividad ambiental vigente en las Plantas de Tratamiento de Aguas Residuales (PTAR). En este sentido, la gestión integral de los residuos desempeña un papel fundamental para garantizar el adecuado manejo y protección del medio ambiente. Se invita a ver el siguiente recurso.
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aYxF2jhOXxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .BGR04.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema5/img02.svg" alt="Imagen decorativa")
        .col-lg-9
          .titulo-segundo.color-secundario
            .h4 Para ampliar información sobre
          .row.justify-content-around.align-items-center.mb-4
            .col-9
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-plus-circle(style="color: #3076B6;")
                  p.mb-0 Residuos peligrosos, consultar el documento “#[strong #[em Gestión integral de residuos o desechos peligrosos]]” en el material complementario.
            .col-3
              .row
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Gestion_Integral_Residuos_Desechos_Peligrosos.pdf')" target="_blank" type="application/pdf")
                    span(style="color: #000; font-weight: 400") Descargar
                    i.fas.fa-file-download(style="color: #000")
          .row.justify-content-around.align-items-center.mb-4
            .col-9
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-plus-circle(style="color: #3076B6;")
                  p.mb-0 Los planes de manejo ambiental, consultar el documento “#[strong #[em Guía técnica para la elaboración de Planes de Manejo Ambiental (PMA)]]” en el material complementario.
            .col-3
              .row
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Guia_tecnica_para_la_elaboracion_de_planes.pdf')" target="_blank" type="application/pdf")
                    span(style="color: #000; font-weight: 400") Descargar
                    i.fas.fa-file-download(style="color: #000")

</template>

<script>
export default {
  name: 'Tema5',
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
