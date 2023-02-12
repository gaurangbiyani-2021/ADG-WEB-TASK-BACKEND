import { User } from '../db/schema/user';

app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    User.findOne({ username }, (err, user) => {
      if (err) {
        return res.json({ message: 'Error' });
      }
      if (!user) {
        return res.status(400).json({ message: 'Invalid details' });
      }
  
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.json({ message: 'Error' });
        }
        if (!result) {
          return res.status(400).json({ message: 'Invalid details' });
        }
        req.session.user = user;
        return res.json({ message: 'Logged in!' });
      });
    });
  });
  

  
  