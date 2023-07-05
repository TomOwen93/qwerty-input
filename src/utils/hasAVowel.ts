import { isVowel } from "./isVowel";

export function hasAVowel(word: string): boolean {
  for (const character of word) {
    if (isVowel(character)) {
      return true;
    }
  }
  return false;
}
