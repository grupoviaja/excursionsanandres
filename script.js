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
        const commentsInput = document.getElementById('comments');

        // Obtener el radio button seleccionado
        const dateInput = document.querySelector('input[name="dateOption"]:checked');

        if (!nameInput.value || !dateInput) {
            alert('Por favor completa tu nombre y elige una fecha.');
            return;
        }

        const name = nameInput.value.trim();
        const selectedDate = dateInput.value;
        const comments = commentsInput.value.trim();

        // Número de Coordinador de IO (El colaborador que lanza la encuesta)
        // REEMPLAZAR AQUÍ (Código de área + número, sin +, ni espacios)
        const waNumber = '573023907622';

        // Construir Mensaje de WhatsApp
        let text = `🌴 *VOTO: EXCURSIÓN SAN ANDRÉS* 🌴%0A%0A`;
        text += `👤 *Colaborador:* ${name}%0A`;
        text += `🗓️ *Fecha Elegida:* ${selectedDate}%0A`;

        if (comments) {
            text += `💬 *Comentarios Adicionales:* ${comments}%0A`;
        }

        text += `%0A_¡Contando los días para ver el Mar de los 7 Colores!_ ✈️😎`;

        // Crear la URL
        const waURL = `https://wa.me/${waNumber}?text=${text}`;

        // Redirigir a WhatsApp
        window.open(waURL, '_blank');
    });

});
