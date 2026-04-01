export function entries() {
  const modules = import.meta.glob('$lib/articles/*.md');
  return Object.keys(modules).map(path => {
    const slug = path.split('/').pop()?.replace('.md', '');
    return { slug };
  });
}