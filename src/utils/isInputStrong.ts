const specials = ["!", "£", "?", "*", "&"];

export function isInputStrong(string: string): boolean {
  if (hasCase(string) && hasSpecialCase(string) && string.length >= 7) {
    return true;
  } else {
    return false;
  }
}

export function hasCase(string: string): boolean {
  const containsUpperCase = Array.from(string).some(
    (char) => char === char.toUpperCase() && !specials.includes(char)
  );
  const containsLowerCase = Array.from(string).some(
    (char) => char === char.toLowerCase() && !specials.includes(char)
  );

  return containsLowerCase && containsUpperCase ? true : false;
}

export function hasSpecialCase(string: string): boolean {
  if (specials.some((char) => string.includes(char))) {
    return true;
  } else {
    return false;
  }
}

console.log(hasCase("!!!??*"));

export default isInputStrong;
