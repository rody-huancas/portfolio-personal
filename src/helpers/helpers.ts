export const formatearFecha = (fecha: string): string => {
  const fechaNueva = new Date(fecha);

  const opciones: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};
