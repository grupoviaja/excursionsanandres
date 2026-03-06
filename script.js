document.addEventListener('DOMContentLoaded', () => {

    // --- 1. COUNTDOWN LOGIC ---
    // Definiendo fecha de cierre: En 10 días desde hoy (puedes ajustar esta fecha hardcoded)
    let countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 10);
    countDownDate.setHours(23, 59, 59);

    const ds = document.getElementById("days");
    const hs = document.getElementById("hours");
    const ms = document.getElementById("minutes");

    if (ds && hs && ms) {
        const x = setInterval(function () {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            ds.innerHTML = days < 10 ? "0" + days : days;
            hs.innerHTML = hours < 10 ? "0" + hours : hours;
            ms.innerHTML = minutes < 10 ? "0" + minutes : minutes;

            if (distance < 0) {
                clearInterval(x);
                ds.innerHTML = "00";
                hs.innerHTML = "00";
                ms.innerHTML = "00";
            }
        }, 1000);
    }


    // --- 2. WHATSAPP GENERATOR LOGIC ---
    const form = document.getElementById('voteForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const commentsInput = document.getElementById('comments');

        // Obtener el radio button seleccionado
        const dateInput = document.querySelector('input[name="dateOption"]:checked');

        if (!nameInput.value || !phoneInput.value || !dateInput) {
            alert('Por favor completa tu nombre, número de WhatsApp y elige un mes.');
            return;
        }

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const selectedDate = dateInput.value;
        const comments = commentsInput.value.trim();

        // Número de Coordinador de IO que recibe la encuesta
        const waNumber = '573023907622';

        // Construir Mensaje de WhatsApp
        let text = `🌴 *INTERÉS: EXCURSIÓN SAN ANDRÉS* 🌴%0A%0A`;
        text += `👤 *Nombre:* ${name}%0A`;
        text += `📱 *WhatsApp:* ${phone}%0A`;
        text += `🗓️ *Mes Elegido:* ${selectedDate}%0A`;

        if (comments) {
            text += `💬 *Comentarios:* ${comments}%0A`;
        }

        text += `%0A_¡Listo para conocer el Mar de los 7 Colores!_ ✈️😎`;

        // Crear la URL
        const waURL = `https://wa.me/${waNumber}?text=${text}`;

        // Redirigir a WhatsApp
        window.open(waURL, '_blank');
    });

});
