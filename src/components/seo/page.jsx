import {CommonSEO} from './common';

export const PageSEO = ({title, description, siteMetadata}) => {
	const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
	const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
	return (
		<CommonSEO
			title={title}
			description={description}
			ogType="website"
			ogImage={ogImageUrl}
			twImage={twImageUrl}
		/>
	)
}