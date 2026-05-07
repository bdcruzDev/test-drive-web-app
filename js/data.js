const questionBank = [
    {
        id: 1,
        type: 'multiple-choice',
        topic: 'Niveles de alcolemia',
        question: '¿Cuál es el rango de concentración de alcohol en sangre para el "Estado de Embriaguez Ligera"?',
        options: [
            'De 0.1 a 0.4 gramos por litro',
            'De 0.5 a 1.0 gramos por litro',
            'Más de 2.0 gramos por litro',
            'De 1.1 a 1.5 gramos por litro'
        ],
        answer: 1, // Index of correct option
        explanation: 'Según la Ley 431, la embriaguez ligera se sitúa entre 0.5 y 1.0 g/l.'
    },
    {
        id: 2,
        type: 'fill-in-writing',
        topic: 'Boletas de infracción',
        question: '¿Cuántos días de validez tiene la "Boleta Amarilla" para realizar el pago de la multa?',
        placeholder: 'Ej: 15',
        answer: '30',
        explanation: 'La Boleta Amarilla (Boleta de Infracción) tiene una validez de 30 días.'
    },
    {
        id: 3,
        type: 'fill-in-selection',
        topic: 'Arcén',
        question: 'Completa la definición de Arcén:',
        sentence: 'El arcén es la franja longitudinal contigua a la ________, no destinada a la circulación de ________.',
        blanks: ['calzada', 'vehículos'],
        options: ['calzada', 'vehículos', 'acera', 'peatones', 'motocicletas'],
        explanation: 'El arcén es el borde de la carretera (calzada) y no es para circulación normal de vehículos.'
    },
    {
        id: 4,
        type: 'multiple-choice',
        topic: 'Boletas de infracción',
        question: '¿Cuál es la validez máxima de la "Boleta Roja" como documento temporal para conducir?',
        options: [
            '30 días',
            '7 días',
            '24 horas',
            'No tiene validez para conducir'
        ],
        answer: 2,
        explanation: 'La Boleta Roja no es válida como documento temporal después de 24 horas.'
    },
    {
        id: 5,
        type: 'multiple-choice',
        topic: 'Conducción Temeraria',
        question: '¿Cuándo se considera "Conducción Temeraria" respecto a la velocidad?',
        options: [
            'Cuando se excede el límite por 5 km/h',
            'Cuando se conduce a más del 30% del límite establecido',
            'Cuando se conduce a 100 km/h en carretera',
            'Cuando se frena bruscamente'
        ],
        answer: 1,
        explanation: 'Exceder en más de un 30% el límite de velocidad es una de las causales de conducción temeraria.'
    },
    {
        id: 6,
        type: 'fill-in-writing',
        topic: 'Vehículos de régimen preferente',
        question: 'Menciona un tipo de vehículo de régimen preferente (en singular):',
        placeholder: 'Ej: Ambulancia',
        answer: ['ambulancia', 'bomberos', 'policia', 'patrulla'],
        explanation: 'Los vehículos de régimen preferente son ambulancias, bomberos y policía en servicio de urgencia.'
    },
    {
        id: 7,
        type: 'multiple-choice',
        topic: 'Niveles de alcolemia',
        question: '¿A partir de qué nivel se considera "Embriaguez Extrema" según la Ley 431?',
        options: [
            'Superior a 1.0 g/l',
            'Superior a 1.5 g/l',
            'Superior a 2.0 g/l',
            'Superior a 3.0 g/l'
        ],
        answer: 2,
        explanation: 'La embriaguez extrema se define como una concentración superior a 2.0 gramos por litro de sangre.'
    },
    {
        id: 8,
        type: 'fill-in-selection',
        topic: 'Rotonda',
        question: 'Sobre la prioridad en una Rotonda:',
        sentence: 'En una rotonda, tiene la preferencia el vehículo que ya está ________ de la misma.',
        blanks: ['dentro'],
        options: ['dentro', 'fuera', 'entrando', 'parado'],
        explanation: 'Siempre tiene prioridad quien ya circula por el anillo de la rotonda.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        topic: 'Red Vial',
        question: '¿Qué es la Red Vial?',
        options: [
            'Un conjunto de semáforos interconectados',
            'El sistema de señales verticales',
            'El conjunto de calles, avenidas, carreteras y caminos del país',
            'La conexión wifi en las carreteras'
        ],
        answer: 2,
        explanation: 'La red vial es todo el conjunto de infraestructuras para la circulación terrestre.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        topic: 'Reincidencia',
        question: '¿Qué sucede si un conductor reincide en infracciones peligrosas en un mismo año?',
        options: [
            'Solo paga la multa doble',
            'Se le suspende la licencia de conducir',
            'Recibe un diploma de asistencia',
            'No sucede nada especial'
        ],
        answer: 1,
        explanation: 'La reincidencia en infracciones graves o peligrosas conlleva la suspensión de la licencia.'
    },
    {
        id: 11,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué indica una señal de tránsito con forma octagonal y fondo rojo?',
        options: [
            'Ceda el paso',
            'Alto (Pare)',
            'No hay paso',
            'Velocidad máxima'
        ],
        answer: 1,
        explanation: 'La señal octagonal roja es universalmente la señal de ALTO.'
    },
    {
        id: 12,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Cuál es el significado de las señales de color amarillo?',
        options: [
            'Informativas',
            'Reglamentarias',
            'Preventivas',
            'Turísticas'
        ],
        answer: 2,
        explanation: 'Las señales amarillas son preventivas, advierten sobre peligros o condiciones de la vía.'
    },
    {
        id: 13,
        type: 'multiple-choice',
        topic: 'Multas e Infracciones',
        question: '¿A qué categoría pertenece conducir sin licencia?',
        options: [
            'Infracción Administrativa',
            'Infracción de Mayor Peligrosidad',
            'Infracción Peligrosa',
            'No es una infracción'
        ],
        answer: 1,
        explanation: 'Conducir sin licencia se considera una de las infracciones de mayor peligrosidad.'
    },
    {
        id: 14,
        type: 'fill-in-writing',
        topic: 'Multas',
        question: '¿Cómo se le conoce comúnmente a la Boleta Amarilla?',
        placeholder: 'Ej: Boleta de...',
        answer: ['boleta de infraccion', 'infraccion', 'la amarilla'],
        explanation: 'Su nombre técnico es Boleta de Infracción, pero todos la conocen como la boleta amarilla.'
    },
    {
        id: 15,
        type: 'fill-in-selection',
        topic: 'Conducción Temeraria',
        question: 'Maniobras prohibidas:',
        sentence: 'Realizar maniobras ________ en la vía pública se considera conducción temeraria.',
        blanks: ['acrobáticas'],
        options: ['acrobáticas', 'lentas', 'seguras', 'normales'],
        explanation: 'Las maniobras acrobáticas o competencias de velocidad son conducción temeraria.'
    },
    // --- NUEVAS 50 PREGUNTAS ---
    {
        id: 16,
        type: 'multiple-choice',
        topic: 'Niveles de alcolemia',
        question: '¿Cuál es el límite de alcohol permitido para conductores de transporte de carga o pasajeros?',
        options: ['0.5 g/l', '1.0 g/l', '0.2 g/l', '0.0 g/l'],
        answer: 2,
        explanation: 'Para transporte público y de carga, el límite es más estricto: 0.2 g/l.'
    },
    {
        id: 17,
        type: 'multiple-choice',
        topic: 'Niveles de alcolemia',
        question: '¿Qué sucede si un conductor se niega a realizar la prueba de alcoholemia?',
        options: [
            'No se le puede multar',
            'Se presume estado de embriaguez y se aplica la multa máxima',
            'Solo recibe una advertencia',
            'Debe ir a juicio inmediatamente'
        ],
        answer: 1,
        explanation: 'La negativa a la prueba presume legalmente el estado de embriaguez.'
    },
    {
        id: 18,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué significan las líneas amarillas continuas en el centro de la carretera?',
        options: [
            'Se puede aventajar con cuidado',
            'Prohibido aventajar (doble vía)',
            'Zona de estacionamiento',
            'Carril exclusivo para buses'
        ],
        answer: 1,
        explanation: 'Línea amarilla continua significa prohibición de aventajar.'
    },
    {
        id: 19,
        type: 'fill-in-writing',
        topic: 'Señalizaciones',
        question: '¿De qué color son las señales informativas de destinos y distancias?',
        placeholder: 'Ej: Azul',
        answer: ['verde', 'verdes'],
        explanation: 'Las señales de destino y distancia en carreteras suelen ser verdes.'
    },
    {
        id: 20,
        type: 'multiple-choice',
        topic: 'Rotonda',
        question: 'Al entrar a una rotonda, ¿hacia qué lado se debe girar siempre?',
        options: ['Izquierda', 'Derecha', 'Depende del tráfico', 'Cualquier lado'],
        answer: 1,
        explanation: 'En Nicaragua y países con conducción a la derecha, se entra girando a la derecha.'
    },
    {
        id: 21,
        type: 'multiple-choice',
        topic: 'Vehículos de régimen preferente',
        question: '¿Cuándo tiene prioridad un vehículo de emergencia (ambulancia, bomberos)?',
        options: [
            'Siempre que estén en la calle',
            'Solo cuando llevan sirenas y luces encendidas',
            'Solo de noche',
            'Cuando van a más de 60 km/h'
        ],
        answer: 1,
        explanation: 'La prioridad es efectiva solo cuando usan señales audibles y visibles.'
    },
    {
        id: 22,
        type: 'fill-in-selection',
        topic: 'Red Vial',
        question: 'Componentes de la vía:',
        sentence: 'La vía pública se compone de la calzada, la acera y el ________.',
        blanks: ['arcén'],
        options: ['arcén', 'techo', 'parque', 'jardín'],
        explanation: 'El arcén (o berma) es parte integral de la estructura de la vía.'
    },
    {
        id: 23,
        type: 'multiple-choice',
        topic: 'Multas e Infracciones',
        question: '¿Qué infracción se comete al conducir en contra de la vía?',
        options: [
            'Infracción Administrativa',
            'Infracción Peligrosa',
            'Infracción de Mayor Peligrosidad',
            'Leve'
        ],
        answer: 2,
        explanation: 'Conducir contra la vía es una infracción de Mayor Peligrosidad.'
    },
    {
        id: 24,
        type: 'multiple-choice',
        topic: 'Boletas de infracción',
        question: 'Si no pagas una multa de Boleta Roja en 24 horas, ¿qué sucede?',
        options: [
            'Se cancela la multa',
            'Se duplica el valor de la multa',
            'Te quitan el vehículo',
            'No pasa nada'
        ],
        answer: 1,
        explanation: 'La ley establece que el monto se duplica tras 24 horas sin pago en boletas rojas.'
    },
    {
        id: 25,
        type: 'multiple-choice',
        topic: 'Tipos de vehículos',
        question: '¿Qué licencia se requiere para conducir un vehículo liviano (automóvil, camioneta)?',
        options: ['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4'],
        answer: 2,
        explanation: 'La Categoría 3 es la autorizada para conducir vehículos livianos de uso particular.'
    },
    {
        id: 26,
        type: 'multiple-choice',
        topic: 'Niveles de alcolemia',
        question: 'El "Estado de Embriaguez" (no ligera ni extrema) es de:',
        options: ['0.5 a 1.0 g/l', '1.1 a 2.0 g/l', '0.1 a 0.5 g/l', 'Más de 3.0 g/l'],
        answer: 1,
        explanation: 'El estado de embriaguez va de 1.0 (o 1.1) hasta 2.0 g/l.'
    },
    {
        id: 27,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué indica una señal de color azul?',
        options: ['Peligro', 'Información de servicios', 'Obligación', 'Restricción'],
        answer: 1,
        explanation: 'Las señales azules informan sobre servicios (hospitales, gasolineras, etc.).'
    },
    {
        id: 28,
        type: 'multiple-choice',
        topic: 'Conducción Temeraria',
        question: '¿Participar en "carreras ilegales" es conducción temeraria?',
        options: ['No, es solo una falta administrativa', 'Sí, siempre', 'Solo si hay heridos', 'Solo si es de día'],
        answer: 1,
        explanation: 'Las competencias de velocidad ilegales son una causa directa de conducción temeraria.'
    },
    {
        id: 29,
        type: 'fill-in-writing',
        topic: 'Rotonda',
        question: '¿Quién tiene la preferencia si un vehículo quiere entrar y otro ya está dentro de la rotonda?',
        placeholder: 'Ej: El que está...',
        answer: ['dentro', 'el que esta dentro', 'el vehiculo de adentro'],
        explanation: 'La prioridad la tiene siempre el vehículo que circula por el anillo.'
    },
    {
        id: 30,
        type: 'multiple-choice',
        topic: 'Multas e Infracciones',
        question: '¿Cuál es la multa por conducir sin el cinturón de seguridad?',
        options: ['Administrativa', 'Peligrosa', 'Mayor Peligrosidad', 'Inexistente'],
        answer: 0,
        explanation: 'No usar cinturón es una infracción de carácter Administrativo.'
    },
    {
        id: 31,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué significa un semáforo con luz roja intermitente?',
        options: [
            'Equivale a una señal de ALTO',
            'Siga con precaución',
            'Acelere para pasar',
            'El semáforo está arruinado'
        ],
        answer: 0,
        explanation: 'Luz roja intermitente obliga a detenerse por completo antes de continuar.'
    },
    {
        id: 32,
        type: 'multiple-choice',
        topic: 'Reincidencia',
        question: '¿En qué tiempo se cuenta la reincidencia para suspender la licencia?',
        options: ['En un periodo de 12 meses', 'En un periodo de 5 años', 'En toda la vida', 'En 6 meses'],
        answer: 0,
        explanation: 'La reincidencia se evalúa usualmente en el lapso de un año (12 meses).'
    },
    {
        id: 33,
        type: 'fill-in-selection',
        topic: 'Arcén',
        question: 'Uso del arcén:',
        sentence: 'Está prohibido circular por el arcén, excepto para ________ o emergencias.',
        blanks: ['peatones'],
        options: ['peatones', 'camiones', 'carreras', 'adelantar'],
        explanation: 'El arcén es para peatones, ciclistas o vehículos averiados.'
    },
    {
        id: 34,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué forma tienen las señales de PREVENCIÓN?',
        options: ['Circular', 'Octagonal', 'Rombo (Diamante)', 'Rectangular'],
        answer: 2,
        explanation: 'La mayoría de señales preventivas tienen forma de rombo amarillo.'
    },
    {
        id: 35,
        type: 'multiple-choice',
        topic: 'Multas e Infracciones',
        question: '¿Qué categoría de infracción es usar el celular mientras se conduce?',
        options: ['Leve', 'Administrativa', 'Peligrosa', 'Mayor Peligrosidad'],
        answer: 2,
        explanation: 'El uso de dispositivos de comunicación es una infracción Peligrosa.'
    },
    {
        id: 36,
        type: 'multiple-choice',
        topic: 'Red Vial',
        question: '¿Cuál es la velocidad máxima permitida en zonas escolares?',
        options: ['45 km/h', '25 km/h', '60 km/h', '15 km/h'],
        answer: 1,
        explanation: 'En zonas escolares y hospitales, el límite máximo es de 25 km/h.'
    },
    {
        id: 37,
        type: 'multiple-choice',
        topic: 'Tipos de vehículos',
        question: '¿Hasta qué capacidad de pasajeros cubre la licencia de Categoría 3 (Liviana)?',
        options: [
            'Hasta 5 personas',
            'Hasta 9 personas (incluyendo conductor)',
            'Hasta 15 personas',
            'Cualquier cantidad'
        ],
        answer: 1,
        explanation: 'La licencia Categoría 3 cubre vehículos livianos de hasta 9 pasajeros.'
    },
    {
        id: 38,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué significa la luz amarilla continua del semáforo?',
        options: [
            'Acelere para pasar rápido',
            'Deténgase si puede hacerlo con seguridad',
            'Siga normalmente',
            'Espera a que se ponga verde'
        ],
        answer: 1,
        explanation: 'La luz amarilla avisa el cambio a rojo y ordena detenerse.'
    },
    {
        id: 39,
        type: 'fill-in-writing',
        topic: 'Boletas de infracción',
        question: '¿Cómo se le llama a la boleta que recibes por una infracción grave y que no permite conducir más de 24h?',
        placeholder: 'Ej: Boleta...',
        answer: ['roja', 'boleta roja'],
        explanation: 'Es la boleta roja, usada para infracciones severas o retenciones.'
    },
    {
        id: 40,
        type: 'multiple-choice',
        topic: 'Rotonda',
        question: 'Si quieres salir en la primera salida de una rotonda, ¿en qué carril debes situarte?',
        options: ['Carril izquierdo', 'Carril derecho', 'Cualquiera', 'En medio'],
        answer: 1,
        explanation: 'Para salir pronto (derecha o recto) se usa el carril externo/derecho.'
    },
    {
        id: 41,
        type: 'multiple-choice',
        topic: 'Niveles de alcolemia',
        question: '¿Qué examen mide el alcohol en el aire expirado?',
        options: ['Alcoholemia', 'Alcoholimetría', 'Examen de sangre', 'Narcotest'],
        answer: 1,
        explanation: 'Alcoholimetría es el aire, Alcoholemia es la sangre.'
    },
    {
        id: 42,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué indica una señal de "Ceda el Paso"?',
        options: [
            'Detenerse obligatoriamente siempre',
            'Disminuir velocidad y dar paso si vienen vehículos',
            'Acelerar para entrar primero',
            'Ignorar si no hay policías'
        ],
        answer: 1,
        explanation: 'Ceda el paso no obliga a detenerse si la vía está despejada.'
    },
    {
        id: 43,
        type: 'multiple-choice',
        topic: 'Vehículos de régimen preferente',
        question: '¿Pueden estos vehículos pasarse un semáforo en rojo?',
        options: [
            'No, nunca',
            'Sí, siempre',
            'Sí, bajo su responsabilidad y con señales de emergencia',
            'Solo si es policía'
        ],
        answer: 2,
        explanation: 'Pueden hacerlo en emergencia, reduciendo velocidad y asegurando el paso.'
    },
    {
        id: 44,
        type: 'fill-in-selection',
        topic: 'Conducción Temeraria',
        question: 'Aventajamiento peligroso:',
        sentence: 'Aventajar en ________ o puentes es una causa de conducción temeraria.',
        blanks: ['curvas'],
        options: ['curvas', 'rectas', 'pistas', 'calles'],
        explanation: 'Adelantar donde no hay visibilidad es sumamente peligroso.'
    },
    {
        id: 45,
        type: 'multiple-choice',
        topic: 'Multas e Infracciones',
        question: '¿Cuál es la multa por tirar basura desde un vehículo?',
        options: ['Leve', 'Administrativa', 'Peligrosa', 'No hay multa'],
        answer: 1,
        explanation: 'Arrojar basura a la vía pública es una infracción Administrativa.'
    },
    {
        id: 46,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué significan las señales con fondo NARANJA?',
        options: ['Turismo', 'Zona de obras o construcción', 'Peligro permanente', 'Servicios'],
        answer: 1,
        explanation: 'El naranja indica condiciones temporales por trabajos en la vía.'
    },
    {
        id: 47,
        type: 'multiple-choice',
        topic: 'Red Vial',
        question: '¿Cuál es la velocidad máxima en carreteras de circunvalación (pistas)?',
        options: ['45 km/h', '60 km/h', '80 km/h', '100 km/h'],
        answer: 1,
        explanation: 'Usualmente en áreas urbanas principales el límite es 60 km/h.'
    },
    {
        id: 48,
        type: 'multiple-choice',
        topic: 'Tipos de vehículos',
        question: '¿Qué es un "Vehículo de Tracción Animal"?',
        options: ['Un tractor', 'Un carretón halado por caballos', 'Un perro con correa', 'Una bicicleta'],
        answer: 1,
        explanation: 'Vehículos movidos por animales, comunes en zonas rurales.'
    },
    {
        id: 49,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué indica una señal circular con borde rojo y fondo blanco?',
        options: ['Advertencia', 'Prohibición o Restricción', 'Información', 'Recomendación'],
        answer: 1,
        explanation: 'Las circulares con borde rojo son señales Reglamentarias de prohibición.'
    },
    {
        id: 50,
        type: 'fill-in-writing',
        topic: 'Ley 431',
        question: '¿Cómo se llama la ley principal de tránsito en Nicaragua?',
        placeholder: 'Ej: Ley...',
        answer: ['ley 431', '431'],
        explanation: 'Es la Ley 431, Ley para el Régimen de Circulación Vehicular.'
    },
    {
        id: 51,
        type: 'multiple-choice',
        topic: 'Rotonda',
        question: '¿Es permitido aventajar dentro de una rotonda?',
        options: ['Sí, si hay espacio', 'No, está prohibido', 'Solo a motocicletas', 'Solo de noche'],
        answer: 1,
        explanation: 'Dentro de la rotonda se debe mantener el carril, no aventajar.'
    },
    {
        id: 52,
        type: 'multiple-choice',
        topic: 'Niveles de alcolemia',
        question: '¿Cuál es la sanción por Embriaguez Extrema (> 2.0 g/l)?',
        options: [
            'Solo multa',
            'Multa, arresto y suspensión de licencia',
            'Llamada de atención',
            'Trabajo comunitario'
        ],
        answer: 1,
        explanation: 'La embriaguez extrema conlleva sanciones penales y administrativas severas.'
    },
    {
        id: 53,
        type: 'multiple-choice',
        topic: 'Multas e Infracciones',
        question: '¿Qué infracción es conducir con la licencia vencida?',
        options: ['Administrativa', 'Peligrosa', 'Mayor Peligrosidad', 'Ninguna'],
        answer: 1,
        explanation: 'Conducir con documento vencido es una infracción Peligrosa.'
    },
    {
        id: 54,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué indica una señal con una flecha en "U" tachada con una línea roja?',
        options: ['Permitido girar en U', 'Prohibido girar en U', 'Camino curvo', 'Retorno a 500m'],
        answer: 1,
        explanation: 'La línea roja diagonal siempre indica prohibición.'
    },
    {
        id: 55,
        type: 'multiple-choice',
        topic: 'Red Vial',
        question: '¿Quién tiene prioridad en un cruce de vías de igual jerarquía sin señales?',
        options: [
            'El que viene por la derecha',
            'El que viene por la izquierda',
            'El vehículo más grande',
            'El que pita primero'
        ],
        answer: 0,
        explanation: 'En cruces no señalizados, la prioridad es del vehículo que aparece por la derecha.'
    },
    {
        id: 56,
        type: 'multiple-choice',
        topic: 'Vehículos de régimen preferente',
        question: '¿Qué distancia mínima se debe mantener al seguir a un vehículo de emergencia?',
        options: ['10 metros', '50 metros', '100 metros', 'No hay regla'],
        answer: 1,
        explanation: 'Se recomienda mantener al menos 50 metros para no estorbar sus maniobras.'
    },
    {
        id: 57,
        type: 'fill-in-selection',
        topic: 'Señalizaciones',
        question: 'Señales de piso:',
        sentence: 'Las flechas pintadas en el pavimento son señales ________.',
        blanks: ['horizontales'],
        options: ['horizontales', 'verticales', 'luminosas', 'sonoras'],
        explanation: 'Toda señalización en el suelo se llama horizontal.'
    },
    {
        id: 58,
        type: 'multiple-choice',
        topic: 'Conducción Temeraria',
        question: '¿Es conducción temeraria aventajar en una pendiente?',
        options: ['Sí, si es de forma indolente', 'No, es normal', 'Solo si el camión es lento', 'Solo si no hay rallas'],
        answer: 0,
        explanation: 'Aventajar en pendientes sin visibilidad es conducción temeraria.'
    },
    {
        id: 59,
        type: 'multiple-choice',
        topic: 'Multas e Infracciones',
        question: '¿Cuál es la multa por no portar el seguro obligatorio?',
        options: ['Leve', 'Administrativa', 'Peligrosa', 'Mayor Peligrosidad'],
        answer: 2,
        explanation: 'No tener seguro es una infracción de Mayor Peligrosidad.'
    },
    {
        id: 60,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué significa un oficial de tránsito de espaldas a usted?',
        options: ['Siga', 'Alto', 'Acelere', 'Gire a la izquierda'],
        answer: 1,
        explanation: 'El oficial de espaldas o de frente equivale a luz roja (ALTO).'
    },
    {
        id: 61,
        type: 'multiple-choice',
        topic: 'Red Vial',
        question: '¿En qué lado de la calzada se debe circular normalmente?',
        options: ['Izquierdo', 'Derecho', 'Centro', 'Cualquiera'],
        answer: 1,
        explanation: 'En Nicaragua la circulación es por el carril derecho.'
    },
    {
        id: 62,
        type: 'multiple-choice',
        topic: 'Tipos de vehículos',
        question: '¿Qué define a un "Vehículo de Régimen Preferente"?',
        options: [
            'Cualquier carro de lujo',
            'Vehículos destinados a servicios de urgencia públicos o privados',
            'Carros del gobierno únicamente',
            'Autobuses escolares'
        ],
        answer: 1,
        explanation: 'Son vehículos de urgencia como ambulancias, bomberos y policía.'
    },
    {
        id: 63,
        type: 'multiple-choice',
        topic: 'Señalizaciones',
        question: '¿Qué indican las señales informativas de color CAFÉ?',
        options: ['Restaurantes', 'Sitios de interés turístico o recreativo', 'Gasolineras', 'Talleres'],
        answer: 1,
        explanation: 'El color café (marrón) es exclusivo para turismo y recreación.'
    },
    {
        id: 64,
        type: 'fill-in-writing',
        topic: 'Multas',
        question: '¿Cuál es la validez de la Boleta Amarilla (en días)?',
        placeholder: 'Ej: 10',
        answer: ['30', 'treinta'],
        explanation: 'La boleta amarilla tiene una validez legal de 30 días.'
    },
    {
        id: 65,
        type: 'multiple-choice',
        topic: 'Conducción Temeraria',
        question: '¿A quién protege primordialmente la Ley 431?',
        options: ['A los carros', 'A la vida y la integridad física de las personas', 'A los policías', 'A las carreteras'],
        answer: 1,
        explanation: 'El fin supremo es la protección de la vida humana en la vía.'
    },
    {
        id: 66,
        type: 'fill-in-selection',
        topic: 'Niveles de alcolemia',
        question: 'Selecciona los 3 estados de embriaguez según la concentración de alcohol:',
        sentence: '1. De 0.5 a 1.0 g/l: ________. 2. De 1.1 a 2.0 g/l: ________. 3. Más de 2.0 g/l: ________.',
        blanks: ['Embriaguez Ligera', 'Estado de Embriaguez', 'Embriaguez Extrema'],
        options: ['Embriaguez Ligera', 'Estado de Embriaguez', 'Embriaguez Extrema', 'Sobriedad', 'Mareo'],
        explanation: 'La Ley 431 define estos tres niveles específicos para determinar la gravedad de la infracción.'
    },
    {
        id: 67,
        type: 'fill-in-selection',
        topic: 'Niveles de alcolemia',
        question: 'Completa los rangos y nombres de la Ley 431:',
        sentence: '1. Embriaguez Ligera: de ________ a 1.0 g/l. 2. Estado de ________: de 1.1 a 2.0 g/l. 3. Embriaguez ________: superior a 2.0 g/l.',
        blanks: ['0.5', 'Embriaguez', 'Extrema'],
        options: ['0.5', 'Embriaguez', 'Extrema', '0.2', 'Severa', 'Moderada'],
        explanation: 'Dominar tanto los nombres como los rangos numéricos es vital para el examen teórico.'
    },
    {
        id: 68,
        type: 'multiple-choice',
        topic: 'Rotonda',
        question: '¿Cuándo se deben activar las luces direccionales en una rotonda?',
        options: [
            'Al entrar únicamente',
            'Al salir únicamente',
            'Al entrar para indicar dirección y al salir para avisar la maniobra',
            'No es necesario usarlas'
        ],
        answer: 2,
        explanation: 'Se usan al entrar para indicar si vas a la derecha o izquierda (carril) y obligatoriamente al salir.'
    },
    {
        id: 69,
        type: 'multiple-choice',
        topic: 'Rotonda',
        question: 'Si vas a realizar un giro de 270 grados (girar a la izquierda) en una rotonda, ¿qué carril debes ocupar?',
        options: [
            'El carril derecho (externo)',
            'El carril izquierdo (interno)',
            'Cualquiera es válido',
            'El arcén'
        ],
        answer: 1,
        explanation: 'Para giros a la izquierda o retornos (U), se debe usar el carril interno.'
    },
    {
        id: 70,
        type: 'multiple-choice',
        topic: 'Rotonda',
        question: '¿Qué debe hacer si pierde su salida en una rotonda?',
        options: [
            'Retroceder con cuidado',
            'Detenerse y esperar que pase el tráfico',
            'Dar otra vuelta completa a la rotonda',
            'Girar a la izquierda bruscamente'
        ],
        answer: 2,
        explanation: 'Nunca retroceda; simplemente de una vuelta adicional hasta llegar de nuevo a su salida.'
    },
    {
        id: 71,
        type: 'multiple-choice',
        topic: 'Rotonda',
        question: '¿Es permitido detenerse dentro del anillo de la rotonda para dejar a un pasajero?',
        options: [
            'Sí, si es rápido',
            'Solo si no vienen carros',
            'Está totalmente prohibido detenerse o estacionarse',
            'Solo en caso de emergencia mecánica'
        ],
        answer: 2,
        explanation: 'La rotonda es una vía de circulación continua; detenerse causa peligro y obstrucción.'
    },
    {
        id: 72,
        type: 'multiple-choice',
        topic: 'Rotonda',
        question: 'Al salir de la rotonda, ¿quién tiene prioridad de paso?',
        options: [
            'El vehículo que sale',
            'Los peatones que cruzan en el paso de cebra de la salida',
            'El vehículo que viene entrando',
            'Nadie tiene prioridad'
        ],
        answer: 1,
        explanation: 'Al salir de cualquier vía, los peatones en el cruce peatonal tienen la prioridad.'
    },
    {
        id: 73,
        type: 'multiple-choice',
        topic: 'Rotonda',
        question: '¿Cuál es la velocidad máxima recomendada al circular dentro de una rotonda urbana?',
        options: [
            '15-30 km/h',
            '60 km/h',
            'Cualquier velocidad',
            '80 km/h'
        ],
        answer: 0,
        explanation: 'Las rotondas requieren velocidades bajas para permitir maniobras seguras de entrada y salida.'
    },
    {
        id: 74,
        type: 'multiple-choice',
        topic: 'Rotonda',
        question: 'Si un vehículo de gran tamaño (tráiler) entra a la rotonda, ¿qué debe considerar?',
        options: [
            'Que el tráiler necesita más espacio y puede ocupar dos carriles',
            'Que debe adelantar al tráiler rápido',
            'Que el tráiler tiene prohibido entrar',
            'Nada en especial'
        ],
        answer: 0,
        explanation: 'Los vehículos largos necesitan un radio de giro mayor; dales espacio suficiente.'
    },
    {
        id: 75,
        type: 'fill-in-writing',
        topic: 'Rotonda',
        question: 'En una rotonda, ¿por qué lado se debe circular siempre?',
        placeholder: 'Ej: Lado...',
        answer: ['derecho', 'la derecha', 'derecha'],
        explanation: 'En Nicaragua la circulación es siempre por la derecha en sentido antihorario.'
    },
    {
        id: 76,
        type: 'multiple-choice',
        topic: 'Reincidencia',
        question: '¿En qué periodo de tiempo se contabilizan las multas para declarar la reincidencia?',
        options: [
            'En un periodo de 6 meses',
            'En un periodo de 12 meses (un año)',
            'En un periodo de 2 años',
            'Durante toda la vida del conductor'
        ],
        answer: 1,
        explanation: 'La reincidencia se evalúa sumando las infracciones cometidas en un lapso de 12 meses.'
    },
    {
        id: 77,
        type: 'multiple-choice',
        topic: 'Reincidencia',
        question: '¿Cuántas infracciones de "Mayor Peligrosidad" en un año causan la suspensión de la licencia?',
        options: [
            '2 infracciones',
            '3 infracciones',
            '5 infracciones',
            '10 infracciones'
        ],
        answer: 1,
        explanation: 'Cometer 3 infracciones de mayor peligrosidad en un año es causal de suspensión por reincidencia.'
    },
    {
        id: 78,
        type: 'multiple-choice',
        topic: 'Reincidencia',
        question: '¿Cuántas infracciones "Peligrosas" (de C$ 500) en un año causan la suspensión de la licencia?',
        options: [
            '3 infracciones',
            '4 infracciones',
            '6 infracciones',
            '8 infracciones'
        ],
        answer: 2,
        explanation: 'Acumular 6 infracciones calificadas como Peligrosas en un año conlleva la suspensión de la licencia.'
    },
    {
        id: 79,
        type: 'fill-in-selection',
        topic: 'Reincidencia',
        question: 'Completa los plazos de suspensión por reincidencia:',
        sentence: '1ra vez: ________ meses. 2da vez: ________ meses. 4ta vez: Cancelación ________.',
        blanks: ['3', '6', 'Definitiva'],
        options: ['3', '6', 'Definitiva', '1', '12', 'Temporal'],
        explanation: 'La ley aplica sanciones progresivas: 3 meses, 6 meses, 1 año y finalmente la cancelación definitiva.'
    },
    {
        id: 80,
        type: 'multiple-choice',
        topic: 'Reincidencia',
        question: '¿Qué requisito adicional debe cumplir un conductor cuya licencia ha sido suspendida por reincidencia?',
        options: [
            'Solo pagar las multas',
            'Recibir un curso de adiestramiento y manejo vial en el Centro de Educación Vial',
            'Vender su vehículo',
            'No hay requisitos adicionales'
        ],
        answer: 1,
        explanation: 'La ley obliga a realizar un curso de reeducación vial antes de recuperar la licencia suspendida.'
    },
    {
        id: 81,
        type: 'fill-in-selection',
        topic: 'Reincidencia',
        question: '¿Cuándo se considera legalmente que existe REINCIDENCIA?',
        sentence: 'Cuando un conductor es multado en un periodo de ________ por cometer ________ infracciones de mayor peligrosidad o ________ peligrosas.',
        blanks: ['un año', 'tres', 'seis'],
        options: ['un año', 'tres', 'seis', 'un mes', 'cinco', 'diez'],
        explanation: 'La reincidencia se hace efectiva al alcanzar estos límites numéricos dentro del mismo año calendario.'
    },
    {
        id: 82,
        type: 'multiple-choice',
        topic: 'Multas e Infracciones',
        question: '¿Cómo clasifica la Ley 431 los tipos de infracciones de tránsito?',
        options: [
            'Leves, Graves y Muy Graves',
            'De Mayor Peligrosidad, Peligrosas y Administrativas',
            'Urbanas, Rurales y de Carretera',
            'Penales y Civiles'
        ],
        answer: 1,
        explanation: 'La Ley 431 utiliza específicamente estas tres categorías: Mayor Peligrosidad, Peligrosas y Administrativas.'
    }
];
