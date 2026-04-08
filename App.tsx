import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Server, Box, Database, Settings, Key, Shield, LayoutTemplate, Link as LinkIcon, Zap, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeBlock } from './components/CodeBlock';
import { TechIcon } from './components/TechIcon';
import { SlideData } from './types';

// Logo Constants
const LOGO_EXE = "https://raw.githubusercontent.com/exelearning/exelearning/main/public/images/logo_readme.png";
const LOGO_DOCKER = "https://cdn.simpleicons.org/docker/2496ED";
const LOGO_BUN = "https://cdn.simpleicons.org/bun/F4C430";
const LOGO_TYPESCRIPT = "https://cdn.simpleicons.org/typescript/3178C6";
const LOGO_NGINX = "https://cdn.simpleicons.org/nginx/009639";
const LOGO_REDIS = "https://cdn.simpleicons.org/redis/DC382D";
const LOGO_SQLITE = "https://cdn.simpleicons.org/sqlite/003B57";
const LOGO_MARIADB = "https://cdn.simpleicons.org/mariadb/003545";
const LOGO_POSTGRES = "https://cdn.simpleicons.org/postgresql/4169E1";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides: SlideData[] = [
    // Slide 0 - Cover
    {
      id: 0,
      layout: 'center',
      content: (
        <div className="flex flex-col items-center text-center space-y-8">
          <img src={LOGO_EXE} alt="eXeLearning" className="h-24 md:h-32 mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Despliegue de eXeLearning
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Stack moderno · Colaboración en tiempo real · Listo para producción
          </p>
          <div className="flex gap-8 mt-8 flex-wrap justify-center">
            <TechIcon name="Bun" src={LOGO_BUN} size={48} />
            <TechIcon name="TypeScript" src={LOGO_TYPESCRIPT} size={48} />
            <TechIcon name="Docker" src={LOGO_DOCKER} size={48} />
            <TechIcon name="Redis" src={LOGO_REDIS} size={48} />
            <TechIcon name="Nginx" src={LOGO_NGINX} size={48} />
          </div>
        </div>
      )
    },

    // Slide 1 - Docker
    {
      id: 1,
      title: "Despliegue con Docker",
      content: (
        <div className="flex flex-col justify-center h-full gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8">
            <div className="w-full bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Imagen oficial</div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-slate-900 rounded-xl border border-blue-500/40 text-center">
                  <img src={LOGO_DOCKER} alt="Docker" className="h-10 mx-auto mb-2" />
                  <div className="text-blue-300 font-bold">Docker</div>
                  <div className="text-xs text-slate-400 mt-1">GHCR y Docker Hub</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-cyan-500/40 text-center">
                  <img src={LOGO_BUN} alt="Bun" className="h-10 mx-auto mb-2" />
                  <div className="text-cyan-300 font-bold">Contenedor único</div>
                  <div className="text-xs text-slate-400 mt-1">Listo para arrancar</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-purple-500/40 text-center">
                  <Zap className="w-10 h-10 text-purple-400 mx-auto mb-2" />
                  <div className="text-purple-300 font-bold">Multi-arquitectura</div>
                  <div className="text-xs text-slate-400 mt-1">amd64 y arm64</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700 flex items-center gap-3">
                  <Database className="text-amber-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm text-slate-300">SQLite para demo · Postgres/MariaDB para producción</span>
                </div>
                <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700 flex items-center gap-3">
                  <Shield className="text-green-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm text-slate-300">Password, CAS, OpenID y modo guest</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <p className="text-lg text-slate-300 mb-4">Arranque rápido con la imagen publicada:</p>
                <CodeBlock
                  code={`docker run -p 8080:8080 exelearning/exelearning`}
                  title="Terminal"
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 border-l-2 border-blue-500 bg-slate-800/50 rounded-r-lg">
                  <h4 className="font-bold text-blue-400 mb-1">Acceso inicial</h4>
                  <p className="text-sm text-slate-400">http://localhost:8080 · user@exelearning.net · 1234</p>
                </div>
                <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                  <p className="text-yellow-200 text-sm">
                    <strong>Nota:</strong> Este arranque usa SQLite y está pensado para demo; en producción conviene Docker Compose con base de datos externa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3 - Bases de Datos
    {
      id: 3,
      title: "Bases de Datos Soportadas",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-center">
          <div className="flex flex-col items-center p-8 bg-slate-800/50 rounded-2xl border border-blue-500/30 hover:border-blue-500 transition-colors group">
            <img src={LOGO_SQLITE} alt="SQLite" className="h-20 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-bold text-blue-300 mb-2">SQLite</h3>
            <p className="text-center text-sm text-slate-400 mb-4">
              La opción más simple para demos y pruebas.
            </p>
            <code className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">docker-compose.sqlite.yml</code>
          </div>

          <div
            className="flex flex-col items-center p-8 bg-slate-800/50 rounded-2xl border border-indigo-500/50 hover:border-indigo-500 transition-colors group relative"
            aria-label="PostgreSQL, opción recomendada"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">RECOMENDADO</div>
            <img src={LOGO_POSTGRES} alt="PostgreSQL" className="h-20 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-bold text-indigo-300 mb-2">PostgreSQL</h3>
            <p className="text-center text-sm text-slate-400 mb-4">
              La opción recomendada para producción.
            </p>
            <code className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">docker-compose.postgres.yml</code>
          </div>          
          
          <div className="flex flex-col items-center p-8 bg-slate-800/50 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-colors group">
            <img src={LOGO_MARIADB} alt="MariaDB" className="h-20 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-bold text-amber-300 mb-2">MariaDB / MySQL</h3>
            <p className="text-center text-sm text-slate-400 mb-4">
              Buena opción si ya trabajas con este stack.
            </p>
            <code className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">docker-compose.mariadb.yml</code>
          </div>

        </div>
      )
    },

    // Slide 4 - Docker Compose
    {
      id: 4,
      title: "Despliegue con Docker Compose",
      content: (
        <div className="flex flex-col md:flex-row gap-8 h-full">
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <p className="text-lg text-slate-300">
              Ficheros en <code className="bg-slate-700 px-2 py-1 rounded text-sm text-amber-300">doc/deploy/</code> del repositorio.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                <Database className="text-amber-400 flex-shrink-0" size={18} />
                <span className="text-sm">Plantillas para SQLite, MariaDB y PostgreSQL</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                <Box className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-sm">Volúmenes y puertos ya preparados</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                <Shield className="text-green-400 flex-shrink-0" size={18} />
                <span className="text-sm">Variables de entorno listas para ajustar</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                <Settings className="text-purple-400 flex-shrink-0" size={18} />
                <span className="text-sm">El mismo stack también encaja con Ansible</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <CodeBlock
              title="Bash"
              code={`# Descargar configuración
curl -L https://raw.githubusercontent.com/exelearning/\\
exelearning/main/doc/deploy/\\
docker-compose.postgres.yml -o docker-compose.yml

# Ajustar secretos en .env
docker compose up -d`}
            />
          </div>
        </div>
      )
    },

    // Slide 5 - Alta Disponibilidad
    {
      id: 5,
      title: "Alta Disponibilidad (Balanceada)",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <div className="w-full max-w-4xl">
            {/* Architecture Diagram */}
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 mb-4">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {/* Nginx LB */}
                <div className="flex flex-col items-center p-3 bg-slate-900 rounded-xl border border-green-500/50 min-w-[100px]">
                  <img src={LOGO_NGINX} alt="Nginx" className="h-8 mb-1" />
                  <span className="text-xs text-green-300 font-bold">Nginx LB</span>
                  <span className="text-xs text-slate-500">:80</span>
                </div>
                <span className="text-slate-500 text-2xl">→</span>
                {/* Instances */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 p-2 bg-slate-900 rounded-lg border border-blue-500/40">
                    <img src={LOGO_BUN} alt="Bun" className="h-6" />
                    <span className="text-xs text-blue-300">exelearning-1 :8080</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-900 rounded-lg border border-blue-500/40">
                    <img src={LOGO_BUN} alt="Bun" className="h-6" />
                    <span className="text-xs text-blue-300">exelearning-2 :8080</span>
                  </div>
                </div>
                <span className="text-slate-500 text-2xl">↔</span>
                {/* Redis */}
                <div className="flex flex-col items-center p-3 bg-slate-900 rounded-xl border border-red-500/50 min-w-[100px]">
                  <img src={LOGO_REDIS} alt="Redis" className="h-8 mb-1" />
                  <span className="text-xs text-red-300 font-bold">Redis</span>
                  <span className="text-xs text-slate-500">Yjs Sync</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-red-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <img src={LOGO_REDIS} alt="Redis" className="h-5" />
                  <h4 className="font-bold text-red-300 text-sm">Redis — Sincronización Yjs</h4>
                </div>
                <CodeBlock
                  code={`REDIS_HOST=redis
REDIS_PORT=6379
REDIS_PASSWORD=`}
                />
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/20">
                <h4 className="font-bold text-blue-300 text-sm mb-2">⚡ Arrancar stack completo</h4>
                <CodeBlock
                  code={`docker compose \\
  -f docker-compose.redis.yml \\
  up -d

# nginx (LB) en puerto :80
# 2 instancias + Redis + PostgreSQL`}
                />
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7 - Configuración .env
    {
      id: 7,
      title: "Configuración: Variables Clave",
      content: (
        <div className="flex flex-col md:flex-row gap-8 h-full">
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Núcleo</h3>
            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-blue-500 flex justify-between items-center">
              <code className="font-bold text-blue-400">APP_ENV</code>
              <span className="text-slate-400 text-sm">prod / dev / test</span>
            </div>
            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-red-500">
              <div className="flex justify-between items-center">
                <code className="font-bold text-red-400">APP_SECRET</code>
                <Shield className="text-red-400 w-4 h-4" />
              </div>
              <p className="text-xs text-slate-500 mt-1">Cambiar siempre en producción</p>
            </div>
            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-orange-500 flex justify-between items-center">
              <code className="font-bold text-orange-400">API_JWT_SECRET</code>
              <span className="text-slate-400 text-sm">Tokens de API</span>
            </div>
            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-green-500 flex justify-between items-center">
              <code className="font-bold text-green-400">APP_PORT</code>
              <span className="text-slate-400 text-sm">Puerto (default: 8080)</span>
            </div>
            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-purple-500">
              <code className="font-bold text-purple-400">BASE_PATH</code>
              <p className="text-xs text-slate-500 mt-1">Vacío para raíz, o <code>/exelearning</code> para subdirectorio</p>
            </div>
            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-teal-500">
              <code className="font-bold text-teal-400">REDIS_HOST</code>
              <p className="text-xs text-slate-500 mt-1">Vacío = instancia única · <code>redis</code> = despliegue balanceado</p>
            </div>
          </div>
          <div className="flex-1 w-full flex flex-col justify-center">
            <CodeBlock
              title=".env — producción mínima"
              code={`APP_ENV=prod
APP_SECRET=cambia_esto_en_produccion
API_JWT_SECRET=jwt_secret_seguro

# Base de datos (PostgreSQL recomendado)
DB_DRIVER=pdo_pgsql
DB_HOST=db
DB_PORT=5432
DB_NAME=exelearning
DB_USER=exelearning
DB_PASSWORD=password_seguro

# Admin inicial
ADMIN_EMAIL=admin@tuorg.org
ADMIN_PASSWORD=admin_seguro

# Proxy inverso
TRUSTED_PROXIES=private_ranges,REMOTE_ADDR`}
            />
          </div>
        </div>
      )
    },

    // Slide 8 - Autenticación
    {
      id: 8,
      title: "Autenticación",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="mb-6 text-center">
            <p className="text-slate-300 mb-3">Métodos configurables (combinables):</p>
            <code className="bg-slate-900 px-4 py-2 rounded-lg text-yellow-400 border border-yellow-500/30 text-sm">
              APP_AUTH_METHODS=password,cas,openid,guest
            </code>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
            <div className="p-5 bg-slate-800 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
              <Key className="w-7 h-7 text-yellow-400 mb-3" />
              <h4 className="text-base font-bold text-white">Password</h4>
              <p className="text-slate-400 text-sm">Usuarios locales en base de datos.</p>
            </div>
            <div className="p-5 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <Shield className="w-7 h-7 text-blue-400 mb-3" />
              <h4 className="text-base font-bold text-white">CAS</h4>
              <p className="text-slate-400 text-sm">Central Authentication Service institucional.</p>
            </div>
            <div className="p-5 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
              <LinkIcon className="w-7 h-7 text-purple-400 mb-3" />
              <h4 className="text-base font-bold text-white">OpenID Connect</h4>
              <p className="text-slate-400 text-sm">Google, Microsoft, Auth0, Keycloak…</p>
            </div>
            <div className="p-5 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
              <LayoutTemplate className="w-7 h-7 text-green-400 mb-3" />
              <h4 className="text-base font-bold text-white">Guest</h4>
              <p className="text-slate-400 text-sm">Acceso temporal sin registro. Proyectos se limpian automáticamente.</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700 w-full max-w-3xl">
            <p className="text-xs text-slate-400 text-center">
              <strong className="text-slate-300">SSO:</strong> Configura <code className="text-teal-400">TRUSTED_PROXIES</code> si hay proxy inverso.
            </p>
          </div>
        </div>
      )
    },

    // Slide 9 - Proxy Inverso
    {
      id: 9,
      title: "Proxy Inverso con TLS",
      content: (
        <div className="flex flex-col md:flex-row gap-8 h-full">
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <img src={LOGO_NGINX} alt="Nginx" className="h-8" />
              <h3 className="text-xl font-bold text-green-300">Nginx + Let's Encrypt</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <Globe className="w-5 h-5 text-green-400 mb-1" />
                <p className="text-sm text-slate-300">Termina TLS y hace proxy a <code className="text-green-400">:8080</code></p>
              </div>
              <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Zap className="w-5 h-5 text-purple-400 mb-1" />
                <p className="text-sm text-slate-300">Ruta <code className="text-purple-400">/yjs/</code> con soporte <strong>WebSocket upgrade</strong></p>
              </div>
              <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                <Server className="w-5 h-5 text-orange-400 mb-1" />
                <p className="text-sm text-slate-300">Cabeceras <code className="text-orange-400">X-Forwarded-*</code> para SSO correcto</p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              <p className="text-xs text-slate-400">En <code className="text-teal-400">.env</code>:</p>
              <code className="text-xs text-yellow-300 block mt-1">TRUSTED_PROXIES=private_ranges,REMOTE_ADDR</code>
              <code className="text-xs text-yellow-300 block">TRUSTED_HEADERS=x-forwarded-for,x-forwarded-host,x-forwarded-proto</code>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <CodeBlock
              title="nginx.conf — extracto"
              code={`server {
  listen 443 ssl http2;
  server_name exe.ejemplo.org;

  location / {
    proxy_pass http://127.0.0.1:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  # WebSocket Yjs — imprescindible
  location /yjs/ {
    proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 86400;
  }
}`}
            />
          </div>
        </div>
      )
    },

    // Slide 10 - Recursos
    {
      id: 10,
      layout: 'center',
      content: (
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-bold text-white">¿Preguntas?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <a href="https://github.com/exelearning/exelearning" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-all">
              <div className="bg-white text-slate-900 p-2 rounded-full">
                <Box size={22} />
              </div>
              <div>
                <div className="font-bold text-white">GitHub Repo</div>
                <div className="text-sm text-slate-400">Código fuente, issues y docs</div>
              </div>
            </a>

            <a href="https://github.com/exelearning/exelearning/blob/main/doc/deployment.md" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-all">
              <div className="bg-blue-600 text-white p-2 rounded-full">
                <Server size={22} />
              </div>
              <div>
                <div className="font-bold text-white">Guía de Despliegue</div>
                <div className="text-sm text-slate-400">doc/deployment.md</div>
              </div>
            </a>

            <a href="https://github.com/exelearning/exelearning/blob/main/doc/deploy/README.md" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-all">
              <div className="bg-amber-600 text-white p-2 rounded-full">
                <Database size={22} />
              </div>
              <div>
                <div className="font-bold text-white">Docker Compose Files</div>
                <div className="text-sm text-slate-400">doc/deploy/ (sqlite/mariadb/postgres/redis)</div>
              </div>
            </a>

            <a href="https://github.com/exelearning/exelearning/blob/main/.env.dist" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-all">
              <div className="bg-green-600 text-white p-2 rounded-full">
                <Settings size={22} />
              </div>
              <div>
                <div className="font-bold text-white">.env.dist</div>
                <div className="text-sm text-slate-400">Todas las variables de configuración</div>
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
