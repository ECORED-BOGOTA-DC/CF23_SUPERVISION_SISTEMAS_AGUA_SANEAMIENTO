<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fuentes de generación de residuos sólidos
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Cuando se identifica dentro de una planta de tratamiento de aguas residuales la fuente de generación de residuos sólidos, no se hace referencia a la persona que, por ejemplo, arrojó a los canales de la ciudad un papel, sino que se hace referencia al equipo de tratamiento que remueve dicho residuo.
        p.mb-0 Las etapas destinadas a la remoción de sólidos gruesos se conocen como pretratamiento; además de esta función, aquí se realiza una regulación del caudal que ingresa a la #[strong Planta de Tratamiento de Aguas Residuales (PTAR)], se airean las aguas con la ayuda de la generación de turbulencia y se hace la adición de productos químicos, en caso de ser necesario, para los tratamientos primarios. Algunos residuos y formación de espuma se pueden observar en una planta de tratamiento de aguas residuales. A continuación, se presentan algunos ejemplos:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img01.png')

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-10.mb-lg-0.mb-4(data-aos="fade-right")   
        .BGR01
          .row.justify-content-center.align-items-center
            .col-lg-4.col-6
              img(src='@/assets/curso/tema1/img02.png')
            .col-lg-8.p-4
              .h4.mb-0 Residuos de un interceptor de trampa de grasa de restaurante.
      .col-lg-6.col-md-10(data-aos="fade-left")
        .BGR01
          .row.justify-content-center.align-items-center
            .col-lg-4.col-6
              img(src='@/assets/curso/tema1/img03.png')
            .col-lg-8.p-4
              .h4.mb-0 Formación de espuma en el depósito de aireación de una planta de tratamiento de aguas residuales.

    p La línea de pretratamiento convencional para el tratamiento de aguas residuales generalmente se compone de tres etapas principales: desbaste, desarenado y desengrasado. Estas etapas son esenciales para la eliminación inicial de residuos y sólidos gruesos presentes en el agua residual antes de que ingrese a las etapas posteriores del proceso de tratamiento.

    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 El desbaste
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img04.png')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Es un proceso que se lleva a cabo mediante rejas formadas por barras verticales o inclinadas, que interceptan el flujo de la corriente de agua residual en un canal de entrada a la estación depuradora. Su misión es retener y separar los sólidos más voluminosos, a fin de evitar las obstrucciones en los equipos mecánicos de la planta y facilitar la eficacia de los tratamientos posteriores. Estas rejas pueden ser de dos tipos: entre 50 y 150 mm  de separación de los barrotes (desbaste grueso) y entre 10 y 20 mm (desbaste fino). Estas rejas disponen de un sistema de limpieza que separa las materias retenidas.

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 El cribado
    
    p Dentro del proceso del desbaste, se encuentra una operación muy utilizada denominada el cribado, la cual busca separar el material grueso del agua mediante el paso de ella por una criba o rejilla; esta puede ser de cualquier tipo de material y puede ser agujereada (redondos, cuadrados, o de cualquier forma geométrica) ordenadamente, como una plancha o lámina metálica, de madera o de concreto.
    p Existen algunas que son construidas con celosía fija o emparrillado de barras o varillas de hierro o de acero. Este tipo de tratamiento se usa en el caso de:

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img05.png')
          .BGR01.hg-01.pt-5.px-4.pb-4
            p.mt-4.mb-0 #[strong Las rejillas gruesas] (con aberturas iguales o mayores de 0,64 cm), proteger las bombas, válvulas, tuberías y equipos del taponamiento o interferencia causado por trapos, tarros y objetos.
      .col-lg-6.col-10(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img06.png')
          .BGR01.hg-01.pt-5.px-4.pb-4
            p.mt-4.mb-0 #[strong Las rejillas finas] (aberturas menores de 0,64 cm), que son de tipo disco o tambor, que retienen otro tipo de sólidos como particulas más pequeñas.

    p El mantenimiento y método de limpieza pueden ser realizados de dos formas principales: manual o mecánica. A continuación, les proporcionaré información sobre ambos métodos: 

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BGR03.hg-02.p-4
          figure.mb-4  
            img(src='@/assets/curso/tema1/img07.png')
          .h4 Manual
          ul.lista-ul--color
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #3076B6;")
              | No debe exceder límites de seguridad en cuanto a movilidad y cercanía, para que el operario pueda realizar la limpieza.
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #3076B6;")
              | En la parte superior de la rejilla, debe proveerse una placa de drenaje o placa perforada, con el objeto de facilitar la limpieza y el drenaje del material removido.
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #3076B6;")
              | El canal de acceso a la rejilla debe diseñarse para prevenir la acumulación de arena u otro material pesado, antes y después del equipo.
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #3076B6;")
              | El canal debe ser preferiblemente horizontal, recto y perpendicular a la rejilla, para promover una distribución uniforme de los sólidos retenidos por ella.
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #3076B6;")
              | El diseño estructural debe ser el adecuado para impedir la rotura de la rejilla cuando está taponada.
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .BGR03.hg-02.p-4
          figure.mb-4  
            img(src='@/assets/curso/tema1/img08.png')
          .h4 Mecánica
          ul.lista-ul--color
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #3076B6;")
              | Se prefieren rejillas mecánicas cuando se desea minimizar la mano de obra necesaria para la limpieza y disposición del material removido.
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #3076B6;")
              | Reduce los reboses por taponamiento.

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Disposición del material retenido
    
    p.mb-5 Una vez retirado el material que se extrae de estos procesos, se pueden usar los siguientes métodos para su disposición, de acuerdo con Romero (2010), en su documento “#[strong #[em Tratamiento de aguas residuales, teoría y principios de diseño]]”. Estos métodos incluyen:

    .row.justify-content-center.mb-5
      .col-xl-3.col-4.px-0(data-aos="fade-right")
        .BGIMG01
          figure
            img(src='@/assets/curso/tema1/img09A.svg')
      .col-xl-3.col-4.px-0(data-aos="flip-up")
        .BGIMG02.top-12
          img(src='@/assets/curso/tema1/img09B.svg')
      .col-xl-3.col-4.px-0(data-aos="fade-left")
        .BGIMG03
          img(src='@/assets/curso/tema1/img09C.svg')

    p.mb-5 Una cámara de rejillas es una estructura utilizada en el proceso de tratamiento de aguas residuales para la remoción de sólidos gruesos y materiales flotantes. Ayuda a prevenir obstrucciones y daños en los equipos de tratamiento posteriores. La cámara de rejillas consta de los siguientes componentes principales:

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1
          span Ejemplo de cámara de rejillas
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img10.svg')
          figcaption Nota. <a style="font-weight: 400">Tomada de Romero (2010, p. 291).</a>

    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 El desarenado
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img11.png')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Estas instalaciones se sitúan en las plantas de tratamiento después del desbaste, y tienen como objetivo extraer del agua bruta las partículas minerales de tamaño superior a uno fijado en el diseño, generalmente 200 micras. El funcionamiento técnico del desarenador reside en hacer circular el agua en una cámara, de forma que la velocidad quede controlada para permitir el depósito de arena en el fondo. Normalmente, esta arena sedimentada queda desprovista casi en su totalidad de materia orgánica y es evacuada, mediante bombas, al clasificador de arenas y, posteriormente, a un contenedor.

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Desarenadores
      
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p El equipo para realizar este proceso se conoce como desarenador, el cual remueve arena, grava, partículas y otro material sólido pesado que tenga velocidad de asentamiento o peso específico bastante mayor que el de los sólidos orgánicos degradables de las aguas residuales. 
        p.mb-0 De acuerdo con Romero (2010), en su documento Tratamiento de aguas residuales, teoría y principios de diseño, es importante reconocer que este equipo “#[strong #[em protegen el equipo mecánico del desgaste anormal y reduce la formación de depósitos pesados en tuberías, canales y conductos, además, minimiza la frecuencia requerida de limpieza de los digestores en aquellos casos en que se presenta una acumulación excesiva de arena en dichas unidades]]” (p. 293). 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img12.png')

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Limpieza del desarenador

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Estos también pueden ser de limpieza mecánica o manual, dependiendo de si se dotan o no de equipo mecánico de remoción de arena, luego el diseño dependerá del tipo de limpieza elegido. El equipo más común es el desarenador de flujo horizontal, en el cual el agua pasa a lo largo del tanque en dirección longitudinal; la velocidad horizontal del agua se controla mediante las dimensiones de la unidad o de un vertedero de sección. 
        p La cantidad de arena acumulada en el desarenador y la disposición de la arena son consideraciones importantes durante el proceso de limpieza del desarenador. 
        p.mb-0 A medida que la arena y los sedimentos se acumulan en el fondo del desarenador, es necesario llevar a cabo una limpieza periódica para mantener su eficiencia y capacidad de remoción de sólidos. Veamos el siguiente recurso. 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img13.png')
  
    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Cantidad de arena" :icono="require('@/assets/curso/tema1/img14.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p La cantidad de arena generada en una unidad operativa varía según factores, como el área de drenaje, las condiciones y el tipo de alcantarillado del agua residual. En áreas urbanas, esto puede incluir el lavado de calles, residuos industriales, desmenuzadores de basura y la composición demográfica. En zonas costeras, la proximidad a playas, balnearios y canteras también influye. Por lo general, la cantidad de arena a desechar oscila entre 4 y 200 ml/m3 de agua tratada, con un promedio de 15 ml/m3.
            p.mb-0 Sin embargo, es importante realizar cálculos precisos teniendo en cuenta el caudal y otros parámetros para garantizar un adecuado almacenamiento, manejo y disposición de la arena.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img15.png')
      .py-4.py-md-5(titulo="Disposición de la arena" :icono="require('@/assets/curso/tema1/img14.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Es importante tener en cuenta que la arena removida llevará gran cantidad de impurezas y material orgánico putrescible, por ello, debe hacerse una disposición rápidamente o se presentarán olores desagradables y atraerá vectores (insectos y roedores).
            p.mb-0 Dentro de los métodos más usados, están la disposición en rellenos sanitarios, incineración, disposición en el mar, o un tratamiento previo de remoción de material orgánico y lavado, todos bajo autorización de la entidad ambiental.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img16.png')

    p.mb-5 A continuación, se puede observar un ejemplo de rejillas y desarenadores propuestos por Romero (2010) en el Tratamiento de aguas residuales.

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2
          span Ejemplo de rejillas y desarenadores
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img17.svg')
          figcaption Nota. <a style="font-weight: 400">Romero (2010, p. 292).</a>
    
    separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 El desengrasado
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Tiene por objeto eliminar las grasas, aceites y, en general, los flotantes, antes de pasar el agua a las fases posteriores del tratamiento. El procedimiento utilizado para esta operación es el de inyectar aire, a fin de provocar la desemulsión de las grasas y su ascenso a la superficie, de donde se extraen por algún dispositivo de recogida superficial, normalmente rasquetas, para acabar en contenedores. 
        .cajon.color-primario.p-4
          .row.justify-content-center
            .col-lg-3.col-6.px-5.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img18.svg')
            .col-lg-9
              .h4 Nota importante:
              p.mb-0 En muchas plantas de tratamiento, las fases de desarenado y desengrasado se verifican en la misma cámara, en una instalación combinada.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img19.png')
    
    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Trampa grasas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img20.png')
      .col-lg-8(data-aos="fade-left")
        p Este es un equipo que puede ser usado para el proceso de desengrasado; se encuentran de gran tamaño o de tamaños reducidos, para instalaciones como sistema previo al vertimiento; su objetivo es prevenir el taponamiento de las tuberías y su efecto en la acción bacterial.
        p Las grasas y aceites son un grupo de sustancias con características físicas similares, incluyen material de origen vegetal, de tejido animal, petróleo o componentes del petróleo y otros materiales extraídos por el solvente.
        p.mb-0 En aguas residuales domésticas, el contenido de grasas y aceites puede ser del orden de 30 a 50 mg/l pero en aguas residuales no domésticas, la concentración suele ser mucho mayor; la importancia de su remoción es porque, al acumularse en las alcantarillas y bombas, pueden obstruirse, disminuir el flujo y afectar los lodos producidos.

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Limpieza del sistema
      
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Este equipo está diseñado para retener las grasas y aceites y para permitir su limpieza; cuenta con un diseño hidráulico y un tiempo de retención adecuado para el propósito propuesto, con una distancia entre la entrada del agua y la salida suficiente para permitir la separación diferencial por gravedad y no dejar escapar grasas por la salida del sistema.
        p Siempre debe tener pantallas de control de flujo para garantizar un régimen hidráulico apropiado y prevenir cambios súbitos de caudal, su sistema general permite que la grasa flote a la superficie, donde es retenida para que el agua más clara pueda seguir su rumbo; usualmente, en este equipo no hay equipo mecánico, solo consta de una entrada de agua residual por debajo de la superficie y la salida, generalmente, por el fondo, entre más grande, más eficiente.
        .cajon.color-primario.p-4
          p.mb-0 Este equipo requiere un mantenimiento constante y una limpieza continua que se basa en retirar todas las grasas y aceites acumulados en la superficie.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img21.png')
      
    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3
          span Trampa de grasas
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img22.svg')
          figcaption Nota. <a style="font-weight: 400">Romero (2010, p. 729).</a>
    
    separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.4 Otros elementos

    p Otros elementos del pretratamiento son el Aliviadero y el Medidor de Caudal. El aliviadero, permite que la planta funcione siempre según el caudal del proyecto y, juntamente con el medidor del caudal, aprueba controlar la cantidad de agua que entra en la planta.
    p.mb-5 Es importante siempre tener claros los parámetros de cada proceso, para ello, en las plantas de tratamiento, se suelen tener tablas de manejo de operaciones de pretratamiento, donde se brinda la información mínima que se puede obtener de cada fase.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 4
          span Resumen de parámetros de diseño de operaciones de pretratamiento
        .tabla-b.color-acento-contenido.mb-4(data-aos="zoom-in")
          table
            tbody
              tr
                th(style="border: 2px solid #707070;border-left: 40px solid #3076B6; width: 24%; font-size: 18px;" rowspan="6").text-center Desbaste
                th(style="border: 2px solid #707070;width: 20%;" rowspan="3") Separación entre barrotes
                td(style="border: 2px solid #707070;width: 19%; background-color: #F3F9FF" colspan="2") Rejillas de desbaste grueso
                td(style="border: 2px solid #707070;width: 17%; background-color: #F3F9FF" ).text-center 5-10cm
              tr
                td(style="border: 2px solid #707070;background-color: #FFF" colspan="2") Rejillas de desbaste fino
                td.text-center(style="border: 2px solid #707070;background-color: #FFF") 1.5-2 cm
              tr
                td(style="border: 2px solid #707070;background-color: #F3F9FF" colspan="2") Tamices 
                td.text-center(style="border: 2px solid #707070;background-color: #F3F9FF") 0.5-1 mm
              tr
                td(style="border: 2px solid #707070;background-color: #FFF"  colspan="3") Atascamiento máximo en rejillas
                td.text-center(style="border: 2px solid #707070;background-color: #FFF") &lt; 30%
              tr
                td(style="border: 2px solid #707070;background-color: #F3F9FF" colspan="3") Velocidad de paso máxima
                td.text-center(style="border: 2px solid #707070;background-color: #F3F9FF") &lt; 1 m/s
              tr
                td(style="border: 2px solid #707070;background-color: #FFF" colspan="3") Producción de residuos
                td.text-center(style="border: 2px solid #707070;background-color: #FFF") 0.10-0.15 l/m³
              
              tr
                th(style="border: 2px solid #707070;border-left: 40px solid #3076B6; width: 24%; font-size: 18px;" rowspan="12").text-center Desarenado
                th(style="border: 2px solid #707070;" rowspan="4") Desarenador Elemental
                td(style="border: 2px solid #707070;background-color: #F3F9FF" colspan="2") Partículas a eliminar
                td.text-center(style="border: 2px solid #707070;background-color: #F3F9FF") Ø &gt; = 0.2 mm
              tr
                td(style="border: 2px solid #707070;background-color: #FFF" colspan="2") Velocidad ascensional
                td.text-center(style="border: 2px solid #707070;background-color: #FFF") &lt; 70 m/h
              tr
                td(style="border: 2px solid #707070;background-color: #F3F9FF" colspan="2") Velocidad de paso
                td.text-center(style="border: 2px solid #707070;background-color: #F3F9FF") &lt; 0,3-0,4 m/s
              tr
                td(style="border: 2px solid #707070;background-color: #FFF" colspan="2") Relación longitud/calado
                td.text-center(style="border: 2px solid #707070;background-color: #FFF") 20-25

              tr
                th(style="border: 2px solid #707070;" rowspan="8") Desarenador Aireado
                td(style="border: 2px solid #707070;background-color: #F3F9FF" colspan="2") Velocidad ascensional
                td.text-center(style="border: 2px solid #707070;background-color: #F3F9FF") &lt; 100m/h
              tr
                td(style="border: 2px solid #707070;background-color: #FFF" colspan="2") Tiempo de retención hidráulico
                td.text-center(style="border: 2px solid #707070;background-color: #FFF") 2-3 min
              tr
                td(style="border: 2px solid #707070;background-color: #F3F9FF" colspan="2") Velocidad de paso
                td.text-center(style="border: 2px solid #707070;background-color: #F3F9FF") &lt; 0,3-0,4 m/s
              tr
                td(style="border: 2px solid #707070;background-color: #FFF" colspan="2") Caudal de aire
                td.text-center(style="border: 2px solid #707070;background-color: #FFF") 1-2 m³/h.m³ tanque
              tr
                td(style="border: 2px solid #707070;background-color: #F3F9FF" colspan="2") Velocidad tangencial
                td.text-center(style="border: 2px solid #707070;background-color: #F3F9FF") 0.3-0.5 m/s
              tr
                td(style="border: 2px solid #707070;background-color: #FFF" colspan="2") Producción de arena
                td.text-center(style="border: 2px solid #707070;background-color: #FFF") 0.3-0.4 l/m³

              tr
                td(style="border: 2px solid #707070;" rowspan="2") Capacidad de sistemas de extracción de arena
                td(style="border: 2px solid #707070;background-color: #F3F9FF") Red separativa
                td.text-center(style="border: 2px solid #707070;background-color: #F3F9FF") 5 l/m³
              tr
                td(style="border: 2px solid #707070;background-color: #FFF") Red unitaria
                td.text-center(style="border: 2px solid #707070;background-color: #FFF") 50 l/m³

              tr
                th(style="border: 2px solid #707070;border-left: 40px solid #3076B6; width: 24%; font-size: 18px;" rowspan="12").text-center Desengrasado
                td(style="border: 2px solid #707070;background-color: #F3F9FF" colspan="3") Velocidad asensorial
                td.text-center(style="border: 2px solid #707070;background-color: #F3F9FF") &lt; 35 m/h
              tr
                td(style="border: 2px solid #707070;background-color: #FFF" colspan="3") Tiempo de retención hidráulico
                td.text-center(style="border: 2px solid #707070;background-color: #FFF") &gt; 10 min
              tr
                td(style="border: 2px solid #707070;background-color: #F3F9FF" colspan="3") Caudal de aire
                td.text-center(style="border: 2px solid #707070;background-color: #F3F9FF") 4-8 m³/h m³ tanque

    .BGR04.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema1/img23.svg")
        .col-lg-7
          .titulo-segundo.color-secundario
            .h4 Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000
          p Para ampliar la información sobre los pretratamientos, su diseño y mantenimiento, lo invitamos a consultar el “#[strong Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000, Título E Tratamiento de aguas residuales. Dirección de agua potable y saneamiento básico]”, que se encuentra en el material complementario. 
          .row
            .col-sm-auto
              a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Reglamento_Tecnico_Del_Sector_De_Agua_RAS_2000.pdf')" target="_blank" type="application/pdf")
                span(style="color: #000; font-weight: 400") Descargar
                i.fas.fa-file-download(style="color: #000")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
