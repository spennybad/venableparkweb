export interface PDF {
	file: string;
};

export interface Newsletter extends PDF {
	date_published: string;
	title: string;
	id: string;
}
