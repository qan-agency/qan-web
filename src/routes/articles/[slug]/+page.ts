import { error } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";

export const entries: EntryGenerator = async () => {
  const modules = import.meta.glob('$lib/articles/*.md');

  const articleList: { slug: string }[] = [];

  Object.keys(modules).map(path => {
    const slug = path.split('/').pop()?.replace('.md', '');
    if (slug) articleList.push({ slug });
  });

  return articleList;
}

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob('$lib/articles/*.md');

  const match = Object.entries(modules).find(([path]) =>
    path.endsWith(`${ params.slug }.md`)
  );

  if (!match) {
    throw error(404, 'Article not found');
  }

  const module = modules[`/src/lib/articles/${ params.slug }.md`];

  const resolved = await module();

  return {
    slug: params.slug,
    articleContent: resolved.default
  };
};

export const prerender = true;