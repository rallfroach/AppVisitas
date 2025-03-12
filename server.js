const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fs = require("fs");
const QRCode = require("qrcode");

const app = express();
app.use(express.json({ limit: "5mb" }));
app.use(cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    credentials: true,
}));

// 📌 Configurar Nodemailer con Office 365
const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: "SoporteTI@hausmann.es",
        pass: "fpdxqncwjbttwjrw"
    },
    tls: { ciphers: "SSLv3" }
});

// 📌 Endpoint para generar y enviar el QR usando `cid`
app.post("/send-email", async (req, res) => {
    const { email, encryptedData } = req.body;

    if (!email || !encryptedData) {
        return res.status(400).json({ error: "Faltan datos." });
    }

    try {
        // 📌 Generar código QR como imagen temporal
        const qrPath = "./qrcode.png"; // Guardamos la imagen temporalmente
        await QRCode.toFile(qrPath, encryptedData, { width: 350 });

        // 📧 Configurar correo con la imagen embebida (`cid`)
        const mailOptions = {
            from: "SoporteTI@hausmann.es",
            to: email,
            subject: "Tu Código QR - Acceso Autorizado",
            text: "Escanea el código QR para tu acceso.",
            html: `
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta http-equiv="Content-Language" content="es">
                <table style="width: 100%; background-color: white !important; padding: 20px; border-radius: 10px; text-align: center;">
                    <tr>
                        <td style="padding: 20px;">
                            <p><strong>Escanea este código QR:</strong></p>
                            <table style="width: 500px; height: 50px; border: 5px solid white !important; text-align: center;">
                                <tr>
                                    <span>
                                        <img src="cid:qrcode"
                                            width="450"
                                            height="450"
                                            style="
                                                display: block; 
                                                width: 700px !important; 
                                                max-width: 700px !important; 
                                                height: 700px !important; 
                                                border: 15px solid white !important;
                                            " />
                                    </span>
                                </tr>
                            </table>    
                        </td>
                    </tr>
                </table>
            <div style ="text-align: center;" >
                <p><strong>Este codigo le permitira anunciar su visita en la organizacion:</strong></p>
                <p><strong>Este codigo le permitira anunciar su visita en la organizacion:</strong></p>
                <p><strong>Este codigo le permitira anunciar su visita en la organizacion:</strong></p>
                <p><strong>Este codigo le permitira anunciar su visita en la organizacion:</strong></p>
                <p><strong>Este codigo le permitira anunciar su visita en la organizacion:</strong></p>
            </div>
            `,
            attachments: [
                {
                    filename: "qrcode.png",
                    path: qrPath,
                    cid: "qrcode" // 👈 Se referencia en el HTML con "cid:qrcode"
                }
            ]
        };
        
        
        await transporter.sendMail(mailOptions);
        console.log("📧 Correo enviado correctamente.");

        // Eliminar la imagen después de enviarla
        fs.unlinkSync(qrPath);

        res.json({ message: "Correo enviado correctamente." });
    } catch (error) {
        console.error("❌ Error al enviar el correo:", error);
        res.status(500).json({ error: "Error al enviar el correo." });
    }
});

// Iniciar servidor en el puerto 4000
app.listen(4000, () => {
    console.log("🚀 Servidor corriendo en http://localhost:4000");
});
