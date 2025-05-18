import "dotenv/config"

// Type-safe config
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// Optional enum for NODE_ENV
const nodeEnv = process.env.NODE_ENV ?? 'development';
if (!['development', 'production', 'test'].includes(nodeEnv)) {
  throw new Error(`Invalid NODE_ENV value: ${nodeEnv}`);
}

export const env = {
  PORT: Number(requireEnv('PORT')),
  NODE_ENV: nodeEnv as 'development' | 'production' | 'test',

  ADMIN_EMAIL: requireEnv('ADMIN_EMAIL'),
  ADMIN_PASSWORD: requireEnv('ADMIN_PASSWORD'),
  ADMIN_NAME: requireEnv('ADMIN_NAME'),

  DATABASE_URL: requireEnv('DATABASE_URL'),

  BETTER_AUTH_SECRET: requireEnv('BETTER_AUTH_SECRET'),
  BETTER_AUTH_URL: requireEnv('BETTER_AUTH_URL'),
};
