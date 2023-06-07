export default {
  global: {
    componenteFormativo: 'Separación de residuos en una planta de tratamiento',
    descripcionCurso:
      'Garantizar que las plantas de tratamiento de agua residual funcionen para su propósito implica la realización de actividades de mantenimiento y control de los elementos resultantes de cada unidad operativa, como son los residuos. En este componente, se analizarán los principales residuos generados y las bases fundamentales para el mantenimiento de las plantas de tratamiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fuentes de generación de residuos sólidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'El desbaste',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El desarenado',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'El desengrasado',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Otros elementos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Mantenimiento preventivo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Mantenimiento correctivo ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo de residuos en la PTAR',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación de los tipos de residuos generados',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Seguridad y salud en el trabajo recolección de residuos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fases para la recolección de residuos de la planta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Documentación requerida',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Manejo de residuos en la PTAR',
      referencia:
        'Alcaldía de Madrid Cundinamarca. (2020). <em>Así funciona la planta de tratamiento de aguas residuales de Madrid</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_5X5YE1_e6g',
    },
    {
      tema: 'Documentación requerida',
      referencia:
        'Alcaldía Mayor de Bogotá. (2011). <em> Guía técnica para la elaboración de Planes de Manejo Ambiental (PMA)</em>. Observatorio Ambiental de Bogotá.',
      tipo: 'Normatividad',
      link: 'https://oab.ambientebogota.gov.co/descargar/3825/',
    },
    {
      tema: 'Fuentes de generación de residuos sólidos',
      referencia:
        'Bermeo, M. (2016). <em> Tratamiento de aguas residuales: Técnicas convencionales</em>.',
      tipo: 'Documento',
      link:
        'http://142.93.18.15:8080/jspui/bitstream/123456789/68/1/COMPLETO_libro_aguaUltimoPDF.pdf',
    },
    {
      tema: 'Manejo de residuos en la PTAR',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007).  <em> Gestión integral de residuos o desechos peligrosos. Bases conceptuales</em>. Dirección de Desarrollo Sectorial Sostenible. ',
      tipo: 'Normatividad',
      link:
        'https://www.corpamag.gov.co/archivos/tramites/RESPEL/Gestion_Integral_RESPEL_Bases_Conceptuales.pdf',
    },
    {
      tema: 'Fuentes de generación de residuos sólidos',
      referencia:
        'Municipalidad Provincial de Otuzco (2015). <em> Limpieza de planta de tratamiento</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Jc1-UbjC4Ro',
    },
    {
      tema: 'Documentación requerida',
      referencia:
        'Ministerio de Desarrollo Económico. (2000). <em> Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000. Título E. Tratamiento de aguas residuales</em>. Dirección de Agua Potable y Saneamiento Básico.',
      tipo: 'Documento',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_e_.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Desarenadores',
      significado:
        'cámara diseñada para permitir la separación gravitacional de sólidos minerales (arena). (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Disposición final',
      significado:
        'disposición del efluente de una planta de tratamiento o de los lodos tratados. (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Residuo',
      significado:
        'es cualquier objeto, material, sustancia o elemento resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales, de servicios, que el generador abandona, rechaza o entrega y que es susceptible de aprovechamiento o transformación en un nuevo bien, con valor económico o de disposición final (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2007).',
    },
    {
      termino: 'Residuo sólido o desecho',
      significado:
        'es cualquier objeto, material, sustancia o elemento sólido resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales, de servicios, que el generador abandona, rechaza o entrega y que es susceptible de aprovechamiento o transformación en un nuevo bien, con valor económico o de disposición final. Los residuos sólidos se dividen en aprovechables y no aprovechables. Igualmente, se consideran como residuos sólidos aquellos provenientes del barrido de áreas públicas (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2007).',
    },
    {
      termino: 'Reja gruesa',
      significado:
        'por lo general, de barras paralelas de separación uniforme (4 a 10 cm), utilizado para remover sólidos flotantes de gran tamaño, aguas arriba de bombas de gran capacidad. (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Reja media',
      significado:
        'artefacto de barras paralelas de separación uniforme (2 a 4 cm), utilizado para remover sólidos flotantes y en suspensión. Son las más empleadas en el tratamiento preliminar. (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Sedimentación',
      significado:
        'proceso físico de clarificación de las aguas residuales por efecto de la gravedad. Junto con los sólidos sedimentables, precipita materia orgánica del tipo putrescible. (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Tratamiento preparatorio',
      significado:
        '1. Acondicionamiento de un desecho antes de ser descargado en el sistema de alcantarillado. 2. Procesos de tratamiento localizados antes del tratamiento primario (desmenuzado, cribas, desarenadores, etc.). Preparan el agua para el tratamiento posterior. (Ministerio de Desarrollo Económico, 2000).',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá. (2011). Guía técnica para la elaboración de Planes de Manejo Ambiental (PMA). Observatorio Ambiental de Bogotá.',
      link: 'https://oab.ambientebogota.gov.co/descargar/3825/',
    },
    {
      referencia:
        'Bermeo, M. (2016). Tratamiento de aguas residuales: Técnicas convencionales.',
      link:
        'http://142.93.18.15:8080/jspui/bitstream/123456789/68/1/COMPLETO_libro_aguaUltimoPDF.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007).  Gestión integral de residuos o desechos peligrosos. Bases conceptuales. Dirección de Desarrollo Sectorial Sostenible.',
      link:
        'https://www.corpamag.gov.co/archivos/tramites/RESPEL/Gestion_Integral_RESPEL_Bases_Conceptuales.pdf',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. (2000). Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000. Título E. Tratamiento de aguas residuales. Dirección de Agua Potable y Saneamiento Básico.',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_e_.pdf',
    },
    {
      referencia:
        'Romero, J. (2010). Tratamiento de aguas residuales; teoría y principios de diseño. Escuela Colombiana de Ingeniería.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricía Aristizábal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jesús Ricardo Arias Munévar',
          cargo: 'Instructor Ambiental',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Gestión Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
