import mysql from 'mysql2/promise';
export const handler = async (event) =>{

	const connection = await mysql.createConnection({
		host: 'myhost1',
		user: 'myUser1',
		password: 'myPassword1',
		database: 'myDatabase1',
	});
	const [rows] = await connection.execute('SELECT * FROM users');
	await connection.end();
	return{
		statusCode:200,
		body: JSON.stringify(rows),
	};
	//whasupp niga
};
