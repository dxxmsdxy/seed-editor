
export const syllableBank: string[] = [
  "aur", "ora", "iri", "elo", "elo", "ala", "ele", "ili", "olo", "ulu",
  "lumi", "luma", "nora", "nori", "lora", "lori", "cora", "cori", "sora", "sori",
  "kira", "kiri", "mira", "miri", "tira", "tiri", "vira", "viri", "zira", "ziri",
  "pura", "puri", "dura", "duri", "gura", "guri", "bura", "buri", "fura", "furi",
  "jura", "juri", "cura", "curi", "hura", "huri", "yura", "yuri", "wura", "wuri",
  "ra", "re", "ri", "ro", "ru", "la", "le", "li", "lo", "lu",
  "dia", "dio", "dea", "deo", "nia", "nio", "nea", "neo", "tia", "tio",
  "kia", "kio", "zia", "zio", "via", "vio", "ria", "rio", "pia", "pio"
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