import type { PageLoad } from './$types';
import type { ArticleInfo } from './types';

export const load: PageLoad = async (): Promise<{ articleList: ArticleInfo[] }> => {
  const articleModules = import.meta.glob('$lib/articles/*.md', { query: '?raw' });

  const articleList = await Promise.all(
    Object.entries(articleModules).map(async ([path, resolver]) => {
      const slug = path.split('/').pop()?.replace('.md', '');
      const file = await resolver();
      
      const content = typeof file === 'string' ? file : file.default;

      const firstHeading = content
        .split('\n')
        .find((line: string) => line.trim().startsWith('#'))
        ?.replace(/^#+\s*/, '') || slug;

      return { slug, title: firstHeading };
    })
  );

  return { articleList };
};