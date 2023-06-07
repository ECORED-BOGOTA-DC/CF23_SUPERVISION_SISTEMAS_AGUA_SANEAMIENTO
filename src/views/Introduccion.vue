<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/intro/img01.jpg')
    
    p En el proceso de tratamiento de agua residual, es común encontrar una variedad de residuos retenidos en las etapas iniciales, conocidas como pretratamiento. Estos residuos son principalmente introducidos en el sistema por la comunidad, y su remoción se convierte en un desafío debido a las diferentes características físicas y químicas que presentan.
    p En las primeras etapas del tratamiento, como las rejillas y desarenadores, se retienen los sólidos más gruesos presentes en el agua residual. Sin embargo, existen residuos que presentan dificultades para ser retenidos eficientemente. Por ejemplo, el papel higiénico, que se deshace fácilmente en el agua, los guantes que, debido a su elasticidad, pueden cambiar de forma y evitar ser retenidos por las rejillas, o los cabellos, que, por su baja densidad, carga eléctrica y diámetro pequeño, plantean un verdadero desafío en el tratamiento de las aguas residuales.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
