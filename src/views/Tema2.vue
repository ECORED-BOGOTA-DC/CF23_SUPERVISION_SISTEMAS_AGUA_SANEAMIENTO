<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de mantenimiento
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img01.png')
      .col(data-aos="fade-left")
        p.mb-0 Es importante realizar acciones que logren mantener los sistemas lo más limpios posible, por ello, una de las más recomendadas son las acciones de mantenimiento, las cuales se pueden subdividir en mantenimiento preventivo y mantenimiento correctivo.
    
    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Mantenimiento preventivo
    
    p.mb-5 Es el mantenimiento que se realiza para conservar en buen estado de las instalaciones y el equipo de la planta, asegurando su buen funcionamiento y alargando su vida útil. Consiste en la ejecución de rutinas de trabajo que se realizan con mayor o menor frecuencia para prevenir desperfectos. Dentro del mantenimiento preventivo, se pueden encontrar las siguientes acciones por área:
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-8.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img02.png')
          .tarjetas-up_card.BGRS03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color: #3076B6;")
                i.fas.fa-caret-down.fa-2x.me-3(style="color: #3076B6;")
              h4.mb-0 Mantenimiento a tuberías de distribución
            ul.lista-ul--color
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Inspeccionar el estado de tuberías en la entrada de la planta.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Retirar sólidos que obstruyan el paso del agua residual.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Mantenimiento y limpieza de tuberías.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Verificar el estado de compuertas de acceso.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Lubricación de compuertas y accesorios.
      .col-xl-4.col-lg-6.col-md-8.col-sm-10.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img03.png')
          .tarjetas-up_card.BGRS03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color: #3076B6;")
                i.fas.fa-caret-down.fa-2x.me-3(style="color: #3076B6;")
              h4.mb-0 Mantenimiento a rejas y rejillas manuales
            ul.lista-ul--color
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Limpieza manual de rejas y rejillas, retirando material suspendido.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Llevar sólidos, basuras y material retirado a lechos de secado.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Disponer sólidos, una vez secados, para ser retirados por la empresa de aseo.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Pintada de rejas, rejillas y accesorios. 
      .col-xl-4.col-lg-6.col-md-8.col-sm-10(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img04.png')
          .tarjetas-up_card.BGRS03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color: #3076B6;")
                i.fas.fa-caret-down.fa-2x.me-3(style="color: #3076B6;")
              h4.mb-0 Mantenimiento a sistemas de desarenación
            ul.lista-ul--color
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Inspección del estado y funcionamiento de los desarenadores.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Verificación del grado de sedimentación.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Lubricación de compuertas y accesorios.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Retiro de arena y sedimentos.
    
    separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Mantenimiento correctivo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/img05.jpg')})`}" data-aos="fade-right"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 Consiste en la reparación inmediata de cualquier daño que sufran los equipos o componentes del sistema de tratamiento de aguas residuales, lo cual ocasiona situaciones de emergencia. El mantenimiento preventivo es de vital importancia para prevenir las fallas o daños en el sistema; en ocasiones, se presentan imprevistos, donde y cuando eso suceda, se debe contar con las herramientas y el personal especializado para la reparación inmediata. 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
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
