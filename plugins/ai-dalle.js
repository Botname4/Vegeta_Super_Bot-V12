import fetch from 'node-fetch'; // Asegúrate de importar fetch

// Definición del objeto de lenguaje
const lenguaje = {
    lengua: {
        ia2: 'Por favor, utiliza el comando de esta forma:',
        espere: 'Por favor, espera un momento mientras generamos la imagen...',
        error: 'Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.',
        apiError: 'Error en la API: {error}'
    }
};

const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (command == 'dalle' || command == 'aimg' || command == 'imagine' || command == 'dall-e') {
        if (!text) return m.reply(`${lenguaje.lengua.ia2} ${usedPrefix + command} gatitos llorando`);
        m.reply(`${lenguaje.lengua.espere}`);

        const imageSources = [
            `https://api.dorratz.com/v2/image-ai?prompt=${encodeURIComponent(text)}`,
            `https://vihangayt.me/tools/imagine?q=${text}`,
            `https://vihangayt.me/tools/midjourney?q=${text}`,
            `https://vihangayt.me/tools/lexicaart?q=${text}`,
            `https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`
        ];

        for (const url of imageSources) {
            try {
                const response = await fetch(url);

                // Verifica si la respuesta fue exitosa
                if (!response.ok) {
                    const errorDetails = await response.text();
                    throw new Error(`Error en la respuesta de la API ${url}: ${errorDetails}`);
                }

                const json = await response.json();

                let imageUrl;

                if (url.includes('dorratz')) {
                    imageUrl = json.data; // Ajusta según la estructura de la respuesta de la API
                } else if (url.includes('vihangayt')) {
                    if (json.data && Array.isArray(json.data)) {
                        imageUrl = json.data[0].images[0].url; // Para lexicaart
                    } else {
                        imageUrl = json.data; // Otras respuestas
                    }
                } else if (url.includes('lolhuman')) {
                    imageUrl = json.data; // Ajusta según la estructura de la respuesta de la API
                }

                // Envía la imagen generada
                await conn.sendMessage(m.chat, {
                    image: {
                        url: imageUrl
                    }
                }, {
                    quoted: m,
                    ephemeralExpiration: 24 * 60 * 100,
                    disappearingMessagesInChat: 24 * 60 * 100
                });

                return; // Salimos del bucle si se envió la imagen
            } catch (error) {
                console.log(`Error al procesar la solicitud para la URL: ${url}`, error);
                await m.reply(lenguaje.lengua.apiError.replace('{error}', error.message)); // Mensaje de error específico
            }
        }

        // Si no se pudo obtener ninguna imagen
        return m.reply(lenguaje.lengua.error);
    }
}

// Configuración del comando
handler.command = ['dalle', 'aimg', 'imagine', 'dall-e'];
handler.help = ['dalle', 'aimg', 'imagine', 'dall-e'];
handler.tags = ['ai'];
export default handler;
