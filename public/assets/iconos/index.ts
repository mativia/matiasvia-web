// Importaciones de iconos
import analistaIcon from './analista.png';
import bpmnIcon from './bpmn.png';
import documentacionIcon from './documentacion.png';
import htmlIcon from './html (1).png';
import interfazUsuarioIcon from './interfaz-de-usuario.png';
import javaIcon from './java.png';
import jiraIcon from './jira.png';
import nodosIaIcon from './nodos-de-ia.png';
import pythonIcon from './piton.png';
import planificacionIcon from './planificacion.png';
import promocionIcon from './promocion (1).png';
import requeridoIcon from './requerido.png';
import scrumIcon from './scrum.png';
import unirIcon from './unir.png';
import wordpressIcon from './wordpress.png';

// Exportación de constantes con nombres descriptivos
export const ICONOS = {
  // Tecnologías de programación
  HTML: htmlIcon,
  JAVA: javaIcon,
  PYTHON: pythonIcon,
  WORDPRESS: wordpressIcon,
  
  // Metodologías y procesos
  BPMN: bpmnIcon,
  SCRUM: scrumIcon,
  JIRA: jiraIcon,
  
  // Roles y competencias
  ANALISTA: analistaIcon,
  PLANIFICACION: planificacionIcon,
  DOCUMENTACION: documentacionIcon,
  REQUERIMIENTOS: requeridoIcon,
  
  // Diseño y UX
  INTERFAZ_USUARIO: interfazUsuarioIcon,
  
  // Inteligencia Artificial
  NODOS_IA: nodosIaIcon,
  
  // Comunicación y marketing
  PROMOCION: promocionIcon,
  
  // Otros
  UNIR: unirIcon,
} as const;

// Exportación individual para casos específicos
export {
  analistaIcon,
  bpmnIcon,
  documentacionIcon,
  htmlIcon,
  interfazUsuarioIcon,
  javaIcon,
  jiraIcon,
  nodosIaIcon,
  pythonIcon,
  planificacionIcon,
  promocionIcon,
  requeridoIcon,
  scrumIcon,
  unirIcon,
  wordpressIcon,
};

// Tipos para TypeScript
export type IconoKey = keyof typeof ICONOS;
export type IconoValue = typeof ICONOS[IconoKey];