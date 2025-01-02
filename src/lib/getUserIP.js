export async function getUserIP(req) {
  const headers = req.headers || {};
  const forwarded = headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(/, /)[0] : req.connection?.remoteAddress;
  return ip;
}
