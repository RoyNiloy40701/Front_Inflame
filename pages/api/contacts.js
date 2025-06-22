export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, lname, email, company, phone, country, project, description } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone are required.' });
    }

    // Simulate saving to database (replace with actual database logic)
    const contactData = { name, lname, email, company, phone, country, project, description, submittedAt: new Date() };
    console.log('Contact form data received:', contactData);
    return res.status(200).json({ message: 'Contact form submitted successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}