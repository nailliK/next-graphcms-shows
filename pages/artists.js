import Layout from "@c/Layout";
import {Card, Grid} from "@c/Grid";
import {Title} from "@c/Title";
import {getAllArtists} from "@l/graphcms";

export default function Artists({artists}) {
	return (
		<Layout title="next-graphcms-shows / Artists">

			<Title>Artists</Title>

			<Grid cols={2}>
				{artists.map(artist => (
					<Card href={`/artist/${artist.slug}`}
					      header={artist.fullName}
					      key={artist.id}>
					</Card>
				))}
			</Grid>

		</Layout>
	);
}

export async function getServerSideProps() {
	const artists = (await getAllArtists()) || [];

	return {
		props: {artists}
	};
}
