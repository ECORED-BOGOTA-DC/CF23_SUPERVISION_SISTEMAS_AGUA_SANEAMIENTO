<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manejo de residuos en la PTAR
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.png')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 El manejo adecuado de los residuos generados en una Planta de Tratamiento de Aguas Residuales (PTAR), es esencial para garantizar un funcionamiento eficiente y sostenible del sistema. En este contexto, es fundamental identificar los diferentes tipos de residuos que se generan durante el proceso de tratamiento y establecer medidas de seguridad y salud en el trabajo para su correcta recolección y manejo.
    
    separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Identificación de los tipos de residuos generados
    
    p.mb-5 Durante la operación de las PTAR, se espera que la mayor parte de los residuos que se generan sean de tipo orgánico, debido al material que puede arrastrar la lluvia, como hojas, polvo, entre otros. Sin embargo, debido a la contaminación por parte de la población a las aguas, dentro de los pretratamientos se pueden encontrar:

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Residuos plásticos")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Residuos entre los que se encuentran elaborados de Polietileno Tereftalato (PET), como botellas para bebidas, aceites y otros alimentos; Polietileno de Alta Densidad (PEAD), para productos de limpieza, membranas impermeables; Policloruro de Vinilo (PVC), por la incorrecta disposición en aguas de cañerías e instrumentos electrónicos; Polietileno de Baja Densidad (PEBD), se retiene en forma de bolsas, guantes, tapas de botellas.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img02.png')
          .row(numero="2" titulo="Residuos de papel y cartón")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Cuando los residuos plásticos se retienen en el pretratamiento, su aprovechamiento se ve limitado debido al alto contenido de humedad y la contaminación por material sólido. Los residuos de papel y cartón incluyen folios, libretas, periódicos, revistas, papel de regalo, sobres, folletos de publicidad, cajas y envases de diversos productos.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img03.png')
          .row(numero="3" titulo="Residuos de madera")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Obtenidos en las etapas preliminares de las PTAR tienen baja calidad debido a su composición variada y alto contenido de humedad. Entre estos residuos se encuentran partes de muebles, cortes de árboles, aserrín y partes de embalajes, entre otros.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img04.png')
          .row(numero="4" titulo="Residuos de metal")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Pueden ser fácilmente aprovechados debido a características fisicoquímicas. Pueden fundirse para darles nuevos usos, se limpian fácilmente y el contenido de agua no afecta su reincorporación. Aunque el proceso de limpieza puede tener costos, el material recuperado suele tener alto valor en el mercado. Incluye varillas, tuberías y piezas mecánicas, entre otros.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img05.png')
          .row(numero="5" titulo="Residuos orgánicos")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Residuos generados en grandes cantidades contribuyen significativamente a los lodos crudos en términos de masa y volumen. Es crucial estabilizar estos residuos para prevenir la putrefacción y evitar la atracción de vectores. Incluyen hojas, cáscaras de frutas, desechos alimenticios y otros.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img06.png')
          .row(numero="6" titulo="Residuos de vidrio")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Estos residuos pierden valor en la reincorporación debido a que el costo de limpieza, en muchas ocasiones, no se compensa cuando son vendidos, ya que es una materia prima de bajo precio. Los residuos de vidrio que principalmente se obtienen en una PTAR son botellas, ventanas, elementos decorativos, entre otros.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img07.png')
          .row(numero="7" titulo="Residuos peligrosos")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Los residuos peligrosos requieren precauciones especiales al manipularlos y deben separarse de otros residuos para evitar la contaminación. Las PTAR cuentan con gestores especializados para disponer adecuadamente de partes electrónicas, residuos especiales y otros, considerando sus características de peligrosidad según el criterio CRETIB.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img08.png')
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img09.svg')

    <br><br>
    .row.justify-content-end.align-items-end.mb-5
      .col-lg-3.col-6.px-4.img-01.z-index-2(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img10.svg')
      .col-lg-8.cajon.color-primario.p-4.z-index-1(data-aos="fade-left")
        .row.justify-content-end
          .col-lg-8
            p.mb-0 Cada uno de los residuos debe ser separado de acuerdo con lo establecido en la Guía Técnica Colombiana (GTC) 24 de 2009, para, posteriormente, ser aprovechados según los lineamientos de la Guía Técnica Colombiana (GTC) 53 que corresponda.
      .col-lg-2.d-lg-flex.d-none

    separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.2 Seguridad y salud en el trabajo recolección de residuos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img11.png')
      .col(data-aos="fade-left")
        p.mb-0 Para realizar las actividades de recolección de residuos en las PTAR, los operarios deben contar con una serie de elementos que permitan realizar el trabajo de forma segura, haciendo prevención de posibles accidentes y brindando seguridad en la labor; estos elementos con los que debe contar son:
    
    .BGR05.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.pt-4
          .col-lg-5.order-lg-1.order-2
            .h4 Traje de seguridad
            p.mb-0 Protege al operario de aguas residuales y residuos sólidos peligrosos. Debe ser enterizo, cubrir extremidades, ser antifluido y tener mangas que cubran las muñecas. Se requiere una sujeción hermética para evitar el ingreso de materiales. Debe ser de fácil remoción con una cremallera principal. Puede contar con bolsillos para herramientas y accesorios.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img12.png')
        .row.justify-content-center.pt-4
          .col-lg-5.order-lg-1.order-2
            .h4 Casco de seguridad
            p.mb-0 Protege la cabeza contra impactos y rayos ultravioleta. Mantiene la temperatura corporal adecuada y mejora las condiciones laborales. Debe tener un armazón certificado, una visera larga para sombra facial y un arnés ajustable para adaptarse a cada trabajador.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img13.png')
        .row.justify-content-center.pt-4
          .col-lg-5.order-lg-1.order-2
            .h4 Botas de seguridad
            p.mb-0 Para limpiar y mantener los equipos de pretratamiento en las PTAR, se requieren botas impermeables con punta de acero para proteger los pies y prevenir lesiones. La suela debe ser antideslizante para evitar caídas, y preferiblemente antiestática y aislante para evitar accidentes eléctricos durante el mantenimiento preventivo.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img14.png')
        .row.justify-content-center.pt-4
          .col-lg-5.order-lg-1.order-2
            .h4 Guantes
            p.mb-0 Se debe contar con guantes impermeables, que no permitan el paso de agua ni ninguna sustancia sólida a las manos del operario; deben ser resistentes, pero, al tiempo, de fácil deformación, para permitir la sujeción de herramientas e instrumentos que requiera utilizar el operario durante la ejecución de su labor.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img15.png')
        .row.justify-content-center.pt-4
          .col-lg-5.order-lg-1.order-2
            .h4 Protección ocular
            p.mb-0 Usar gafas de seguridad que eviten el paso de agua y residuos sólidos a los ojos. En espacios abiertos, el viento puede afectar la visión con partículas pequeñas. Las gafas protegen de la sequedad y la exposición solar. Para trabajos al aire libre, se pueden usar gafas polarizadas, mientras que en lugares cerrados o con poca luz se recomienda una protección ocular sin color. Las gafas de plástico son preferibles.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img16.png')
        .row.justify-content-center.pt-4
          .col-lg-5.order-lg-1.order-2
            .h4 Mascarilla
            p.mb-0 Algunos residuos pueden generar olores ofensivos, que afectan las vías respiratorias de los operarios, por lo que se hace necesario el uso de mascarillas que no permitan el ingreso de vapores, olores ofensivos ni vectores.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img17.png')

</template>

<script>
export default {
  name: 'Tema3',
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
