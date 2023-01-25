import {CommonSEO} from './common';

export const BlogSEO = ({
							authorDetails,
							title,
							summary,
							date,
							lastmod,
							url,
							images = [],
							canonicalUrl,
							pathname,
							siteMetadata
						}) => {
	const publishedAt = new Date(date).toISOString()
	const modifiedAt = new Date(lastmod || date).toISOString()
	let imagesArr =
		images.length === 0
			? [siteMetadata.socialBanner]
			: typeof images === 'string'
				? [images]
				: images

	const featuredImages = imagesArr.map((img) => {
		return {
			'@type': 'ImageObject',
			url: img.includes('http') ? img : siteMetadata.siteUrl + img,
		}
	})

	let authorList
	if (authorDetails) {
		authorList = authorDetails.map((author) => {
			return {
				'@type': 'Person',
				name: author.name,
			}
		})
	} else {
		authorList = {
			'@type': 'Person',
			name: siteMetadata.author,
		}
	}

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url,
		},
		headline: title,
		image: featuredImages,
		datePublished: publishedAt,
		dateModified: modifiedAt,
		author: authorList,
		publisher: {
			'@type': 'Organization',
			name: siteMetadata.author,
			logo: {
				'@type': 'ImageObject',
				url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
			},
		},
		description: summary,
	}

	const twImageUrl = featuredImages[0].url

	return (
		<>
			<CommonSEO
				title={title}
				description={summary}
				ogType="article"
				ogImage={featuredImages}
				twImage={twImageUrl}
				canonicalUrl={canonicalUrl}
			/>

			{date && <meta property="article:published_time" content={publishedAt}/>}
			{lastmod && <meta property="article:modified_time" content={modifiedAt}/>}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData, null, 2),
				}}
			/>

		</>
	)
}
