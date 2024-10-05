
export const syllableBank: string[] = [
  "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu",
  "na", "ne", "ni", "no", "nu", "ra", "re", "ri", "ro", "ru",
  "sa", "se", "si", "so", "su", "fa", "fe", "fi", "fo", "fu",
  "ha", "he", "hi", "ho", "hu", "ya", "ye", "yi", "yo", "yu",
  "ba", "be", "bi", "bo", "bu", "pa", "pe", "pi", "po", "pu",
  "ca", "ce", "ci", "co", "cu", "da", "de", "di", "do", "du",
  "ga", "ge", "gi", "go", "gu", "ja", "je", "ji", "jo", "ju",
  "ka", "ke", "ki", "ko", "ku", "la", "le", "li", "lo", "lu",
  "va", "ve", "vi", "vo", "vu", "za", "ze", "zi", "zo", "zu"
];

export function generateName(seedNumber: number | bigint): string {
    const base = BigInt(syllableBank.length);
    let num = BigInt(seedNumber);
    const syllables: string[] = [];

  // Convert the seed number to base-N
  while (num > 0n) {
    const index = Number(num % BigInt(base));
    syllables.unshift(syllableBank[index]);
    num = num / BigInt(base);
  }

  // Limit the name to 2-4 syllables
  const maxSyllables = 4;
  const start = Math.max(0, syllables.length - maxSyllables);
  const nameSyllables = syllables.slice(start);

  // Construct the name
  const name = nameSyllables.join('');
  return name.charAt(0).toUpperCase() + name.slice(1);
}