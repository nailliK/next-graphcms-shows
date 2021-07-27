import Layout from "@c/Layout";
import {SubTitle, Title} from "@c/Title";
import React from "react";

export default function FourOhFour() {
	return (
		<Layout title="404 - Page not Found"
		        maxWidth="800px">

			<Title>404</Title>

			<SubTitle>Nothing to see here!</SubTitle>

		</Layout>
	);
};
