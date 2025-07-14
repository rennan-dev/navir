import pool from '../config/db.js';

export async function saveNews(data) {
  const { from_name, from_email, title, date, description, content, image_path } = data;

  const [result] = await pool.query(
    `INSERT INTO news_submissions 
    (from_name, from_email, title, date, description, content, image_path, post_accepted) 
    VALUES (?, ?, ?, ?, ?, ?, ?, 0)`,
    [from_name, from_email, title, date, description, content, image_path]
  );

  return result.insertId;
}

export async function getAcceptedNews() {
  const [rows] = await pool.query(
    'SELECT id, from_name, from_email, title, date, description, content, image_path FROM news_submissions WHERE post_accepted = 1 ORDER BY date DESC'
  );
  return rows;
}

export async function getNewsById(id) {
  const [rows] = await pool.query(
    'SELECT id, from_name, from_email, title, date, description, content, image_path FROM news_submissions WHERE id = ? AND post_accepted = 1',
    [id]
  );
  return rows[0]; 
}