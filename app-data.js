/**
 * ============================================================
 * STA S.A.C. - Sistema de Gestión Interna
 * Base de Datos Simulada + Autenticación (localStorage)
 * ============================================================
 */

const DB = {
    // ─── ROLES DEL SISTEMA ───
    roles: [
        {
            id: "admin",
            nombre: "Administrador",
            descripcion: "Acceso total al sistema. Puede gestionar usuarios, roles y toda la configuración.",
            color: "#0052cc",
            permisos: ["dashboard", "personal", "personal.crear", "personal.editar", "personal.eliminar", "incidencias", "incidencias.crear", "incidencias.editar", "incidencias.eliminar", "reportes", "reportes.exportar", "usuarios", "usuarios.crear", "usuarios.editar", "usuarios.eliminar", "configuracion"]
        },
        {
            id: "supervisor",
            nombre: "Supervisor",
            descripcion: "Puede ver y gestionar personal e incidencias, pero no puede administrar usuarios.",
            color: "#7b2600",
            permisos: ["dashboard", "personal", "personal.crear", "personal.editar", "incidencias", "incidencias.crear", "incidencias.editar", "reportes", "reportes.exportar"]
        },
        {
            id: "tecnico",
            nombre: "Técnico",
            descripcion: "Puede ver incidencias asignadas y reportar nuevas. Acceso limitado a personal.",
            color: "#555f71",
            permisos: ["dashboard", "personal", "incidencias", "incidencias.crear", "reportes"]
        },
        {
            id: "visor",
            nombre: "Visor (Solo lectura)",
            descripcion: "Solo puede visualizar información. No puede crear, editar ni eliminar nada.",
            color: "#737685",
            permisos: ["dashboard", "personal", "incidencias", "reportes"]
        }
    ],

    // ─── USUARIOS (credenciales de login) ───
    usuarios: [
        {
            id: 1,
            email: "admin@sta.com.pe",
            password: "admin123",
            nombre: "Ricardo Mendoza",
            cargo: "Administrador de Sistemas",
            rol: "admin",
            avatar: "RM",
            activo: true,
            creadoEl: "01/02/2018"
        },
        {
            id: 2,
            email: "carlos@sta.com.pe",
            password: "carlos123",
            nombre: "Carlos Huamán",
            cargo: "Técnico Electricista Senior",
            rol: "tecnico",
            avatar: "CH",
            activo: true,
            creadoEl: "15/03/2019"
        },
        {
            id: 3,
            email: "maria@sta.com.pe",
            password: "maria123",
            nombre: "Maria Rodriguez",
            cargo: "Analista Contable",
            rol: "supervisor",
            avatar: "MR",
            activo: true,
            creadoEl: "22/11/2021"
        },
        {
            id: 4,
            email: "ana@sta.com.pe",
            password: "ana123",
            nombre: "Ana Castillo",
            cargo: "Supervisor de Campo",
            rol: "supervisor",
            avatar: "AC",
            activo: true,
            creadoEl: "10/08/2020"
        },
        {
            id: 5,
            email: "diego@sta.com.pe",
            password: "diego123",
            nombre: "Diego Flores",
            cargo: "Técnico de Redes",
            rol: "tecnico",
            avatar: "DF",
            activo: true,
            creadoEl: "11/07/2021"
        },
        {
            id: 6,
            email: "lucia@sta.com.pe",
            password: "lucia123",
            nombre: "Lucía Vargas",
            cargo: "Asistente de RRHH",
            rol: "visor",
            avatar: "LV",
            activo: false,
            creadoEl: "20/04/2023"
        }
    ],

    // ─── PERSONAL / COLABORADORES ───
    personal: [
        { id: 1, nombre: "Carlos Huamán", dni: "45879231", cargo: "Técnico Electricista Senior", area: "Operaciones", fechaIngreso: "15/03/2019", estado: "Activo" },
        { id: 2, nombre: "Maria Rodriguez", dni: "70124589", cargo: "Analista Contable", area: "Administración", fechaIngreso: "22/11/2021", estado: "Activo" },
        { id: 3, nombre: "Juan Salazar", dni: "09443210", cargo: "Soporte Técnico IT", area: "Sistemas", fechaIngreso: "05/01/2023", estado: "Activo" },
        { id: 4, nombre: "Ana Castillo", dni: "42110987", cargo: "Supervisor de Campo", area: "Operaciones", fechaIngreso: "10/08/2020", estado: "Activo" },
        { id: 5, nombre: "Ricardo Mendoza", dni: "31456789", cargo: "Administrador de Sistemas", area: "Sistemas", fechaIngreso: "01/02/2018", estado: "Activo" },
        { id: 6, nombre: "Patricia López", dni: "48712345", cargo: "Ingeniera de Proyectos", area: "Operaciones", fechaIngreso: "14/06/2022", estado: "Activo" },
        { id: 7, nombre: "Fernando Quispe", dni: "55987612", cargo: "Técnico Mecánico", area: "Operaciones", fechaIngreso: "03/09/2020", estado: "Activo" },
        { id: 8, nombre: "Lucía Vargas", dni: "63214578", cargo: "Asistente de RRHH", area: "Administración", fechaIngreso: "20/04/2023", estado: "Activo" },
        { id: 9, nombre: "Diego Flores", dni: "71856234", cargo: "Técnico de Redes", area: "Sistemas", fechaIngreso: "11/07/2021", estado: "Activo" },
        { id: 10, nombre: "Camila Torres", dni: "44563217", cargo: "Supervisor de Seguridad", area: "Operaciones", fechaIngreso: "28/01/2019", estado: "Activo" },
        { id: 11, nombre: "Andrés Ramos", dni: "38912456", cargo: "Contador General", area: "Administración", fechaIngreso: "15/03/2017", estado: "Activo" },
        { id: 12, nombre: "Valeria Soto", dni: "52341876", cargo: "Analista de Datos", area: "Sistemas", fechaIngreso: "09/10/2022", estado: "Activo" },
        { id: 13, nombre: "Héctor Navarro", dni: "67891234", cargo: "Soldador Especializado", area: "Operaciones", fechaIngreso: "02/05/2018", estado: "Activo" },
        { id: 14, nombre: "Isabella Paredes", dni: "73456189", cargo: "Coordinadora Logística", area: "Administración", fechaIngreso: "17/12/2021", estado: "Activo" },
        { id: 15, nombre: "Martín Chávez", dni: "41278563", cargo: "Electricista de Planta", area: "Operaciones", fechaIngreso: "23/08/2020", estado: "Vacaciones" },
        { id: 16, nombre: "Sofía Delgado", dni: "58943217", cargo: "Desarrolladora Web", area: "Sistemas", fechaIngreso: "06/03/2023", estado: "Activo" },
        { id: 17, nombre: "Jorge Medina", dni: "34567891", cargo: "Técnico de Instrumentación", area: "Operaciones", fechaIngreso: "19/11/2019", estado: "Activo" },
        { id: 18, nombre: "Daniela Rojas", dni: "69123457", cargo: "Asistente Administrativa", area: "Administración", fechaIngreso: "08/02/2022", estado: "Activo" },
        { id: 19, nombre: "Roberto Peña", dni: "47891236", cargo: "Jefe de Mantenimiento", area: "Operaciones", fechaIngreso: "30/06/2016", estado: "Activo" },
        { id: 20, nombre: "Gabriela Muñoz", dni: "53217894", cargo: "Especialista en Seguridad IT", area: "Sistemas", fechaIngreso: "12/09/2022", estado: "Activo" },
        { id: 21, nombre: "Eduardo Campos", dni: "61234578", cargo: "Operador de Maquinaria", area: "Operaciones", fechaIngreso: "25/04/2018", estado: "Activo" },
        { id: 22, nombre: "Natalia Herrera", dni: "78563412", cargo: "Tesorera", area: "Administración", fechaIngreso: "13/07/2020", estado: "Activo" },
        { id: 23, nombre: "Sebastián Luna", dni: "42896315", cargo: "Técnico en Automatización", area: "Operaciones", fechaIngreso: "04/01/2021", estado: "Activo" },
        { id: 24, nombre: "Alejandra Vega", dni: "56789134", cargo: "Coordinadora de TI", area: "Sistemas", fechaIngreso: "21/05/2019", estado: "Activo" },
        { id: 25, nombre: "Oscar Gutiérrez", dni: "38456712", cargo: "Ingeniero Civil", area: "Operaciones", fechaIngreso: "16/10/2017", estado: "Activo" },
        { id: 26, nombre: "Carmen Jiménez", dni: "64571289", cargo: "Jefa de RRHH", area: "Administración", fechaIngreso: "07/03/2016", estado: "Activo" },
        { id: 27, nombre: "Luis Aguilar", dni: "51234867", cargo: "Técnico de CCTV", area: "Sistemas", fechaIngreso: "18/08/2022", estado: "Activo" },
        { id: 28, nombre: "Rosa Espinoza", dni: "47123856", cargo: "Ingeniera Ambiental", area: "Operaciones", fechaIngreso: "29/11/2020", estado: "Activo" },
        { id: 29, nombre: "Pablo Morales", dni: "35891247", cargo: "Chofer de Maquinaria", area: "Operaciones", fechaIngreso: "10/04/2019", estado: "Licencia" },
        { id: 30, nombre: "Elena Díaz", dni: "62347891", cargo: "Asistente de Gerencia", area: "Administración", fechaIngreso: "22/06/2021", estado: "Activo" },
        { id: 31, nombre: "Rodrigo Suárez", dni: "49876213", cargo: "Técnico de Fibra Óptica", area: "Sistemas", fechaIngreso: "05/12/2022", estado: "Activo" },
        { id: 32, nombre: "Milagros Ponce", dni: "57213486", cargo: "Supervisora de Calidad", area: "Operaciones", fechaIngreso: "14/09/2018", estado: "Activo" }
    ],

    // ─── INCIDENCIAS ───
    incidencias: [
        { id: "INC-402", titulo: "Fallo en servidor de base de datos - Sede Lima", solicitante: "Juan Pérez", fecha: "24 Oct 2023", prioridad: "Alta", estado: "Pendiente", categoria: "Soporte Técnico", descripcion: "El servidor principal ha dejado de responder a las peticiones SQL desde las 08:45 AM.", asignado: "Carlos Mendoza" },
        { id: "INC-401", titulo: "Error de autenticación en módulo de planillas", solicitante: "Maria García", fecha: "23 Oct 2023", prioridad: "Media", estado: "En Proceso", categoria: "Software / ERP", descripcion: "Los usuarios no pueden ingresar al módulo de planillas. Error 403.", asignado: "Juan Salazar" },
        { id: "INC-398", titulo: "Actualización de firmware routers sucursal Arequipa", solicitante: "Carlos Ruíz", fecha: "20 Oct 2023", prioridad: "Baja", estado: "Resuelto", categoria: "Infraestructura", descripcion: "Se requiere actualizar firmware de 3 routers Cisco en la sucursal de Arequipa.", asignado: "Diego Flores" },
        { id: "INC-395", titulo: "Solicitud de acceso a reportes gerenciales", solicitante: "Ana Torres", fecha: "18 Oct 2023", prioridad: "Media", estado: "Cerrado", categoria: "Software / ERP", descripcion: "Se solicita acceso al módulo de reportes para la gerencia de operaciones.", asignado: "Ricardo Mendoza" },
        { id: "INC-393", titulo: "Falla eléctrica en Planta B - sector 4", solicitante: "Fernando Quispe", fecha: "16 Oct 2023", prioridad: "Alta", estado: "En Proceso", categoria: "Infraestructura", descripcion: "Se detectó caída de voltaje intermitente en el sector 4 de Planta B.", asignado: "Carlos Huamán" },
        { id: "INC-390", titulo: "Impresora HP no responde en oficina central", solicitante: "Lucía Vargas", fecha: "14 Oct 2023", prioridad: "Baja", estado: "Resuelto", categoria: "Soporte Técnico", descripcion: "La impresora HP LaserJet del piso 3 no imprime desde hace 2 días.", asignado: "Juan Salazar" },
        { id: "INC-388", titulo: "Alarma de intrusión falsa en almacén norte", solicitante: "Camila Torres", fecha: "12 Oct 2023", prioridad: "Media", estado: "Cerrado", categoria: "Infraestructura", descripcion: "El sistema de alarma se activó sin motivo aparente en el almacén norte.", asignado: "Luis Aguilar" },
        { id: "INC-385", titulo: "Software ERP no carga módulo de inventarios", solicitante: "Isabella Paredes", fecha: "10 Oct 2023", prioridad: "Alta", estado: "Pendiente", categoria: "Software / ERP", descripcion: "El módulo de inventarios del ERP muestra error 500 al intentar cargarlo.", asignado: "Sofía Delgado" },
        { id: "INC-382", titulo: "Cámara de seguridad fuera de línea - Entrada principal", solicitante: "Roberto Peña", fecha: "08 Oct 2023", prioridad: "Alta", estado: "Pendiente", categoria: "Infraestructura", descripcion: "La cámara IP de la entrada principal dejó de transmitir video.", asignado: "Luis Aguilar" },
        { id: "INC-380", titulo: "Solicitud de VPN para teletrabajo", solicitante: "Elena Díaz", fecha: "06 Oct 2023", prioridad: "Baja", estado: "Resuelto", categoria: "Soporte Técnico", descripcion: "Se necesita configurar VPN para 3 usuarios en modalidad remota.", asignado: "Diego Flores" }
    ],

    // ─── ACTIVIDAD RECIENTE (para dashboard) ───
    actividad: [
        { icono: "person_add", titulo: "Nuevo colaborador registrado", detalle: "Juan Pérez - Área Técnica", tiempo: "HACE 2 HORAS" },
        { icono: "report", titulo: "Incidencia reportada", detalle: "Falla de equipo en Planta A", tiempo: "HACE 4 HORAS", esError: true },
        { icono: "schedule", titulo: "Horas extra aprobadas", detalle: "Proyecto Minera Las Bambas", tiempo: "AYER, 18:30" },
        { icono: "description", titulo: "Planilla enviada a revisión", detalle: "Quincena Agosto - Sector B", tiempo: "AYER, 14:15" },
        { icono: "check_circle", titulo: "Incidencia INC-398 resuelta", detalle: "Firmware actualizado en Arequipa", tiempo: "HACE 2 DÍAS" }
    ],

    // ─── REPORTES KPI ───
    reportes: {
        totalIncidencias: 1284,
        tiempoRespuesta: "2.4h",
        costosOperativos: "S/ 42.5k",
        eficienciaEquipo: "94.2%"
    }
};

// ════════════════════════════════════════════
// MÓDULO DE AUTENTICACIÓN
// ════════════════════════════════════════════

const Auth = {
    /**
     * Intenta hacer login. Devuelve el usuario si las credenciales son válidas.
     */
    login(email, password) {
        const user = DB.usuarios.find(
            u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
        );
        if (!user) {
            return { success: false, message: "Correo o contraseña incorrectos." };
        }
        if (!user.activo) {
            return { success: false, message: "Tu cuenta está desactivada. Contacta al administrador." };
        }
        const rolObj = DB.roles.find(r => r.id === user.rol);
        const session = {
            id: user.id,
            email: user.email,
            nombre: user.nombre,
            cargo: user.cargo,
            rol: user.rol,
            rolNombre: rolObj ? rolObj.nombre : user.rol,
            avatar: user.avatar,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem("sta_session", JSON.stringify(session));
        return { success: true, user: session };
    },

    /**
     * Cierra la sesión.
     */
    logout() {
        localStorage.removeItem("sta_session");
        window.location.href = "login.html";
    },

    /**
     * Devuelve la sesión actual, o null si no hay.
     */
    getSession() {
        const data = localStorage.getItem("sta_session");
        return data ? JSON.parse(data) : null;
    },

    /**
     * Verifica que el usuario esté logueado. Si no, redirige al login.
     */
    requireAuth() {
        const session = this.getSession();
        if (!session) {
            window.location.href = "login.html";
            return null;
        }
        return session;
    },

    /**
     * Verifica si el usuario actual es admin.
     */
    isAdmin() {
        const session = this.getSession();
        return session && session.rol === "admin";
    },

    /**
     * Verifica si el usuario tiene un permiso específico.
     */
    hasPermission(permiso) {
        const session = this.getSession();
        if (!session) return false;
        const rol = DB.roles.find(r => r.id === session.rol);
        return rol ? rol.permisos.includes(permiso) : false;
    },

    /**
     * Devuelve el objeto rol completo del usuario actual.
     */
    getCurrentRole() {
        const session = this.getSession();
        if (!session) return null;
        return DB.roles.find(r => r.id === session.rol) || null;
    }
};

// ════════════════════════════════════════════
// HELPERS DE NAVEGACIÓN
// ════════════════════════════════════════════

/**
 * Configura la navegación del sidebar y el botón de logout.
 * activePage: nombre de la página activa
 */
function setupNavigation(activePage) {
    const session = Auth.getSession();
    if (!session) return;

    // Actualizar nombre/avatar del usuario en el header
    document.querySelectorAll("[data-user-avatar]").forEach(el => {
        el.textContent = session.avatar;
    });
    document.querySelectorAll("[data-user-name]").forEach(el => {
        el.textContent = session.nombre;
    });
    document.querySelectorAll("[data-user-role]").forEach(el => {
        el.textContent = session.rolNombre || session.rol;
    });

    // Inyectar link "Usuarios" en el sidebar SOLO para admins
    if (session.rol === "admin") {
        document.querySelectorAll("nav").forEach(nav => {
            const reportesLink = nav.querySelector('a[href*="reportes"]');
            if (reportesLink && !nav.querySelector('a[href*="usuarios"]')) {
                const isActive = activePage === "usuarios";
                const link = document.createElement("a");
                link.href = "usuarios.html";
                link.className = isActive
                    ? reportesLink.className.replace(/text-on-surface-variant/, "").replace(/hover:bg-surface-container-highest/, "") + " bg-primary-container text-on-primary-container font-bold border-2 border-on-surface rounded-xl"
                    : reportesLink.className;
                link.innerHTML = '<span class="material-symbols-outlined">admin_panel_settings</span><span class="font-body-md">Usuarios</span>';
                reportesLink.insertAdjacentElement("afterend", link);
            }
        });
    }

    // Ocultar elementos que requieren permisos específicos
    document.querySelectorAll("[data-permiso]").forEach(el => {
        if (!Auth.hasPermission(el.dataset.permiso)) {
            el.style.display = "none";
        }
    });

    // Configurar botones de logout
    document.querySelectorAll("[data-action='logout']").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            Auth.logout();
        });
    });
}

/**
 * Muestra un toast/notification temporal.
 */
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `fixed top-4 right-4 z-[9999] px-6 py-3 rounded-lg shadow-lg text-white font-semibold text-sm transition-all duration-300 transform translate-x-full`;
    toast.style.background = type === "success" ? "#0052cc" : type === "error" ? "#ba1a1a" : "#555f71";
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove("translate-x-full");
        toast.classList.add("translate-x-0");
    });

    setTimeout(() => {
        toast.classList.remove("translate-x-0");
        toast.classList.add("translate-x-full");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
