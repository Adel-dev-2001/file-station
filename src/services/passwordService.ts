export class PasswordService {
  private static instance: PasswordService;

  private constructor() {}

  public static getInstance(): PasswordService {
    if (!PasswordService.instance) {
      PasswordService.instance = new PasswordService();
    }
    return PasswordService.instance;
  }

  /**
   * Generates a strong random password based on options.
   * @param length Number of characters
   * @param options Object detailing which groups to include (uppercase, lowercase, numbers, symbols)
   * @returns Generated password string
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
    let chars = '';
    if (options.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (options.numbers) chars += '0123456789';
    if (options.symbols) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (chars === '') {
      return '';
    }

    let generated = '';
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      generated += chars[array[i] % chars.length];
    }
    return generated;
  }
}

export const passwordService = PasswordService.getInstance();
