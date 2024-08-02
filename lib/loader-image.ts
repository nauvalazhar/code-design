export default function supabaseLoader({ src }) {
  // if src starts with http, return src
  if (src.startsWith('http') || src.startsWith('/_next/')) return src;

  let path = src;

  // get the '?s=' query string
  const queryString = path.split('?')[1] || '';
  const s = new URLSearchParams(queryString).get('s');

  if (s) {
    // add the s after the '/{firstFolder}/' in the src
    const firstFolder = path.split('/')[1];
    path = path.replace(`/${firstFolder}/`, `/${firstFolder}/${s}/`);
  }

  const url = `https://${process.env.NEXT_PUBLIC_SUPABASE_ID}.supabase.co/storage/v1/object/public/codedesign/${path}`;

  return url.replace(/\/+/g, '/');
}
