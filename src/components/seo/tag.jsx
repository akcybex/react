import {CommonSEO} from './common';

export const TagSEO = ({title, description, pathname, siteMetadata}) => {
	const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
	const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
	return (
		<>
			<CommonSEO
				title={title}
				description={description}
				ogType="website"
				ogImage={ogImageUrl}
				twImage={twImageUrl}
			/>
			<link
				rel="alternate"
				type="application/rss+xml"
				title={`${description} - RSS feed`}
				href={`${siteMetadata.siteUrl}${pathname}/feed.xml`}
			/>
		</>
	)
}