const express = require('express');
const app = express();

var ejs = require('ejs');
var path = require('path');
var cookieParser = require('cookie-parser');

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(80, () => {
    console.log('Server is running on port 80');
})

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
})

app.get('/chat', (req, res, next) => {
    let selectedUser = req.query.user;
    console.log(req.cookies.chat);
    res.render('chat', { joiningUser: req.cookies.joiningUser, chat: req.cookies.chat, selectedUser: selectedUser })
})

app.post('/join', (req, res, next) => {
    let user = req.body.user;
    let chat = req.cookies.chat ? req.cookies.chat : [];
    let existedUser = chat.map((chatItem) => chatItem.user);
    if (!existedUser.includes(user)) {
        chat.push({
            user: user,
            messagesToUser: [],
        })
    }
    res.cookie('chat', chat);
    res.cookie('joiningUser', user);
    res.redirect('/chat');
})

app.post('/sendMessage', (req, res, next) => {
    let selectedUser = req.body.user;
    let message = req.body.message;
    let chat = req.cookies.chat;
    chat = chat.map((chatItem) => {
        if (chatItem.user === selectedUser) {
            chatItem.messagesToUser.push({
                sendUser: req.cookies.joiningUser,
                message: message,
                time: Date()
            })
        }
        console.log(selectedUser);
        console.log(chatItem);
        return chatItem;
    })
    res.cookie('chat', chat);
    res.redirect('back');
})

app.use((req, res, next) => {
    res.send('404');
})

