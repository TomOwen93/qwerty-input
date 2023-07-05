export function isVowel(character: string): boolean {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(character.toLowerCase());
}
