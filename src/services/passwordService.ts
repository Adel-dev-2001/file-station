export class PasswordService {
  private static instance: PasswordService;

  private constructor() {}

  public static getInstance(): PasswordService {
    if (!PasswordService.instance) {
      PasswordService.instance = new PasswordService();
    }
    return PasswordService.instance;
  }

  /** Uses rejection sampling so character selection has no modulo bias. */
  private randomInt(maxExclusive: number): number {
    if (!Number.isInteger(maxExclusive) || maxExclusive < 1 || maxExclusive > 0x1_0000_0000) {
      throw new RangeError("maxExclusive must be an integer between 1 and 2^32");
    }

    const range = 0x1_0000_0000;
    const limit = Math.floor(range / maxExclusive) * maxExclusive;
    const sample = new Uint32Array(1);
    do {
      window.crypto.getRandomValues(sample);
    } while (sample[0] >= limit);

    return sample[0] % maxExclusive;
  }

  /**
   * Generates a strong random password based on options.
   * At least one character from each selected character group is guaranteed.
   * @param length Number of characters (the UI offers 6–64 characters)
   */
  public generatePassword(
    length: number,
    options: {
      uppercase: boolean;
      lowercase: boolean;
      numbers: boolean;
      symbols: boolean;
    }
  ): string {
    if (!Number.isInteger(length) || length < 6 || length > 64) {
      return "";
    }

    const groups: string[] = [];
    if (options.uppercase) groups.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (options.lowercase) groups.push("abcdefghijklmnopqrstuvwxyz");
    if (options.numbers) groups.push("0123456789");
    if (options.symbols) groups.push("!@#$%^&*()_+~`|}{[]:;?><,./-=");

    if (groups.length === 0 || groups.length > length) {
      return "";
    }

    const allCharacters = groups.join("");
    const characters = groups.map((group) => group[this.randomInt(group.length)]);

    while (characters.length < length) {
      characters.push(allCharacters[this.randomInt(allCharacters.length)]);
    }

    // Secure Fisher–Yates shuffle prevents predictable positions for the required groups.
    for (let i = characters.length - 1; i > 0; i--) {
      const j = this.randomInt(i + 1);
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }

    return characters.join("");
  }
}

export const passwordService = PasswordService.getInstance();
