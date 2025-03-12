const nodemailer = require("nodemailer");
const QRCode = require("qrcode");


const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: "SoporteTI@hausmann.es",
        pass: "fpdxqncwjbttwjrw"
    },
    tls: {
        ciphers: "SSLv3"
    }
});


const enviarCorreoConQRBase64 = async (to, subject, text, data) => {
    try {
        
        const qrBase64 = await QRCode.toDataURL(JSON.stringify(data));

        
        const mailOptions = {
            from: "SoporteTI@hausmann.es",
            to,
            subject,
            text,
            html: `
                <p>${text}</p>
                <p><strong>Código QR:</strong></p>
                <img src="${qrBase64}" width="350" height="350" />
            `
        };

       
        const info = await transporter.sendMail(mailOptions);
        console.log(" Correo enviado:", info.response);
        return info;
    } catch (error) {
        console.error(" Error al enviar el correo:", error);
        throw error;
    }
};


const visitorData = {
    name: "Rafael Cabezas",
    company: "Samsung",
    reason: "Reunión"
};

enviarCorreoConQRBase64("r.cabezas@hausmann.es", "Tu código QR de acceso", "Aquí tienes tu QR", visitorData);
