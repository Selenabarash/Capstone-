// server/routes/users.js
import express from 'express' 
// import postRouter from 'postRouter'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'
// downloded not working for password
const router = express.Router()

// Register route
router.post('/register', async (req, res) => {
  console.log(req.body)
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    console.log(newUser)
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: 'User registration failed' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token })
  } catch (err) {
    res.status(400).json({ error: 'Login failed' })
  }
})

router.get('/:id', async (req, res) => {
try {
  const user = await User.findById(req.params.id)
  res.json(user)
} catch (err) {
  res.json({error: "User Not Found"})
}
})

router.get('/:username', async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.username})
    res.json(user)
  } catch (err) {
    res.json({error: "User Not Found"})
  }
  })

router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.json({error: "User Not Found"})
  }
})

router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {bio: req.body}, {new: true})
    res.json(user)
  } catch (err) {
    res.json({error: "User Not Found"})
  }
})

  router.delete('/:id', async (req, res) => {
    try {
      await User.findOneAndDelete(req.params.id)
      res.json({message: 'User Deleted'})
    } catch (err) {
      res.json({error: "User Not Found"})
    }
    })



export default router 
