
  const plantas = {
    planta1: {
        imagen: '',
        nombre: 'Lanzaguisantes',
        habilidad: 'Los lanzaguisantes son tu primera línea de defensa. Disparan guisantes a los zombis atacantes.',
        stats: 'Normal',
        info: '¿Cómo puede una sola planta crecer y disparar para muchos guisantes tan rápido? Peashooter dice, "Trabajo duro, compromiso y una saludable, desayuno bien equilibrado de luz solar y dióxido de carbono de alta fibra lo hace todo posible."',
        costo: '100	',
        recarga: 'Rápida'
    },
    planta2: {
        imagen: '',
        nombre: 'Girasol',
        habilidad: 'Los Girasoles son esenciales para producir sol extra. ¡Prueba a plantar tantos comopuedas!',
        stats: '(No hace daño)',
        info: 'El Girasol no puede resistir moverse al son de la melodía. ¿Cuál? La melodía de la orquesta de la vida en la Tierra, una melodía en una frecuencia que solo los Girasoles pueden oir.',
        costo: '50	',
        recarga: 'Rápida'
    },
    planta3: {
        imagen: '',
        nombre: 'Petacereza',
        habilidad: 'La Petacereza hará explotar los zombis de un área. Su alcance es corto, así que plántala en el mogollón.',
        stats: 'Masivo / Alcance: zombis de un área mediana / Uso: único e instantáneo',
        info: '"¡Quiero explotar!", dice la Petacereza. "No, ¡mola más detonar!", dice su hermanita. Tras un intenso debate llegaron a un acuerdo: "¡explonar!"',
        costo: '150	',
        recarga: 'Muy lenta'
    },
    planta4: {
        imagen: '',
        nombre: 'Nuez',
        habilidad: 'Las nueces tienen cáscaras duras que puedes usar para proteger tus otras plantas.',
        stats: '(No hace daño)',
        info: '"La gente se pregunta cómo me siento al ser mordido constantemente por zombis", dice Wall-nut. "Lo que no saben es que, con mis sentidos limitados, solo puedo sentir una especie de hormigueo, como un masaje relajante en la espalda".',
        costo: '50	',
        recarga: 'lenta'
    },
    planta5: {
        imagen: '',
        nombre: 'Patatapum',
        habilidad: 'Patatapum asesta un buen golpe, pero necesita armarse antes, plantala delante de los zombis para que explote al contacto.',
        stats: 'Masivo / Rango: todos los zombis de un área pequeña / Uso: un solo uso, activación retardada',
        info: 'Algunos dicen que Patatapum es muy vaga, que lo deja todo para el último minuto. Ella no dice nada; está muy ocupada planeando estrategias de inversión.',
        costo: '25',
        recarga: 'Lento'
    },
    planta6: {
        imagen: '',
        nombre: 'Hielaguisantes',
        habilidad: 'El hielaguisantes lanza guisantes congelados. Daña y relentiza al enemigo.',
        stats: 'Normal, relentiza zombis',
        info: 'Siempre le dicen que es un tipo "frío", que nunca se "calienta" la cabeza. Y es que no hay nada que lo deje más "helado" de lo que ya está.',
        costo: '175',
        recarga: 'Rápida'
    },
    planta7: {
        imagen: '',
        nombre: 'Planta Carnívora',
        habilidad: 'Las Carnívoras engullen zombis enteros, pero son vulnerables mientras mastican.',
        stats: 'Masivo / Alcance: Muy corto / Especial: Largo intervalo de masticación',
        info: 'Estuvo a punto de conseguir un trabajo como especialista en Hollywood, pero su representante pidió más, demasiado. Planta carnívora no le guarda rencor. "Así es este mundillo".',
        costo: '150	',
        recarga: 'Rápida'
    },
    planta8: {
        imagen: '',
        nombre: 'Repetidora',
        habilidad: 'La Repetidora dispara dos guisantes a la vez.',
        stats: 'Normal (por guisante) / Vel. de disparo: x2',
        info: 'Repetidora es muy dura; se crió en las calles. No consciente chulerías ni a plantas ni a zombis, y dispara guisantes para guardar las distancias. Aunque en verdad, Repetidora está falta de cariño.',
        costo: '200	',
        recarga: 'Rápida'
    },
    



};
document.querySelectorAll('#recutsosimagenes img').forEach(img => {
      img.addEventListener('click', () => {
          const planta = plantas[img.id];
          const descripcion = document.getElementById('descripcion');

          descripcion.innerHTML = `
              <div class="tarjeta-planta">
                  <div class="imagen-planta">
                      <img src="${img.src}" alt="${img.alt}">
                  </div>
                  <h3 class="nombre-planta">${planta.nombre}</h3>

                  <!-- Botón minimizar -->
                  <button id="toggleBtn">Minimizar</button>

                  <div id="detalle-planta" class="detalle-planta">
                      <p class="habilidad">${planta.habilidad}</p>
                      <p class="stats"><strong>Daño:</strong> <span>${planta.stats}</span></p>
                      <p class="info">${planta.info}</p>
                      <p class="extras"><strong>Costo:</strong> <span class="costo">${planta.costo}</span> &nbsp; 
                      <strong>Recarga:</strong> <span class="recarga">${planta.recarga}</span></p>
                  </div>
              </div>
          `;

          const toggleBtn = document.getElementById("toggleBtn");
          const detalle = document.getElementById("detalle-planta");

          toggleBtn.addEventListener("click", () => {
              if (detalle.style.display === "none") {
                  detalle.style.display = "block";
                  toggleBtn.textContent = "Minimizar";
              } else {
                  detalle.style.display = "none";
                  toggleBtn.textContent = "Mostrar";
              }
          });
      });
  });
        