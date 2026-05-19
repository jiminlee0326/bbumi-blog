import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context) {
  const articles = await getCollection('articles');
  const sorted = articles.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: sorted.map((article) => ({
      title: article.data.title,
      pubDate: article.data.pubDate,
      description:
        article.data.description ?? article.data.subtitle ?? '',
      categories: [article.data.category],
      link: `/articles/${article.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
