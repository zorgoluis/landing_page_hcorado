/* 1️⃣ REGÍMENES FISCALES */
export const REGIMENES_FISCALES = [
  { value: "601", label: "General de Ley Personas Morales" },
  { value: "603", label: "Personas Morales con Fines no Lucrativos" },
  { value: "605", label: "Sueldos y Salarios e Ingresos Asimilados a Salarios" },
  { value: "606", label: "Arrendamiento" },
  { value: "607", label: "Régimen de Enajenación o Adquisición de Bienes" },
  { value: "608", label: "Demás ingresos" },
  { value: "610", label: "Residentes en el Extranjero sin Establecimiento Permanente en México" },
  { value: "611", label: "Ingresos por Dividendos (socios y accionistas)" },
  { value: "612", label: "Personas Físicas con Actividades Empresariales y Profesionales" },
  { value: "614", label: "Ingresos por intereses" },
  { value: "615", label: "Régimen de los ingresos por obtención de premios" },
  { value: "616", label: "Sin obligaciones fiscales" },
  { value: "620", label: "Sociedades Cooperativas de Producción que optan por diferir sus ingresos" },
  { value: "621", label: "Incorporación Fiscal" },
  { value: "622", label: "Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras" },
  { value: "623", label: "Opcional para Grupos de Sociedades" },
  { value: "624", label: "Coordinados" },
  { value: "625", label: "Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas" },
  { value: "626", label: "Régimen Simplificado de Confianza" }
];

/* 2️⃣ USOS CFDI */
export const USOS_CFDI = [
  { value: "G01", label: "Adquisición de mercancías" },
  { value: "G02", label: "Devoluciones, descuentos o bonificaciones" },
  { value: "G03", label: "Gastos en general" },
  { value: "I01", label: "Construcciones" },
  { value: "I02", label: "Mobiliario y equipo de oficina por inversiones" },
  { value: "I03", label: "Equipo de transporte" },
  { value: "I04", label: "Equipo de cómputo y accesorios" },
  { value: "I05", label: "Dados, troqueles, moldes, matrices y herramental" },
  { value: "I06", label: "Comunicaciones telefónicas" },
  { value: "I07", label: "Comunicaciones satelitales" },
  { value: "I08", label: "Otra maquinaria y equipo" },
  { value: "D01", label: "Honorarios médicos, dentales y gastos hospitalarios" },
  { value: "D02", label: "Gastos médicos por incapacidad o discapacidad" },
  { value: "D03", label: "Gastos funerales" },
  { value: "D04", label: "Donativos" },
  { value: "D05", label: "Intereses reales por créditos hipotecarios (casa habitación)" },
  { value: "D06", label: "Aportaciones voluntarias al SAR" },
  { value: "D07", label: "Primas por seguros de gastos médicos" },
  { value: "D08", label: "Gastos de transportación escolar obligatoria" },
  { value: "D09", label: "Depósitos para el ahorro o planes de pensiones" },
  { value: "D10", label: "Pagos por servicios educativos (colegiaturas)" },
  { value: "P01", label: "Por definir" }
];

/* 3️⃣ MATRIZ DE COMPATIBILIDAD SAT */
export const COMPATIBILIDAD_SAT = {
  "601": ["G01","G02","G03","I01","I02","I03","I04","I05","I06","I07","I08","P01"],
  "603": ["G01","G02","G03","P01"],
  "605": ["D01","D02","D03","D04","D05","D06","D07","D08","D09","D10","P01"],
  "606": ["G01","G02","G03","P01"],
  "607": ["G01","G02","G03","P01"],
  "608": ["G01","G02","G03","P01"],
  "610": ["G01","G02","G03","P01"],
  "611": ["G01","G02","G03","P01"],
  "612": ["G01","G02","G03","I01","I02","I03","I04","I05","I06","I07","I08","P01"],
  "614": ["G01","G02","G03","P01"],
  "615": ["G01","G02","G03","P01"],
  "616": ["P01"],
  "620": ["G01","G02","G03","P01"],
  "621": ["G01","G02","G03","P01"],
  "622": ["G01","G02","G03","P01"],
  "623": ["G01","G02","G03","P01"],
  "624": ["G01","G02","G03","P01"],
  "625": ["G01","G02","G03","P01"],
  "626": ["G01","G02","G03","P01"]
};

/* 4️⃣ FUNCIÓN LISTA PARA SELECT DEPENDIENTE */
export function obtenerUsosPorRegimen(regimenValue) {
  const permitidos = COMPATIBILIDAD_SAT[regimenValue] || [];
  return USOS_CFDI.filter(u => permitidos.includes(u.value));
}