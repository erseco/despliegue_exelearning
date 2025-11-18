import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Server, Box, Database, Settings, Key, Shield, Upload, Play, LayoutTemplate, Link as LinkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeBlock } from './components/CodeBlock';
import { TechIcon } from './components/TechIcon';
import { SlideData } from './types';

// Logo Constants
const LOGO_EXE = "https://raw.githubusercontent.com/exelearning/exelearning/main/public/images/logo_readme.png";
const LOGO_DOCKER = "https://cdn.simpleicons.org/docker/2496ED";
const LOGO_PHP = "https://cdn.simpleicons.org/php/777BB4";
const LOGO_NGINX = "https://cdn.simpleicons.org/nginx/009639";
const LOGO_ANSIBLE = "https://cdn.simpleicons.org/ansible/EE0000";
const LOGO_SQLITE = "https://cdn.simpleicons.org/sqlite/003B57";
const LOGO_MARIADB = "https://cdn.simpleicons.org/mariadb/003545";
const LOGO_POSTGRES = "https://cdn.simpleicons.org/postgresql/4169E1";
const LOGO_ALPINE = "https://cdn.simpleicons.org/alpinelinux/0D597F";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides: SlideData[] = [
    {
      id: 0,
      layout: 'center',
      content: (
        <div className="flex flex-col items-center text-center space-y-8">
          <img src={LOGO_EXE} alt="eXeLearning" className="h-24 md:h-32 mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Despliegue con Docker y Ansible
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Cómo pasar del código a una instancia lista para usar en producción.
          </p>
          <div className="flex gap-6 mt-12">
            <TechIcon name="Docker" src={LOGO_DOCKER} size={48} />
            <TechIcon name="PHP 8.4" src={LOGO_PHP} size={48} />
            <TechIcon name="Nginx" src={LOGO_NGINX} size={48} />
            <TechIcon name="Ansible" src={LOGO_ANSIBLE} size={48} />
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Objetivos de la sesión",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <Box className="w-8 h-8 text-blue-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-300">Requisitos</h3>
                <p className="text-slate-400">Entender qué necesita eXeLearning para funcionar en servidor.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <Server className="w-8 h-8 text-purple-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-purple-300">Arquitectura</h3>
                <p className="text-slate-400">Análisis del contenedor y su estructura interna.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
             <div className="flex items-start gap-4 p-6 bg-green-500/10 rounded-xl border border-green-500/20">
              <Settings className="w-8 h-8 text-green-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-green-300">Configuración</h3>
                <p className="text-slate-400">Gestión mediante variables de entorno (.env).</p>
              </div>
            </div>
             <div className="flex items-start gap-4 p-6 bg-orange-500/10 rounded-xl border border-orange-500/20">
              <Play className="w-8 h-8 text-orange-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-orange-300">Despliegue</h3>
                <p className="text-slate-400">Docker puro, Compose y automatización con Ansible.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Requisitos Básicos",
      content: (
        <div className="flex flex-col justify-center h-full space-y-8">
          <ul className="space-y-6 text-lg md:text-2xl text-slate-300 pl-8">
            <li className="flex items-center gap-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              Servidor Linux (ej. Ubuntu 24.04 LTS)
            </li>
            <li className="flex items-center gap-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <strong>Docker Engine</strong> instalado y corriendo
            </li>
            <li className="flex items-center gap-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              Acceso a Internet (pull de imágenes)
            </li>
          </ul>
          <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-r-xl mt-8">
            <p className="text-yellow-200 text-lg">
              <strong className="block mb-2 uppercase tracking-wider text-xs">Idea Clave</strong>
              Toda la aplicación vive en contenedores. No instalamos PHP ni Nginx en el sistema host ("bare metal").
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Arquitectura del Contenedor",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative w-full max-w-4xl aspect-video bg-slate-800/50 rounded-2xl border border-slate-700 p-8 flex flex-col items-center justify-between">
            {/* Host Label */}
            <div className="absolute top-4 left-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
              Container Context (Alpine Linux)
            </div>

            {/* Tech Stack Row */}
            <div className="flex justify-center gap-8 mb-8 z-10">
              <TechIcon name="PHP 8.4-FPM" src={LOGO_PHP} className="bg-slate-800 w-32" />
              <TechIcon name="Nginx" src={LOGO_NGINX} className="bg-slate-800 w-32" />
              <TechIcon name="Alpine" src={LOGO_ALPINE} className="bg-slate-800 w-32" />
            </div>

            {/* Connection Lines (CSS Art) */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent my-4"></div>

            <div className="grid grid-cols-3 gap-8 w-full text-center">
               <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                 <h4 className="text-blue-400 font-bold mb-2">Nginx</h4>
                 <p className="text-sm text-slate-400">Proxy frontal & Estáticos</p>
               </div>
               <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                 <h4 className="text-purple-400 font-bold mb-2">Symfony</h4>
                 <p className="text-sm text-slate-400">Lógica de negocio</p>
               </div>
               <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                 <h4 className="text-teal-400 font-bold mb-2">Mercure</h4>
                 <p className="text-sm text-slate-400">Tiempo real</p>
               </div>
            </div>
          </div>
          <p className="mt-6 text-slate-400 text-center">
            Configuración mediante variables de entorno. Datos en volúmenes persistentes.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Bases de Datos Soportadas",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-center">
          <div className="flex flex-col items-center p-8 bg-slate-800/50 rounded-2xl border border-blue-500/30 hover:border-blue-500 transition-colors group">
            <img src={LOGO_SQLITE} alt="SQLite" className="h-24 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-bold text-blue-300 mb-2">SQLite</h3>
            <p className="text-center text-sm text-slate-400">
              Ideal para desarrollo, pruebas rápidas y despliegues pequeños. Sin contenedor extra.
            </p>
          </div>
          
          <div className="flex flex-col items-center p-8 bg-slate-800/50 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-colors group">
             <img src={LOGO_MARIADB} alt="MariaDB" className="h-24 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-bold text-amber-300 mb-2">MariaDB / MySQL</h3>
            <p className="text-center text-sm text-slate-400">
              El estándar para producción clásica. Requiere un contenedor adicional.
            </p>
          </div>

          <div className="flex flex-col items-center p-8 bg-slate-800/50 rounded-2xl border border-indigo-500/30 hover:border-indigo-500 transition-colors group">
             <img src={LOGO_POSTGRES} alt="PostgreSQL" className="h-24 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-bold text-indigo-300 mb-2">PostgreSQL</h3>
            <p className="text-center text-sm text-slate-400">
              Robusto y avanzado. Alternativa excelente si ya tienes infraestructura Postgres.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Configuración: .env",
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center h-full">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold text-slate-200">El flujo de configuración</h3>
            <ol className="space-y-4 list-decimal list-inside text-slate-300">
              <li className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                Localizar <code className="text-pink-400">.env.dist</code> en la raíz del repositorio.
              </li>
              <li className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                Copiar a <code className="text-green-400">.env</code>.
              </li>
              <li className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                Ajustar valores según el entorno (Producción vs Desarrollo).
              </li>
            </ol>
          </div>
          <div className="flex-1 w-full">
            <CodeBlock 
              title=".env example"
              code={`# Entorno
APP_ENV=prod
APP_SECRET=change_me_in_prod

# Base de Datos
DB_DRIVER=pdo_mysql
DB_HOST=db
DB_PORT=3306
DB_NAME=exelearning
DB_USER=root
DB_PASSWORD=secret

# Rutas
BASE_PATH=/exelearning`} 
            />
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Variables Clave: Núcleo",
      content: (
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="grid gap-4">
            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 flex justify-between items-center">
              <code className="text-lg font-bold text-blue-400">APP_ENV</code>
              <span className="text-slate-300">prod / dev / test</span>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-red-500 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <code className="text-lg font-bold text-red-400">APP_SECRET</code>
                <Shield className="text-red-400 w-5 h-5" />
              </div>
              <p className="text-sm text-slate-400">¡OBLIGATORIO cambiar en producción! Se usa para firmas criptográficas.</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-green-500 flex justify-between items-center">
              <code className="text-lg font-bold text-green-400">APP_PORT</code>
              <span className="text-slate-300">Puerto expuesto (ej. 8080)</span>
            </div>
             <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <code className="text-lg font-bold text-purple-400">BASE_PATH</code>
              </div>
              <p className="text-sm text-slate-400">
                Vacío para raíz, o <code>/curso</code> para subdirectorios.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Variables Clave: Autenticación",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="mb-8 text-center">
            <h3 className="text-2xl text-slate-300 mb-4">Métodos de acceso soportados</h3>
            <code className="bg-slate-900 px-4 py-2 rounded-lg text-yellow-400 border border-yellow-500/30 text-lg">
              APP_AUTH_METHODS=password,cas,openid,guest
            </code>
          </div>
          
          <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
              <Key className="w-8 h-8 text-yellow-400 mb-4" />
              <h4 className="text-lg font-bold text-white">Password</h4>
              <p className="text-slate-400 text-sm">Base de datos local de usuarios.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <Shield className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-bold text-white">CAS</h4>
              <p className="text-slate-400 text-sm">Central Authentication Service (Institucional).</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
              <LinkIcon className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-lg font-bold text-white">OpenID Connect</h4>
              <p className="text-slate-400 text-sm">Google, Microsoft, Auth0, etc.</p>
            </div>
             <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
              <LayoutTemplate className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="text-lg font-bold text-white">Guest</h4>
              <p className="text-slate-400 text-sm">Acceso anónimo/temporal.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Quick Start: Docker Run",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <p className="text-xl text-slate-300">Para pruebas rápidas y demos instantáneas:</p>
          <CodeBlock 
            code="docker run --pull always -p 8081:8080 exelearning/exelearning:main"
            title="Terminal - Quick Start"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-4">
            <div className="p-4 border-l-2 border-blue-500 bg-slate-800/50">
              <h4 className="font-bold text-blue-400">--pull always</h4>
              <p className="text-sm text-slate-400">Garantiza usar la última versión disponible.</p>
            </div>
            <div className="p-4 border-l-2 border-green-500 bg-slate-800/50">
              <h4 className="font-bold text-green-400">http://localhost:8081</h4>
              <p className="text-sm text-slate-400">Acceso desde el navegador.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Despliegue con Docker Compose",
      content: (
        <div className="flex flex-col md:flex-row gap-8 h-full">
           <div className="flex-1 flex flex-col justify-center space-y-6">
            <p className="text-lg text-slate-300">
              Ubicado en la carpeta <code className="bg-slate-700 px-2 py-1 rounded text-sm">doc/deploy</code> del repositorio.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Database className="text-amber-400" size={20} />
                <span>Versiones para MariaDB, Postgres, SQLite.</span>
              </li>
              <li className="flex items-center gap-3">
                <Box className="text-blue-400" size={20} />
                <span>Volúmenes pre-configurados.</span>
              </li>
            </ul>
           </div>
           <div className="flex-1 flex flex-col justify-center">
            <CodeBlock 
              title="Bash"
              code={`# 1. Preparar configuración
cp doc/deploy/docker-compose.mariadb.yml docker-compose.yml
cp .env.dist .env

# 2. Editar variables
vim .env

# 3. Arrancar
docker compose up -d`}
            />
           </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Automatización con Ansible",
      content: (
        <div className="flex flex-col items-center h-full">
          <div className="flex items-center gap-6 mb-8">
             <img src={LOGO_ANSIBLE} alt="Ansible" className="w-16 h-16" />
             <div className="text-3xl font-bold text-slate-200">+</div>
             <img src={LOGO_EXE} alt="eXe" className="h-12" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="bg-slate-800 p-6 rounded-xl border border-red-500/20">
              <h4 className="text-red-400 font-bold mb-2 text-lg">Playbook</h4>
              <code className="text-xs block mb-2 bg-slate-900 p-2 rounded text-slate-300">playbook-exelearning-ubuntu.yaml</code>
              <p className="text-sm text-slate-400">Configura servidor, instala Docker, gestiona servicios.</p>
            </div>
             <div className="bg-slate-800 p-6 rounded-xl border border-blue-500/20">
              <h4 className="text-blue-400 font-bold mb-2 text-lg">Template</h4>
              <code className="text-xs block mb-2 bg-slate-900 p-2 rounded text-slate-300">.env.j2</code>
              <p className="text-sm text-slate-400">Genera el archivo .env dinámicamente basado en variables de Ansible.</p>
            </div>
             <div className="bg-slate-800 p-6 rounded-xl border border-green-500/20">
              <h4 className="text-green-400 font-bold mb-2 text-lg">Makefile</h4>
              <code className="text-xs block mb-2 bg-slate-900 p-2 rounded text-slate-300">make deploy-remote</code>
              <p className="text-sm text-slate-400">Comandos rápidos para despliegues locales (Multipass) o remotos.</p>
            </div>
          </div>

           <div className="mt-8 w-full max-w-3xl">
             <CodeBlock 
                title="Despliegue Remoto"
                code={`make deploy-remote
# O manual:
ansible-playbook -i "192.168.1.100," -u ubuntu playbook-exelearning-ubuntu.yaml`} 
             />
           </div>
        </div>
      )
    },
    {
      id: 11,
      title: "Recursos",
      layout: 'center',
      content: (
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-bold text-white">¿Preguntas?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            <a href="https://github.com/exelearning/exelearning" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-all">
              <div className="bg-white text-slate-900 p-2 rounded-full">
                <Box size={24} />
              </div>
              <div>
                <div className="font-bold text-white">GitHub Repo</div>
                <div className="text-sm text-slate-400">Código fuente y Docs</div>
              </div>
            </a>
            
             <a href="http://exelearning.github.io/exelearning" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-all">
              <div className="bg-blue-500 text-white p-2 rounded-full">
                <LinkIcon size={24} />
              </div>
              <div>
                <div className="font-bold text-white">Web Oficial</div>
                <div className="text-sm text-slate-400">Manuales y descargas</div>
              </div>
            </a>
          </div>
        </div>
      )
    }
  ];

  // Handle Navigation
  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(c => c + 1);
    }
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(c => c - 1);
    }
  }, [currentSlide]);

  // Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="h-screen w-screen bg-[#0f172a] text-slate-100 flex flex-col overflow-hidden relative selection:bg-blue-500/30">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="flex justify-between items-center p-6 z-20 relative">
        <div className="flex items-center gap-3">
           <img src={LOGO_EXE} alt="logo" className="h-8 md:h-10 opacity-90" />
           <span className="text-sm font-mono text-slate-500 border-l border-slate-700 pl-3 ml-3">
             Deployment Guide
           </span>
        </div>
        <div className="text-sm text-slate-500 font-mono">
          {currentSlide + 1} / {slides.length}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative flex items-center justify-center px-4 md:px-16 lg:px-24 z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full max-w-6xl flex flex-col"
          >
            {slides[currentSlide].title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
                {slides[currentSlide].title}
              </h2>
            )}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
               {slides[currentSlide].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls (Bottom) */}
      <footer className="p-6 z-20 flex justify-center items-center gap-8 relative">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-500 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm border border-slate-700"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Progress Bar */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-500 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm border border-slate-700"
        >
          <ChevronRight size={24} />
        </button>
      </footer>
    </div>
  );
}
