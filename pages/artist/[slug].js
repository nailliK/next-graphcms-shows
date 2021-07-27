import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Layout from "@c/Layout";
import FlexyRow from "@c/FlexyRow";
import {Title} from "@c/Title";
import {getArtistBySlug} from "@l/graphcms";

const Markdown = styled(ReactMarkdown)`
  img {
    width: 100%;
    border-radius: 20px;
    border: 4px solid currentColor;
  }
`;

const ArtistName = styled.h2`
  text-align: center;
`;

const ArtistPhoto = styled.div`
  background-image: url(${(p) => p.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 4px solid currentColor;
  margin: 0 auto;
`;

const Portrait = ({images = []}) => {
	if (images.length > 0) {
		const img = images[0];
		return (
			<ArtistPhoto imageUrl={img.url}/>
		);
	}
	return null;
};

export default function Artists({artist}) {
	return (
		<Layout title={`${artist.fullName.title} / next-graphcms-shows`}
		        maxWidth="900px"
		        padding="0 2em">

			<Title>{artist.fullName}</Title>

			<ArtistName>{artist.fullName}</ArtistName>

			<Portrait images={artist.images}/>

			<FlexyRow justify="flex-start">
				<a href={artist.webUrl}
				   target="_blank">Website
				</a>
				<a href={artist.facebookUrl}
				   target="_blank">Facebook
				</a>
				<a href={artist.instagramUrl}
				   target="_blank">Instagram
				</a>
				<a href={artist.youTubeUrl}
				   target="_blank">YouTube
				</a>
				<a href={artist.spotifyUrl}
				   target="_blank">Spotify
				</a>
			</FlexyRow>

			<Markdown source={artist.bio}/>

		</Layout>
	);
}

export async function getServerSideProps({params}) {
	const {slug} = params;
	const artist = (await getArtistBySlug(slug));

	if (artist) {
		return {
			props: {artist}
		};
	} else {
		return {
			notFound: true
		};
	}
}

