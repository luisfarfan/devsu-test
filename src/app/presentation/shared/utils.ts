export const formatIsoDate = (isoString: string) => {
  const date = new Date(isoString);

  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Los meses en JavaScript van de 0 a 11, por lo que sumamos 1.
  const year = date.getUTCFullYear();

  return `${year}-${month}-${day}`;
};
