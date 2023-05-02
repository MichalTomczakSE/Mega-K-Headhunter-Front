export const getStudents =  async (page: number, size: number): Promise<{ students: [], totalStudents: number }> => {
	const url = `https://example/v1/students?page=${page}&size=${size}`;
	try {
		const response = await fetch(url);
			const data = await response.json();
			return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}