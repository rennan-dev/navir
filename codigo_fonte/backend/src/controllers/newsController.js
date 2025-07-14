import { saveNews } from '../services/newsService.js';
import { getAcceptedNews } from '../services/newsService.js';
import { getNewsById } from '../services/newsService.js';

export const submitNews = async (req, res) => {
  try {
    const { from_name, from_email, title, date, description, content } = req.body;
    const image = req.file;

    const imagePath = image ? `/uploads/${image.filename}` : null;

    const newsId = await saveNews({
      from_name,
      from_email,
      title,
      date,
      description,
      content,
      image_path: imagePath,
    });

    res.status(201).json({ message: 'Notícia enviada com sucesso!', id: newsId });
  } catch (error) {
    console.error('Erro ao salvar notícia:', error);
    res.status(500).json({ error: 'Erro ao salvar notícia.' });
  }
};


export const fetchAcceptedNews = async (req, res) => {
  try {
    const news = await getAcceptedNews();
    res.json(news);
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    res.status(500).json({ error: 'Erro ao buscar notícias.' });
  }
};

export const fetchNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await getNewsById(id);
    if (!news) {
      return res.status(404).json({ error: 'Notícia não encontrada ou ainda não foi aprovada.' });
    }
    res.json(news);
  } catch (error) {
    console.error('Erro ao buscar notícia por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar notícia.' });
  }
};