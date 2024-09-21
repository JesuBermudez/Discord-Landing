import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import qrimage from "@/assets/image.png";
import discord from "@/assets/discord-icon-2048x1570-y371emu6.png";

import { motion } from "framer-motion";
import { AlertTriangle, Mail, Shield } from "lucide-react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("app");
  const isVisible = true;

  function onSubmit() {
    setState("warning");
    console.log("ua");
  }

  return state == "app" ? (
    <div className="min-h-screen min-w-[100vw] bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <img src={discord} alt="DiscordIcon" className="w-9" />
        <h1 className="text-white text-2xl font-bold tracking-wider">
          Discord
        </h1>
      </div>
      <Card className="w-full max-w-md bg-[#36393f] text-white border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            ¡Te damos la bienvenida de nuevo!
          </CardTitle>
          <p className="text-[#b9bbbe] text-center">
            ¡Nos alegra verte de nuevo!
          </p>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-[#b9bbbe] uppercase"
                >
                  Correo electrónico o número de teléfono
                </label>
                <Input
                  id="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#202225] border-none text-white placeholder-[#72767d]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-[#b9bbbe] uppercase"
                >
                  Contraseña
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#202225] border-none text-white placeholder-[#72767d]"
                />
              </div>
              <a href="#" className="text-xs text-[#00b0f4] hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white"
            onClick={onSubmit}
          >
            Iniciar sesión
          </Button>
          <p className="text-sm text-[#72767d]">
            ¿Necesitas una cuenta?{" "}
            <a href="#" className="text-[#00b0f4] hover:underline">
              Registrarse
            </a>
          </p>
        </CardFooter>
      </Card>
      <div className="absolute bottom-4 right-4 text-center">
        <div className="bg-[#36393f] p-4 rounded-lg">
          <img
            src={qrimage}
            alt="QR Code"
            className="w-32 h-32 mx-auto mb-2 rounded"
          />
          <h3 className="text-lg font-semibold text-white mb-1">código QR</h3>
          <p className="text-sm text-[#b9bbbe]">
            Escanea el código con la aplicación
            <br />
            para dispositivos móviles de
            <br />
            Discord para iniciar sesión de
            <br />
            inmediato.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen min-w-[100vw] bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          className="flex justify-center mb-6"
        >
          <AlertTriangle className="text-yellow-500 w-20 h-20" />
        </motion.div>
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
          ¡HEY, TEN CUIDADO!
        </h1>
        <p className="text-xl text-center mb-8 text-gray-700">
          Siempre verifica los correos electrónicos antes de hacer clic. Puedes
          ser víctima de phishing.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-100 p-4 rounded-full"
          >
            <Mail className="text-blue-500 w-8 h-8" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-100 p-4 rounded-full"
          >
            <Shield className="text-green-500 w-8 h-8" />
          </motion.div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
          onClick={() =>
            alert("Eso va manito, ya sabes, a la proxima te robo...")
          }
        >
          Entendido, ¡estaré alerta!
        </motion.button>
      </motion.div>
    </div>
  );
}
