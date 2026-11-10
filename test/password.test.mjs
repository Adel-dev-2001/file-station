import test from 'node:test';
import assert from 'node:assert';

// Implementation matching passwordService logic for Node runtime testing
function generatePassword(length, options) {
  if (!Number.isInteger(length) || length < 6 || length > 64) {
    return "";
  }

  const groups = [];
  if (options.uppercase) groups.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (options.lowercase) groups.push("abcdefghijklmnopqrstuvwxyz");
  if (options.numbers) groups.push("0123456789");
  if (options.symbols) groups.push("!@#$%^&*()_+~`|}{[]:;?><,./-=");

  if (groups.length === 0 || groups.length > length) {
    return "";
  }

  const allCharacters = groups.join("");
  const characters = groups.map((group) => group[Math.floor(Math.random() * group.length)]);

  while (characters.length < length) {
    characters.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
  }

  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }

  return characters.join("");
}

test('Password Generator - Length bounds and character options', (t) => {
  // Test valid length 16 with all options enabled
  const pass = generatePassword(16, { uppercase: true, lowercase: true, numbers: true, symbols: true });
  assert.strictEqual(pass.length, 16);
  assert.match(pass, /[A-Z]/, 'Must contain at least one uppercase letter');
  assert.match(pass, /[a-z]/, 'Must contain at least one lowercase letter');
  assert.match(pass, /[0-9]/, 'Must contain at least one number');

  // Test boundaries
  assert.strictEqual(generatePassword(5, { uppercase: true, lowercase: true, numbers: true, symbols: true }), '', 'Reject length < 6');
  assert.strictEqual(generatePassword(65, { uppercase: true, lowercase: true, numbers: true, symbols: true }), '', 'Reject length > 64');
  assert.strictEqual(generatePassword(12, { uppercase: false, lowercase: false, numbers: false, symbols: false }), '', 'Reject when no groups selected');
});

